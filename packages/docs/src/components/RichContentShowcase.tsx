import React from 'react';
import {
  List,
  Blockquote,
  H1,
  H2,
  H3,
  Text,
  Lead,
  Small,
  Code,
  Overline
} from '@davdevs/paper-foundations';

export function RichContentShowcase() {
  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Rich Content</h1>
        <p className="text-gray-600 mb-8">
          Rich content components including lists, blockquotes, and examples of typography working together in context.
        </p>
      </div>

      {/* Lists */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Lists</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Basic Lists</h3>
            <div className="space-y-6 mb-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Unordered List</h4>
                <List>
                  <li>First item in the list</li>
                  <li>Second item with more content</li>
                  <li>Third item to complete the set</li>
                </List>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Ordered List</h4>
                <List type="ordered">
                  <li>First step in the process</li>
                  <li>Second step to follow</li>
                  <li>Final step to complete</li>
                </List>
              </div>
            </div>
            <pre className="showcase-code">
{`<List>
  <li>Unordered item</li>
</List>

<List type="ordered">
  <li>Ordered item</li>
</List>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">List Variants</h3>
            <div className="space-y-6 mb-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Paper Variant</h4>
                <List variant="paper">
                  <li>Custom bullet styling</li>
                  <li>Paper-inspired design</li>
                  <li>Primary color bullets</li>
                </List>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Minimal Variant</h4>
                <List variant="minimal">
                  <li>Clean, minimal styling</li>
                  <li>No default bullets</li>
                  <li>Simple presentation</li>
                </List>
              </div>
            </div>
            <pre className="showcase-code">
{`<List variant="paper">
  <li>Paper styled item</li>
</List>

<List variant="minimal">
  <li>Minimal styled item</li>
</List>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">List Spacing</h3>
            <div className="space-y-6 mb-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Compact (xs spacing)</h4>
                <List spacing="xs">
                  <li>Tightly spaced item</li>
                  <li>Another close item</li>
                  <li>Final compact item</li>
                </List>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Comfortable (lg spacing)</h4>
                <List spacing="lg">
                  <li>Generously spaced item</li>
                  <li>Another well-spaced item</li>
                  <li>Final comfortable item</li>
                </List>
              </div>
            </div>
            <pre className="showcase-code">
{`<List spacing="xs">
  <li>Compact spacing</li>
</List>

<List spacing="lg">
  <li>Large spacing</li>
</List>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Nested Lists</h3>
            <div className="space-y-6 mb-4">
              <List>
                <li>
                  Top level item
                  <List type="ordered" className="mt-2">
                    <li>Nested ordered item</li>
                    <li>Another nested item</li>
                  </List>
                </li>
                <li>
                  Another top level item
                  <List variant="paper" className="mt-2">
                    <li>Nested paper variant</li>
                    <li>Paper bullet style</li>
                  </List>
                </li>
              </List>
            </div>
            <pre className="showcase-code">
{`<List>
  <li>
    Top level item
    <List type="ordered">
      <li>Nested item</li>
    </List>
  </li>
</List>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Blockquotes */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Blockquotes</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Basic Blockquotes</h3>
            <div className="space-y-6 mb-4">
              <Blockquote>
                The best design is as little design as possible. It focuses on the essential aspects and removes the arbitrary.
              </Blockquote>
              <Blockquote author="Dieter Rams">
                Good design is as little design as possible.
              </Blockquote>
            </div>
            <pre className="showcase-code">
{`<Blockquote>
  Simple quote without attribution
</Blockquote>

<Blockquote author="Author Name">
  Quote with author attribution
</Blockquote>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">With Full Citation</h3>
            <div className="space-y-6 mb-4">
              <Blockquote 
                author="Dieter Rams" 
                source="Ten Principles for Good Design"
                cite="https://example.com/principles"
              >
                Good design is innovative, useful, aesthetic, understandable, unobtrusive, honest, long-lasting, thorough, and environmentally conscious.
              </Blockquote>
            </div>
            <pre className="showcase-code">
{`<Blockquote 
  author="Dieter Rams"
  source="Ten Principles"
  cite="https://example.com"
>
  Quote text here
</Blockquote>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Blockquote Sizes</h3>
            <div className="space-y-6 mb-4">
              <Blockquote size="sm">
                Small blockquote for compact spaces and brief quotes.
              </Blockquote>
              <Blockquote size="lg" author="Large Quote">
                Large blockquote with more prominent styling for important statements and featured quotes.
              </Blockquote>
            </div>
            <pre className="showcase-code">
{`<Blockquote size="sm">
  Small quote
</Blockquote>

<Blockquote size="lg">
  Large quote
</Blockquote>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Blockquote Variants</h3>
            <div className="space-y-6 mb-4">
              <Blockquote variant="paper">
                Paper variant with background and rounded corners for a more prominent presentation.
              </Blockquote>
              <Blockquote variant="minimal">
                Minimal variant with clean styling and subtle left border.
              </Blockquote>
            </div>
            <pre className="showcase-code">
{`<Blockquote variant="paper">
  Paper styled quote
</Blockquote>

<Blockquote variant="minimal">
  Minimal styled quote
</Blockquote>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Typography in Context */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Typography in Context</h2>
        <div className="showcase-item">
          <h3 className="font-semibold mb-4">Complete Article Example</h3>
          <div className="max-w-4xl mb-6 p-8 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm">
            <H1>The Art of Paper-Inspired Design</H1>
            <Overline className="mt-2">Design Philosophy • 5 min read • December 26, 2025</Overline>
            
            <Lead className="mt-8">
              In an increasingly digital world, there's something profoundly appealing about design that evokes the tactile experience of paper. This approach brings warmth and humanity to our digital interfaces, creating connections that feel both modern and timeless.
            </Lead>
            
            <H2 className="mt-12">The Fundamentals of Paper Design</H2>
            <Text className="mt-4">
              Paper-inspired design isn't just about adding <Code>box-shadow</Code> and subtle textures to your components. It's about creating a comprehensive design philosophy that mirrors our relationship with physical documents and printed materials.
            </Text>
            
            <Text className="mt-6">
              When we interact with paper, we expect certain visual and tactile cues. The weight of the paper, the way light falls across the surface, the subtle imperfections that make it feel authentic—all of these elements can be translated into digital design principles.
            </Text>
            
            <H3 className="mt-10">Key Design Principles</H3>
            <List className="mt-4">
              <li>Embrace whitespace as a fundamental design element, not just empty space</li>
              <li>Use subtle elevation and shadows to create realistic depth and hierarchy</li>
              <li>Choose typography that feels warm, readable, and approachable</li>
              <li>Maintain consistent spacing rhythms that feel natural and balanced</li>
              <li>Incorporate organic imperfections that make designs feel human</li>
            </List>
            
            <H3 className="mt-10">Typography Considerations</H3>
            <Text className="mt-4">
              The choice of typefaces plays a crucial role in paper-inspired design. Traditional serif fonts like Playfair Display can evoke the feeling of classic printed materials, while modern sans-serif fonts like Montserrat provide clean readability for contemporary interfaces.
            </Text>
            
            <Blockquote className="mt-8" author="Dieter Rams" source="Ten Principles for Good Design">
              Good design is as little design as possible. Less, but better—because it concentrates on the essential aspects, and the products are not burdened with inessentials.
            </Blockquote>
            
            <H3 className="mt-10">Implementation Strategy</H3>
            <Text className="mt-4">
              Creating effective paper-inspired design requires attention to several key areas:
            </Text>
            
            <List type="ordered" className="mt-6">
              <li>
                <strong>Color Palette:</strong> Start with warm, off-white backgrounds that mimic paper tones
              </li>
              <li>
                <strong>Shadows and Elevation:</strong> Use realistic shadow patterns that suggest physical depth
              </li>
              <li>
                <strong>Typography Hierarchy:</strong> Establish clear relationships between different text elements
              </li>
              <li>
                <strong>Spacing System:</strong> Develop consistent margins and padding that feel natural
              </li>
            </List>
            
            <H2 className="mt-12">Looking Forward</H2>
            <Text className="mt-4">
              By following these principles, we can create digital experiences that feel both modern and timeless, bridging the gap between the digital and physical worlds. The goal is not to simply mimic paper, but to capture its essential qualities of warmth, readability, and human connection.
            </Text>
            
            <Text className="mt-6">
              As we continue to spend more time in digital spaces, the importance of creating interfaces that feel comfortable and inviting becomes increasingly important. Paper-inspired design offers a path toward more humane digital experiences.
            </Text>
            
            <Small className="mt-12 block" color="muted">
              Published on December 26, 2025 • Last updated today • 5 minute read
            </Small>
          </div>
          
          <pre className="showcase-code">
{`<H1>Article Title</H1>
<Overline>Category • Read time • Date</Overline>

<Lead>Opening paragraph with emphasis...</Lead>

<H2>Section Title</H2>
<Text>Body content...</Text>

<H3>Subsection Title</H3>
<List>
  <li>List item</li>
</List>

<Blockquote author="Author" source="Source">
  Quote content
</Blockquote>

<Small color="muted">
  Article metadata
</Small>`}
          </pre>
        </div>
      </section>

      {/* Content Patterns */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Common Content Patterns</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">FAQ Section</h3>
            <div className="space-y-6 mb-4">
              <div>
                <H3 size="lg">How do I install the typography system?</H3>
                <Text className="mt-2">
                  Install the package using <Code>npm install @davdevs/paper-foundations</Code> and import the components you need.
                </Text>
              </div>
              <div>
                <H3 size="lg">Can I customize the font families?</H3>
                <Text className="mt-2">
                  Yes, you can override the CSS custom properties to use your preferred fonts while maintaining the design system structure.
                </Text>
                <List className="mt-3">
                  <li><Code>--font-sans</Code> for body text</li>
                  <li><Code>--font-serif</Code> for headings</li>
                  <li><Code>--font-mono</Code> for code</li>
                </List>
              </div>
            </div>
            <pre className="showcase-code">
{`<H3 size="lg">Question?</H3>
<Text>Answer content...</Text>
<List>
  <li>Supporting point</li>
</List>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Feature Showcase</h3>
            <div className="space-y-6 mb-4">
              <div className="text-center">
                <H2>Paper-Inspired Typography</H2>
                <Lead className="mt-4">
                  Beautiful, readable text components that bring warmth to digital interfaces
                </Lead>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <H3 size="base">Semantic HTML</H3>
                  <Small className="mt-2 block">
                    Proper heading hierarchy and accessibility
                  </Small>
                </div>
                <div className="text-center">
                  <H3 size="base">Dark Mode Ready</H3>
                  <Small className="mt-2 block">
                    Automatic color adjustments
                  </Small>
                </div>
                <div className="text-center">
                  <H3 size="base">TypeScript Support</H3>
                  <Small className="mt-2 block">
                    Full type safety included
                  </Small>
                </div>
              </div>
            </div>
            <pre className="showcase-code">
{`<H2>Feature Title</H2>
<Lead>Feature description</Lead>

<H3>Feature Item</H3>
<Small>Supporting details</Small>`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}