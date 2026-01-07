
import {
  Heading,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
} from '@davdevs/paper-foundations';

export function HeadingShowcase() {
  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Headings</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Semantic headings with paper-appropriate typography, supporting multiple sizes, weights, and styling options.
        </p>
      </div>

      {/* Semantic Headings */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Semantic Headings</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Default Headings</h3>
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
            <h3 className="font-semibold mb-4">Generic Heading Component</h3>
            <div className="space-y-4 mb-4">
              <Heading level={1}>Level 1 via prop</Heading>
              <Heading level={2}>Level 2 via prop</Heading>
              <Heading level={3}>Level 3 via prop</Heading>
              <Heading level={4}>Level 4 via prop</Heading>
            </div>
            <pre className="showcase-code">
{`<Heading level={1}>Level 1 via prop</Heading>
<Heading level={2}>Level 2 via prop</Heading>
<Heading level={3}>Level 3 via prop</Heading>
<Heading level={4}>Level 4 via prop</Heading>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Custom Sizes */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Custom Sizes</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Size Overrides</h3>
            <div className="space-y-4 mb-4">
              <H1 size="9xl">Display Huge</H1>
              <H2 size="6xl">Display Large</H2>
              <H3 size="4xl">Display Medium</H3>
              <H4 size="2xl">Display Small</H4>
              <H5 size="base">Base Size</H5>
              <H6 size="sm">Small Size</H6>
            </div>
            <pre className="showcase-code">
{`<H1 size="9xl">Display Huge</H1>
<H2 size="6xl">Display Large</H2>
<H3 size="4xl">Display Medium</H3>
<H4 size="2xl">Display Small</H4>
<H5 size="base">Base Size</H5>
<H6 size="sm">Small Size</H6>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Display Headings</h3>
            <div className="space-y-4 mb-4">
              <H1 display size="8xl">Hero Title</H1>
              <H2 display size="6xl">Section Hero</H2>
              <H3 display size="4xl">Display H3</H3>
            </div>
            <pre className="showcase-code">
{`<H1 display size="8xl">Hero Title</H1>
<H2 display size="6xl">Section Hero</H2>
<H3 display size="4xl">Display H3</H3>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Font Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Font Variants</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Font Families</h3>
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

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Font Weights</h3>
            <div className="space-y-4 mb-4">
              <H2 weight="light">Light Weight</H2>
              <H2 weight="regular">Regular Weight</H2>
              <H2 weight="medium">Medium Weight</H2>
              <H2 weight="semibold">Semibold Weight</H2>
              <H2 weight="bold">Bold Weight (Default)</H2>
              <H2 weight="black">Black Weight</H2>
            </div>
            <pre className="showcase-code">
{`<H2 weight="light">Light Weight</H2>
<H2 weight="regular">Regular Weight</H2>
<H2 weight="medium">Medium Weight</H2>
<H2 weight="semibold">Semibold Weight</H2>
<H2 weight="bold">Bold Weight</H2>
<H2 weight="black">Black Weight</H2>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Color and Alignment */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Colors & Alignment</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Color Variants</h3>
            <div className="space-y-4 mb-4">
              <H2 color="primary">Primary Color</H2>
              <H2 color="secondary">Secondary Color</H2>
              <H2 color="muted">Muted Color</H2>
              <H2 color="subtle">Subtle Color</H2>
            </div>
            <pre className="showcase-code">
{`<H2 color="primary">Primary Color</H2>
<H2 color="secondary">Secondary Color</H2>
<H2 color="muted">Muted Color</H2>
<H2 color="subtle">Subtle Color</H2>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Text Alignment</h3>
            <div className="space-y-4 mb-4">
              <H3 align="left">Left Aligned (Default)</H3>
              <H3 align="center">Center Aligned</H3>
              <H3 align="right">Right Aligned</H3>
            </div>
            <pre className="showcase-code">
{`<H3 align="left">Left Aligned</H3>
<H3 align="center">Center Aligned</H3>
<H3 align="right">Right Aligned</H3>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Text Utilities */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Text Utilities</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Text Balance</h3>
            <div className="space-y-4 mb-4">
              <div className="w-80">
                <H2 balance>This is a balanced heading that wraps more evenly across multiple lines</H2>
                <H3 className="mt-4">This heading without balance wraps normally without text balancing</H3>
              </div>
            </div>
            <pre className="showcase-code">
{`<H2 balance>
  Balanced heading text
</H2>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Truncation & Clamping</h3>
            <div className="space-y-4 mb-4">
              <div className="w-64">
                <H3 truncate>This heading will be truncated with ellipsis</H3>
              </div>
              <div className="w-48 mt-4">
                <H3 clamp={2}>This heading will be clamped to exactly 2 lines and any overflow content will be hidden</H3>
              </div>
            </div>
            <pre className="showcase-code">
{`<H3 truncate>Truncated heading</H3>
<H3 clamp={2}>Clamped heading</H3>`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}