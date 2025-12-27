import React from 'react';

// Mock Label component for demonstration
const Label = ({ 
  className = '',
  htmlFor,
  required = false,
  optional = false,
  size = 'md',
  variant = 'default',
  weight = 'medium',
  color = 'default',
  children,
  ...domProps 
}: any) => {
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  };

  const variants = {
    default: 'text-gray-700',
    muted: 'text-gray-500',
    subtle: 'text-gray-600',
    emphasis: 'text-gray-900'
  };

  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold'
  };

  const colors = {
    default: 'text-gray-700',
    primary: 'text-blue-700',
    secondary: 'text-gray-600',
    success: 'text-green-700',
    warning: 'text-yellow-700',
    danger: 'text-red-700'
  };

  const finalColor = color !== 'default' ? colors[color] : variants[variant];

  return (
    <label 
      htmlFor={htmlFor}
      className={`block leading-none ${sizes[size]} ${weights[weight]} ${finalColor} ${className}`}
      {...domProps}
    >
      {children}
      {required && (
        <span className="text-red-500 ml-1" aria-label="Required field">
          *
        </span>
      )}
      {optional && (
        <span className="text-gray-400 ml-1 font-normal">
          (optional)
        </span>
      )}
    </label>
  );
};

// Mock Input for form examples
const Input = ({ className = '', ...props }: any) => (
  <input
    className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
    {...props}
  />
);

