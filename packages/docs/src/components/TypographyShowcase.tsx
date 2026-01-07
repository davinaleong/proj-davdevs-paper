
import {
  Text,
  List,
  Blockquote,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Lead,
  Small,
  Caption,
  Overline,
  Code
} from '@davdevs/paper-foundations';

export function TypographyShowcase() {
  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Typography System</h1>
        <p className="text-gray-600 mb-8">
          A comprehensive typography system with paper-inspired styling, supporting headings, text, lists, and blockquotes with semantic HTML and accessibility features.
        </p>
      </div>

      {/* Headings */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Headings</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Semantic Headings</h3>
            <div className="space-y-4 mb-4">
              <H1>Heading Level 1</H1>
              <H2>Heading Level 2</H2>
              <H3>Heading Level 3</H3>
              <H4>Heading Level 4</H4>
              <H5>Heading Level 5</H5>
              <H6>Heading Level 6</H6>
            </div>
            <pre className="showcase-code">
{`<H1>Heading Level 1</H1>
<H2>Heading Level 2</H2>
<H3>Heading Level 3</H3>
<H4>Heading Level 4</H4>
<H5>Heading Level 5</H5>
<H6>Heading Level 6</H6>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Custom Sizes</h3>
            <div className="space-y-4 mb-4">
              <H1 size="9xl">Display Huge</H1>
              <H2 size="6xl">Display Large</H2>
              <H3 size="4xl">Display Medium</H3>
              <H4 size="2xl">Display Small</H4>
            </div>
            <pre className="showcase-code">
{`<H1 size="9xl">Display Huge</H1>
<H2 size="6xl">Display Large</H2>
<H3 size="4xl">Display Medium</H3>
<H4 size="2xl">Display Small</H4>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Display Headings</h3>
            <div className="space-y-4 mb-4">
              <H1 display size="7xl">Hero Title</H1>
              <H2 display size="5xl">Section Hero</H2>
            </div>
            <pre className="showcase-code">
{`<H1 display size="7xl">Hero Title</H1>
<H2 display size="5xl">Section Hero</H2>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Font Variants</h3>
            <div className="space-y-4 mb-4">
              <H2 font="serif">Serif Heading (Default)</H2>
              <H2 font="sans">Sans Serif Heading</H2>
              <H2 font="mono">Monospace Heading</H2>
            </div>
            <pre className="showcase-code">
{`<H2 font="serif">Serif Heading</H2>
<H2 font="sans">Sans Serif Heading</H2>
<H2 font="mono">Monospace Heading</H2>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Text Components */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Text Components</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Text Variants</h3>
            <div className="space-y-4 mb-4">
              <Lead>This is lead text for opening paragraphs with emphasis and larger size.</Lead>
              <Text>This is regular body text with comfortable reading line height and spacing.</Text>
              <Small>This is small text for fine print, disclaimers, and secondary information.</Small>
              <Caption>This is caption text for image descriptions and metadata.</Caption>
              <Overline>This is overline text for labels</Overline>
            </div>
            <pre className="showcase-code">
{`<Lead>Opening paragraph text</Lead>
<Text>Regular body text</Text>
<Small>Fine print text</Small>
<Caption>Caption text</Caption>
<Overline>Label text</Overline>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Text Sizes</h3>
            <div className="space-y-4 mb-4">
              <Text size="2xl">Extra large text</Text>
              <Text size="xl">Large text</Text>
              <Text size="lg">Large-ish text</Text>
              <Text size="base">Base text (default)</Text>
              <Text size="sm">Small text</Text>
              <Text size="xs">Extra small text</Text>
            </div>
            <pre className="showcase-code">
{`<Text size="2xl">Extra large</Text>
<Text size="xl">Large text</Text>
<Text size="lg">Large-ish</Text>
<Text size="base">Base text</Text>
<Text size="sm">Small text</Text>
<Text size="xs">Extra small</Text>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Color Variants</h3>
            <div className="space-y-2 mb-4">
              <Text color="primary">Primary text color</Text>
              <Text color="secondary">Secondary text color</Text>
              <Text color="muted">Muted text color</Text>
              <Text color="subtle">Subtle text color</Text>
            </div>
            <pre className="showcase-code">
{`<Text color="primary">Primary</Text>
<Text color="secondary">Secondary</Text>
<Text color="muted">Muted</Text>
<Text color="subtle">Subtle</Text>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Inline Code</h3>
            <div className="space-y-4 mb-4">
              <Text>
                Use the <Code>useState</Code> hook for state management in React components.
              </Text>
              <Text>
                Install packages with <Code>npm install package-name</Code> command.
              </Text>
            </div>
            <pre className="showcase-code">
{`<Text>
  Use the <Code>useState</Code> hook
</Text>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Text Utilities */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Text Utilities</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Text Alignment</h3>
            <div className="space-y-4 mb-4">
              <Text align="left">Left aligned text (default)</Text>
              <Text align="center">Center aligned text</Text>
              <Text align="right">Right aligned text</Text>
              <Text align="justify">Justified text that spreads across the full width of the container with equal spacing.</Text>
            </div>
            <pre className="showcase-code">
{`<Text align="left">Left aligned</Text>
<Text align="center">Center aligned</Text>
<Text align="right">Right aligned</Text>
<Text align="justify">Justified text</Text>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Text Truncation</h3>
            <div className="space-y-4 mb-4">
              <div className="w-48">
                <Text truncate>This is a very long text that will be truncated with an ellipsis when it overflows its container.</Text>
              </div>
              <div className="w-64">
                <Text clamp={2}>This is a longer text that will be clamped to exactly 2 lines using the line-clamp utility. Any additional content will be hidden with an ellipsis.</Text>
              </div>
            </div>
            <pre className="showcase-code">
{`<Text truncate>Long text...</Text>
<Text clamp={2}>Multi-line text...</Text>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Text Balance</h3>
            <div className="space-y-4 mb-4">
              <div className="w-80">
                <H3 balance>This is a balanced heading that wraps more evenly across lines</H3>
                <Text balance>This is balanced text that distributes words more evenly across multiple lines for better visual appearance.</Text>
              </div>
            </div>
            <pre className="showcase-code">
{`<H3 balance>Balanced heading</H3>
<Text balance>Balanced text</Text>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Font Weights</h3>
            <div className="space-y-2 mb-4">
              <Text weight="light">Light weight text</Text>
              <Text weight="regular">Regular weight (default)</Text>
              <Text weight="medium">Medium weight text</Text>
              <Text weight="semibold">Semibold weight text</Text>
              <Text weight="bold">Bold weight text</Text>
              <Text weight="black">Black weight text</Text>
            </div>
            <pre className="showcase-code">
{`<Text weight="light">Light</Text>
<Text weight="medium">Medium</Text>
<Text weight="bold">Bold</Text>`}
            </pre>
          </div>
        </div>
      </section>

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
                Small blockquote for compact spaces.
              </Blockquote>
              <Blockquote size="lg" author="Large Quote">
                Large blockquote with more prominent styling for important statements.
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
          <h3 className="font-semibold mb-4">Article Example</h3>
          <div className="max-w-3xl mb-6 p-6 bg-white rounded-lg border">
            <H1>The Art of Paper-Inspired Design</H1>
            <Overline className="mt-2">Design Philosophy • 5 min read</Overline>
            
            <Lead className="mt-6">
              In an increasingly digital world, there's something profoundly appealing about design that evokes the tactile experience of paper. This approach brings warmth and humanity to our digital interfaces.
            </Lead>
            
            <H2 className="mt-8">The Fundamentals</H2>
            <Text className="mt-4">
              Paper-inspired design isn't just about <Code>box-shadow</Code> and subtle textures. It's about creating a sense of hierarchy, breathing room, and visual comfort that mirrors our relationship with physical documents.
            </Text>
            
            <H3 className="mt-6">Key Principles</H3>
            <List className="mt-4">
              <li>Embrace whitespace as a design element</li>
              <li>Use subtle elevation to create depth</li>
              <li>Choose typography that feels warm and readable</li>
              <li>Maintain consistent spacing rhythms</li>
            </List>
            
            <Blockquote className="mt-6" author="Dieter Rams">
              Good design is as little design as possible.
            </Blockquote>
            
            <Text className="mt-6">
              By following these principles, we can create digital experiences that feel both modern and timeless, bridging the gap between the digital and physical worlds.
            </Text>
            
            <Small className="mt-8 block">
              Published on December 26, 2025 • Last updated today
            </Small>
          </div>
          
          <pre className="showcase-code">
{`<H1>Article Title</H1>
<Overline>Category • Read time</Overline>

<Lead>Opening paragraph...</Lead>

<H2>Section Title</H2>
<Text>Body content...</Text>

<List>
  <li>List item</li>
</List>

<Blockquote author="Author">
  Quote content
</Blockquote>`}
          </pre>
        </div>
      </section>
    </div>
  );
}