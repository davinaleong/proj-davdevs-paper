import React, { useState } from 'react';

// Mock Radio component for demonstration
const Radio = ({ 
  className = '',
  size = 'md',
  color = 'primary',
  checked = false,
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

  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;
  const finalColor = error ? 'danger' : color;

  return (
    <div className={`flex items-start gap-2 ${className}`}>
      <div className="flex items-center h-5">
        <input
          type="radio"
          id={radioId}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={`border-2 focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 ${sizes[size]} ${colors[finalColor]} ${error ? 'border-red-300' : 'border-gray-300'}`}
          {...domProps}
        />
      </div>
      
      {(label || description) && (
        <div className="flex flex-col">
          {label && (
            <label 
              htmlFor={radioId}
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

// Mock RadioGroup component for demonstration
const RadioGroup = ({ 
  className = '',
  orientation = 'vertical',
  gap = 'md',
  children,
  value,
  onChange,
  name,
  error,
  label,
  description,
  ...domProps 
}: any) => {
  const gaps = {
    sm: 'gap-2',
    md: 'gap-3',
    lg: 'gap-4'
  };

  const orientationClass = orientation === 'horizontal' ? 'flex-row flex-wrap' : 'flex-col';

  return (
    <fieldset className={className} {...domProps}>
      {label && (
        <legend className={`font-medium mb-2 ${error ? 'text-red-700' : 'text-gray-900'}`}>
          {label}
        </legend>
      )}
      {description && (
        <p className={`text-sm mb-3 ${error ? 'text-red-600' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
      <div className={`flex ${orientationClass} ${gaps[gap]}`}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              name: name,
              checked: child.props.value === value,
              onChange: (e: any) => onChange?.(e.target.value),
              error: error
            });
          }
          return child;
        })}
      </div>
    </fieldset>
  );
};

export function RadioShowcase() {
  const [singleValue, setSingleValue] = useState('');
  const [planValue, setPlanValue] = useState('pro');
  const [paymentValue, setPaymentValue] = useState('credit-card');
  const [orientationValue, setOrientationValue] = useState('option-2');
  const [sizeValue, setSizeValue] = useState('medium');
  const [colorValue, setColorValue] = useState('blue');
  const [preferenceValue, setPreferenceValue] = useState('email');

  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Radio Component</h1>
        <p className="text-gray-600 mb-8">
          Radio button component for single selections with labels, descriptions, and group management.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Basic Usage</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Single Radio</h3>
            <div className="mb-4">
              <Radio 
                name="single"
                value="option-1"
                label="Single option"
                checked={singleValue === 'option-1'}
                onChange={() => setSingleValue('option-1')}
              />
            </div>
            <pre className="showcase-code">
{`<Radio 
  name="single"
  value="option-1"
  label="Single option"
  checked={value === 'option-1'}
  onChange={handleChange}
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">With Description</h3>
            <div className="mb-4">
              <Radio 
                name="described"
                value="option-1"
                label="Option with description"
                description="This option provides additional context"
                checked={true}
                readOnly
              />
            </div>
            <pre className="showcase-code">
{`<Radio 
  name="described"
  value="option-1"
  label="Option with description"
  description="Additional context"
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Radio Group */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Radio Group</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Subscription Plans</h3>
            <RadioGroup 
              label="Choose your plan"
              description="Select the plan that best fits your needs"
              name="subscription"
              value={planValue}
              onChange={setPlanValue}
              className="mb-4"
            >
              <Radio 
                value="free"
                label="Free Plan"
                description="Perfect for getting started"
              />
              <Radio 
                value="pro"
                label="Pro Plan"
                description="For professional users"
              />
              <Radio 
                value="enterprise"
                label="Enterprise Plan"
                description="For large organizations"
              />
            </RadioGroup>
            <pre className="showcase-code">
{`<RadioGroup 
  label="Choose your plan"
  name="subscription"
  value={value}
  onChange={setValue}
>
  <Radio value="free" label="Free Plan" />
  <Radio value="pro" label="Pro Plan" />
  <Radio value="enterprise" label="Enterprise" />
</RadioGroup>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Payment Methods</h3>
            <RadioGroup 
              label="Payment method"
              name="payment"
              value={paymentValue}
              onChange={setPaymentValue}
              className="mb-4"
            >
              <Radio 
                value="credit-card"
                label="Credit Card"
                description="Pay with Visa, Mastercard, or Amex"
              />
              <Radio 
                value="paypal"
                label="PayPal"
                description="Pay securely with your PayPal account"
              />
              <Radio 
                value="bank-transfer"
                label="Bank Transfer"
                description="Direct transfer from your bank account"
              />
            </RadioGroup>
            <pre className="showcase-code">
{`<RadioGroup 
  label="Payment method"
  name="payment"
  value={value}
  onChange={setValue}
>
  <Radio value="credit-card" label="Credit Card" />
  <Radio value="paypal" label="PayPal" />
  <Radio value="bank-transfer" label="Bank Transfer" />
</RadioGroup>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Orientation */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Orientation</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Vertical (Default)</h3>
            <RadioGroup 
              label="Vertical options"
              orientation="vertical"
              name="vertical"
              value={orientationValue}
              onChange={setOrientationValue}
              className="mb-4"
            >
              <Radio value="option-1" label="Option 1" />
              <Radio value="option-2" label="Option 2" />
              <Radio value="option-3" label="Option 3" />
            </RadioGroup>
            <pre className="showcase-code">
{`<RadioGroup orientation="vertical">
  <Radio value="1" label="Option 1" />
  <Radio value="2" label="Option 2" />
  <Radio value="3" label="Option 3" />
</RadioGroup>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Horizontal</h3>
            <RadioGroup 
              label="Horizontal options"
              orientation="horizontal"
              name="horizontal"
              value={orientationValue}
              onChange={setOrientationValue}
              className="mb-4"
            >
              <Radio value="option-1" label="Option 1" />
              <Radio value="option-2" label="Option 2" />
              <Radio value="option-3" label="Option 3" />
            </RadioGroup>
            <pre className="showcase-code">
{`<RadioGroup orientation="horizontal">
  <Radio value="1" label="Option 1" />
  <Radio value="2" label="Option 2" />
  <Radio value="3" label="Option 3" />
</RadioGroup>`}
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
            <RadioGroup 
              name="size-small"
              value={sizeValue}
              onChange={setSizeValue}
              className="mb-4"
            >
              <Radio size="sm" value="small" label="Small radio" />
            </RadioGroup>
            <pre className="showcase-code">
{`<Radio size="sm" label="Small radio" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Medium (Default)</h3>
            <RadioGroup 
              name="size-medium"
              value={sizeValue}
              onChange={setSizeValue}
              className="mb-4"
            >
              <Radio size="md" value="medium" label="Medium radio" />
            </RadioGroup>
            <pre className="showcase-code">
{`<Radio size="md" label="Medium radio" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Large</h3>
            <RadioGroup 
              name="size-large"
              value={sizeValue}
              onChange={setSizeValue}
              className="mb-4"
            >
              <Radio size="lg" value="large" label="Large radio" />
            </RadioGroup>
            <pre className="showcase-code">
{`<Radio size="lg" label="Large radio" />`}
            </pre>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Colors</h2>
        <div className="showcase-grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {['primary', 'secondary', 'success', 'warning', 'danger'].map((color) => (
            <div key={color} className="showcase-item">
              <h3 className="font-semibold mb-2 capitalize">{color}</h3>
              <RadioGroup 
                name={`color-${color}`}
                value={colorValue}
                onChange={setColorValue}
                className="mb-4"
              >
                <Radio 
                  color={color}
                  value={color}
                  label={`${color} color`}
                />
              </RadioGroup>
              <pre className="showcase-code">
{`<Radio color="${color}" />`}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* States */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">States</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Normal State</h3>
            <div className="mb-4 space-y-2">
              <Radio 
                name="normal"
                value="unchecked"
                label="Unchecked"
                checked={false}
                readOnly
              />
              <Radio 
                name="normal"
                value="checked"
                label="Checked"
                checked={true}
                readOnly
              />
            </div>
            <pre className="showcase-code">
{`<Radio label="Normal radio" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Error State</h3>
            <RadioGroup 
              error={true}
              label="Error group"
              description="Please select an option"
              name="error"
              value={""}
              onChange={() => {}}
              className="mb-4"
            >
              <Radio value="option-1" label="Option 1" />
              <Radio value="option-2" label="Option 2" />
            </RadioGroup>
            <pre className="showcase-code">
{`<RadioGroup error={true}>
  <Radio value="1" label="Option 1" />
  <Radio value="2" label="Option 2" />
</RadioGroup>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Disabled State</h3>
            <div className="mb-4 space-y-2">
              <Radio 
                disabled={true}
                name="disabled"
                value="disabled-unchecked"
                label="Disabled unchecked"
                checked={false}
                readOnly
              />
              <Radio 
                disabled={true}
                name="disabled"
                value="disabled-checked"
                label="Disabled checked"
                checked={true}
                readOnly
              />
            </div>
            <pre className="showcase-code">
{`<Radio disabled={true} label="Disabled" />`}
            </pre>
          </div>
        </div>
      </section>

      {/* Practical Example */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Practical Example</h2>
        <div className="showcase-item">
          <h3 className="font-semibold mb-4">Contact Preferences</h3>
          <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
            <RadioGroup 
              label="How would you like to be contacted?"
              description="We'll use this method for important updates about your account"
              name="contact-preference"
              value={preferenceValue}
              onChange={setPreferenceValue}
              gap="lg"
            >
              <Radio 
                value="email"
                label="Email"
                description="Send updates to your registered email address"
              />
              <Radio 
                value="sms"
                label="SMS / Text Message"
                description="Send quick updates via text message"
              />
              <Radio 
                value="phone"
                label="Phone Call"
                description="Call you directly for important matters"
              />
              <Radio 
                value="none"
                label="No Contact"
                description="Only contact me if absolutely necessary"
              />
            </RadioGroup>
            
            {preferenceValue && (
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
                <p className="text-sm text-blue-800">
                  Selected: <strong>{preferenceValue}</strong>
                </p>
              </div>
            )}
          </div>
          <pre className="showcase-code mt-4">
{`<RadioGroup 
  label="Contact preferences"
  name="contact"
  value={preference}
  onChange={setPreference}
>
  <Radio 
    value="email"
    label="Email"
    description="Updates via email"
  />
  <Radio 
    value="sms"
    label="SMS"
    description="Quick text updates"
  />
</RadioGroup>`}
          </pre>
        </div>
      </section>
    </div>
  );
}