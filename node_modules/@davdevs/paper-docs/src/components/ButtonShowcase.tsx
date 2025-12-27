import React from 'react';

// Mock Button component for demonstration
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  startIcon, 
  endIcon, 
  loading = false,
  disabled = false,
  elevation = 'sm',
  className = '', 
  // Destructure non-DOM props
  as,
  ...domProps 
}: any) => {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg'
  };

  const elevations = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg'
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const loadingStyles = loading ? 'opacity-75 cursor-wait' : '';

  return (
    <button 
      className={`inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${variants[variant]} ${sizes[size]} ${elevations[elevation]} ${disabledStyles} ${loadingStyles} ${className}`}
      disabled={disabled || loading}
      {...domProps}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {!loading && startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {!loading && endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};

// Mock icons for demonstration
const PlusIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

export function ButtonShowcase() {
  const [loading, setLoading] = React.useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Button Component</h1>
        <p className="text-gray-600 mb-8">
          Interactive buttons with paper-inspired design, elevation effects, and comprehensive accessibility support.
        </p>
      </div>

      {/* Basic Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Button Variants</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Primary</h3>
            <Button className="mb-4">Primary Button</Button>
            <pre className="showcase-code">
{`<Button>Primary Button</Button>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Secondary</h3>
            <Button variant="secondary" className="mb-4">Secondary Button</Button>
            <pre className="showcase-code">
{`<Button variant="secondary">
  Secondary Button
</Button>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Outline</h3>
            <Button variant="outline" className="mb-4">Outline Button</Button>
            <pre className="showcase-code">
{`<Button variant="outline">
  Outline Button
</Button>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Ghost</h3>
            <Button variant="ghost" className="mb-4">Ghost Button</Button>
            <pre className="showcase-code">
{`<Button variant="ghost">
  Ghost Button
</Button>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Danger</h3>
            <Button variant="danger" className="mb-4">Delete</Button>
            <pre className="showcase-code">
{`<Button variant="danger">
  Delete
</Button>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Button Sizes</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Small</h3>
            <Button size="sm" className="mb-4">Small</Button>
            <pre className="showcase-code">
{`<Button size="sm">Small</Button>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Medium (Default)</h3>
            <Button size="md" className="mb-4">Medium</Button>
            <pre className="showcase-code">
{`<Button size="md">Medium</Button>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Large</h3>
            <Button size="lg" className="mb-4">Large</Button>
            <pre className="showcase-code">
{`<Button size="lg">Large</Button>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Extra Large</h3>
            <Button size="xl" className="mb-4">XL Button</Button>
            <pre className="showcase-code">
{`<Button size="xl">XL Button</Button>`}
            </pre>
          </div>
        </div>
      </section>

      {/* With Icons */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Buttons with Icons</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Start Icon</h3>
            <Button startIcon={<PlusIcon />} className="mb-4">Add Item</Button>
            <pre className="showcase-code">
{`<Button startIcon={<PlusIcon />}>
  Add Item
</Button>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">End Icon</h3>
            <Button endIcon={<DownloadIcon />} variant="outline" className="mb-4">Download</Button>
            <pre className="showcase-code">
{`<Button 
  endIcon={<DownloadIcon />}
  variant="outline"
>
  Download
</Button>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Loading State</h3>
            <Button 
              loading={loading} 
              onClick={handleLoadingDemo}
              className="mb-4"
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </Button>
            <pre className="showcase-code">
{`<Button 
  loading={loading}
  onClick={handleSave}
>
  Save Changes
</Button>`}
            </pre>
          </div>
        </div>
      </section>

      {/* States */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Button States</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Disabled</h3>
            <Button disabled className="mb-4">Disabled Button</Button>
            <pre className="showcase-code">
{`<Button disabled>
  Disabled Button
</Button>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Full Width</h3>
            <Button fullWidth className="mb-4">Full Width Button</Button>
            <pre className="showcase-code">
{`<Button fullWidth>
  Full Width Button
</Button>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Custom Element</h3>
            <Button as="a" href="#" variant="outline" className="mb-4">Link Button</Button>
            <pre className="showcase-code">
{`<Button as="a" href="#">
  Link Button
</Button>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Elevation */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Elevation Levels</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">No Elevation</h3>
            <Button elevation="none" className="mb-4">Flat Button</Button>
            <pre className="showcase-code">
{`<Button elevation="none">
  Flat Button
</Button>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Medium Elevation</h3>
            <Button elevation="md" className="mb-4">Elevated</Button>
            <pre className="showcase-code">
{`<Button elevation="md">
  Elevated
</Button>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Large Elevation</h3>
            <Button elevation="lg" className="mb-4">Highly Elevated</Button>
            <pre className="showcase-code">
{`<Button elevation="lg">
  Highly Elevated
</Button>`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}