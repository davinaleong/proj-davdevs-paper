
import { Section, H1, H2, H3, Text } from '@davdevs/paper-foundations';

export function SectionShowcase() {
  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Section</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Page section dividers with paper styling for organizing content into semantic sections.
        </p>
      </div>

      {/* Section Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Section Variants</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Default Section</h3>
            <div className="mb-4">
              <Section variant="default" padding="md">
                <H3>Default Section</H3>
                <Text>Transparent background section with padding.</Text>
              </Section>
            </div>
            <pre className="showcase-code">
{`<Section variant="default" padding="md">
  <H3>Default Section</H3>
  <Text>Transparent background section.</Text>
</Section>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Paper Section</h3>
            <div className="mb-4">
              <Section variant="paper" padding="md" radius="md">
                <H3>Paper Section</H3>
                <Text>Paper background with border, rounded corners, and subtle texture.</Text>
              </Section>
            </div>
            <pre className="showcase-code">
{`<Section variant="paper" padding="md" radius="md">
  <H3>Paper Section</H3>
  <Text>Paper background with texture.</Text>
</Section>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Elevated Section</h3>
            <div className="mb-4">
              <Section variant="elevated" padding="md" radius="md">
                <H3>Elevated Section</H3>
                <Text>Elevated section with enhanced shadow, border, and depth.</Text>
              </Section>
            </div>
            <pre className="showcase-code">
{`<Section variant="elevated" padding="md" radius="md">
  <H3>Elevated Section</H3>
  <Text>Elevated with shadow and depth.</Text>
</Section>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Bordered Section</h3>
            <div className="mb-4">
              <Section variant="bordered" padding="md" radius="sm">
                <H3>Bordered Section</H3>
                <Text>Simple border without background changes.</Text>
              </Section>
            </div>
            <pre className="showcase-code">
{`<Section variant="bordered" padding="md" radius="sm">
  <H3>Bordered Section</H3>
  <Text>Simple border styling.</Text>
</Section>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Section Padding */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Padding Variants</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Padding Sizes</h3>
            <div className="space-y-3 mb-4">
              <Section variant="paper" padding="sm" radius="sm">
                <Text size="sm">Small padding (sm)</Text>
              </Section>
              <Section variant="paper" padding="md" radius="sm">
                <Text size="sm">Medium padding (md)</Text>
              </Section>
              <Section variant="paper" padding="lg" radius="sm">
                <Text size="sm">Large padding (lg)</Text>
              </Section>
              <Section variant="paper" padding="xl" radius="sm">
                <Text size="sm">Extra large padding (xl)</Text>
              </Section>
            </div>
            <pre className="showcase-code">
{`<Section variant="paper" padding="sm">
  Small padding
</Section>

<Section variant="paper" padding="md">
  Medium padding  
</Section>

<Section variant="paper" padding="lg">
  Large padding
</Section>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">With Dividers</h3>
            <div className="mb-4">
              <Section padding="md" divider>
                <H3>First Section</H3>
                <Text>Content in the first section with a divider below.</Text>
              </Section>
              
              <Section padding="md" divider>
                <H3>Second Section</H3>
                <Text>Another section with consistent spacing.</Text>
              </Section>
              
              <Section padding="md">
                <H3>Final Section</H3>
                <Text>Last section without divider.</Text>
              </Section>
            </div>
            <pre className="showcase-code">
{`<Section padding="md" divider>
  <H3>First Section</H3>
  <Text>Content with divider below.</Text>
</Section>

<Section padding="md" divider>
  <H3>Second Section</H3>
  <Text>Another section.</Text>
</Section>

<Section padding="md">
  <H3>Final Section</H3>
  <Text>No divider.</Text>
</Section>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Section Layout Options */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Layout Options</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Max Width & Centering</h3>
            <div className="mb-4">
              <Section variant="elevated" padding="lg" margin="lg" maxWidth="md" centered radius="lg">
                <H3>Centered Section</H3>
                <Text>This section has a maximum width and is centered on the page.</Text>
              </Section>
            </div>
            <pre className="showcase-code">
{`<Section 
  variant="elevated" 
  padding="lg" 
  maxWidth="md" 
  centered
  radius="lg"
>
  <H3>Centered Section</H3>
  <Text>Centered with max width.</Text>
</Section>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Custom Margins</h3>
            <div className="space-y-1 mb-4">
              <Section variant="paper" padding="md" margin="sm" radius="sm">
                <Text size="sm">Small margin (sm)</Text>
              </Section>
              <Section variant="paper" padding="md" margin="md" radius="sm">
                <Text size="sm">Medium margin (md)</Text>
              </Section>
              <Section variant="paper" padding="md" margin="lg" radius="sm">
                <Text size="sm">Large margin (lg)</Text>
              </Section>
            </div>
            <pre className="showcase-code">
{`<Section margin="sm" padding="md">
  Small margin
</Section>

<Section margin="md" padding="md">
  Medium margin
</Section>

<Section margin="lg" padding="md">
  Large margin
</Section>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Section in Context */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Usage Examples</h2>
        <div className="showcase-item">
          <h3 className="font-semibold mb-4">Page with Multiple Sections</h3>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden mb-6">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 space-y-0">
              <Section variant="elevated" padding="xl" radius="lg" margin="lg" maxWidth="4xl" centered>
                <H1>Page Title</H1>
                <Text className="mt-4">
                  This demonstrates how sections work together to create structured page layouts.
                </Text>
              </Section>
              
              <Section padding="lg" margin="md" maxWidth="5xl" centered divider>
                <H2>Content Section</H2>
                <Text>Regular content section with divider for separation.</Text>
              </Section>
              
              <Section variant="paper" padding="lg" margin="md" maxWidth="5xl" centered radius="md">
                <H2>Featured Content</H2>
                <Text>Important content highlighted with paper background.</Text>
              </Section>
            </div>
          </div>
          
          <pre className="showcase-code">
{`<Section variant="elevated" padding="xl" maxWidth="4xl" centered>
  <H1>Page Title</H1>
  <Text>Hero section content</Text>
</Section>

<Section padding="lg" maxWidth="5xl" centered divider>
  <H2>Content Section</H2>
  <Text>Regular content</Text>
</Section>

<Section variant="paper" padding="lg" maxWidth="5xl" centered>
  <H2>Featured Content</H2>
  <Text>Highlighted content</Text>
</Section>`}
          </pre>
        </div>
      </section>
    </div>
  );
}