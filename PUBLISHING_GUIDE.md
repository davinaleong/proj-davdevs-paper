# 📦 Publishing Guide - DavDevs Paper Design System

This guide covers how to publish the DavDevs Paper packages to npm, yarn, and pnpm package managers with proper premium package protection.

## 🏗️ Package Structure

```
packages/
├── foundations/     # Design tokens (public, free)
├── core/           # Core CSS (public, free)  
├── basic/          # Basic components (public, free)
├── styles/         # Pure CSS styles (public, free)
├── react/          # React utilities (public, free, premium optional)
└── premium/        # Premium components (restricted, commercial)
```

## 🔑 Prerequisites

### 1. NPM Account & Authentication
```bash
# Login to npm
npm login

# Verify authentication
npm whoami

# Set up organization (if using @davdevs scope)
npm org:set davdevs public
```

### 2. Environment Variables
```bash
# Required for premium package validation
export DAVDEVS_PAPER_LICENSE_KEY="your-license-server-key"
export DAVDEVS_PAPER_LICENSE_EMAIL="admin@davdevs-paper.com"

# NPM automation token (for CI/CD)
export NPM_TOKEN="npm_xxxxxxxxxxxx"
```

### 3. Package Manager Setup

#### pnpm
```bash
# Install pnpm
npm install -g pnpm

# Verify workspace configuration
pnpm workspace --list
```

#### Yarn (Modern)
```bash
# Install yarn
corepack enable
yarn set version stable

# Configure workspace
echo 'nodeLinker: node-modules' > .yarnrc.yml
```

## 🚀 Publishing Process

### Option 1: Publish All Packages (Recommended)

```bash
# 1. Clean and build all packages
npm run clean
npm run build

# 2. Test all packages
npm run test

# 3. Version bump (choose one)
npm run version:patch   # 1.0.0 -> 1.0.1
npm run version:minor   # 1.0.0 -> 1.1.0  
npm run version:major   # 1.0.0 -> 2.0.0

# 4. Publish all packages
npm run publish:all
```

### Option 2: Publish Individual Packages

```bash
# Publish specific packages
npm run publish:foundations
npm run publish:core
npm run publish:basic
npm run publish:styles
npm run publish:react
npm run publish:premium  # Requires license validation
```

### Option 3: Using Package Manager Workspaces

#### With npm
```bash
# Publish all workspaces
npm publish --workspaces

# Publish specific workspace
npm publish --workspace=packages/premium
```

#### With pnpm
```bash
# Publish all packages
pnpm publish -r

# Publish with filter
pnpm publish --filter @davdevs/paper-premium
```

#### With yarn
```bash
# Publish all workspaces
yarn workspaces foreach npm publish

# Publish specific package
yarn workspace @davdevs/paper-premium npm publish
```

## 🔐 Premium Package Protection

The premium package includes several protection mechanisms:

### 1. License Validation Script
- Runs on `postinstall` and `prepack`
- Validates license against API server
- Caches validation for offline use
- Fails gracefully with helpful error messages

### 2. Access Control
```json
"publishConfig": {
  "access": "restricted",
  "registry": "https://registry.npmjs.org/"
}
```

### 3. License Verification
- Custom license file with commercial terms
- Environment variable requirements
- Online validation with fallback caching

## 🧪 Testing Publication

### 1. Dry Run
```bash
# Test publication without actually publishing
npm publish --dry-run --workspace=packages/premium

# Or for all packages
npm publish --dry-run --workspaces
```

### 2. Local Testing
```bash
# Pack package locally
npm pack --workspace=packages/premium

# Install packed package for testing
npm install ./davdevs-paper-premium-1.0.0.tgz
```

### 3. Beta/Alpha Releases
```bash
# Publish beta version
npm version prerelease --preid=beta --workspace=packages/premium
npm publish --tag beta --workspace=packages/premium

# Publish alpha version  
npm version prerelease --preid=alpha --workspace=packages/premium
npm publish --tag alpha --workspace=packages/premium
```

## 🏷️ Version Management

### Semantic Versioning
- **Patch** (1.0.1): Bug fixes, no breaking changes
- **Minor** (1.1.0): New features, backward compatible
- **Major** (2.0.0): Breaking changes

### Using Changesets (Recommended)
```bash
# Install changesets
npm install -D @changesets/cli

# Initialize
npx changeset init

# Create changeset
npx changeset

# Version packages
npx changeset version

# Publish
npx changeset publish
```

## 📋 Publication Checklist

### Before Publishing
- [ ] All tests pass
- [ ] Build succeeds for all packages
- [ ] Dependencies are up to date
- [ ] README files are complete
- [ ] License files are present
- [ ] Version numbers are correct
- [ ] Changelog is updated

### Premium Package Specific
- [ ] License validation script works
- [ ] Environment variables are set
- [ ] License server is accessible
- [ ] Commercial license terms are clear
- [ ] Installation instructions are accurate

### After Publishing
- [ ] Verify packages appear on npmjs.com
- [ ] Test installation with different package managers
- [ ] Check package metadata and files
- [ ] Update documentation
- [ ] Announce release

## 🔧 Troubleshooting

### Common Issues

#### 1. Authentication Failures
```bash
# Clear npm cache
npm cache clean --force

# Re-login
npm logout
npm login
```

#### 2. Permission Errors
```bash
# Check package access
npm access list packages @davdevs

# Grant access to team members
npm access grant read-write @davdevs/developers @davdevs/paper-premium
```

#### 3. Premium Package License Issues
```bash
# Verify license environment variables
echo $DAVDEVS_PAPER_LICENSE_KEY
echo $DAVDEVS_PAPER_LICENSE_EMAIL

# Test license validation manually
node packages/premium/scripts/validate-license.js
```

#### 4. Workspace Issues
```bash
# List workspaces
npm ls --workspaces

# Check workspace configuration
npm config get workspaces-update
```

## 🔄 Automation with GitHub Actions

Create `.github/workflows/publish.yml`:

```yaml
name: Publish Packages

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build packages
        run: npm run build
        
      - name: Publish packages
        run: npm run publish:all
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
          DAVDEVS_PAPER_LICENSE_KEY: ${{ secrets.LICENSE_KEY }}
          DAVDEVS_PAPER_LICENSE_EMAIL: ${{ secrets.LICENSE_EMAIL }}
```

## 📞 Support

For publishing support or questions:
- **Email**: dev@davdevs-paper.com
- **Issues**: GitHub repository issues
- **Documentation**: https://davdevs-paper.com/docs/publishing

---

**Happy Publishing! 🎉**