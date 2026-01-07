
import { Input, Textarea, Label } from '../../../basic/src/components/forms';

export function LabelShowcase() {
  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Label Component</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
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
              <Label htmlFor="optional-input">Middle Name <span className="text-gray-400 ml-1 font-normal">(optional)</span></Label>
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
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          {['sm', 'md', 'lg'].map((size) => (
            <div key={size} className="showcase-item">
              <h3 className="font-semibold mb-2 capitalize">{size} {size === 'md' && '(Default)'}</h3>
              <div className="mb-4">
                <Label size={size as 'sm' | 'md' | 'lg'} htmlFor={`${size}-input`}>Label {size}</Label>
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
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          {['default', 'subtle', 'bold'].map((variant) => (
            <div key={variant} className="showcase-item">
              <h3 className="font-semibold mb-2 capitalize">{variant}</h3>
              <div className="mb-4">
                <Label variant={variant as 'default' | 'subtle' | 'bold'} htmlFor={`${variant}-input`}>{variant} Label</Label>
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

      {/* 
       */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Form Examples</h2>
        
        {/* Contact Form */}
        <div className="showcase-item mb-8">
          <h3 className="font-semibold mb-4">Contact Form</h3>
          <form className="space-y-4 p-6 border border-gray-200 rounded-lg bg-gray-50 dark:border-gray-800 dark:bg-gray-950 max-w-md">
            <div>
              <Label htmlFor="contact-name" required size="sm">
                Full Name
              </Label>
              <Input id="contact-name" placeholder="Enter your full name" className="mt-1" />
            </div>
            
            <div>
              <Label htmlFor="contact-email" required size="sm">
                Email Address
              </Label>
              <Input id="contact-email" type="email" placeholder="Enter your email" className="mt-1" />
            </div>
            
            <div>
              <Label htmlFor="contact-phone" size="sm">
                Phone Number <span className="text-gray-400 ml-1 font-normal">(optional)</span>
              </Label>
              <Input id="contact-phone" type="tel" placeholder="Enter your phone number" className="mt-1" />
            </div>
            
            <div>
              <Label htmlFor="contact-message" required size="sm">
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
          <form className="space-y-4 p-6 border border-gray-200 rounded-lg dark:border-gray-800 dark:bg-gray-950 bg-gray-50 max-w-md">
            <div>
              <Label htmlFor="reg-username" required>
                Username
              </Label>
              <Input id="reg-username" placeholder="Choose a username" className="mt-1" />
            </div>
            
            <div>
              <Label htmlFor="reg-password" required>
                Password
              </Label>
              <Input id="reg-password" type="password" placeholder="Create a secure password" className="mt-1" />
            </div>
            
            <div>
              <Label htmlFor="reg-confirm" required>
                Confirm Password
              </Label>
              <Input id="reg-confirm" type="password" placeholder="Confirm your password" className="mt-1" />
            </div>
            
            <div>
              <Label htmlFor="reg-bio" variant="subtle">
                Bio <span className="text-gray-400 ml-1 font-normal">(optional)</span>
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
          <form className="space-y-6 p-6 border border-gray-200 rounded-lg dark:border-gray-800 dark:bg-gray-950 bg-gray-50 max-w-lg">
            <div>
              <Label size="lg" variant="bold">
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
                  <Label htmlFor="website" size="sm" variant="subtle">
                    Website <span className="text-gray-400 ml-1 font-normal">(optional)</span>
                  </Label>
                  <Input id="website" type="url" placeholder="https://your-website.com" className="mt-1" />
                </div>
              </div>
            </div>
            
            <div>
              <Label size="lg" variant="bold">
                Preferences
              </Label>
              <div className="mt-3 space-y-3">
                <div>
                  <Label htmlFor="timezone" required size="sm">
                    Time Zone
                  </Label>
                  <Input id="timezone" placeholder="Select your timezone" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="language" size="sm">
                    Preferred Language <span className="text-gray-400 ml-1 font-normal">(optional)</span>
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
          <div className="space-y-4 p-6 border border-gray-200 rounded-lg dark:border-gray-800 dark:bg-gray-950 bg-gray-50 max-w-md">
            <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
              Labels are properly associated with form controls using <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">htmlFor</code> and <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded">id</code> attributes for screen reader compatibility.
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
              <p id="email-help" className="text-xs text-gray-600 dark:text-gray-400 mt-1">
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
              <ul id="password-requirements" className="text-xs text-gray-600 dark:text-gray-400 mt-1 space-y-1">
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