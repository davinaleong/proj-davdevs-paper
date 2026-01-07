
import { Prose } from '@davdevs/paper-basic';

export function ProseShowcase() {
  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Prose</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          Typography component for styling markdown and MDX content with a paper-inspired aesthetic.
        </p>
      </div>

      {/* Size Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Size Variants</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Small</h3>
            <div className="border border-gray-200 rounded-lg p-6 dark:border-gray-700">
              <Prose size="sm">
                <h2>Small Prose Example</h2>
                <p>This demonstrates the small size variant with <strong>bold text</strong> and <em>italic text</em>.</p>
                <ul>
                  <li>Compact spacing</li>
                  <li>Smaller font size</li>
                  <li>Perfect for <code>sidebars</code> or notes</li>
                </ul>
              </Prose>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Base (Default)</h3>
            <div className="border border-gray-200 rounded-lg p-6 dark:border-gray-700">
              <Prose size="base">
                <h2>Base Prose Example</h2>
                <p>This is the default size with optimal reading comfort for <strong>most content</strong>.</p>
                <blockquote>
                  Perfect balance between readability and space efficiency.
                </blockquote>
              </Prose>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Large</h3>
            <div className="border border-gray-200 rounded-lg p-6 dark:border-gray-700">
              <Prose size="lg">
                <h2>Large Prose Example</h2>
                <p>Larger text for <strong>better readability</strong> and <em>premium feel</em>.</p>
                <p>Great for blog posts and long-form content.</p>
              </Prose>
            </div>
          </div>
        </div>
      </section>

      {/* Width Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Width Control</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Narrow (Default)</h3>
            <div className="border border-gray-200 rounded-lg p-6 dark:border-gray-700">
              <Prose narrow={true}>
                <p>Narrow width provides optimal line length for comfortable reading, following typographic best practices. This is the default behavior.</p>
              </Prose>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Full Width</h3>
            <div className="border border-gray-200 rounded-lg p-6 dark:border-gray-700">
              <Prose narrow={false}>
                <p>Full width allows the content to expand to fill available space. This can be useful for dashboards or when you want to maximize content density, though it may impact readability on very wide screens.</p>
              </Prose>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Example */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Complete Example</h2>
        <div className="border border-gray-200 rounded-lg p-8 dark:border-gray-700">
          <Prose>
            <h1>Typography Showcase</h1>
            <p>This is a demonstration of the Paper Design System's Prose component, which provides beautiful styling for markdown and MDX content.</p>
            
            <h2>Getting Started</h2>
            <p>The <strong>Prose</strong> component wraps your content and applies consistent typography styles that feel like writing on quality paper. It supports all standard markdown elements:</p>
            
            <h3>Text Formatting</h3>
            <p>You can use <em>italic text</em> for emphasis, <strong>bold text</strong> for strong emphasis, and <code>inline code</code> for technical terms. You can also combine them like <strong><em>bold and italic</em></strong>.</p>
            
            <h3>Code Blocks</h3>
            <p>Here's a multi-line code example:</p>
            <pre><code>{`function greetUser(name) {
  return \`Hello, \${name}! Welcome to Paper Design System.\`;
}

const message = greetUser('Developer');
console.log(message);`}</code></pre>
            
            <h3>Lists</h3>
            <h4>Unordered Lists</h4>
            <ul>
              <li>First item with regular content</li>
              <li>Second item with <strong>bold text</strong></li>
              <li>Third item with a <a href="https://example.com">link</a></li>
              <li>Fourth item with <code>inline code</code></li>
            </ul>
            
            <h4>Ordered Lists</h4>
            <ol>
              <li><strong>Setup</strong>: Install the Paper Design System</li>
              <li><strong>Import</strong>: Add the Prose component to your project</li>
              <li><strong>Use</strong>: Wrap your markdown content</li>
              <li><strong>Enjoy</strong>: Beautiful typography out of the box</li>
            </ol>
            
            <h4>Nested Lists</h4>
            <ul>
              <li>Parent item one
                <ul>
                  <li>Child item A</li>
                  <li>Child item B
                    <ol>
                      <li>Grandchild item 1</li>
                      <li>Grandchild item 2</li>
                    </ol>
                  </li>
                </ul>
              </li>
              <li>Parent item two
                <ul>
                  <li>Another child item</li>
                </ul>
              </li>
            </ul>
            
            <h3>Blockquotes</h3>
            <blockquote>
              <p>"Design is not just what it looks like and feels like. Design is how it works."</p>
              <p>This blockquote demonstrates how Paper Design System handles quoted content with proper styling and emphasis.</p>
            </blockquote>
            
            <h3>Links and References</h3>
            <p>Visit our <a href="https://paper.davdevs.com">documentation</a> to learn more about the Paper Design System. You can also check out our <a href="https://github.com/davdevs/paper">GitHub repository</a> for the source code.</p>
            
            <h3>Horizontal Rules</h3>
            <hr />
            
            <h2>Advanced Features</h2>
            <p className="lead">This is a lead paragraph that stands out from regular body text. It's perfect for introductions or highlighting key points in your content.</p>
            <p>Regular paragraphs follow with consistent spacing and line height that's optimized for reading comfort.</p>
            
            <h3>Mixed Content</h3>
            <p>The Prose component handles mixed content beautifully:</p>
            <ol>
              <li>Start with a <strong>numbered list</strong></li>
              <li>Include some <code>inline code</code> examples</li>
              <li>Add emphasis with <em>italics</em></li>
              <li>Reference external resources with <a href="https://example.com">links</a></li>
            </ol>
            
            <blockquote>
              <p>And wrap it all up with a thoughtful blockquote that summarizes the key points.</p>
            </blockquote>
            
            <p>This demonstrates how different markdown elements work together harmoniously within the Paper Design System's typography framework.</p>
          </Prose>
        </div>
      </section>

      {/* Table Example */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Table Styling</h2>
        <div className="border border-gray-200 rounded-lg p-6 dark:border-gray-700">
          <Prose>
            <table>
              <thead>
                <tr>
                  <th>Element</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>h1-h6</code></td>
                  <td>Headings with proper hierarchy</td>
                  <td>✅ Complete</td>
                </tr>
                <tr>
                  <td><code>p</code></td>
                  <td>Paragraphs with optimal line height</td>
                  <td>✅ Complete</td>
                </tr>
                <tr>
                  <td><code>ul, ol, li</code></td>
                  <td>Lists with paper-inspired bullets</td>
                  <td>✅ Complete</td>
                </tr>
                <tr>
                  <td><code>blockquote</code></td>
                  <td>Quoted content with background</td>
                  <td>✅ Complete</td>
                </tr>
                <tr>
                  <td><code>code, pre</code></td>
                  <td>Inline and block code styling</td>
                  <td>✅ Complete</td>
                </tr>
                <tr>
                  <td><code>table</code></td>
                  <td>Structured data presentation</td>
                  <td>✅ Complete</td>
                </tr>
              </tbody>
            </table>
          </Prose>
        </div>
      </section>

      {/* Usage Code */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Usage</h2>
        <pre className="showcase-code">
{`import { Prose } from '@davdevs/paper-basic';

// Basic usage
<Prose>
  <h1>Your Markdown Content</h1>
  <p>The Prose component automatically styles all child elements.</p>
</Prose>

// With size variant
<Prose size="lg">
  {/* Your markdown content */}
</Prose>

// Full width
<Prose narrow={false}>
  {/* Content that needs more space */}
</Prose>

// With custom className
<Prose className="my-custom-styles">
  {/* Your content */}
</Prose>`}
        </pre>
      </section>

      {/* Props Documentation */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="py-2 pr-4 font-medium">Prop</th>
                <th className="py-2 pr-4 font-medium">Type</th>
                <th className="py-2 pr-4 font-medium">Default</th>
                <th className="py-2 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-2 pr-4"><code>size</code></td>
                <td className="py-2 pr-4 text-gray-600 dark:text-gray-400">'sm' | 'base' | 'lg' | 'xl'</td>
                <td className="py-2 pr-4">'base'</td>
                <td className="py-2">Typography size variant</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-2 pr-4"><code>narrow</code></td>
                <td className="py-2 pr-4 text-gray-600 dark:text-gray-400">boolean</td>
                <td className="py-2 pr-4">true</td>
                <td className="py-2">Whether to limit width for optimal readability</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <td className="py-2 pr-4"><code>className</code></td>
                <td className="py-2 pr-4 text-gray-600 dark:text-gray-400">string</td>
                <td className="py-2 pr-4">-</td>
                <td className="py-2">Additional CSS classes</td>
              </tr>
              <tr>
                <td className="py-2 pr-4"><code>children</code></td>
                <td className="py-2 pr-4 text-gray-600 dark:text-gray-400">ReactNode</td>
                <td className="py-2 pr-4">-</td>
                <td className="py-2">The content to be styled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}