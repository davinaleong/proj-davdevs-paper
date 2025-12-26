import React from 'react';
import { Box } from '@davdevs/paper-foundations';

export function BoxShowcase() {
  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Box Component</h1>
        <p className="text-gray-600 mb-8">
          The foundational primitive for creating paper-inspired containers with consistent spacing, borders, and elevation effects.
        </p>
      </div>

      {/* Basic Examples */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Basic Usage</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Default Box</h3>
            <Box className="mb-4">
              <p>This is a default box with medium padding and base border radius.</p>
            </Box>
            <pre className="showcase-code">
{`<Box>
  <p>Content here</p>
</Box>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">With Border</h3>
            <Box border className="mb-4">
              <p>Box with a subtle border for definition.</p>
            </Box>
            <pre className="showcase-code">
{`<Box border>
  <p>Content with border</p>
</Box>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Secondary Variant</h3>
            <Box variant="secondary" className="mb-4">
              <p>Secondary background for less prominent content.</p>
            </Box>
            <pre className="showcase-code">
{`<Box variant="secondary">
  <p>Secondary content</p>
</Box>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Elevation Examples */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Elevation Levels</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {(['none', 'sm', 'base', 'md', 'lg', 'xl', '2xl'] as const).map((elevation) => (
            <div key={elevation} className="showcase-item">
              <h3 className="font-semibold mb-2 capitalize">
                {elevation === 'none' ? 'None' : elevation.toUpperCase()}
              </h3>
              <Box elevation={elevation} padding="lg" className="mb-4 bg-white">
                <p className="text-sm">Elevation: {elevation}</p>
              </Box>
              <pre className="showcase-code text-xs">
{`<Box elevation="${elevation}">
  Content
</Box>`}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Variants</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {(['default', 'secondary', 'tertiary', 'inverse', 'transparent'] as const).map((variant) => (
            <div key={variant} className="showcase-item">
              <h3 className="font-semibold mb-2 capitalize">{variant}</h3>
              <Box variant={variant} elevation="sm" padding="lg" className="mb-4">
                <p className="text-sm">
                  {variant === 'inverse' ? '✨ Light text on dark background' : `${variant} variant styling`}
                </p>
              </Box>
              <pre className="showcase-code text-xs">
{`<Box variant="${variant}">
  Content
</Box>`}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Padding Examples */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Padding Options</h2>
        <div className="showcase-grid grid-cols-2 md:grid-cols-4">
          {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((padding) => (
            <div key={padding} className="showcase-item">
              <h3 className="font-semibold mb-2 text-sm">{padding.toUpperCase()}</h3>
              <Box padding={padding} border className="mb-4 bg-blue-50">
                <p className="text-xs">Padding: {padding}</p>
              </Box>
              <pre className="showcase-code text-xs">
{`<Box padding="${padding}">
  Content
</Box>`}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Example */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Interactive Box</h2>
        <div className="showcase-item max-w-md">
          <h3 className="font-semibold mb-2">Clickable Box</h3>
          <Box 
            elevation="sm" 
            padding="lg" 
            className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 bg-white"
            onClick={() => alert('Box clicked!')}
          >
            <h4 className="font-medium mb-2">Click me!</h4>
            <p className="text-sm text-gray-600">
              This box has hover effects and click handling.
            </p>
          </Box>
          <pre className="showcase-code mt-4">
{`<Box 
  elevation="sm" 
  onClick={() => alert('Clicked!')}
  className="cursor-pointer hover:shadow-lg"
>
  <h4>Click me!</h4>
  <p>Interactive content</p>
</Box>`}
          </pre>
        </div>
      </section>

      {/* Polymorphic Example */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Polymorphic Usage</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">As Button</h3>
            <Box 
              as="button" 
              elevation="sm" 
              padding="md"
              className="bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              onClick={() => alert('Button clicked!')}
            >
              I'm actually a button element!
            </Box>
            <pre className="showcase-code mt-4 text-xs">
{`<Box as="button" onClick={...}>
  Button content
</Box>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">As Article</h3>
            <Box 
              as="article" 
              variant="secondary" 
              padding="lg"
              border
            >
              <h4 className="font-medium mb-2">Article Title</h4>
              <p className="text-sm">This renders as an HTML article element with semantic meaning.</p>
            </Box>
            <pre className="showcase-code mt-4 text-xs">
{`<Box as="article" variant="secondary">
  <h4>Article Title</h4>
  <p>Article content</p>
</Box>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Props Reference */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Props Reference</h2>
        <div className="overflow-x-auto">
          <table className="props-table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>variant</code></td>
                <td><code>'default' | 'secondary' | 'tertiary' | 'inverse' | 'transparent'</code></td>
                <td><code>'default'</code></td>
                <td>Visual style variant</td>
              </tr>
              <tr>
                <td><code>elevation</code></td>
                <td><code>'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl'</code></td>
                <td><code>'none'</code></td>
                <td>Shadow depth level</td>
              </tr>
              <tr>
                <td><code>padding</code></td>
                <td><code>'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'</code></td>
                <td><code>'md'</code></td>
                <td>Internal padding amount</td>
              </tr>
              <tr>
                <td><code>radius</code></td>
                <td><code>'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'</code></td>
                <td><code>'base'</code></td>
                <td>Border radius</td>
              </tr>
              <tr>
                <td><code>border</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Whether to show border</td>
              </tr>
              <tr>
                <td><code>as</code></td>
                <td><code>ElementType</code></td>
                <td><code>'div'</code></td>
                <td>HTML element or React component to render</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}