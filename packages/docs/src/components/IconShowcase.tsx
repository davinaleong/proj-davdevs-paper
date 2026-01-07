
interface IconProps {
  name: keyof typeof icons;
  size?: keyof typeof sizeClasses;
  className?: string;
  [key: string]: any;
}

// Since we didn't fully implement the Icon component yet, let's create a simple placeholder
// that demonstrates how icons would be used in the design system

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5', 
  lg: 'w-6 h-6',
  xl: 'w-8 h-8'
} as const;

// Sample SVG icons for demonstration
const icons = {
  heart: (props: IconProps) => (
    <svg fill="currentColor" viewBox="0 0 20 20" className={`${sizeClasses[props.size || 'md']} ${props.className || ''}`} {...props}>
      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
  ),
  star: (props: IconProps) => (
    <svg fill="currentColor" viewBox="0 0 20 20" className={`${sizeClasses[props.size || 'md']} ${props.className || ''}`} {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  check: (props: IconProps) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className={`${sizeClasses[props.size || 'md']} ${props.className || ''}`} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  x: (props: IconProps) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className={`${sizeClasses[props.size || 'md']} ${props.className || ''}`} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  plus: (props: IconProps) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className={`${sizeClasses[props.size || 'md']} ${props.className || ''}`} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  ),
  home: (props: IconProps) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className={`${sizeClasses[props.size || 'md']} ${props.className || ''}`} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  settings: (props: IconProps) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className={`${sizeClasses[props.size || 'md']} ${props.className || ''}`} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  mail: (props: IconProps) => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className={`${sizeClasses[props.size || 'md']} ${props.className || ''}`} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
} as const;

const Icon = ({ name, size = 'md', className = '', ...props }: IconProps) => {
  const IconComponent = icons[name] || icons.heart;
  return IconComponent({ name, size, className, ...props });
};

export function IconShowcase() {
  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Icon Component</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Paper-friendly iconography with consistent sizing, interactive states, and accessibility features.
        </p>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm">
            <strong>Note:</strong> This is a preview of the Icon component structure. The full implementation would include 
            a comprehensive icon library with SVG optimization, tree-shaking, and custom icon support.
          </p>
        </div>
      </div>

      {/* Icon Sizes */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Icon Sizes</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-4">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Small</h3>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="heart" size="sm" className="text-red-500" />
              <Icon name="star" size="sm" className="text-yellow-500" />
              <Icon name="check" size="sm" className="text-green-500" />
            </div>
            <pre className="showcase-code">
{`<Icon name="heart" size="sm" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Medium (Default)</h3>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="heart" className="text-red-500" />
              <Icon name="star" className="text-yellow-500" />
              <Icon name="check" className="text-green-500" />
            </div>
            <pre className="showcase-code">
{`<Icon name="heart" size="md" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Large</h3>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="heart" size="lg" className="text-red-500" />
              <Icon name="star" size="lg" className="text-yellow-500" />
              <Icon name="check" size="lg" className="text-green-500" />
            </div>
            <pre className="showcase-code">
{`<Icon name="heart" size="lg" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Extra Large</h3>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="heart" size="xl" className="text-red-500" />
              <Icon name="star" size="xl" className="text-yellow-500" />
              <Icon name="check" size="xl" className="text-green-500" />
            </div>
            <pre className="showcase-code">
{`<Icon name="heart" size="xl" />`}
            </pre>
          </div>
        </div>
      </section>

      {/* Common Icons */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Common Icons</h2>
        <div className="showcase-grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
          {[
            { name: 'heart' as const, label: 'Heart', color: 'text-red-500' },
            { name: 'star' as const, label: 'Star', color: 'text-yellow-500' },
            { name: 'check' as const, label: 'Check', color: 'text-green-500' },
            { name: 'x' as const, label: 'Close', color: 'text-gray-600' },
            { name: 'plus' as const, label: 'Plus', color: 'text-blue-500' },
            { name: 'home' as const, label: 'Home', color: 'text-purple-600' },
            { name: 'settings' as const, label: 'Settings', color: 'text-gray-600' },
            { name: 'mail' as const, label: 'Mail', color: 'text-blue-600' }
          ].map((icon) => (
            <div key={icon.name} className="showcase-item text-center">
              <div className="flex justify-center mb-2">
                <Icon name={icon.name} size="lg" className={icon.color} />
              </div>
              <p className="text-sm font-medium">{icon.label}</p>
              <pre className="showcase-code mt-2">
{`<Icon name="${icon.name}" />`}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Color Variations */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Color Variations</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Primary Colors</h3>
            <div className="flex gap-2 mb-4">
              <Icon name="star" className="text-blue-500" />
              <Icon name="star" className="text-indigo-500" />
              <Icon name="star" className="text-purple-500" />
            </div>
            <pre className="showcase-code">
{`<Icon 
  name="star" 
  className="text-blue-500" 
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Status Colors</h3>
            <div className="flex gap-2 mb-4">
              <Icon name="check" className="text-green-500" />
              <Icon name="x" className="text-red-500" />
              <Icon name="plus" className="text-yellow-500" />
            </div>
            <pre className="showcase-code">
{`<Icon 
  name="check" 
  className="text-green-500" 
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Neutral Colors</h3>
            <div className="flex gap-2 mb-4">
              <Icon name="settings" className="text-gray-400" />
              <Icon name="settings" className="text-gray-600" />
              <Icon name="settings" className="text-gray-800" />
            </div>
            <pre className="showcase-code">
{`<Icon 
  name="settings" 
  className="text-gray-600" 
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Background Colors</h3>
            <div className="flex gap-2 mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Icon name="home" className="text-blue-600 dark:text-blue-400" />
              </div>
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <Icon name="check" className="text-green-600 dark:text-green-400" />
              </div>
              <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg">
                <Icon name="heart" className="text-red-600 dark:text-red-400" />
              </div>
            </div>
            <pre className="showcase-code">
{`<div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
  <Icon name="home" className="text-blue-600 dark:text-blue-400" />
</div>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Interactive States */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Interactive States</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Hover Effects</h3>
            <div className="flex gap-2 mb-4">
              <Icon name="heart" className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer" size="lg" />
              <Icon name="star" className="text-gray-400 hover:text-yellow-500 transition-colors cursor-pointer" size="lg" />
              <Icon name="settings" className="text-gray-400 hover:text-blue-500 transition-colors cursor-pointer" size="lg" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Hover over the icons above</p>
            <pre className="showcase-code">
{`<Icon 
  name="heart" 
  className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer" 
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Button Icons</h3>
            <div className="flex gap-2 mb-4">
              <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Icon name="plus" className="text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                <Icon name="check" className="text-blue-600 dark:text-blue-400" />
              </button>
              <button className="p-2 rounded-lg bg-red-100 dark:bg-red-900 hover:bg-red-200 dark:hover:bg-red-800 transition-colors">
                <Icon name="x" className="text-red-600 dark:text-red-400" />
              </button>
            </div>
            <pre className="showcase-code">
{`<button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
  <Icon name="plus" className="text-gray-600 dark:text-gray-400" />
</button>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Animated Icons</h3>
            <div className="flex gap-2 mb-4">
              <Icon name="settings" className="text-gray-600 animate-spin" size="lg" />
              <Icon name="heart" className="text-red-500 animate-pulse" size="lg" />
              <Icon name="star" className="text-yellow-500 animate-bounce" size="lg" />
            </div>
            <pre className="showcase-code">
{`<Icon 
  name="settings" 
  className="text-gray-600 animate-spin" 
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Usage in Components */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Usage in Components</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">With Buttons</h3>
            <div className="flex gap-2 mb-4">
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                <Icon name="plus" size="sm" />
                Add Item
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                <Icon name="check" size="sm" />
                Save
              </button>
            </div>
            <pre className="showcase-code">
{`<button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
  <Icon name="plus" size="sm" />
  Add Item
</button>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">In Lists</h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <Icon name="home" className="text-gray-500 dark:text-gray-400" size="sm" />
                <span>Home</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <Icon name="settings" className="text-gray-500 dark:text-gray-400" size="sm" />
                <span>Settings</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <Icon name="mail" className="text-gray-500 dark:text-gray-400" size="sm" />
                <span>Messages</span>
              </div>
            </div>
            <pre className="showcase-code">
{`<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
  <Icon name="home" className="text-gray-500 dark:text-gray-400" size="sm" />
  <span>Home</span>
</div>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Accessibility</h2>
        <div className="showcase-item">
          <h3 className="font-semibold mb-2">Screen Reader Support</h3>
          <div className="flex gap-4 mb-4">
            <Icon name="check" className="text-green-500" aria-label="Success" role="img" />
            <Icon name="x" className="text-red-500" aria-label="Error" role="img" />
            <Icon name="star" className="text-yellow-500" aria-hidden="true" />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Use <code>aria-label</code> for meaningful icons and <code>aria-hidden="true"</code> for decorative ones.
          </p>
          <pre className="showcase-code">
{`// Meaningful icon
<Icon 
  name="check" 
  className="text-green-500" 
  aria-label="Success" 
  role="img" 
/>

// Decorative icon
<Icon 
  name="star" 
  className="text-yellow-500" 
  aria-hidden="true" 
/>`}
          </pre>
        </div>
      </section>
    </div>
  );
}