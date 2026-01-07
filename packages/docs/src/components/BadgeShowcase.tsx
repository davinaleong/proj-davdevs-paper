import { useState } from 'react';
import { Badge } from '@davdevs/paper-basic';

// Mock icons for demonstration
const StarIcon = () => (
  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export function BadgeShowcase() {
  const [badges, setBadges] = useState([
    { id: 1, text: 'Removable 1', variant: 'primary' },
    { id: 2, text: 'Removable 2', variant: 'success' },
    { id: 3, text: 'Removable 3', variant: 'warning' }
  ]);

  const removeBadge = (id: number) => {
    setBadges(badges.filter(badge => badge.id !== id));
  };

  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Badge Component</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Compact labels for status, categories, counts, and other metadata with paper-inspired design.
        </p>
      </div>

      {/* Basic Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Badge Variants</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Default</h3>
            <Badge className="mb-4">Default</Badge>
            <pre className="showcase-code">
{`<Badge>Default</Badge>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Primary</h3>
            <Badge variant="primary" className="mb-4">Primary</Badge>
            <pre className="showcase-code">
{`<Badge variant="primary">
  Primary
</Badge>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Secondary</h3>
            <Badge variant="secondary" className="mb-4">Secondary</Badge>
            <pre className="showcase-code">
{`<Badge variant="secondary">
  Secondary
</Badge>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Success</h3>
            <Badge variant="success" className="mb-4">Success</Badge>
            <pre className="showcase-code">
{`<Badge variant="success">
  Success
</Badge>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Warning</h3>
            <Badge variant="warning" className="mb-4">Warning</Badge>
            <pre className="showcase-code">
{`<Badge variant="warning">
  Warning
</Badge>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Danger</h3>
            <Badge variant="danger" className="mb-4">Danger</Badge>
            <pre className="showcase-code">
{`<Badge variant="danger">
  Danger
</Badge>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Info</h3>
            <Badge variant="info" className="mb-4">Info</Badge>
            <pre className="showcase-code">
{`<Badge variant="info">Info</Badge>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Badge Sizes</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Small</h3>
            <Badge size="sm" variant="primary" className="mb-4">Small</Badge>
            <pre className="showcase-code">
{`<Badge size="sm">Small</Badge>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Medium (Default)</h3>
            <Badge size="md" variant="primary" className="mb-4">Medium</Badge>
            <pre className="showcase-code">
{`<Badge size="md">Medium</Badge>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Large</h3>
            <Badge size="lg" variant="primary" className="mb-4">Large</Badge>
            <pre className="showcase-code">
{`<Badge size="lg">Large</Badge>`}
            </pre>
          </div>
        </div>
      </section>

      {/* With Icons */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Badges with Icons</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Start Icon</h3>
            <Badge variant="primary" startIcon={<StarIcon />} className="mb-4">Featured</Badge>
            <pre className="showcase-code">
{`<Badge 
  variant="primary"
  startIcon={<StarIcon />}
>
  Featured
</Badge>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">End Icon</h3>
            <Badge variant="success" endIcon={<CheckIcon />} className="mb-4">Verified</Badge>
            <pre className="showcase-code">
{`<Badge 
  variant="success"
  endIcon={<CheckIcon />}
>
  Verified
</Badge>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Dismissible</h3>
            <Badge 
              variant="info" 
              dismissible 
              onDismiss={() => alert('Badge dismissed!')}
              className="mb-4"
            >
              Dismissible
            </Badge>
            <pre className="showcase-code">
{`<Badge 
  dismissible
  onDismiss={() => alert('Dismissed!')}
>
  Dismissible
</Badge>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Shape Variations */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Shape Variations</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Rounded (Default)</h3>
            <Badge variant="primary" className="mb-4">Rounded</Badge>
            <pre className="showcase-code">
{`<Badge variant="primary">
  Rounded
</Badge>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Pill Shape</h3>
            <Badge variant="primary" shape="pill" className="mb-4">Pill Shape</Badge>
            <pre className="showcase-code">
{`<Badge 
  variant="primary"
  shape="pill"
>
  Pill Shape
</Badge>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Style Modifiers */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Style Modifiers</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Subtle Style</h3>
            <div className="flex gap-2 flex-wrap mb-4">
              <Badge variant="primary" subtle>Primary Subtle</Badge>
              <Badge variant="success" subtle>Success Subtle</Badge>
              <Badge variant="warning" subtle>Warning Subtle</Badge>
              <Badge variant="danger" subtle>Danger Subtle</Badge>
            </div>
            <pre className="showcase-code">
{`<Badge variant="primary" subtle>
  Primary Subtle
</Badge>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Outline Style</h3>
            <div className="flex gap-2 flex-wrap mb-4">
              <Badge variant="primary" outline>Primary Outline</Badge>
              <Badge variant="success" outline>Success Outline</Badge>
              <Badge variant="warning" outline>Warning Outline</Badge>
              <Badge variant="danger" outline>Danger Outline</Badge>
            </div>
            <pre className="showcase-code">
{`<Badge variant="primary" outline>
  Primary Outline
</Badge>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Interactive Example */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Interactive Example</h2>
        <div className="showcase-item">
          <h3 className="font-semibold mb-2">Removable Badges</h3>
          <div className="flex gap-2 flex-wrap mb-4">
            {badges.map((badge) => (
              <Badge
                key={badge.id}
                variant={badge.variant as any}
                dismissible
                onDismiss={() => removeBadge(badge.id)}
              >
                {badge.text}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-gray-600 mb-4">Click the × to remove badges</p>
          <pre className="showcase-code">
{`const [badges, setBadges] = useState([
  { id: 1, text: 'Removable 1', variant: 'primary' },
  { id: 2, text: 'Removable 2', variant: 'success' }
]);

<Badge
  dismissible
  onDismiss={() => removeBadge(badge.id)}
>
  {badge.text}
</Badge>`}
          </pre>
        </div>
      </section>
    </div>
  );
}