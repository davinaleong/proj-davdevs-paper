import React from 'react';
import { Grid, Box, H1, H2, H3, Text } from '@davdevs/paper-foundations';

export function GridShowcase() {
  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Grid</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          CSS Grid with paper gaps and responsive layout for flexible content organization.
        </p>
      </div>

      {/* Basic Grid Layouts */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Basic Grid Layouts</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">2 Column Grid</h3>
            <div className="mb-4">
              <Grid columns={2} gap="md">
                <Box padding="md" className="bg-blue-50 dark:bg-blue-900 text-center">
                  <Text size="sm">Item 1</Text>
                </Box>
                <Box padding="md" className="bg-blue-50 dark:bg-blue-900 text-center">
                  <Text size="sm">Item 2</Text>
                </Box>
                <Box padding="md" className="bg-blue-50 dark:bg-blue-900 text-center">
                  <Text size="sm">Item 3</Text>
                </Box>
                <Box padding="md" className="bg-blue-50 dark:bg-blue-900 text-center">
                  <Text size="sm">Item 4</Text>
                </Box>
              </Grid>
            </div>
            <pre className="showcase-code">
{`<Grid columns={2} gap="md">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
  <Box>Item 4</Box>
</Grid>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">3 Column Grid</h3>
            <div className="mb-4">
              <Grid columns={3} gap="sm">
                <Box padding="sm" className="bg-green-50 dark:bg-green-900 text-center">
                  <Text size="sm">A</Text>
                </Box>
                <Box padding="sm" className="bg-green-50 dark:bg-green-900 text-center">
                  <Text size="sm">B</Text>
                </Box>
                <Box padding="sm" className="bg-green-50 dark:bg-green-900 text-center">
                  <Text size="sm">C</Text>
                </Box>
                <Box padding="sm" className="bg-green-50 dark:bg-green-900 text-center">
                  <Text size="sm">D</Text>
                </Box>
                <Box padding="sm" className="bg-green-50 dark:bg-green-900 text-center">
                  <Text size="sm">E</Text>
                </Box>
                <Box padding="sm" className="bg-green-50 dark:bg-green-900 text-center">
                  <Text size="sm">F</Text>
                </Box>
              </Grid>
            </div>
            <pre className="showcase-code">
{`<Grid columns={3} gap="sm">
  <Box>A</Box>
  <Box>B</Box>
  <Box>C</Box>
  <Box>D</Box>
  <Box>E</Box>
  <Box>F</Box>
</Grid>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Grid Gap Variants */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Gap Variants</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Different Gap Sizes</h3>
            <div className="space-y-4 mb-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Small Gap (sm)</h4>
                <Grid columns={3} gap="sm">
                  <Box padding="sm" className="bg-purple-50 dark:bg-purple-900 text-center">
                    <Text size="xs">1</Text>
                  </Box>
                  <Box padding="sm" className="bg-purple-50 dark:bg-purple-900 text-center">
                    <Text size="xs">2</Text>
                  </Box>
                  <Box padding="sm" className="bg-purple-50 dark:bg-purple-900 text-center">
                    <Text size="xs">3</Text>
                  </Box>
                </Grid>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Large Gap (lg)</h4>
                <Grid columns={3} gap="lg">
                  <Box padding="sm" className="bg-yellow-50 dark:bg-yellow-900 text-center">
                    <Text size="xs">1</Text>
                  </Box>
                  <Box padding="sm" className="bg-yellow-50 dark:bg-yellow-900 text-center">
                    <Text size="xs">2</Text>
                  </Box>
                  <Box padding="sm" className="bg-yellow-50 dark:bg-yellow-900 text-center">
                    <Text size="xs">3</Text>
                  </Box>
                </Grid>
              </div>
            </div>
            <pre className="showcase-code">
{`<Grid columns={3} gap="sm">
  <Box>Small gaps</Box>
</Grid>

<Grid columns={3} gap="lg">
  <Box>Large gaps</Box>
</Grid>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Custom X/Y Gaps</h3>
            <div className="mb-4">
              <Grid columns={2} gapX="lg" gapY="sm">
                <Box padding="md" className="bg-indigo-50 dark:bg-indigo-900 text-center">
                  <Text size="sm">Large horizontal gap</Text>
                </Box>
                <Box padding="md" className="bg-indigo-50 dark:bg-indigo-900 text-center">
                  <Text size="sm">Small vertical gap</Text>
                </Box>
                <Box padding="md" className="bg-indigo-50 dark:bg-indigo-900 text-center">
                  <Text size="sm">Custom spacing</Text>
                </Box>
                <Box padding="md" className="bg-indigo-50 dark:bg-indigo-900 text-center">
                  <Text size="sm">Perfect control</Text>
                </Box>
              </Grid>
            </div>
            <pre className="showcase-code">
{`<Grid columns={2} gapX="lg" gapY="sm">
  <Box>Large horizontal gap</Box>
  <Box>Small vertical gap</Box>
  <Box>Custom spacing</Box>
  <Box>Perfect control</Box>
</Grid>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Responsive Grid */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Responsive Grid</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Responsive Breakpoints</h3>
            <div className="mb-4">
              <Grid 
                columns={1}
                responsive={{
                  sm: 2,
                  md: 3,
                  lg: 4
                }}
                gap="md"
              >
                <Box padding="md" className="bg-rose-50 dark:bg-rose-900 text-center">
                  <Text size="sm">1 col mobile</Text>
                </Box>
                <Box padding="md" className="bg-rose-50 dark:bg-rose-900 text-center">
                  <Text size="sm">2 col tablet</Text>
                </Box>
                <Box padding="md" className="bg-rose-50 dark:bg-rose-900 text-center">
                  <Text size="sm">3 col desktop</Text>
                </Box>
                <Box padding="md" className="bg-rose-50 dark:bg-rose-900 text-center">
                  <Text size="sm">4 col large</Text>
                </Box>
                <Box padding="md" className="bg-rose-50 dark:bg-rose-900 text-center">
                  <Text size="sm">Responsive</Text>
                </Box>
                <Box padding="md" className="bg-rose-50 dark:bg-rose-900 text-center">
                  <Text size="sm">Layout</Text>
                </Box>
              </Grid>
            </div>
            <pre className="showcase-code">
{`<Grid 
  columns={1}
  responsive={{
    sm: 2,   // 2 columns on small screens
    md: 3,   // 3 columns on medium screens  
    lg: 4    // 4 columns on large screens
  }}
  gap="md"
>
  <Box>Responsive item</Box>
</Grid>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Auto-fit Grid</h3>
            <div className="mb-4">
              <Grid autoFit minColWidth="120px" gap="md">
                <Box padding="md" className="bg-teal-50 dark:bg-teal-900 text-center">
                  <Text size="sm">Auto</Text>
                </Box>
                <Box padding="md" className="bg-teal-50 dark:bg-teal-900 text-center">
                  <Text size="sm">Fit</Text>
                </Box>
                <Box padding="md" className="bg-teal-50 dark:bg-teal-900 text-center">
                  <Text size="sm">Grid</Text>
                </Box>
                <Box padding="md" className="bg-teal-50 dark:bg-teal-900 text-center">
                  <Text size="sm">System</Text>
                </Box>
                <Box padding="md" className="bg-teal-50 dark:bg-teal-900 text-center">
                  <Text size="sm">Flexible</Text>
                </Box>
              </Grid>
            </div>
            <pre className="showcase-code">
{`<Grid autoFit minColWidth="120px" gap="md">
  <Box>Auto</Box>
  <Box>Fit</Box>
  <Box>Grid</Box>
  <Box>System</Box>
  <Box>Flexible</Box>
</Grid>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Grid Alignment */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Grid Alignment</h2>
        <div className="showcase-grid grid-cols-1 lg:grid-cols-2">
          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Item Alignment</h3>
            <div className="space-y-4 mb-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Center Aligned</h4>
                <Grid columns={3} gap="md" placeItems="center" className="h-24 bg-gray-50 dark:bg-gray-800 rounded">
                  <Box padding="sm" className="bg-red-100 dark:bg-red-900">
                    <Text size="xs">Center</Text>
                  </Box>
                  <Box padding="sm" className="bg-red-100 dark:bg-red-900">
                    <Text size="xs">Aligned</Text>
                  </Box>
                  <Box padding="sm" className="bg-red-100 dark:bg-red-900">
                    <Text size="xs">Items</Text>
                  </Box>
                </Grid>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-2">Start Aligned</h4>
                <Grid columns={3} gap="md" placeItems="start" className="h-24 bg-gray-50 dark:bg-gray-800 rounded">
                  <Box padding="sm" className="bg-blue-100 dark:bg-blue-900">
                    <Text size="xs">Start</Text>
                  </Box>
                  <Box padding="sm" className="bg-blue-100 dark:bg-blue-900">
                    <Text size="xs">Aligned</Text>
                  </Box>
                  <Box padding="sm" className="bg-blue-100 dark:bg-blue-900">
                    <Text size="xs">Items</Text>
                  </Box>
                </Grid>
              </div>
            </div>
            <pre className="showcase-code">
{`<Grid columns={3} placeItems="center">
  <Box>Center aligned</Box>
</Grid>

<Grid columns={3} placeItems="start">
  <Box>Start aligned</Box>
</Grid>`}
            </pre>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-4">Equal Height Items</h3>
            <div className="mb-4">
              <Grid columns={2} gap="md" equalHeight>
                <Box padding="md" className="bg-green-50 dark:bg-green-900">
                  <Text size="sm" className="font-semibold">Short Content</Text>
                  <Text size="xs">Brief description</Text>
                </Box>
                <Box padding="md" className="bg-green-50 dark:bg-green-900">
                  <Text size="sm" className="font-semibold">Longer Content</Text>
                  <Text size="xs">This box has much more content to demonstrate how equal height works. All items will match the tallest item's height.</Text>
                </Box>
              </Grid>
            </div>
            <pre className="showcase-code">
{`<Grid columns={2} gap="md" equalHeight>
  <Box>Short content</Box>
  <Box>
    Much longer content that would 
    normally make this box taller
  </Box>
</Grid>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Complex Grid Examples */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Complex Examples</h2>
        <div className="showcase-item">
          <h3 className="font-semibold mb-4">Dashboard Layout</h3>
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 mb-6 bg-gray-50 dark:bg-gray-900">
            <Grid columns={1} responsive={{ md: 3 }} gap="lg">
              <Box variant="secondary" padding="lg" radius="md">
                <H3>Statistics</H3>
                <Text className="text-2xl font-bold mt-2">1,234</Text>
                <Text size="sm" className="text-gray-600 dark:text-gray-400">Total users</Text>
              </Box>
              <Box variant="secondary" padding="lg" radius="md">
                <H3>Revenue</H3>
                <Text className="text-2xl font-bold mt-2">$12,345</Text>
                <Text size="sm" className="text-gray-600 dark:text-gray-400">This month</Text>
              </Box>
              <Box variant="secondary" padding="lg" radius="md">
                <H3>Growth</H3>
                <Text className="text-2xl font-bold mt-2 text-green-600">+23%</Text>
                <Text size="sm" className="text-gray-600 dark:text-gray-400">vs last month</Text>
              </Box>
            </Grid>

            <Grid columns={1} responsive={{ lg: 2 }} gap="lg" className="mt-6">
              <Box variant="secondary" padding="lg" radius="md">
                <H3>Chart Area</H3>
                <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded mt-4 flex items-center justify-center">
                  <Text size="sm" className="text-gray-500 dark:text-gray-400">Chart placeholder</Text>
                </div>
              </Box>
              <Box variant="secondary" padding="lg" radius="md">
                <H3>Recent Activity</H3>
                <div className="space-y-2 mt-4">
                  <div className="flex justify-between">
                    <Text size="sm">User signup</Text>
                    <Text size="xs" className="text-gray-500 dark:text-gray-400">2 min ago</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text size="sm">New order</Text>
                    <Text size="xs" className="text-gray-500 dark:text-gray-400">5 min ago</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text size="sm">Payment processed</Text>
                    <Text size="xs" className="text-gray-500 dark:text-gray-400">10 min ago</Text>
                  </div>
                </div>
              </Box>
            </Grid>
          </div>
          
          <pre className="showcase-code">
{`<Grid columns={1} responsive={{ md: 3 }} gap="lg">
  <Box variant="secondary">Statistics Card</Box>
  <Box variant="secondary">Revenue Card</Box>
  <Box variant="secondary">Growth Card</Box>
</Grid>

<Grid columns={1} responsive={{ lg: 2 }} gap="lg">
  <Box variant="secondary">Chart Area</Box>
  <Box variant="secondary">Activity Feed</Box>
</Grid>`}
          </pre>
        </div>
      </section>
    </div>
  );
}