import { useState } from 'react';
import { Switch } from '@davdevs/paper-basic';

export function SwitchShowcase() {
  const [switchStates, setSwitchStates] = useState({
    basic: false,
    withLabel: true,
    withDescription: false,
    notifications: true,
    darkMode: false,
    autoSave: true,
    marketing: false,
    analytics: true,
    smallSize: true,
    mediumSize: true,
    largeSize: true,
    primaryColor: true,
    successColor: true,
    warningColor: true,
    dangerColor: true,
    loadingState: false,
    disabledUnchecked: false,
    disabledChecked: true
  });

  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Switch Component</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Toggle switch component for binary settings with smooth animations and paper-inspired styling.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Basic Usage</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Simple Switch</h3>
            <div className="mb-4">
              <Switch 
                checked={switchStates.basic}
                onChange={(checked: boolean) => setSwitchStates({...switchStates, basic: checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Switch 
  checked={checked}
  onChange={setChecked}
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">With Label</h3>
            <div className="mb-4">
              <Switch 
                label="Enable notifications"
                checked={switchStates.withLabel}
                onChange={(checked: boolean) => setSwitchStates({...switchStates, withLabel: checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Switch 
  label="Enable notifications"
  checked={checked}
  onChange={setChecked}
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">With Helper Text</h3>
            <div className="mb-4">
              <Switch 
                label="Email Marketing"
                helperText="Receive promotional emails and updates"
                checked={switchStates.withDescription}
                onChange={(checked: boolean) => setSwitchStates({...switchStates, withDescription: checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Switch 
  label="Email Marketing"
  helperText="Promotional emails"
  checked={checked}
  onChange={setChecked}
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Sizes</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Small</h3>
            <div className="mb-4">
              <Switch 
                size="sm"
                label="Small switch"
                checked={switchStates.smallSize}
                onChange={(checked: boolean) => setSwitchStates({...switchStates, smallSize: checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Switch 
  size="sm"
  label="Small switch"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Medium (Default)</h3>
            <div className="mb-4">
              <Switch 
                size="md"
                label="Medium switch"
                checked={switchStates.mediumSize}
                onChange={(checked: boolean) => setSwitchStates({...switchStates, mediumSize: checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Switch 
  size="md"
  label="Medium switch"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Large</h3>
            <div className="mb-4">
              <Switch 
                size="lg"
                label="Large switch"
                checked={switchStates.largeSize}
                onChange={(checked: boolean) => setSwitchStates({...switchStates, largeSize: checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Switch 
  size="lg"
  label="Large switch"
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Colors</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Primary</h3>
            <div className="mb-4">
              <Switch 
                color="primary"
                label="Primary color"
                checked={switchStates.primaryColor}
                onChange={(checked: boolean) => setSwitchStates({...switchStates, primaryColor: checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Switch color="primary" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Success</h3>
            <div className="mb-4">
              <Switch 
                color="success"
                label="Success color"
                checked={switchStates.successColor}
                onChange={(checked: boolean) => setSwitchStates({...switchStates, successColor: checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Switch color="success" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Warning</h3>
            <div className="mb-4">
              <Switch 
                color="warning"
                label="Warning color"
                checked={switchStates.warningColor}
                onChange={(checked: boolean) => setSwitchStates({...switchStates, warningColor: checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Switch color="warning" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Danger</h3>
            <div className="mb-4">
              <Switch 
                color="danger"
                label="Danger color"
                checked={switchStates.dangerColor}
                onChange={(checked: boolean) => setSwitchStates({...switchStates, dangerColor: checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Switch color="danger" />`}
            </pre>
          </div>
        </div>
      </section>

      {/* States */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">States</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Normal State</h3>
            <div className="mb-4 space-y-3">
              <Switch 
                label="Off state"
                checked={switchStates.disabledUnchecked}
                onChange={(checked: boolean) => setSwitchStates({...switchStates, disabledUnchecked: checked})}
              />
              <Switch 
                label="On state"
                checked={switchStates.disabledChecked}
                onChange={(checked: boolean) => setSwitchStates({...switchStates, disabledChecked: checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Switch label="Normal switch" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">With Helper Text</h3>
            <div className="mb-4 space-y-3">
              <Switch 
                label="Notifications"
                helperText="Receive email notifications about updates"
                checked={switchStates.loadingState}
                onChange={(checked: boolean) => setSwitchStates({...switchStates, loadingState: checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Switch 
  label="Notifications"
  helperText="Receive email notifications"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Disabled State</h3>
            <div className="mb-4 space-y-3">
              <Switch 
                disabled={true}
                label="Disabled off"
                checked={false}
              />
              <Switch 
                disabled={true}
                label="Disabled on"
                checked={true}
              />
            </div>
            <pre className="showcase-code">
{`<Switch 
  disabled={true}
  label="Disabled switch"
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Practical Examples */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Practical Examples</h2>
        
        {/* Settings Panel */}
        <div className="showcase-item mb-8">
          <h3 className="font-semibold mb-4">User Preferences</h3>
          <div className="space-y-4 p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
            <Switch 
              label="Push Notifications"
              helperText="Receive push notifications on your device"
              checked={switchStates.notifications}
              onChange={(checked: boolean) => setSwitchStates({...switchStates, notifications: checked})}
            />
            <Switch 
              label="Dark Mode"
              helperText="Use dark theme across the application"
              checked={switchStates.darkMode}
              onChange={(checked: boolean) => setSwitchStates({...switchStates, darkMode: checked})}
              color="secondary"
            />
            <Switch 
              label="Auto-save"
              helperText="Automatically save your work as you type"
              checked={switchStates.autoSave}
              onChange={(checked: boolean) => setSwitchStates({...switchStates, autoSave: checked})}
              color="success"
            />
            <Switch 
              label="Marketing Emails"
              helperText="Receive promotional content and product updates"
              checked={switchStates.marketing}
              onChange={(checked: boolean) => setSwitchStates({...switchStates, marketing: checked})}
              color="warning"
            />
            <Switch 
              label="Analytics"
              helperText="Help us improve by sharing usage data"
              checked={switchStates.analytics}
              onChange={(checked: boolean) => setSwitchStates({...switchStates, analytics: checked})}
            />
          </div>
          <pre className="showcase-code mt-4">
{`<Switch 
  label="Push Notifications"
  helperText="Receive notifications"
  checked={notifications}
  onChange={setNotifications}
/>

<Switch 
  label="Dark Mode"
  helperText="Use dark theme"
  checked={darkMode}
  onChange={setDarkMode}
  color="secondary"
/>`}
          </pre>
        </div>

        {/* Feature Toggles */}
        <div className="showcase-item">
          <h3 className="font-semibold mb-4">Feature Toggles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
            <div className="space-y-3">
              <h4 className="font-medium text-gray-700 dark:text-gray-300">Beta Features</h4>
              <Switch 
                size="sm"
                label="New Dashboard"
                helperText="Try our redesigned dashboard"
                checked={false}
                color="success"
                readOnly
              />
              <Switch 
                size="sm"
                label="AI Assistant"
                helperText="Get help with AI-powered suggestions"
                checked={true}
                color="success"
                readOnly
              />
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-gray-700 dark:text-gray-300">Experimental</h4>
              <Switch 
                size="sm"
                label="Voice Commands"
                helperText="Control the app with your voice"
                checked={false}
                color="warning"
                readOnly
              />
              <Switch 
                size="sm"
                label="Advanced Mode"
                helperText="Enable developer features"
                checked={true}
                color="danger"
                readOnly
              />
            </div>
          </div>
          <pre className="showcase-code mt-4">
{`<Switch 
  size="sm"
  label="Beta Feature"
  helperText="Try new functionality"
  checked={betaEnabled}
  onChange={setBetaEnabled}
  color="success"
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
}