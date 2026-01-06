import React from 'react';
import { Card } from '@davdevs/paper-basic';

export function CardShowcase() {
  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Card Component</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          A versatile container component that provides a paper-like surface with elevation, padding, and interactive states.
        </p>
      </div>

      {/* Basic Examples */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Basic Usage</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Default Card</h3>
            <Card className="mb-4">
              <h3 className="font-semibold mb-2">Card Title</h3>
              <p className="text-gray-600 dark:text-gray-300">This is a default card with medium padding and subtle elevation.</p>
            </Card>
            <pre className="showcase-code">
{`<Card>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Outlined Card</h3>
            <Card variant="outlined" className="mb-4">
              <h3 className="font-semibold mb-2">Outlined Style</h3>
              <p className="text-gray-600 dark:text-gray-300">Card with prominent border and transparent background.</p>
            </Card>
            <pre className="showcase-code">
{`<Card variant="outlined">
  <h3>Outlined Style</h3>
  <p>Card with outline.</p>
</Card>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Interactive Card</h3>
            <Card interactive elevation="md" className="mb-4 cursor-pointer">
              <h3 className="font-semibold mb-2">Clickable Card</h3>
              <p className="text-gray-600 dark:text-gray-300">This card responds to hover and click interactions.</p>
            </Card>
            <pre className="showcase-code">
{`<Card interactive elevation="md">
  <h3>Clickable Card</h3>
  <p>Interactive card content.</p>
</Card>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Variants</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Filled Card</h3>
            <Card variant="filled" className="mb-4">
              <h3 className="font-semibold mb-2">Filled Background</h3>
              <p className="text-gray-600 dark:text-gray-300">Card with subtle background fill and no border.</p>
            </Card>
            <pre className="showcase-code">
{`<Card variant="filled">
  <h3>Filled Background</h3>
  <p>Subtle background card.</p>
</Card>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Ghost Card</h3>
            <Card variant="ghost" className="mb-4">
              <h3 className="font-semibold mb-2">Minimal Style</h3>
              <p className="text-gray-600 dark:text-gray-300">Transparent card with no border or shadow.</p>
            </Card>
            <pre className="showcase-code">
{`<Card variant="ghost">
  <h3>Minimal Style</h3>
  <p>Ghost card content.</p>
</Card>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Elevation Levels */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Elevation Levels</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Small Shadow</h3>
            <Card elevation="sm" className="mb-4">
              <p>Small elevation for subtle depth.</p>
            </Card>
            <pre className="showcase-code">
{`<Card elevation="sm">
  <p>Small shadow</p>
</Card>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Medium Shadow</h3>
            <Card elevation="md" className="mb-4">
              <p>Medium elevation for more prominence.</p>
            </Card>
            <pre className="showcase-code">
{`<Card elevation="md">
  <p>Medium shadow</p>
</Card>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Large Shadow</h3>
            <Card elevation="lg" className="mb-4">
              <p>Large elevation for maximum depth.</p>
            </Card>
            <pre className="showcase-code">
{`<Card elevation="lg">
  <p>Large shadow</p>
</Card>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Padding Options */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Padding Options</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Small Padding</h3>
            <Card padding="sm" className="mb-4">
              <p>Compact card with small padding.</p>
            </Card>
            <pre className="showcase-code">
{`<Card padding="sm">
  <p>Small padding</p>
</Card>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Large Padding</h3>
            <Card padding="lg" className="mb-4">
              <p>Spacious card with large padding.</p>
            </Card>
            <pre className="showcase-code">
{`<Card padding="lg">
  <p>Large padding</p>
</Card>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">No Padding</h3>
            <Card padding="none" className="mb-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded">
                <p>Custom inner padding with none padding card.</p>
              </div>
            </Card>
            <pre className="showcase-code">
{`<Card padding="none">
  <div className="p-4">
    <p>Custom padding</p>
  </div>
</Card>`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}