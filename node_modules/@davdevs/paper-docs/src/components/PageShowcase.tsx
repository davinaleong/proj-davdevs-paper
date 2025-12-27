import React from 'react';
import { Page, Text } from '@davdevs/paper-foundations';

export function PageShowcase() {
  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Page</h1>
        <p className="text-gray-600 mb-8">
          Full-page paper background container with variants, padding control, and responsive design capabilities.
        </p>
      </div>

      {/* Page Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Page Variants</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Background Variants</h3>
            <div className="space-y-4 mb-4">
              <div className="h-32 border rounded overflow-hidden">
                <Page variant="default" className="h-full">
                  <Text size="sm">Default page background</Text>
                </Page>
              </div>
              <div className="h-32 border rounded overflow-hidden">
                <Page variant="paper" className="h-full">
                  <Text size="sm">Paper texture background</Text>
                </Page>
              </div>
              <div className="h-32 border rounded overflow-hidden">
                <Page variant="minimal" className="h-full">
                  <Text size="sm">Minimal clean background</Text>
                </Page>
              </div>
            </div>
            <pre className="showcase-code">
{`<Page variant="default">
  Content here
</Page>

<Page variant="paper">
  Paper texture
</Page>

<Page variant="minimal">
  Clean minimal
</Page>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Padding & Centering</h3>
            <div className="space-y-4 mb-4">
              <div className="h-24 border rounded overflow-hidden">
                <Page padding="lg" className="h-full">
                  <Text size="sm">Large padding</Text>
                </Page>
              </div>
              <div className="h-24 border rounded overflow-hidden">
                <Page maxWidth="md" centered className="h-full">
                  <Text size="sm">Max width with centering</Text>
                </Page>
              </div>
              <div className="h-24 border rounded overflow-hidden">
                <Page padding="xl" maxWidth="lg" centered className="h-full">
                  <Text size="sm">Combined: padding + max-width + centered</Text>
                </Page>
              </div>
            </div>
            <pre className="showcase-code">
{`<Page padding="lg">
  Padded content
</Page>

<Page maxWidth="md" centered>
  Centered content
</Page>

<Page padding="xl" maxWidth="lg" centered>
  Combined options
</Page>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Full Height Pages */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Full Height Pages</h2>
        <div className="showcase-item">
          <h3 className="font-semibold mb-4">Full Viewport Height</h3>
          <div className="border rounded-lg overflow-hidden mb-6 h-64">
            <Page variant="paper" fullHeight padding="lg" className="flex items-center justify-center">
              <div className="text-center">
                <Text size="lg" className="font-semibold">Full Height Page</Text>
                <Text size="sm" className="text-gray-600 mt-2">
                  Perfect for landing pages and hero sections
                </Text>
              </div>
            </Page>
          </div>
          
          <pre className="showcase-code">
{`<Page variant="paper" fullHeight padding="lg">
  <div className="flex items-center justify-center h-full">
    <div className="text-center">
      <Text size="lg">Full Height Page</Text>
      <Text size="sm">Perfect for landing pages</Text>
    </div>
  </div>
</Page>`}
          </pre>
        </div>
      </section>

      {/* Page Usage Examples */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Usage Examples</h2>
        <div className="showcase-item">
          <h3 className="font-semibold mb-4">Typical Page Structure</h3>
          <div className="border rounded-lg overflow-hidden mb-6 h-48">
            <Page variant="paper" padding="lg">
              <div className="space-y-4">
                <div className="text-center py-8 border-b border-gray-200">
                  <Text size="xl" className="font-bold">Welcome</Text>
                  <Text size="md" className="text-gray-600 mt-2">
                    This is a typical page layout with paper background
                  </Text>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded border">
                    <Text size="sm" className="font-semibold">Feature 1</Text>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <Text size="sm" className="font-semibold">Feature 2</Text>
                  </div>
                  <div className="bg-white p-4 rounded border">
                    <Text size="sm" className="font-semibold">Feature 3</Text>
                  </div>
                </div>
              </div>
            </Page>
          </div>
          
          <pre className="showcase-code">
{`<Page variant="paper" padding="lg">
  <div className="text-center py-8 border-b">
    <Text size="xl">Welcome</Text>
    <Text size="md">Page description</Text>
  </div>
  
  <div className="grid md:grid-cols-3 gap-4">
    <div>Feature 1</div>
    <div>Feature 2</div>
    <div>Feature 3</div>
  </div>
</Page>`}
          </pre>
        </div>
      </section>
    </div>
  );
}