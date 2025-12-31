import React from 'react';
import { Surface, Stack, Inline, Divider } from '@davdevs/paper-foundations';

export const SurfaceShowcase = () => {
  const DemoButton = ({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'default' | 'primary' | 'secondary' }) => {
    const variants = {
      default: 'bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600',
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700'
    };
    
    return (
      <button className={`px-4 py-2 rounded-md font-medium transition-colors ${variants[variant]}`}>
        {children}
      </button>
    );
  };

  const DemoCard = ({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) => (
    <div className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 ${className}`}>
      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">{title}</h3>
      {children}
    </div>
  );

  return (
    <div className="showcase-content">
      <header className="showcase-header">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Surface</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Theme-aware background surfaces for creating consistent visual hierarchy with automatic dark mode support.
        </p>
      </header>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Surface Hierarchy</h2>
        <DemoCard title="Different Surface Levels">
          <Stack gap="md">
            {(['primary', 'secondary', 'tertiary', 'elevated', 'overlay', 'inverse'] as const).map(level => (
              <Surface key={level} level={level} padding="md" radius="base" border="subtle">
                <div className="text-center py-2">
                  <strong>Level: {level}</strong>
                  <p className="text-sm mt-1">Surface with {level} background level</p>
                </div>
              </Surface>
            ))}
          </Stack>
        </DemoCard>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Appearance Variants</h2>
        <DemoCard title="Different Appearances">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(['default', 'subtle', 'muted', 'accent', 'transparent'] as const).map(appearance => (
              <Surface key={appearance} level="primary" appearance={appearance} padding="md" radius="base" border="subtle">
                <div className="text-center py-2">
                  <strong>Appearance: {appearance}</strong>
                  <p className="text-sm mt-1">Surface styling variant</p>
                </div>
              </Surface>
            ))}
          </div>
        </DemoCard>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Elevation & Radius</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DemoCard title="Elevation Levels">
            <Stack gap="md">
              {(['none', 'xs', 'sm', 'base', 'md', 'lg'] as const).map(elevation => (
                <Surface key={elevation} level="primary" elevation={elevation} padding="sm" radius="base">
                  <div className="text-center text-sm">
                    <strong>Elevation: {elevation}</strong>
                  </div>
                </Surface>
              ))}
            </Stack>
          </DemoCard>
          
          <DemoCard title="Border Radius">
            <Stack gap="md">
              {(['none', 'xs', 'sm', 'base', 'md', 'lg', 'xl'] as const).map(radius => (
                <Surface key={radius} level="primary" radius={radius} padding="sm" border="subtle">
                  <div className="text-center text-sm">
                    <strong>Radius: {radius}</strong>
                  </div>
                </Surface>
              ))}
            </Stack>
          </DemoCard>
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Padding & Border</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DemoCard title="Padding Options">
            <Stack gap="sm">
              {(['none', 'xs', 'sm', 'md', 'lg', 'xl'] as const).map(padding => (
                <Surface key={padding} level="secondary" padding={padding} radius="base" border="subtle">
                  <div className="text-center text-sm">
                    <strong>Padding: {padding}</strong>
                  </div>
                </Surface>
              ))}
            </Stack>
          </DemoCard>
          
          <DemoCard title="Border Styles">
            <Stack gap="md">
              {(['none', 'subtle', 'default', 'accent', 'primary'] as const).map(border => (
                <Surface key={border} level="primary" border={border} padding="sm" radius="base">
                  <div className="text-center text-sm">
                    <strong>Border: {border}</strong>
                  </div>
                </Surface>
              ))}
            </Stack>
          </DemoCard>
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Interactive Surfaces</h2>
        <DemoCard title="Hover & Click Effects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Surface 
              level="primary" 
              padding="lg" 
              radius="lg" 
              border="subtle" 
              interactive
              onClick={() => console.log('Primary surface clicked!')}
            >
              <Stack gap="sm">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Interactive Primary</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Hover me for lift effect</p>
              </Stack>
            </Surface>
            
            <Surface 
              level="elevated" 
              padding="lg" 
              radius="lg" 
              interactive
              onClick={() => console.log('Elevated surface clicked!')}
            >
              <Stack gap="sm">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Interactive Elevated</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Already has elevation, hover enhances it</p>
              </Stack>
            </Surface>
          </div>
        </DemoCard>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Card Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Surface level="elevated" padding="lg" radius="lg" border="subtle">
            <Stack gap="md">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Simple Card</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                This is a card built with Surface component using elevated level for subtle depth.
              </p>
              <Divider />
              <Inline gap="sm" justify="end">
                <DemoButton>Cancel</DemoButton>
                <DemoButton variant="primary">Save</DemoButton>
              </Inline>
            </Stack>
          </Surface>
          
          <Surface level="overlay" padding="lg" radius="xl" elevation="lg">
            <Stack gap="md">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Modal-Style Card</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Using overlay level with higher elevation for modal-like appearance.
              </p>
              <Divider variant="subtle" />
              <Inline gap="sm" justify="between">
                <span className="text-xs text-gray-500 dark:text-gray-400">Modal content</span>
                <DemoButton variant="primary">Close</DemoButton>
              </Inline>
            </Stack>
          </Surface>
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Navigation Example</h2>
        <DemoCard title="Sidebar with Nested Surfaces">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[300px]">
            <Surface level="secondary" padding="md" radius="lg" className="lg:col-span-1">
              <Stack gap="md">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Navigation</h4>
                <Stack gap="xs">
                  <Surface level="primary" padding="sm" radius="base" interactive>
                    <div className="text-sm font-medium">Home</div>
                  </Surface>
                  <Surface level="primary" padding="sm" radius="base" interactive>
                    <div className="text-sm font-medium">About</div>
                  </Surface>
                  <Surface level="primary" padding="sm" radius="base" interactive>
                    <div className="text-sm font-medium">Services</div>
                  </Surface>
                  <Surface level="primary" padding="sm" radius="base" interactive>
                    <div className="text-sm font-medium">Contact</div>
                  </Surface>
                </Stack>
              </Stack>
            </Surface>
            
            <Surface level="primary" padding="lg" radius="lg" border="subtle" className="lg:col-span-3">
              <Stack gap="lg">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Main Content Area</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  This demonstrates how Surface components can be used to create a layout with consistent theming.
                  The sidebar uses secondary level while content uses primary level.
                </p>
                <Surface level="elevated" padding="md" radius="base">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Nested elevated surface for additional content hierarchy.
                  </p>
                </Surface>
              </Stack>
            </Surface>
          </div>
        </DemoCard>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Usage Examples</h2>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`// Basic surface
<Surface level="primary" padding="md" radius="base">
  <p>Content</p>
</Surface>

// Card-like surface
<Surface 
  level="elevated" 
  padding="lg" 
  radius="lg" 
  border="subtle"
>
  <Stack gap="md">
    <h3>Card Title</h3>
    <p>Card content</p>
  </Stack>
</Surface>

// Interactive surface
<Surface 
  level="primary" 
  interactive 
  onClick={handleClick}
>
  Clickable content
</Surface>

// Modal surface
<Surface 
  level="overlay" 
  padding="xl" 
  radius="xl" 
  elevation="2xl"
>
  Modal content
</Surface>`}
          </pre>
        </div>
      </div>
    </div>
  );
};