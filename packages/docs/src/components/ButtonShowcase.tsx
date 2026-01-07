import React from 'react';
import { Button } from '@davdevs/paper-basic';

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
        <p className="text-gray-700 dark:text-gray-300 mb-8">
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
            <Button as={"a" as any} variant="outline" className="mb-4">Link Button</Button>
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