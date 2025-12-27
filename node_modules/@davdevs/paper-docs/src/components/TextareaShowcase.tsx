import React, { useState } from 'react';

// Mock Textarea component for demonstration
const Textarea = ({ 
  className = '',
  variant = 'default',
  size = 'md',
  state = 'default',
  helperText,
  error,
  autoResize = false,
  minRows = 3,
  maxRows = 10,
  showCount = false,
  maxLength,
  fullWidth = false,
  elevation = 'none',
  value,
  onChange,
  disabled,
  ...domProps 
}: any) => {
  const variants = {
    default: 'bg-white border-gray-300',
    filled: 'bg-gray-50 border-gray-200',
    outlined: 'bg-transparent border-2 border-gray-300'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm min-h-[60px]',
    md: 'px-3 py-2 text-base min-h-[80px]',
    lg: 'px-4 py-3 text-lg min-h-[100px]'
  };

  const states = {
    default: 'focus:border-blue-500 focus:ring-blue-500',
    error: 'border-red-300 focus:border-red-500 focus:ring-red-500',
    success: 'border-green-300 focus:border-green-500 focus:ring-green-500',
    warning: 'border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500'
  };

  const elevations = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg'
  };

  const finalState = error ? 'error' : state;
  const charCount = typeof value === 'string' ? value.length : 0;
  const isOverLimit = maxLength && charCount > maxLength;

  return (
    <div className={`relative ${fullWidth ? 'w-full' : ''} ${elevations[elevation]} ${className}`}>
      <textarea
        className={`w-full border rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors duration-200 resize-none ${variants[variant]} ${sizes[size]} ${states[finalState]}`}
        value={value}
        onChange={onChange}
        disabled={disabled}
        maxLength={maxLength}
        rows={autoResize ? undefined : minRows}
        {...domProps}
      />
      
      {(error || helperText || showCount) && (
        <div className="flex justify-between items-center mt-1">
          <div>
            {error && <div className="text-sm text-red-600">{error}</div>}
            {!error && helperText && <div className="text-sm text-gray-600">{helperText}</div>}
          </div>
          {showCount && (
            <div className={`text-sm ${isOverLimit ? 'text-red-600' : 'text-gray-500'}`}>
              {charCount}{maxLength ? `/${maxLength}` : ''}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export function TextareaShowcase() {
  const [textareaValues, setTextareaValues] = useState({
    basic: '',
    withCount: 'This textarea shows character count...',
    limited: 'This has a character limit.',
    autoResize: 'This textarea auto-resizes as you type. Try adding multiple lines of content to see how it expands.'
  });

  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Textarea Component</h1>
        <p className="text-gray-600 mb-8">
          Multi-line text input component with auto-resize, character counting, and paper-inspired styling.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Basic Usage</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Default Textarea</h3>
            <Textarea 
              placeholder="Enter your message..." 
              value={textareaValues.basic}
              onChange={(e: any) => setTextareaValues({...textareaValues, basic: e.target.value})}
              className="mb-4" 
            />
            <pre className="showcase-code">
{`<Textarea placeholder="Enter your message..." />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">With Helper Text</h3>
            <Textarea 
              placeholder="Describe your project"
              helperText="Provide a detailed description of your project goals and requirements"
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Textarea 
  placeholder="Describe your project"
  helperText="Detailed description..."
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Variants</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Default</h3>
            <Textarea placeholder="Default variant" className="mb-4" />
            <pre className="showcase-code">
{`<Textarea variant="default" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Filled</h3>
            <Textarea variant="filled" placeholder="Filled variant" className="mb-4" />
            <pre className="showcase-code">
{`<Textarea variant="filled" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Outlined</h3>
            <Textarea variant="outlined" placeholder="Outlined variant" className="mb-4" />
            <pre className="showcase-code">
{`<Textarea variant="outlined" />`}
            </pre>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Sizes</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-3">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Small</h3>
            <Textarea size="sm" placeholder="Small textarea" className="mb-4" />
            <pre className="showcase-code">
{`<Textarea size="sm" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Medium (Default)</h3>
            <Textarea size="md" placeholder="Medium textarea" className="mb-4" />
            <pre className="showcase-code">
{`<Textarea size="md" />`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Large</h3>
            <Textarea size="lg" placeholder="Large textarea" className="mb-4" />
            <pre className="showcase-code">
{`<Textarea size="lg" />`}
            </pre>
          </div>
        </div>
      </section>

      {/* Character Count */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Character Count</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Show Character Count</h3>
            <Textarea 
              showCount
              placeholder="Type to see character count"
              value={textareaValues.withCount}
              onChange={(e: any) => setTextareaValues({...textareaValues, withCount: e.target.value})}
              helperText="Character count is displayed"
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Textarea 
  showCount
  placeholder="Type to see count"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Character Limit</h3>
            <Textarea 
              showCount
              maxLength={100}
              placeholder="Limited to 100 characters"
              value={textareaValues.limited}
              onChange={(e: any) => setTextareaValues({...textareaValues, limited: e.target.value})}
              helperText="Try exceeding the character limit"
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Textarea 
  showCount
  maxLength={100}
  placeholder="Limited to 100 chars"
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Auto Resize */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Auto Resize</h2>
        <div className="showcase-item">
          <h3 className="font-semibold mb-2">Auto Resize Textarea</h3>
          <Textarea 
            autoResize
            minRows={3}
            maxRows={8}
            placeholder="This textarea auto-resizes as you type"
            value={textareaValues.autoResize}
            onChange={(e: any) => setTextareaValues({...textareaValues, autoResize: e.target.value})}
            helperText="Add multiple lines to see auto-resize in action"
            className="mb-4"
          />
          <pre className="showcase-code">
{`<Textarea 
  autoResize
  minRows={3}
  maxRows={8}
  placeholder="Auto-resizing textarea"
/>`}
          </pre>
        </div>
      </section>

      {/* States */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">States</h2>
        <div className="showcase-grid grid-cols-1 md:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Success State</h3>
            <Textarea 
              state="success"
              placeholder="Success state"
              helperText="Looks great!"
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Textarea 
  state="success"
  helperText="Looks great!"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Error State</h3>
            <Textarea 
              error="This field is required"
              placeholder="Error state"
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Textarea 
  error="This field is required"
  placeholder="Error state"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Warning State</h3>
            <Textarea 
              state="warning"
              placeholder="Warning state"
              helperText="Please review this content"
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Textarea 
  state="warning"
  helperText="Please review"
/>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Disabled State</h3>
            <Textarea 
              disabled
              value="This textarea is disabled"
              className="mb-4"
            />
            <pre className="showcase-code">
{`<Textarea 
  disabled
  value="Disabled content"
/>`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}