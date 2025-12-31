import React from 'react';
import { Container, Stack, Inline, Divider, Surface } from '@davdevs/paper-foundations';

export const ContainerShowcase = () => {
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

  const DemoContent = ({ title, size }: { title: string; size: string }) => (
    <Surface level="primary" padding="md" radius="base" border="subtle" className="text-center">
      <Stack gap="sm">
        <h4 className="font-medium text-gray-900 dark:text-gray-100">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">Size: {size}</p>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          This content demonstrates the container width and responsive behavior.
        </div>
      </Stack>
    </Surface>
  );

  const VisualContainer = ({ children, label, className = '' }: { children: React.ReactNode; label: string; className?: string }) => (
    <div className="relative">
      <div className={`absolute -top-6 left-0 text-xs font-medium text-gray-500 dark:text-gray-400 ${className}`}>
        {label}
      </div>
      <div className="border-2 border-dashed border-blue-200 dark:border-blue-700 bg-blue-50/30 dark:bg-blue-900/20 min-h-[2px]">
        {children}
      </div>
    </div>
  );

  return (
    <div className="showcase-content">
      <header className="showcase-header">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Container</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Responsive content containers for creating consistent page layouts with configurable max-widths and padding.
        </p>
      </header>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Container Sizes</h2>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <Stack gap="lg">
            {[
              { size: 'xs', label: 'Extra Small (20rem)' },
              { size: 'sm', label: 'Small (24rem)' },
              { size: 'md', label: 'Medium (28rem)' },
              { size: 'lg', label: 'Large (64rem)' },
              { size: 'xl', label: 'Extra Large (80rem)' },
              { size: '2xl', label: '2X Large (96rem)' }
            ].map(({ size, label }) => (
              <div key={size} className="relative">
                <VisualContainer label={label}>
                  <Container size={size as any} padding="md">
                    <DemoContent title={`Container ${size.toUpperCase()}`} size={size} />
                  </Container>
                </VisualContainer>
              </div>
            ))}
          </Stack>
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Padding Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { padding: 'none', label: 'No Padding' },
            { padding: 'xs', label: 'XS Padding' },
            { padding: 'sm', label: 'Small Padding' },
            { padding: 'md', label: 'Medium Padding' },
            { padding: 'lg', label: 'Large Padding' },
            { padding: 'xl', label: 'XL Padding' }
          ].map(({ padding, label }) => (
            <Surface key={padding} level="secondary" padding="sm" radius="base">
              <Stack gap="sm">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</h4>
                <div className="border-2 border-dashed border-green-200 dark:border-green-700 bg-green-50/30 dark:bg-green-900/20">
                  <Container size="md" padding={padding as any}>
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded p-2 text-center text-sm text-gray-900 dark:text-gray-100">
                      Content with {padding} padding
                    </div>
                  </Container>
                </div>
              </Stack>
            </Surface>
          ))}
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Fluid vs Fixed Width</h2>
        <div className="grid grid-cols-1 gap-6">
          <Surface level="secondary" padding="md" radius="base">
            <Stack gap="md">
              <h4 className="font-medium text-gray-900 dark:text-gray-100">Fixed Width Container</h4>
              <VisualContainer label="Container with max-width constraint">
                <Container size="lg" padding="md">
                  <Surface level="primary" padding="md" radius="base" border="subtle">
                    <p className="text-center text-gray-900 dark:text-gray-100">This container has a max-width and is centered</p>
                  </Surface>
                </Container>
              </VisualContainer>
            </Stack>
          </Surface>
          
          <Surface level="secondary" padding="md" radius="base">
            <Stack gap="md">
              <h4 className="font-medium text-gray-900 dark:text-gray-100">Fluid Container</h4>
              <VisualContainer label="Container takes full width">
                <Container fluid padding="md">
                  <Surface level="primary" padding="md" radius="base" border="subtle">
                    <p className="text-center text-gray-900 dark:text-gray-100">This container is fluid and takes the full width of its parent</p>
                  </Surface>
                </Container>
              </VisualContainer>
            </Stack>
          </Surface>
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Centering Behavior</h2>
        <div className="grid grid-cols-1 gap-6">
          <Surface level="secondary" padding="md" radius="base">
            <Stack gap="md">
              <h4 className="font-medium text-gray-900 dark:text-gray-100">Centered Container (Default)</h4>
              <VisualContainer label="Centered with margin auto">
                <Container size="md" padding="md" centered={true}>
                  <Surface level="primary" padding="md" radius="base" border="subtle">
                    <p className="text-center text-gray-900 dark:text-gray-100">Centered container</p>
                  </Surface>
                </Container>
              </VisualContainer>
            </Stack>
          </Surface>
          
          <Surface level="secondary" padding="md" radius="base">
            <Stack gap="md">
              <h4 className="font-medium text-gray-900 dark:text-gray-100">Non-centered Container</h4>
              <VisualContainer label="Left-aligned without centering">
                <Container size="md" padding="md" centered={false}>
                  <Surface level="primary" padding="md" radius="base" border="subtle">
                    <p className="text-center text-gray-900 dark:text-gray-100">Left-aligned container</p>
                  </Surface>
                </Container>
              </VisualContainer>
            </Stack>
          </Surface>
        </div>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Semantic HTML Elements</h2>
        <Surface level="secondary" padding="md" radius="base">
          <Stack gap="md">
            <h4 className="font-medium text-gray-900 dark:text-gray-100">Different HTML Elements</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Container as &lt;main&gt;</p>
                <VisualContainer label="<main> element">
                  <Container as="main" size="lg" padding="md">
                    <Surface level="primary" padding="sm" radius="base" border="subtle">
                      <p className="text-sm text-gray-900 dark:text-gray-100">Main content area</p>
                    </Surface>
                  </Container>
                </VisualContainer>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Container as &lt;section&gt;</p>
                <VisualContainer label="<section> element">
                  <Container as="section" size="md" padding="md">
                    <Surface level="primary" padding="sm" radius="base" border="subtle">
                      <p className="text-sm text-gray-900 dark:text-gray-100">Section content</p>
                    </Surface>
                  </Container>
                </VisualContainer>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Container as &lt;article&gt;</p>
                <VisualContainer label="<article> element">
                  <Container as="article" size="md" padding="sm">
                    <Surface level="primary" padding="sm" radius="base" border="subtle">
                      <p className="text-sm text-gray-900 dark:text-gray-100">Article content</p>
                    </Surface>
                  </Container>
                </VisualContainer>
              </div>
            </div>
          </Stack>
        </Surface>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Page Layout Example</h2>
        <Surface level="secondary" padding="md" radius="base">
          <Stack gap="md">
            <h4 className="font-medium text-gray-900 dark:text-gray-100">Complete Page Structure</h4>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <Stack gap="none">
                {/* Header */}
                <Container as="header" size="full" padding="md" className="bg-gray-100 dark:bg-gray-800 border-b dark:border-gray-600">
                  <Inline justify="between" align="center">
                    <div className="font-bold text-gray-900 dark:text-gray-100">Site Logo</div>
                    <Inline gap="md">
                      <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">Home</a>
                      <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">About</a>
                      <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">Contact</a>
                    </Inline>
                  </Inline>
                </Container>
                
                {/* Main Content */}
                <Container as="main" size="xl" padding="lg" className="bg-white dark:bg-gray-800 min-h-[200px]">
                  <Stack gap="lg">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Welcome to Our Site</h2>
                    <p className="text-gray-600 dark:text-gray-400">Main content area with consistent container sizing and proper semantic HTML.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Surface level="elevated" padding="md" radius="base">
                        <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Feature 1</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Content in elevated surface</p>
                      </Surface>
                      
                      <Surface level="elevated" padding="md" radius="base">
                        <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Feature 2</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">More content in elevated surface</p>
                      </Surface>
                    </div>
                  </Stack>
                </Container>
                
                {/* Footer */}
                <Container as="footer" size="full" padding="md" className="bg-gray-800 dark:bg-gray-900 text-white">
                  <div className="text-center">
                    <p className="text-sm">&copy; 2025 Your Site Name</p>
                  </div>
                </Container>
              </Stack>
            </div>
          </Stack>
        </Surface>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Responsive Behavior</h2>
        <Surface level="secondary" padding="md" radius="base">
          <Stack gap="md">
            <h4 className="font-medium text-gray-900 dark:text-gray-100">Breakpoint Behavior</h4>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <p><strong>Responsive (default):</strong> Adjusts padding on mobile devices</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Mobile (&lt; 640px): 1rem padding</li>
                <li>Tablet (641px - 768px): 1.5rem padding</li>
                <li>Desktop (&gt; 769px): Full specified padding</li>
              </ul>
              <p><strong>Static:</strong> Maintains consistent padding across all screen sizes</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Responsive Container</p>
                <VisualContainer label="Adjusts on mobile">
                  <Container size="lg" padding="lg" breakpoint="responsive">
                    <Surface level="primary" padding="sm" radius="base" border="subtle">
                      <p className="text-xs text-center">Responsive padding</p>
                    </Surface>
                  </Container>
                </VisualContainer>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Static Container</p>
                <VisualContainer label="Consistent padding">
                  <Container size="lg" padding="lg" breakpoint="static">
                    <Surface level="primary" padding="sm" radius="base" border="subtle">
                      <p className="text-xs text-center text-gray-900 dark:text-gray-100">Static padding</p>
                    </Surface>
                  </Container>
                </VisualContainer>
              </div>
            </div>
          </Stack>
        </Surface>
      </div>

      <div className="showcase-section">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Usage Examples</h2>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`// Basic container
<Container size="lg" padding="md">
  <p>Your content here</p>
</Container>

// Page layout
<Container as="main" size="xl" padding="lg">
  <Stack gap="xl">
    <h1>Page Title</h1>
    <p>Main content</p>
  </Stack>
</Container>

// Fluid container
<Container fluid padding="lg">
  <div>Full width content</div>
</Container>

// Form container
<Container size="sm" padding="md">
  <form>
    <Stack gap="md">
      <input type="email" placeholder="Email" />
      <Button>Submit</Button>
    </Stack>
  </form>
</Container>`}
          </pre>
        </div>
      </div>
    </div>
  );
};