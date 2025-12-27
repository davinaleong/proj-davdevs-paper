import React, { useState } from 'react';

// Mock Checkbox component for demonstration
const Checkbox = ({ 
  className = '',
  size = 'md',
  color = 'primary',
  checked = false,
  indeterminate = false,
  disabled = false,
  error = false,
  label,
  description,
  value,
  onChange,
  name,
  id,
  ...domProps 
}: any) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const colors = {
    primary: 'text-blue-600 focus:ring-blue-500',
    secondary: 'text-gray-600 focus:ring-gray-500',
    success: 'text-green-600 focus:ring-green-500',
    warning: 'text-yellow-600 focus:ring-yellow-500',
    danger: 'text-red-600 focus:ring-red-500'
  };

  const labelSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  const finalColor = error ? 'danger' : color;

  return (
    <div className={`flex items-start gap-2 ${className}`}>
      <div className="flex items-center h-5">
        <input
          type="checkbox"
          id={checkboxId}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={`border-2 rounded focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 ${sizes[size]} ${colors[finalColor]} ${error ? 'border-red-300' : 'border-gray-300'}`}
          ref={(el) => {
            if (el && indeterminate) {
              el.indeterminate = true;
            }
          }}
          {...domProps}
        />
      </div>
      
      {(label || description) && (
        <div className="flex flex-col">
          {label && (
            <label 
              htmlFor={checkboxId}
              className={`font-medium cursor-pointer ${labelSizes[size]} ${disabled ? 'text-gray-400 cursor-not-allowed' : error ? 'text-red-700' : 'text-gray-900'}`}
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

export function CheckboxShowcase() {
  const [checkboxStates, setCheckboxStates] = useState({
    basic: false,
    withLabel: true,
    withDescription: false,
    indeterminate: true,
    terms: false,
    marketing: true,
    notifications: false,
    groupAll: false,
    groupItem1: true,
    groupItem2: false,
    groupItem3: true
  });

  const handleGroupAllChange = (checked: boolean) => {
    setCheckboxStates({
      ...checkboxStates,
      groupAll: checked,
      groupItem1: checked,
      groupItem2: checked,
      groupItem3: checked
    });
  };

  const handleGroupItemChange = (item: string, checked: boolean) => {
    const newStates = {
      ...checkboxStates,
      [item]: checked
    };
    
    // Update the "all" checkbox based on individual items
    const allChecked = newStates.groupItem1 && newStates.groupItem2 && newStates.groupItem3;
    newStates.groupAll = allChecked;
    
    setCheckboxStates(newStates);
  };

  // Determine if "Select All" should be indeterminate
  const groupItems = [checkboxStates.groupItem1, checkboxStates.groupItem2, checkboxStates.groupItem3];
  const someChecked = groupItems.some(item => item);
  const allChecked = groupItems.every(item => item);
  const isIndeterminate = someChecked && !allChecked;

  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Checkbox Component</h1>
        <p className="text-gray-600 mb-8">
          Customizable checkbox component with labels, descriptions, and paper-inspired styling.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Basic Usage</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Simple Checkbox</h3>
            <div className="mb-4">
              <Checkbox 
                checked={checkboxStates.basic}
                onChange={(e: any) => setCheckboxStates({...checkboxStates, basic: e.target.checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox 
  checked={checked}
  onChange={handleChange}
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">With Label</h3>
            <div className="mb-4">
              <Checkbox 
                label="Accept terms"
                checked={checkboxStates.withLabel}
                onChange={(e: any) => setCheckboxStates({...checkboxStates, withLabel: e.target.checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox 
  label="Accept terms"
  checked={checked}
  onChange={handleChange}
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">With Description</h3>
            <div className="mb-4">
              <Checkbox 
                label="Newsletter"
                description="Receive our weekly newsletter with updates"
                checked={checkboxStates.withDescription}
                onChange={(e: any) => setCheckboxStates({...checkboxStates, withDescription: e.target.checked})}
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox 
  label="Newsletter"
  description="Weekly updates"
  checked={checked}
  onChange={handleChange}
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
              <Checkbox 
                size="sm"
                label="Small checkbox"
                checked={true}
                readOnly
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox 
  size="sm"
  label="Small checkbox"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Medium (Default)</h3>
            <div className="mb-4">
              <Checkbox 
                size="md"
                label="Medium checkbox"
                checked={true}
                readOnly
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox 
  size="md"
  label="Medium checkbox"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Large</h3>
            <div className="mb-4">
              <Checkbox 
                size="lg"
                label="Large checkbox"
                checked={true}
                readOnly
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox 
  size="lg"
  label="Large checkbox"
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Colors</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Primary</h3>
            <div className="mb-4">
              <Checkbox 
                color="primary"
                label="Primary color"
                checked={true}
                readOnly
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox color="primary" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Secondary</h3>
            <div className="mb-4">
              <Checkbox 
                color="secondary"
                label="Secondary color"
                checked={true}
                readOnly
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox color="secondary" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Success</h3>
            <div className="mb-4">
              <Checkbox 
                color="success"
                label="Success color"
                checked={true}
                readOnly
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox color="success" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Warning</h3>
            <div className="mb-4">
              <Checkbox 
                color="warning"
                label="Warning color"
                checked={true}
                readOnly
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox color="warning" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Danger</h3>
            <div className="mb-4">
              <Checkbox 
                color="danger"
                label="Danger color"
                checked={true}
                readOnly
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox color="danger" />`}
            </pre>
          </div>
        </div>
      </section>

      {/* States */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">States</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Indeterminate</h3>
            <div className="mb-4">
              <Checkbox 
                indeterminate={true}
                label="Indeterminate state"
                description="Partially selected"
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox 
  indeterminate={true}
  label="Indeterminate state"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Error State</h3>
            <div className="mb-4">
              <Checkbox 
                error={true}
                label="Error state"
                description="This field has an error"
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox 
  error={true}
  label="Error state"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Disabled</h3>
            <div className="mb-4 space-y-2">
              <Checkbox 
                disabled={true}
                label="Disabled unchecked"
              />
              <Checkbox 
                disabled={true}
                checked={true}
                label="Disabled checked"
              />
            </div>
            <pre className="showcase-code">
{`<Checkbox 
  disabled={true}
  label="Disabled checkbox"
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Practical Examples */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Practical Examples</h2>
        
        {/* Form Example */}
        <div className="showcase-item mb-8">
          <h3 className="font-semibold mb-4">Form Settings</h3>
          <div className="space-y-4 p-6 border border-gray-200 rounded-lg bg-gray-50">
            <Checkbox 
              label="I agree to the Terms and Conditions"
              description="You must accept our terms to continue"
              checked={checkboxStates.terms}
              onChange={(e: any) => setCheckboxStates({...checkboxStates, terms: e.target.checked})}
              error={!checkboxStates.terms}
            />
            <Checkbox 
              label="Subscribe to marketing emails"
              description="Receive updates about new features and promotions"
              checked={checkboxStates.marketing}
              onChange={(e: any) => setCheckboxStates({...checkboxStates, marketing: e.target.checked})}
            />
            <Checkbox 
              label="Enable push notifications"
              description="Get notified about important updates"
              checked={checkboxStates.notifications}
              onChange={(e: any) => setCheckboxStates({...checkboxStates, notifications: e.target.checked})}
            />
          </div>
          <pre className="showcase-code mt-4">
{`<Checkbox 
  label="I agree to the Terms and Conditions"
  description="You must accept our terms"
  checked={terms}
  onChange={handleTermsChange}
  error={!terms}
/>`}
          </pre>
        </div>

        {/* Group Selection Example */}
        <div className="showcase-item">
          <h3 className="font-semibold mb-4">Group Selection</h3>
          <div className="space-y-2 p-6 border border-gray-200 rounded-lg bg-gray-50">
            <Checkbox 
              label="Select All"
              checked={checkboxStates.groupAll}
              indeterminate={isIndeterminate}
              onChange={(e: any) => handleGroupAllChange(e.target.checked)}
              className="font-medium border-b border-gray-300 pb-2"
            />
            <div className="ml-6 space-y-2">
              <Checkbox 
                label="Option 1"
                checked={checkboxStates.groupItem1}
                onChange={(e: any) => handleGroupItemChange('groupItem1', e.target.checked)}
              />
              <Checkbox 
                label="Option 2"
                checked={checkboxStates.groupItem2}
                onChange={(e: any) => handleGroupItemChange('groupItem2', e.target.checked)}
              />
              <Checkbox 
                label="Option 3"
                checked={checkboxStates.groupItem3}
                onChange={(e: any) => handleGroupItemChange('groupItem3', e.target.checked)}
              />
            </div>
          </div>
          <pre className="showcase-code mt-4">
{`// Parent checkbox
<Checkbox 
  label="Select All"
  checked={allSelected}
  indeterminate={someSelected && !allSelected}
  onChange={handleSelectAll}
/>

// Child checkboxes
<Checkbox 
  label="Option 1"
  checked={option1}
  onChange={handleOption1Change}
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
}