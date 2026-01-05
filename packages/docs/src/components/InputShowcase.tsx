import React, { useState } from 'react';
import { Input } from '@davdevs/paper-basic';

// Icons for demonstration
const SearchIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export function InputShowcase() {
  const [inputValues, setInputValues] = useState({
    basic: '',
    withIcon: '',
    loading: ''
  });

  const [loadingDemo, setLoadingDemo] = useState(false);

  const handleLoadingDemo = () => {
    setLoadingDemo(true);
    setTimeout(() => setLoadingDemo(false), 3000);
  };

  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Input Component</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Versatile text input component with paper-inspired styling, icons, states, and accessibility features.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Basic Usage</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Default Input</h3>
            <Input 
              placeholder="Enter text..." 
              value={inputValues.basic}
              onChange={(e: any) => setInputValues({...inputValues, basic: e.target.value})}
              className="mb-4" 
            />
            <pre className="showcase-code">
{`<Input placeholder="Enter text..." />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">With Helper Text</h3>
            <Input 
              placeholder="Username"
              helperText="This will be your public username"
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Input 
  placeholder="Username"
  helperText="This will be your public username"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Error State</h3>
            <Input 
              placeholder="Required field"
              error="This field is required"
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Input 
  placeholder="Required field"
  error="This field is required"
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Variants</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Default</h3>
            <Input placeholder="Default variant" className="mb-4" />
            <pre className="showcase-code">
{`<Input 
  variant="default" 
  placeholder="Default variant" 
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Filled</h3>
            <Input variant="filled" placeholder="Filled variant" className="mb-4" />
            <pre className="showcase-code">
{`<Input 
  variant="filled" 
  placeholder="Filled variant" 
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Outlined</h3>
            <Input variant="outlined" placeholder="Outlined variant" className="mb-4" />
            <pre className="showcase-code">
{`<Input 
  variant="outlined" 
  placeholder="Outlined variant" 
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
            <Input size="sm" placeholder="Small input" className="mb-4" />
            <pre className="showcase-code">
{`<Input size="sm" placeholder="Small input" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Medium (Default)</h3>
            <Input size="md" placeholder="Medium input" className="mb-4" />
            <pre className="showcase-code">
{`<Input size="md" placeholder="Medium input" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Large</h3>
            <Input size="lg" placeholder="Large input" className="mb-4" />
            <pre className="showcase-code">
{`<Input size="lg" placeholder="Large input" />`}
            </pre>
          </div>
        </div>
      </section>

      {/* With Icons */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">With Icons</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Start Icon</h3>
            <Input 
              startIcon={<SearchIcon />}
              placeholder="Search..."
              value={inputValues.withIcon}
              onChange={(e: any) => setInputValues({...inputValues, withIcon: e.target.value})}
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Input 
  startIcon={<SearchIcon />}
  placeholder="Search..."
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">End Icon</h3>
            <Input 
              endIcon={<MailIcon />}
              placeholder="Email address"
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Input 
  endIcon={<MailIcon />}
  placeholder="Email address"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Loading State</h3>
            <div className="space-y-2 mb-4">
              <Input 
                loading={loadingDemo}
                placeholder="Loading input..."
                value={inputValues.loading}
                onChange={(e: any) => setInputValues({...inputValues, loading: e.target.value})}
              />
              <button 
                onClick={handleLoadingDemo}
                className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
              >
                Demo Loading
              </button>
            </div>
            <pre className="showcase-code">
{`<Input 
  loading={true}
  placeholder="Loading input..."
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* States */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">States</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Success</h3>
            <Input 
              state="success"
              placeholder="Success state"
              helperText="Looks good!"
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Input 
  state="success"
  helperText="Looks good!"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Warning</h3>
            <Input 
              state="warning"
              placeholder="Warning state"
              helperText="Please check this field"
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Input 
  state="warning"
  helperText="Please check this field"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Error</h3>
            <Input 
              error="This field is required"
              placeholder="Error state"
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Input 
  error="This field is required"
  placeholder="Error state"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Disabled</h3>
            <Input 
              disabled
              placeholder="Disabled input"
              value="Cannot edit this"
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Input 
  disabled
  placeholder="Disabled input"
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Paper Elevation */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Paper Elevation</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">None</h3>
            <Input elevation="none" placeholder="No elevation" className="mb-4" />
            <pre className="showcase-code">
{`<Input elevation="none" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Small</h3>
            <Input elevation="sm" placeholder="Small elevation" className="mb-4" />
            <pre className="showcase-code">
{`<Input elevation="sm" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Medium</h3>
            <Input elevation="md" placeholder="Medium elevation" className="mb-4" />
            <pre className="showcase-code">
{`<Input elevation="md" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Large</h3>
            <Input elevation="lg" placeholder="Large elevation" className="mb-4" />
            <pre className="showcase-code">
{`<Input elevation="lg" />`}
            </pre>
          </div>
        </div>
      </section>

      {/* Full Width */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Full Width</h2>
        <div className="showcase-item">
          <h3 className="font-semibold mb-2">Full Width Input</h3>
          <Input 
            fullWidth
            placeholder="This input takes the full width of its container"
            helperText="Useful for form layouts"
            className="mb-4"
          />
          <pre className="showcase-code">
{`<Input 
  fullWidth
  placeholder="Full width input"
  helperText="Takes full container width"
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
}