// Mock Textarea for form examples
const Textarea = ({ className = '', ...props }: any) => (
  <textarea
    className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none min-h-[80px] ${className}`}
    {...props}
  />
);

export function LabelShowcase() {
  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Label Component</h1>
        <p className="text-gray-600 mb-8">
          Typography-aware form labels with required indicators, sizing, and paper-inspired styling.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Basic Usage</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Simple Label</h3>
            <div className="mb-4">
              <Label htmlFor="simple-input">Email Address</Label>
              <Input id="simple-input" type="email" placeholder="Enter your email" className="mt-1" />
            </div>
            <pre className="showcase-code">
{`<Label htmlFor="email">Email Address</Label>
<Input id="email" type="email" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Required Field</h3>
            <div className="mb-4">
              <Label htmlFor="required-input" required>Full Name</Label>
              <Input id="required-input" placeholder="Enter your full name" className="mt-1" />
            </div>
            <pre className="showcase-code">
{`<Label htmlFor="name" required>
  Full Name
</Label>
<Input id="name" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Optional Field</h3>
            <div className="mb-4">
              <Label htmlFor="optional-input" optional>Middle Name</Label>
              <Input id="optional-input" placeholder="Enter middle name" className="mt-1" />
            </div>
            <pre className="showcase-code">
{`<Label htmlFor="middle" optional>
  Middle Name
</Label>
<Input id="middle" />`}
            </pre>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Sizes</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
            <div key={size} className="showcase-item">
              <h3 className="font-semibold mb-2 capitalize">{size} {size === 'md' && '(Default)'}</h3>
              <div className="mb-4">
                <Label size={size} htmlFor={`${size}-input`}>Label {size}</Label>
                <Input id={`${size}-input`} placeholder={`${size} input`} className="mt-1" />
              </div>
              <pre className="showcase-code">
{`<Label size="${size}">Label</Label>`}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Variants</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {['default', 'muted', 'subtle', 'emphasis'].map((variant) => (
            <div key={variant} className="showcase-item">
              <h3 className="font-semibold mb-2 capitalize">{variant}</h3>
              <div className="mb-4">
                <Label variant={variant} htmlFor={`${variant}-input`}>{variant} Label</Label>
                <Input id={`${variant}-input`} placeholder={`${variant} input`} className="mt-1" />
              </div>
              <pre className="showcase-code">
{`<Label variant="${variant}">
  ${variant} Label
</Label>`}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Font Weights */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Font Weights</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {['normal', 'medium', 'semibold', 'bold'].map((weight) => (
            <div key={weight} className="showcase-item">
              <h3 className="font-semibold mb-2 capitalize">{weight}</h3>
              <div className="mb-4">
                <Label weight={weight} htmlFor={`${weight}-input`}>{weight} weight</Label>
                <Input id={`${weight}-input`} placeholder={`${weight} input`} className="mt-1" />
              </div>
              <pre className="showcase-code">
{`<Label weight="${weight}">
  ${weight} weight
</Label>`}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Colors */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Colors</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {['default', 'primary', 'secondary', 'success', 'warning', 'danger'].map((color) => (
            <div key={color} className="showcase-item">
              <h3 className="font-semibold mb-2 capitalize">{color}</h3>
              <div className="mb-4">
                <Label color={color} htmlFor={`${color}-input`}>{color} Label</Label>
                <Input id={`${color}-input`} placeholder={`${color} input`} className="mt-1" />
              </div>
              <pre className="showcase-code">
{`<Label color="${color}">
  ${color} Label
</Label>`}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Form Examples */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Form Examples</h2>
        
        {/* Contact Form */}
        <div className="showcase-item mb-8">
          <h3 className="font-semibold mb-4">Contact Form</h3>
          <form className="space-y-4 p-6 border border-gray-200 rounded-lg bg-gray-50 max-w-md">
            <div>
              <Label htmlFor="contact-name" required size="sm" weight="medium">
                Full Name
              </Label>
              <Input id="contact-name" placeholder="Enter your full name" className="mt-1" />
            </div>
            
            <div>
              <Label htmlFor="contact-email" required size="sm" weight="medium">
                Email Address
              </Label>
              <Input id="contact-email" type="email" placeholder="Enter your email" className="mt-1" />
            </div>
            
            <div>
              <Label htmlFor="contact-phone" optional size="sm" weight="medium">
                Phone Number
              </Label>
              <Input id="contact-phone" type="tel" placeholder="Enter your phone number" className="mt-1" />
            </div>
            
            <div>
              <Label htmlFor="contact-message" required size="sm" weight="medium">
                Message
              </Label>
              <Textarea id="contact-message" placeholder="Enter your message" className="mt-1" />
            </div>
          </form>
          <pre className="showcase-code mt-4">
{`<Label htmlFor="name" required size="sm" weight="medium">
  Full Name
</Label>
<Input id="name" placeholder="Enter your name" />

<Label htmlFor="email" required size="sm" weight="medium">
  Email Address
</Label>
<Input id="email" type="email" />

<Label htmlFor="phone" optional size="sm" weight="medium">
  Phone Number
</Label>
<Input id="phone" type="tel" />`}
          </pre>
        </div>

        {/* Registration Form */}
        <div className="showcase-item mb-8">
          <h3 className="font-semibold mb-4">User Registration</h3>
          <form className="space-y-4 p-6 border border-gray-200 rounded-lg bg-gray-50 max-w-md">
            <div>
              <Label htmlFor="reg-username" required color="primary" weight="semibold">
                Username
              </Label>
              <Input id="reg-username" placeholder="Choose a username" className="mt-1" />
            </div>
            
            <div>
              <Label htmlFor="reg-password" required color="danger" weight="semibold">
                Password
              </Label>
              <Input id="reg-password" type="password" placeholder="Create a secure password" className="mt-1" />
            </div>
            
            <div>
              <Label htmlFor="reg-confirm" required color="danger" weight="semibold">
                Confirm Password
              </Label>
              <Input id="reg-confirm" type="password" placeholder="Confirm your password" className="mt-1" />
            </div>
            
            <div>
              <Label htmlFor="reg-bio" optional variant="subtle">
                Bio
              </Label>
              <Textarea id="reg-bio" placeholder="Tell us about yourself" className="mt-1" />
            </div>
          </form>
          <pre className="showcase-code mt-4">
{`<Label htmlFor="username" required color="primary" weight="semibold">
  Username
</Label>

<Label htmlFor="password" required color="danger" weight="semibold">
  Password
</Label>

<Label htmlFor="bio" optional variant="subtle">
  Bio
</Label>`}
          </pre>
        </div>

        {/* Settings Form */}
        <div className="showcase-item">
          <h3 className="font-semibold mb-4">Settings Form</h3>
          <form className="space-y-6 p-6 border border-gray-200 rounded-lg bg-gray-50 max-w-lg">
            <div>
              <Label size="lg" weight="bold" variant="emphasis">
                Account Settings
              </Label>
              <div className="mt-3 space-y-3">
                <div>
                  <Label htmlFor="display-name" required size="sm">
                    Display Name
                  </Label>
                  <Input id="display-name" placeholder="How others see your name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="website" optional size="sm" color="secondary">
                    Website
                  </Label>
                  <Input id="website" type="url" placeholder="https://your-website.com" className="mt-1" />
                </div>
              </div>
            </div>
            
            <div>
              <Label size="lg" weight="bold" variant="emphasis">
                Preferences
              </Label>
              <div className="mt-3 space-y-3">
                <div>
                  <Label htmlFor="timezone" required size="sm" color="warning">
                    Time Zone
                  </Label>
                  <Input id="timezone" placeholder="Select your timezone" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="language" optional size="sm">
                    Preferred Language
                  </Label>
                  <Input id="language" placeholder="English" className="mt-1" />
                </div>
              </div>
            </div>
          </form>
          <pre className="showcase-code mt-4">
{`<Label size="lg" weight="bold" variant="emphasis">
  Account Settings
</Label>

<Label htmlFor="display-name" required size="sm">
  Display Name
</Label>

<Label htmlFor="website" optional size="sm" color="secondary">
  Website
</Label>`}
          </pre>
        </div>
      </section>

      {/* Accessibility */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Accessibility Features</h2>
        <div className="showcase-item">
          <h3 className="font-semibold mb-4">Proper Label Association</h3>
          <div className="space-y-4 p-6 border border-gray-200 rounded-lg bg-gray-50 max-w-md">
            <p className="text-sm text-gray-600 mb-4">
              Labels are properly associated with form controls using <code className="bg-gray-200 px-1 rounded">htmlFor</code> and <code className="bg-gray-200 px-1 rounded">id</code> attributes for screen reader compatibility.
            </p>
            
            <div>
              <Label htmlFor="accessible-email" required>
                Email (Screen Reader Accessible)
              </Label>
              <Input 
                id="accessible-email" 
                type="email" 
                placeholder="Properly labeled input" 
                className="mt-1"
                aria-describedby="email-help"
              />
              <p id="email-help" className="text-xs text-gray-500 mt-1">
                We'll never share your email with anyone else.
              </p>
            </div>
            
            <div>
              <Label htmlFor="accessible-password" required>
                Password
                <span className="sr-only"> - Required field with special characters</span>
              </Label>
              <Input 
                id="accessible-password" 
                type="password" 
                placeholder="Secure password" 
                className="mt-1"
                aria-describedby="password-requirements"
              />
              <ul id="password-requirements" className="text-xs text-gray-500 mt-1 space-y-1">
                <li>• At least 8 characters</li>
                <li>• Include uppercase and lowercase</li>
                <li>• Include numbers and symbols</li>
              </ul>
            </div>
          </div>
          <pre className="showcase-code mt-4">
{`<Label htmlFor="email" required>
  Email (Screen Reader Accessible)
</Label>
<Input 
  id="email" 
  type="email" 
  aria-describedby="email-help"
/>
<p id="email-help">
  Help text for screen readers
</p>`}
          </pre>
        </div>
      </section>
    </div>
  );
}