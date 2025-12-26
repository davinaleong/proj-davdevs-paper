import React from 'react';
import { Inline, Box } from '@davdevs/paper-foundations';

export const InlineShowcase = () => {
  const DemoButton = ({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'default' | 'primary' | 'secondary' }) => {
    const variants = {
      default: 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50',
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700'
    };
    
    return (
      <button className={`px-4 py-2 rounded-md font-medium transition-colors ${variants[variant]}`}>
        {children}
      </button>
    );
  };

  const DemoBadge = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
      {children}
    </span>
  );

  const DemoBox = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <Box className={`p-3 bg-gray-100 border border-gray-200 rounded text-center text-sm ${className}`}>
      {children}
    </Box>
  );

  return (
    <div className="showcase-content">
      <header className="showcase-header">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Inline</h1>
        <p className="text-lg text-gray-600 mb-8">
          Horizontal layout primitive for creating inline arrangements with gaps and flexible alignment.
        </p>
      </header>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Button Group</h2>
        <div className="example-container">
          <Inline gap="md">
            <DemoButton variant="secondary">Cancel</DemoButton>
            <DemoButton variant="primary">Save Changes</DemoButton>
            <DemoButton>Help</DemoButton>
          </Inline>
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Badge List</h2>
        <div className="example-container">
          <Inline gap="xs" wrap>
            <DemoBadge>React</DemoBadge>
            <DemoBadge>TypeScript</DemoBadge>
            <DemoBadge>Tailwind CSS</DemoBadge>
            <DemoBadge>Vite</DemoBadge>
            <DemoBadge>Storybook</DemoBadge>
            <DemoBadge>Jest</DemoBadge>
            <DemoBadge>ESLint</DemoBadge>
            <DemoBadge>Prettier</DemoBadge>
          </Inline>
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Gap Variations</h2>
        <div className="space-y-6">
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(gap => (
            <div key={gap} className="example-container">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Gap: {gap}</h3>
              <Inline gap={gap}>
                <DemoBox>Item 1</DemoBox>
                <DemoBox>Item 2</DemoBox>
                <DemoBox>Item 3</DemoBox>
              </Inline>
            </div>
          ))}
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Alignment Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(['start', 'center', 'end', 'baseline'] as const).map(align => (
            <div key={align} className="example-container">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Align: {align}</h3>
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <Inline gap="sm" align={align}>
                  <DemoBox className="h-8">Short</DemoBox>
                  <DemoBox className="h-12">Medium Height</DemoBox>
                  <DemoBox className="h-6">Tiny</DemoBox>
                </Inline>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Justify Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(['start', 'center', 'end', 'between'] as const).map(justify => (
            <div key={justify} className="example-container">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Justify: {justify}</h3>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <Inline gap="sm" justify={justify} className="w-full bg-gray-50 p-4">
                  <DemoBox>Item 1</DemoBox>
                  <DemoBox>Item 2</DemoBox>
                  <DemoBox>Item 3</DemoBox>
                </Inline>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Wrapping Behavior</h2>
        <div className="space-y-6">
          <div className="example-container">
            <h3 className="text-sm font-medium text-gray-600 mb-2">With Wrapping (default)</h3>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 max-w-md">
              <Inline gap="md" wrap>
                <DemoBox>Item 1</DemoBox>
                <DemoBox>Item 2</DemoBox>
                <DemoBox>Item 3</DemoBox>
                <DemoBox>Item 4</DemoBox>
                <DemoBox>Item 5</DemoBox>
                <DemoBox>Item 6</DemoBox>
              </Inline>
            </div>
          </div>
          <div className="example-container">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Without Wrapping</h3>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 max-w-md overflow-x-auto">
              <Inline gap="md" wrap={false}>
                <DemoBox className="whitespace-nowrap">Item 1</DemoBox>
                <DemoBox className="whitespace-nowrap">Item 2</DemoBox>
                <DemoBox className="whitespace-nowrap">Item 3</DemoBox>
                <DemoBox className="whitespace-nowrap">Item 4</DemoBox>
                <DemoBox className="whitespace-nowrap">Item 5</DemoBox>
                <DemoBox className="whitespace-nowrap">Item 6</DemoBox>
              </Inline>
            </div>
          </div>
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Form Actions</h2>
        <div className="example-container">
          <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Sample Form</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                placeholder="Enter some text..." 
              />
            </div>
            <Inline gap="md" justify="end">
              <DemoButton>Cancel</DemoButton>
              <DemoButton variant="primary">Submit</DemoButton>
            </Inline>
          </div>
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Navigation Example</h2>
        <div className="example-container">
          <nav className="border border-gray-200 rounded-lg p-4 bg-white">
            <Inline gap="lg" align="baseline">
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Services</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
            </Inline>
          </nav>
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Usage Examples</h2>
        <div className="bg-gray-50 rounded-lg p-4">
          <pre className="text-sm text-gray-800 overflow-x-auto">
{`// Button group
<Inline gap="md">
  <Button variant="secondary">Cancel</Button>
  <Button variant="primary">Save</Button>
</Inline>

// Badge list
<Inline gap="xs" wrap>
  <Badge>React</Badge>
  <Badge>TypeScript</Badge>
  <Badge>Tailwind</Badge>
</Inline>

// Form actions
<Inline gap="sm" justify="end">
  <Button>Cancel</Button>
  <Button variant="primary">Submit</Button>
</Inline>`}
          </pre>
        </div>
      </div>
    </div>
  );
};