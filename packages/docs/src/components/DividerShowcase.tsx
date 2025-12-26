import React from 'react';
import { Divider, Stack, Inline, Box } from '@davdevs/paper-foundations';

export const DividerShowcase = () => {
  const DemoBox = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <Box className={`p-4 bg-gray-100 border border-gray-200 rounded text-center text-sm ${className}`}>
      {children}
    </Box>
  );

  const DemoCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">{title}</h3>
      {children}
    </div>
  );

  return (
    <div className="showcase-content">
      <header className="showcase-header">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Divider</h1>
        <p className="text-lg text-gray-600 mb-8">
          Paper-style separators for creating visual division between content sections with flexible styling options.
        </p>
      </header>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Usage</h2>
        <DemoCard title="Default Horizontal Divider">
          <Stack gap="md">
            <DemoBox>Content above the divider</DemoBox>
            <Divider />
            <DemoBox>Content below the divider</DemoBox>
          </Stack>
        </DemoCard>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Style Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(['default', 'dashed', 'dotted', 'double', 'thick', 'subtle'] as const).map(variant => (
            <DemoCard key={variant} title={`Variant: ${variant}`}>
              <Stack gap="sm">
                <DemoBox className="py-2">Content above</DemoBox>
                <Divider variant={variant} />
                <DemoBox className="py-2">Content below</DemoBox>
              </Stack>
            </DemoCard>
          ))}
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Color Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(['default', 'muted', 'accent', 'primary', 'secondary'] as const).map(color => (
            <DemoCard key={color} title={`Color: ${color}`}>
              <Stack gap="sm">
                <DemoBox className="py-2">Content above</DemoBox>
                <Divider color={color} />
                <DemoBox className="py-2">Content below</DemoBox>
              </Stack>
            </DemoCard>
          ))}
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Size Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(['thin', 'base', 'thick'] as const).map(size => (
            <DemoCard key={size} title={`Size: ${size}`}>
              <Stack gap="sm">
                <DemoBox className="py-2">Content above</DemoBox>
                <Divider size={size} />
                <DemoBox className="py-2">Content below</DemoBox>
              </Stack>
            </DemoCard>
          ))}
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Spacing Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(['xs', 'md', 'xl'] as const).map(spacing => (
            <DemoCard key={spacing} title={`Spacing: ${spacing}`}>
              <Stack gap="none">
                <DemoBox className="py-2">Content above</DemoBox>
                <Divider spacing={spacing} />
                <DemoBox className="py-2">Content below</DemoBox>
              </Stack>
            </DemoCard>
          ))}
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">With Labels</h2>
        <div className="grid grid-cols-1 gap-6">
          <DemoCard title="Centered Label (Default)">
            <Stack gap="md">
              <DemoBox>Login with email</DemoBox>
              <Divider label="OR" />
              <DemoBox>Login with social media</DemoBox>
            </Stack>
          </DemoCard>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DemoCard title="Left-aligned Label">
              <Stack gap="md">
                <DemoBox>Personal Information</DemoBox>
                <Divider label="Optional" labelPosition="left" />
                <DemoBox>Additional Details</DemoBox>
              </Stack>
            </DemoCard>
            
            <DemoCard title="Right-aligned Label">
              <Stack gap="md">
                <DemoBox>Required Fields</DemoBox>
                <Divider label="Step 2 of 3" labelPosition="right" />
                <DemoBox>Payment Information</DemoBox>
              </Stack>
            </DemoCard>
          </div>
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Vertical Dividers</h2>
        <DemoCard title="Inline Content Separation">
          <Inline gap="none" align="center" className="h-20">
            <DemoBox className="h-full flex items-center px-6">Left Section</DemoBox>
            <Divider orientation="vertical" spacing="md" />
            <DemoBox className="h-full flex items-center px-6">Middle Section</DemoBox>
            <Divider orientation="vertical" spacing="md" variant="dashed" />
            <DemoBox className="h-full flex items-center px-6">Right Section</DemoBox>
          </Inline>
        </DemoCard>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Form Sections Example</h2>
        <DemoCard title="Registration Form">
          <div className="max-w-md mx-auto">
            <Stack gap="lg">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Personal Information</h3>
                <Stack gap="sm">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </Stack>
              </div>
              
              <Divider label="Contact Details" />
              
              <div>
                <Stack gap="sm">
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                  <input 
                    type="text" 
                    placeholder="Address (Optional)" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </Stack>
              </div>
              
              <Divider variant="subtle" spacing="sm" />
              
              <Inline gap="md" justify="end">
                <button className="px-4 py-2 text-gray-600 hover:text-gray-800 text-sm">
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                  Create Account
                </button>
              </Inline>
            </Stack>
          </div>
        </DemoCard>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Usage Examples</h2>
        <div className="bg-gray-50 rounded-lg p-4">
          <pre className="text-sm text-gray-800 overflow-x-auto">
{`// Basic divider
<Stack gap="lg">
  <div>Section 1</div>
  <Divider />
  <div>Section 2</div>
</Stack>

// With label
<Divider label="OR" />

// Vertical divider
<Inline gap="none">
  <div>Left</div>
  <Divider orientation="vertical" spacing="md" />
  <div>Right</div>
</Inline>

// Styled divider
<Divider variant="dashed" color="primary" size="thick" />`}
          </pre>
        </div>
      </div>
    </div>
  );
};