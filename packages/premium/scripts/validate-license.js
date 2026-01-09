#!/usr/bin/env node

/**
 * License validation script for @davdevs/paper-premium
 * This script validates the license key and user permissions before allowing package usage
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const os = require('os');

const PACKAGE_NAME = '@davdevs/paper-premium';
const LICENSE_SERVER = 'https://api.davdevs-paper.com';
const LICENSE_FILE = path.join(os.homedir(), '.davdevs-paper-license');

function log(message, type = 'info') {
  const timestamp = new Date().toISOString();
  const prefix = type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️';
  console.log(`${prefix} [${timestamp}] ${message}`);
}

function readLicenseFile() {
  try {
    if (fs.existsSync(LICENSE_FILE)) {
      const content = fs.readFileSync(LICENSE_FILE, 'utf8');
      return JSON.parse(content);
    }
  } catch (error) {
    log(`Failed to read license file: ${error.message}`, 'error');
  }
  return null;
}

function saveLicenseFile(data) {
  try {
    fs.writeFileSync(LICENSE_FILE, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    log(`Failed to save license file: ${error.message}`, 'error');
    return false;
  }
}

async function validateLicenseOnline(licenseKey, email) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      licenseKey,
      email,
      package: PACKAGE_NAME,
      version: process.env.npm_package_version || '1.0.0',
      hostname: os.hostname(),
      platform: os.platform()
    });

    const options = {
      hostname: 'api.davdevs-paper.com',
      port: 443,
      path: '/validate-license',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
        'User-Agent': `${PACKAGE_NAME}/validator`
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          resolve({ success: res.statusCode === 200, data: result });
        } catch (error) {
          reject(new Error('Invalid response from license server'));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('License validation timeout'));
    });

    req.write(postData);
    req.end();
  });
}

function isLicenseValid(license) {
  if (!license || !license.key || !license.email || !license.expiresAt) {
    return false;
  }

  const expiryDate = new Date(license.expiresAt);
  const now = new Date();
  
  if (expiryDate < now) {
    log('License has expired', 'error');
    return false;
  }

  // Check if license was validated recently (within 7 days)
  if (license.lastValidated) {
    const lastValidated = new Date(license.lastValidated);
    const daysSinceValidation = (now - lastValidated) / (1000 * 60 * 60 * 24);
    
    if (daysSinceValidation < 7) {
      return true;
    }
  }

  return false;
}

async function promptForLicense() {
  // In a real implementation, you might want to use a proper CLI library like inquirer
  // For now, we'll check environment variables or fail
  const licenseKey = process.env.DAVDEVS_PAPER_LICENSE_KEY;
  const email = process.env.DAVDEVS_PAPER_LICENSE_EMAIL;

  if (!licenseKey || !email) {
    log('Premium package requires a valid license. Please provide:', 'error');
    log('1. Set DAVDEVS_PAPER_LICENSE_KEY environment variable', 'error');
    log('2. Set DAVDEVS_PAPER_LICENSE_EMAIL environment variable', 'error');
    log('3. Or visit https://davdevs-paper.com/pricing to purchase a license', 'error');
    return null;
  }

  return { licenseKey, email };
}

async function main() {
  try {
    // Skip validation in CI/CD environments or during development
    if (process.env.CI || process.env.NODE_ENV === 'development') {
      log('Skipping license validation in CI/development environment', 'warning');
      return;
    }

    log(`Validating license for ${PACKAGE_NAME}...`);

    const existingLicense = readLicenseFile();
    
    if (existingLicense && isLicenseValid(existingLicense)) {
      log('Valid license found, proceeding...', 'info');
      return;
    }

    const credentials = await promptForLicense();
    if (!credentials) {
      process.exit(1);
    }

    log('Validating license online...', 'info');
    
    try {
      const result = await validateLicenseOnline(credentials.licenseKey, credentials.email);
      
      if (result.success && result.data.valid) {
        const licenseData = {
          key: credentials.licenseKey,
          email: credentials.email,
          expiresAt: result.data.expiresAt,
          lastValidated: new Date().toISOString(),
          plan: result.data.plan || 'premium'
        };

        if (saveLicenseFile(licenseData)) {
          log('License validated successfully!', 'info');
        } else {
          log('License valid but failed to cache locally', 'warning');
        }
      } else {
        log(`License validation failed: ${result.data?.message || 'Invalid license'}`, 'error');
        process.exit(1);
      }
    } catch (error) {
      // If online validation fails, check if we have a recent cached license
      if (existingLicense && existingLicense.lastValidated) {
        const lastValidated = new Date(existingLicense.lastValidated);
        const now = new Date();
        const hoursSinceValidation = (now - lastValidated) / (1000 * 60 * 60);
        
        if (hoursSinceValidation < 72) { // Allow 72 hours offline usage
          log('Using cached license (offline mode)', 'warning');
          return;
        }
      }
      
      log(`License validation error: ${error.message}`, 'error');
      log('Please check your internet connection and try again', 'error');
      process.exit(1);
    }
  } catch (error) {
    log(`Unexpected error: ${error.message}`, 'error');
    process.exit(1);
  }
}

// Only run if this script is executed directly
if (require.main === module) {
  main().catch((error) => {
    log(`Fatal error: ${error.message}`, 'error');
    process.exit(1);
  });
}

module.exports = { validateLicenseOnline, isLicenseValid, readLicenseFile };