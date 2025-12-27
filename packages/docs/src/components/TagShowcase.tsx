import React, { useState } from 'react';

// Mock Tag component for demonstration
const Tag = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  icon,
  removable = false,
  selectable = false,
  selected = false,
  onRemove,
  onSelect,
  className = '', 
  // Destructure non-DOM props
  as,
  ...domProps 
}: any) => {
  const variants = {
    default: selected ? 'bg-gray-200 text-gray-900' : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    primary: selected ? 'bg-blue-200 text-blue-900' : 'bg-blue-100 text-blue-700 hover:bg-blue-200',
    secondary: selected ? 'bg-gray-200 text-gray-900' : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
    category: selected ? 'bg-purple-200 text-purple-900' : 'bg-purple-100 text-purple-700 hover:bg-purple-200',
    keyword: selected ? 'bg-green-200 text-green-900' : 'bg-green-100 text-green-700 hover:bg-green-200'
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const interactiveStyles = selectable ? 'cursor-pointer transition-colors' : '';

  return (
    <span 
      className={`inline-flex items-center font-medium rounded-full ${variants[variant]} ${sizes[size]} ${interactiveStyles} ${className}`}
      onClick={selectable ? onSelect : undefined}
      {...domProps}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {children}
      {removable && (
        <button 
          onClick={onRemove}
          className="ml-1 inline-flex items-center justify-center w-4 h-4 text-current hover:bg-black hover:bg-opacity-10 rounded-full"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </span>
  );
};

// Mock icons for demonstration
const HashIcon = () => (
  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

export function TagShowcase() {
  const [tags, setTags] = useState([
    { id: 1, text: 'React', variant: 'primary' as const },
    { id: 2, text: 'TypeScript', variant: 'secondary' as const },
    { id: 3, text: 'Design System', variant: 'category' as const },
    { id: 4, text: 'Component', variant: 'keyword' as const }
  ]);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const removeTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Tag Component</h1>
        <p className="text-gray-600 mb-8">
          Interactive tags for categorizing content, filtering, and user selection with paper-inspired design.
        </p>
      </div>

      {/* Basic Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Tag Variants</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Default</h3>
            <Tag className="mb-4">Default Tag</Tag>
            <pre className="showcase-code">
{`<Tag>Default Tag</Tag>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Primary</h3>
            <Tag variant="primary" className="mb-4">Primary</Tag>
            <pre className="showcase-code">
{`<Tag variant="primary">
  Primary
</Tag>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Secondary</h3>
            <Tag variant="secondary" className="mb-4">Secondary</Tag>
            <pre className="showcase-code">
{`<Tag variant="secondary">
  Secondary
</Tag>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Category</h3>
            <Tag variant="category" className="mb-4">Category</Tag>
            <pre className="showcase-code">
{`<Tag variant="category">
  Category
</Tag>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Keyword</h3>
            <Tag variant="keyword" className="mb-4">Keyword</Tag>
            <pre className="showcase-code">
{`<Tag variant="keyword">
  Keyword
</Tag>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Tag Sizes</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Small</h3>
            <Tag size="sm" variant="primary" className="mb-4">Small</Tag>
            <pre className="showcase-code">
{`<Tag size="sm">Small</Tag>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Medium (Default)</h3>
            <Tag size="md" variant="primary" className="mb-4">Medium</Tag>
            <pre className="showcase-code">
{`<Tag size="md">Medium</Tag>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Large</h3>
            <Tag size="lg" variant="primary" className="mb-4">Large</Tag>
            <pre className="showcase-code">
{`<Tag size="lg">Large</Tag>`}
            </pre>
          </div>
        </div>
      </section>

      {/* With Icons */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Tags with Icons</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Programming Tags</h3>
            <div className="flex gap-2 flex-wrap mb-4">
              <Tag variant="primary" icon={<CodeIcon />}>React</Tag>
              <Tag variant="primary" icon={<CodeIcon />}>TypeScript</Tag>
              <Tag variant="keyword" icon={<HashIcon />}>Frontend</Tag>
            </div>
            <pre className="showcase-code">
{`<Tag variant="primary" icon={<CodeIcon />}>
  React
</Tag>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Category Tags</h3>
            <div className="flex gap-2 flex-wrap mb-4">
              <Tag variant="category" icon={<HashIcon />}>Design</Tag>
              <Tag variant="category" icon={<HashIcon />}>Development</Tag>
              <Tag variant="category" icon={<HashIcon />}>Marketing</Tag>
            </div>
            <pre className="showcase-code">
{`<Tag variant="category" icon={<HashIcon />}>
  Design
</Tag>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Interactive Features */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Interactive Features</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Removable Tags</h3>
            <div className="flex gap-2 flex-wrap mb-4">
              {tags.map((tag) => (
                <Tag
                  key={tag.id}
                  variant={tag.variant}
                  removable
                  onRemove={() => removeTag(tag.id)}
                >
                  {tag.text}
                </Tag>
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-4">Click × to remove tags</p>
            <pre className="showcase-code">
{`<Tag 
  removable
  onRemove={() => removeTag(tag.id)}
>
  {tag.text}
</Tag>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Selectable Tags</h3>
            <div className="flex gap-2 flex-wrap mb-4">
              {['JavaScript', 'Python', 'Go', 'Rust'].map((tech) => (
                <Tag
                  key={tech}
                  variant="primary"
                  selectable
                  selected={selectedTags.includes(tech)}
                  onToggle={() => toggleTag(tech)}
                >
                  {tech}
                </Tag>
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Selected: {selectedTags.join(', ') || 'None'}
            </p>
            <pre className="showcase-code">
{`<Tag 
  selectable
  selected={selectedTags.includes(tech)}
  onToggle={() => toggleTag(tech)}
>
  {tech}
</Tag>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Common Use Cases</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Blog Post Tags</h3>
            <div className="flex gap-2 flex-wrap mb-4">
              <Tag variant="category">Tutorial</Tag>
              <Tag variant="keyword">React</Tag>
              <Tag variant="keyword">Hooks</Tag>
              <Tag variant="primary">Beginner</Tag>
            </div>
            <pre className="showcase-code">
{`<Tag variant="category">Tutorial</Tag>
<Tag variant="keyword">React</Tag>
<Tag variant="primary">Beginner</Tag>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Product Features</h3>
            <div className="flex gap-2 flex-wrap mb-4">
              <Tag variant="primary" size="sm">New</Tag>
              <Tag variant="keyword" size="sm">Popular</Tag>
              <Tag variant="secondary" size="sm">Free</Tag>
              <Tag variant="category" size="sm">Pro</Tag>
            </div>
            <pre className="showcase-code">
{`<Tag variant="primary" size="sm">New</Tag>
<Tag variant="keyword" size="sm">Popular</Tag>
<Tag variant="secondary" size="sm">Free</Tag>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Filter Example */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Filter Interface</h2>
        <div className="showcase-item">
          <h3 className="font-semibold mb-2">Technology Filter</h3>
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Filter by technology:</p>
            <div className="flex gap-2 flex-wrap">
              {['All', 'Frontend', 'Backend', 'Mobile', 'DevOps', 'Design'].map((filter) => (
                <Tag
                  key={filter}
                  variant={selectedTags.includes(filter) ? 'primary' : 'default'}
                  selectable
                  selected={selectedTags.includes(filter)}
                  onToggle={() => toggleTag(filter)}
                  size="sm"
                >
                  {filter}
                </Tag>
              ))}
            </div>
          </div>
          <pre className="showcase-code">
{`const [activeFilters, setActiveFilters] = useState([]);

{filters.map((filter) => (
  <Tag
    key={filter}
    variant={activeFilters.includes(filter) ? 'primary' : 'default'}
    selectable
    selected={activeFilters.includes(filter)}
    onToggle={() => toggleFilter(filter)}
  >
    {filter}
  </Tag>
))}`}
          </pre>
        </div>
      </section>
    </div>
  );
}