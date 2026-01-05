import React, { useState } from 'react';
import { Input, Textarea, Select, Label, FormField } from '../../../basic/src/components/forms';

export function FormFieldShowcase() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    bio: '',
    country: '',
    agreeToTerms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (validateForm()) {
      alert('Form submitted successfully!');
    }
  };

  const updateField = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">FormField Component</h1>
        <p className="text-gray-600 mb-8">
          Complete form field wrapper with labels, validation messages, and consistent spacing.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Basic Usage</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Simple FormField</h3>
            <div className="mb-4">
              <FormField 
                label="Email Address"
                helperText="We'll never share your email"
              >
                <Input type="email" placeholder="Enter your email" />
              </FormField>
            </div>
            <pre className="showcase-code">
{`<FormField 
  label="Email Address"
  helperText="We'll never share your email"
>
  <Input type="email" placeholder="Enter email" />
</FormField>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Required Field</h3>
            <div className="mb-4">
              <FormField 
                label="Full Name"
                required
                helperText="Enter your first and last name"
              >
                <Input placeholder="Enter your full name" />
              </FormField>
            </div>
            <pre className="showcase-code">
{`<FormField 
  label="Full Name"
  required
  helperText="First and last name"
>
  <Input placeholder="Enter name" />
</FormField>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Validation States */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Validation States</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Error State</h3>
            <div className="mb-4">
              <FormField 
                label="Email Address"
                required
                error="Please enter a valid email address"
              >
                <Input 
                  type="email" 
                  placeholder="invalid-email" 
                  defaultValue="invalid-email"
                />
              </FormField>
            </div>
            <pre className="showcase-code">
{`<FormField 
  label="Email Address"
  required
  error="Invalid email address"
>
  <Input type="email" />
</FormField>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Success State</h3>
            <div className="mb-4">
              <FormField 
                label="Username"
                required
                helperText="Username is available!"
                className="[&>p]:text-green-600" // Custom styling for success message
              >
                <Input 
                  placeholder="Available username" 
                  defaultValue="available_user"
                />
              </FormField>
            </div>
            <pre className="showcase-code">
{`<FormField 
  label="Username"
  required
  helperText="Username is available!"
  className="[&>p]:text-green-600"
>
  <Input placeholder="Username" />
</FormField>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Warning State</h3>
            <div className="mb-4">
              <FormField 
                label="Password"
                required
                helperText="Password should be stronger"
                className="[&>p]:text-yellow-600" // Custom styling for warning message
              >
                <Input 
                  type="password" 
                  placeholder="Weak password" 
                  defaultValue="123"
                />
              </FormField>
            </div>
            <pre className="showcase-code">
{`<FormField 
  label="Password"
  required
  helperText="Password should be stronger"
  className="[&>p]:text-yellow-600"
>
  <Input type="password" />
</FormField>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Optional Field</h3>
            <div className="mb-4">
              <FormField 
                label="Phone Number (optional)"
                helperText="We'll only use this for important updates"
              >
                <Input type="tel" placeholder="Enter phone number" />
              </FormField>
            </div>
            <pre className="showcase-code">
{`<FormField 
  label="Phone Number (optional)"
  helperText="For important updates only"
>
  <Input type="tel" />
</FormField>`}
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
              <FormField 
                size="sm"
                label="Small field"
                helperText="Compact form field"
              >
                <Input placeholder="Small input" />
              </FormField>
            </div>
            <pre className="showcase-code">
{`<FormField 
  size="sm"
  label="Small field"
  helperText="Compact spacing"
>
  <Input />
</FormField>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Medium (Default)</h3>
            <div className="mb-4">
              <FormField 
                size="md"
                label="Medium field"
                helperText="Standard form field"
              >
                <Input placeholder="Medium input" />
              </FormField>
            </div>
            <pre className="showcase-code">
{`<FormField 
  size="md"
  label="Medium field"
  helperText="Standard spacing"
>
  <Input />
</FormField>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Large</h3>
            <div className="mb-4">
              <FormField 
                size="lg"
                label="Large field"
                helperText="Spacious form field"
              >
                <Input placeholder="Large input" />
              </FormField>
            </div>
            <pre className="showcase-code">
{`<FormField 
  size="lg"
  label="Large field"
  helperText="Spacious layout"
>
  <Input />
</FormField>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Different Input Types */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Different Input Types</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Textarea Field</h3>
            <div className="mb-4">
              <FormField 
                label="Message"
                required
                helperText="Tell us what you're thinking"
              >
                <Textarea placeholder="Enter your message here..." />
              </FormField>
            </div>
            <pre className="showcase-code">
{`<FormField 
  label="Message"
  required
  helperText="Tell us your thoughts"
>
  <Textarea placeholder="Message" />
</FormField>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Select Field</h3>
            <div className="mb-4">
              <FormField 
                label="Country"
                required
                helperText="Select your country of residence"
              >
                <Select>
                  <option value="">Choose a country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                </Select>
              </FormField>
            </div>
            <pre className="showcase-code">
{`<FormField 
  label="Country"
  required
  helperText="Country of residence"
>
  <Select>
    <option>Choose a country</option>
    <option value="us">United States</option>
  </Select>
</FormField>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Complete Form Example */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Complete Form Example</h2>
        <div className="showcase-item">
          <h3 className="font-semibold mb-4">User Registration Form</h3>
          <form onSubmit={handleSubmit} className="max-w-lg p-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-950 space-y-4">
            <FormField 
              label="Full Name"
              required
              error={submitted ? errors.name : ''}
              helperText={!submitted || !errors.name ? "Enter your first and last name" : undefined}
            >
              <Input 
                value={formData.name}
                onChange={(e: any) => updateField('name', e.target.value)}
                placeholder="John Doe"
              />
            </FormField>

            <FormField 
              label="Email Address"
              required
              error={submitted ? errors.email : ''}
              helperText={(!submitted || !errors.email) ? (formData.email && !errors.email && submitted ? 'Email looks good!' : "We'll use this to send you important updates") : undefined}
              className={formData.email && !errors.email && submitted ? '[&>p]:text-green-600' : ''}
            >
              <Input 
                type="email"
                value={formData.email}
                onChange={(e: any) => updateField('email', e.target.value)}
                placeholder="john@example.com"
              />
            </FormField>

            <FormField 
              label="Password"
              required
              error={submitted ? errors.password : ''}
              helperText={(!submitted || !errors.password) ? (formData.password && formData.password.length < 8 ? 'Password should be at least 8 characters' : 'Must be at least 8 characters long') : undefined}
              className={formData.password && formData.password.length < 8 && formData.password.length > 0 ? '[&>p]:text-yellow-600' : ''}
            >
              <Input 
                type="password"
                value={formData.password}
                onChange={(e: any) => updateField('password', e.target.value)}
                placeholder="Create a secure password"
              />
            </FormField>

            <FormField 
              label="Confirm Password"
              required
              error={submitted ? errors.confirmPassword : ''}
              helperText={(!submitted || !errors.confirmPassword) ? (formData.confirmPassword && formData.password === formData.confirmPassword ? 'Passwords match!' : 'Re-enter your password to confirm') : undefined}
              className={formData.confirmPassword && formData.password === formData.confirmPassword ? '[&>p]:text-green-600' : ''}
            >
              <Input 
                type="password"
                value={formData.confirmPassword}
                onChange={(e: any) => updateField('confirmPassword', e.target.value)}
                placeholder="Confirm your password"
              />
            </FormField>

            <FormField 
              label="Bio (optional)"
              helperText="Tell us a bit about yourself (optional)"
            >
              <Textarea 
                value={formData.bio}
                onChange={(e: any) => updateField('bio', e.target.value)}
                placeholder="Share something about yourself..."
              />
            </FormField>

            <FormField 
              label="Country"
              required
              helperText="Select your country of residence"
            >
              <Select 
                value={formData.country}
                onChange={(e: any) => updateField('country', e.target.value)}
              >
                <option value="">Choose your country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
                <option value="de">Germany</option>
              </Select>
            </FormField>

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Create Account
              </button>
            </div>
          </form>
          <pre className="showcase-code mt-4">
{`<form onSubmit={handleSubmit}>
  <FormField 
    label="Full Name"
    required
    error={errors.name}
    helperText="First and last name"
  >
    <Input 
      value={name}
      onChange={setName}
      placeholder="John Doe"
    />
  </FormField>

  <FormField 
    label="Email Address"
    required
    error={errors.email}
    helperText="We'll send updates here"
  >
    <Input 
      type="email"
      value={email}
      onChange={setEmail}
    />
  </FormField>

  <FormField 
    label="Password"
    required
    error={errors.password}
    helperText="At least 8 characters"
  >
    <Input type="password" />
  </FormField>
</form>`}
          </pre>
        </div>
      </section>

      {/* Best Practices */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Best Practices</h2>
        <div className="showcase-item">
          <h3 className="font-semibold mb-4">Form Field Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-green-700 dark:text-green-300">✅ Do</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>Use clear, descriptive labels</li>
                <li>Provide helpful text for complex fields</li>
                <li>Show validation messages immediately</li>
                <li>Use consistent sizing throughout forms</li>
                <li>Mark required fields clearly</li>
                <li>Group related fields logically</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-red-700 dark:text-red-300">❌ Don't</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>Use vague or technical labels</li>
                <li>Show error messages before user interaction</li>
                <li>Mix different field sizes randomly</li>
                <li>Make optional fields look required</li>
                <li>Overuse helper text for simple fields</li>
                <li>Nest FormFields inside each other</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}