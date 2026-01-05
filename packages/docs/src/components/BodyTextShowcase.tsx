import React from 'react';
import {
  Text,
  Lead,
  Small,
  Caption,
  Overline,
  Code
} from '@davdevs/paper-foundations';

export function BodyTextShowcase() {
  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Body Text</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Flexible text components for body content, supporting various sizes, variants, and styling options with paper-inspired typography.
        </p>
      </div>

      {/* Text Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Text Variants</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Specialized Variants</h3>
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
            <h3 className="font-semibold mb-4">Text with Variant Prop</h3>
            <div className="space-y-4 mb-4">
              <Text variant="lead">Lead variant text</Text>
              <Text variant="body">Body variant text (default)</Text>
              <Text variant="small">Small variant text</Text>
              <Text variant="caption">Caption variant text</Text>
              <Text variant="overline">Overline variant text</Text>
            </div>
            <pre className="showcase-code">
{`<Text variant="lead">Lead variant</Text>
<Text variant="body">Body variant</Text>
<Text variant="small">Small variant</Text>
<Text variant="caption">Caption variant</Text>
<Text variant="overline">Overline variant</Text>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Text Sizes */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Text Sizes</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Size Scale</h3>
            <div className="space-y-4 mb-4">
              <Text size="2xl">Extra large text (2xl)</Text>
              <Text size="xl">Large text (xl)</Text>
              <Text size="lg">Large-ish text (lg)</Text>
              <Text size="base">Base text (base) - default</Text>
              <Text size="sm">Small text (sm)</Text>
              <Text size="xs">Extra small text (xs)</Text>
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
            <h3 className="font-semibold mb-4">Responsive Usage</h3>
            <div className="space-y-4 mb-4">
              <Text size="lg">
                This larger text works well for important announcements or introductory content that needs more prominence.
              </Text>
              <Text size="base">
                Standard body text is perfect for paragraphs, articles, and general content reading.
              </Text>
              <Text size="sm">
                Smaller text is useful for secondary information, metadata, or when space is constrained.
              </Text>
            </div>
            <pre className="showcase-code">
{`<Text size="lg">
  Important announcement text
</Text>
<Text size="base">
  Standard paragraph text
</Text>
<Text size="sm">
  Secondary information
</Text>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Color Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Color Variants</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Text Colors</h3>
            <div className="space-y-2 mb-4">
              <Text color="primary">Primary text color - main content</Text>
              <Text color="secondary">Secondary text color - subheadings</Text>
              <Text color="muted">Muted text color - less important info</Text>
              <Text color="subtle">Subtle text color - metadata</Text>
            </div>
            <pre className="showcase-code">
{`<Text color="primary">Primary</Text>
<Text color="secondary">Secondary</Text>
<Text color="muted">Muted</Text>
<Text color="subtle">Subtle</Text>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Contextual Usage</h3>
            <div className="space-y-4 mb-4">
              <div>
                <Text color="primary" weight="semibold">Article Title</Text>
                <Text color="subtle" size="sm">Published 2 hours ago</Text>
              </div>
              <div>
                <Text color="primary">
                  Main article content goes here with primary color for optimal readability.
                </Text>
                <Text color="muted" size="sm">
                  Additional context or footnote information in muted color.
                </Text>
              </div>
            </div>
            <pre className="showcase-code">
{`<Text color="primary" weight="semibold">
  Article Title
</Text>
<Text color="subtle" size="sm">
  Published 2 hours ago
</Text>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Font Properties */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Font Properties</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Font Families</h3>
            <div className="space-y-4 mb-4">
              <Text font="sans">Sans serif text (default) - clean and modern</Text>
              <Text font="serif">Serif text - traditional and elegant</Text>
              <Text font="mono">Monospace text - technical and structured</Text>
            </div>
            <pre className="showcase-code">
{`<Text font="sans">Sans serif text</Text>
<Text font="serif">Serif text</Text>
<Text font="mono">Monospace text</Text>`}
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
<Text weight="regular">Regular</Text>
<Text weight="medium">Medium</Text>
<Text weight="semibold">Semibold</Text>
<Text weight="bold">Bold</Text>
<Text weight="black">Black</Text>`}
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
              <Text align="justify">Justified text that spreads across the full width of the container with equal spacing between words.</Text>
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
                <Text truncate>This is a very long text that will be truncated with an ellipsis when it overflows its container width.</Text>
              </div>
              <div className="w-64 mt-4">
                <Text clamp={2}>This is a longer text that will be clamped to exactly 2 lines using the line-clamp utility. Any additional content beyond these two lines will be hidden with an ellipsis indicator.</Text>
              </div>
            </div>
            <pre className="showcase-code">
{`<Text truncate>
  Long text that gets truncated...
</Text>

<Text clamp={2}>
  Multi-line text clamped to 2 lines...
</Text>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Text Balance</h3>
            <div className="space-y-4 mb-4">
              <div className="w-80">
                <Text balance size="lg">This is balanced text that distributes words more evenly across multiple lines for better visual appearance and readability.</Text>
                <Text size="lg" className="mt-4">This text without balance wraps normally without considering the distribution of words across lines.</Text>
              </div>
            </div>
            <pre className="showcase-code">
{`<Text balance size="lg">
  Balanced text for better line distribution
</Text>`}
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
              <Text>
                The <Code>className</Code> prop accepts any CSS class names.
              </Text>
            </div>
            <pre className="showcase-code">
{`<Text>
  Use the <Code>useState</Code> hook
</Text>

<Text>
  Install with <Code>npm install</Code>
</Text>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Polymorphic Usage */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Polymorphic Components</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Different Elements</h3>
            <div className="space-y-4 mb-4">
              <Text as="p">Text as paragraph (default)</Text>
              <Text as="span">Text as inline span element</Text>
              <Text as="div">Text as div block element</Text>
              <Text as="label">Text as label element</Text>
            </div>
            <pre className="showcase-code">
{`<Text as="p">Paragraph element</Text>
<Text as="span">Span element</Text>
<Text as="div">Div element</Text>
<Text as="label">Label element</Text>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Semantic Usage</h3>
            <div className="space-y-4 mb-4">
              <Text as="time" color="subtle">December 26, 2025</Text>
              <Text as="address" font="mono" size="sm">
                123 Paper Street<br />
                Design City, UI 12345
              </Text>
              <Text as="abbr" title="HyperText Markup Language">HTML</Text>
            </div>
            <pre className="showcase-code">
{`<Text as="time" color="subtle">
  December 26, 2025
</Text>

<Text as="address" font="mono">
  123 Paper Street
</Text>

<Text as="abbr" title="Full Name">
  ABBR
</Text>`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}