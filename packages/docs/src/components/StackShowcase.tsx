import React from 'react';
import { Stack, Box } from '@davdevs/paper-foundations';

export const StackShowcase = () => {
  const DemoBox = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <Box className={`p-4 bg-blue-100 border border-blue-200 rounded text-center ${className}`}>
      {children}
    </Box>
  );

  return (
    <div className="showcase-content">
      <header className="showcase-header">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Stack</h1>
        <p className="text-lg text-gray-600 mb-8">
          Layout primitive for creating consistent spacing between elements with flexible alignment.
        </p>
      </header>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Vertical Stack</h2>
        <div className="example-container">
          <Stack gap="md" className="max-w-md">
            <DemoBox>Item 1</DemoBox>
            <DemoBox>Item 2</DemoBox>
            <DemoBox>Item 3</DemoBox>
          </Stack>
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Horizontal Stack</h2>
        <div className="example-container">
          <Stack direction="horizontal" gap="md" align="center">
            <DemoBox>Item A</DemoBox>
            <DemoBox>Item B</DemoBox>
            <DemoBox>Item C</DemoBox>
          </Stack>
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Gap Variations</h2>
        <div className="space-y-6">
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(gap => (
            <div key={gap} className="example-container">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Gap: {gap}</h3>
              <Stack gap={gap} className="max-w-sm">
                <DemoBox className="py-2">Item 1</DemoBox>
                <DemoBox className="py-2">Item 2</DemoBox>
                <DemoBox className="py-2">Item 3</DemoBox>
              </Stack>
            </div>
          ))}
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Alignment Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(['start', 'center', 'end', 'stretch'] as const).map(align => (
            <div key={align} className="example-container">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Align: {align}</h3>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <Stack gap="sm" align={align} className="h-32 bg-gray-50 p-4">
                  <DemoBox className="py-2 px-4 flex-shrink-0">Item 1</DemoBox>
                  <DemoBox className="py-2 px-6 flex-shrink-0">Item 2</DemoBox>
                  <DemoBox className="py-2 px-3 flex-shrink-0">Item 3</DemoBox>
                </Stack>
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
                <Stack gap="sm" justify={justify} className="h-40 bg-gray-50 p-4">
                  <DemoBox className="py-2 px-4 flex-shrink-0">Item 1</DemoBox>
                  <DemoBox className="py-2 px-4 flex-shrink-0">Item 2</DemoBox>
                  <DemoBox className="py-2 px-4 flex-shrink-0">Item 3</DemoBox>
                </Stack>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Horizontal with Wrapping</h2>
        <div className="example-container">
          <Stack direction="horizontal" gap="md" wrap className="max-w-lg">
            <DemoBox>Item 1</DemoBox>
            <DemoBox>Item 2</DemoBox>
            <DemoBox>Item 3</DemoBox>
            <DemoBox>Item 4</DemoBox>
            <DemoBox>Item 5</DemoBox>
            <DemoBox>Item 6</DemoBox>
          </Stack>
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Nested Stacks</h2>
        <div className="example-container">
          <Stack gap="lg" className="max-w-lg">
            <DemoBox>Header</DemoBox>
            <Stack direction="horizontal" gap="md" justify="between">
              <DemoBox>Left</DemoBox>
              <DemoBox>Center</DemoBox>
              <DemoBox>Right</DemoBox>
            </Stack>
            <Stack gap="sm">
              <DemoBox>Content 1</DemoBox>
              <DemoBox>Content 2</DemoBox>
            </Stack>
            <DemoBox>Footer</DemoBox>
          </Stack>
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Usage Examples</h2>
        <div className="bg-gray-50 rounded-lg p-4">
          <pre className="text-sm text-gray-800 overflow-x-auto">
{`// Basic vertical stack
<Stack gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>

// Horizontal button group
<Stack direction="horizontal" gap="sm" align="center">
  <Button>Cancel</Button>
  <Button variant="primary">Save</Button>
</Stack>

// Centered layout
<Stack align="center" justify="center" className="h-screen">
  <h1>Welcome</h1>
  <p>Get started</p>
</Stack>`}
          </pre>
        </div>
      </div>
    </div>
  );
};