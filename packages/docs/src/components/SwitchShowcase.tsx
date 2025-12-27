import React, { useState } from 'react';

// Mock Switch component for demonstration
const Switch = ({ 
  className = '',
  size = 'md',
  color = 'primary',
  checked = false,
  disabled = false,
  loading = false,
  label,
  description,
  value,
  onChange,
  name,
  id,
  ...domProps 
}: any) => {
  const sizes = {
    sm: { switch: 'w-8 h-4', thumb: 'w-3 h-3', translate: 'translate-x-4' },
    md: { switch: 'w-11 h-6', thumb: 'w-5 h-5', translate: 'translate-x-5' },
    lg: { switch: 'w-14 h-7', thumb: 'w-6 h-6', translate: 'translate-x-7' }
  };

  const colors = {
    primary: checked ? 'bg-blue-600' : 'bg-gray-200',
    secondary: checked ? 'bg-gray-600' : 'bg-gray-200',
    success: checked ? 'bg-green-600' : 'bg-gray-200',
    warning: checked ? 'bg-yellow-600' : 'bg-gray-200',
    danger: checked ? 'bg-red-600' : 'bg-gray-200'
  };

  const labelSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;
  const sizeClasses = sizes[size];

  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="flex items-center">
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          id={switchId}
          disabled={disabled || loading}
          onClick={() => onChange?.(!checked)}
          className={`relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses.switch} ${colors[color]}`}
          {...domProps}
        >
          <span
            className={`inline-block rounded-full bg-white shadow-lg transform transition-transform duration-200 ease-in-out ${sizeClasses.thumb} ${checked ? sizeClasses.translate : 'translate-x-0'}`}
          >
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="animate-spin h-3 w-3" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              </div>
            )}
          </span>
        </button>
      </div>
      
      {(label || description) && (
        <div className="flex flex-col">
          {label && (
            <label 
              htmlFor={switchId}
              className={`font-medium cursor-pointer ${labelSizes[size]} ${disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-900'}`}
            >
              {label}
            </label>
          )}
          {description && (
            <p className={`text-gray-600 ${size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-sm' : 'text-sm'} ${disabled ? 'text-gray-400' : ''}`}>
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

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
    loading: false,
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

  const [loadingDemo, setLoadingDemo] = useState(false);

  const handleLoadingDemo = () => {
    setLoadingDemo(true);
    setTimeout(() => {
      setLoadingDemo(false);
      setSwitchStates(prev => ({ ...prev, loading: !prev.loading }));
    }, 2000);
  };

  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Switch Component</h1>
        <p className="text-gray-600 mb-8">
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
            <h3 className="font-semibold mb-2">With Description</h3>
            <div className="mb-4">
              <Switch 
                label="Email Marketing"
                description="Receive promotional emails and updates"
                checked={switchStates.withDescription}
                onChange={(checked: boolean) => setSwitchStates({...switchStates, withDescription: checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Switch 
  label="Email Marketing"
  description="Promotional emails"
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
            <h3 className="font-semibold mb-2">Loading State</h3>
            <div className="mb-4 space-y-3">
              <Switch 
                label="Loading switch"
                loading={loadingDemo}
                checked={switchStates.loadingState}
                onChange={(checked: boolean) => setSwitchStates({...switchStates, loadingState: checked})}
              />
              <button 
                onClick={handleLoadingDemo}
                className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
              >
                Demo Loading
              </button>
            </div>
            <pre className="showcase-code">
{`<Switch 
  loading={true}
  label="Loading switch"
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
          <div className="space-y-4 p-6 border border-gray-200 rounded-lg bg-gray-50">
            <Switch 
              label="Push Notifications"
              description="Receive push notifications on your device"
              checked={switchStates.notifications}
              onChange={(checked: boolean) => setSwitchStates({...switchStates, notifications: checked})}
            />
            <Switch 
              label="Dark Mode"
              description="Use dark theme across the application"
              checked={switchStates.darkMode}
              onChange={(checked: boolean) => setSwitchStates({...switchStates, darkMode: checked})}
              color="secondary"
            />
            <Switch 
              label="Auto-save"
              description="Automatically save your work as you type"
              checked={switchStates.autoSave}
              onChange={(checked: boolean) => setSwitchStates({...switchStates, autoSave: checked})}
              color="success"
            />
            <Switch 
              label="Marketing Emails"
              description="Receive promotional content and product updates"
              checked={switchStates.marketing}
              onChange={(checked: boolean) => setSwitchStates({...switchStates, marketing: checked})}
              color="warning"
            />
            <Switch 
              label="Analytics"
              description="Help us improve by sharing usage data"
              checked={switchStates.analytics}
              onChange={(checked: boolean) => setSwitchStates({...switchStates, analytics: checked})}
            />
          </div>
          <pre className="showcase-code mt-4">
{`<Switch 
  label="Push Notifications"
  description="Receive notifications"
  checked={notifications}
  onChange={setNotifications}
/>

<Switch 
  label="Dark Mode"
  description="Use dark theme"
  checked={darkMode}
  onChange={setDarkMode}
  color="secondary"
/>`}
          </pre>
        </div>

        {/* Feature Toggles */}
        <div className="showcase-item">
          <h3 className="font-semibold mb-4">Feature Toggles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 border border-gray-200 rounded-lg bg-gray-50">
            <div className="space-y-3">
              <h4 className="font-medium text-gray-700">Beta Features</h4>
              <Switch 
                size="sm"
                label="New Dashboard"
                description="Try our redesigned dashboard"
                checked={false}
                color="success"
                readOnly
              />
              <Switch 
                size="sm"
                label="AI Assistant"
                description="Get help with AI-powered suggestions"
                checked={true}
                color="success"
                readOnly
              />
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-gray-700">Experimental</h4>
              <Switch 
                size="sm"
                label="Voice Commands"
                description="Control the app with your voice"
                checked={false}
                color="warning"
                readOnly
              />
              <Switch 
                size="sm"
                label="Advanced Mode"
                description="Enable developer features"
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
  description="Try new functionality"
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