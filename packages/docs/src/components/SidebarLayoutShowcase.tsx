import React, { useState } from 'react';
import { SidebarLayout } from '@davdevs/paper-premium';

export function SidebarLayoutShowcase() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Sidebar Layout</h1>
      <p className="text-lg text-gray-600 mb-8">
        Two-column paper layouts with premium styling and interactive features
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">Basic Layouts</h2>
          <div className="space-y-8">
            <div className="h-96">
              <SidebarLayout
                sidebarPosition="left"
                sidebarWidth="md"
                sidebar={
                  <div>
                    <h3 className="font-semibold mb-4">Navigation</h3>
                    <nav className="space-y-2">
                      <a href="#" className="block px-3 py-2 hover:bg-gray-50 rounded">Dashboard</a>
                      <a href="#" className="block px-3 py-2 hover:bg-gray-50 rounded">Projects</a>
                      <a href="#" className="block px-3 py-2 hover:bg-gray-50 rounded">Team</a>
                      <a href="#" className="block px-3 py-2 hover:bg-gray-50 rounded">Settings</a>
                    </nav>
                  </div>
                }
              >
                <div>
                  <h3 className="text-xl font-semibold mb-4">Main Content Area</h3>
                  <p className="text-gray-600 mb-4">
                    This is the main content area of the sidebar layout. It automatically adjusts 
                    to fill the remaining space after the sidebar.
                  </p>
                  <p className="text-gray-600">
                    The layout is responsive and will stack on smaller screens when the responsive 
                    prop is enabled.
                  </p>
                </div>
              </SidebarLayout>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Paper Styles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="h-64">
              <SidebarLayout
                sidebarWidth="sm"
                paperStyle="flat"
                sidebar={
                  <div>
                    <h4 className="font-medium mb-2">Flat Style</h4>
                    <p className="text-sm text-gray-600">Clean, minimal appearance.</p>
                  </div>
                }
              >
                <div>
                  <h4 className="font-medium">Content</h4>
                  <p className="text-sm text-gray-600">No shadows or depth effects.</p>
                </div>
              </SidebarLayout>
            </div>

            <div className="h-64">
              <SidebarLayout
                sidebarWidth="sm"
                paperStyle="elevated"
                sidebar={
                  <div>
                    <h4 className="font-medium mb-2">Elevated Style</h4>
                    <p className="text-sm text-gray-600">Subtle shadows for depth.</p>
                  </div>
                }
              >
                <div>
                  <h4 className="font-medium">Content</h4>
                  <p className="text-sm text-gray-600">Modern elevated appearance.</p>
                </div>
              </SidebarLayout>
            </div>

            <div className="h-64">
              <SidebarLayout
                sidebarWidth="sm"
                paperStyle="stacked"
                sidebar={
                  <div>
                    <h4 className="font-medium mb-2">Stacked Style</h4>
                    <p className="text-sm text-gray-600">Multiple paper layers.</p>
                  </div>
                }
              >
                <div>
                  <h4 className="font-medium">Content</h4>
                  <p className="text-sm text-gray-600">Realistic stacked paper effect.</p>
                </div>
              </SidebarLayout>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Textures & Positioning</h2>
          <div className="space-y-8">
            <div className="h-80">
              <SidebarLayout
                sidebarPosition="right"
                sidebarWidth="lg"
                texture="grain"
                sidebar={
                  <div>
                    <h3 className="font-semibold mb-4">Right Sidebar</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Recent Activity</h4>
                        <div className="space-y-2">
                          <div className="text-xs text-gray-600">User logged in</div>
                          <div className="text-xs text-gray-600">Document saved</div>
                          <div className="text-xs text-gray-600">Settings updated</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-2">Quick Actions</h4>
                        <div className="space-y-1">
                          <button className="w-full text-left px-2 py-1 text-xs hover:bg-gray-100 rounded">
                            Create New
                          </button>
                          <button className="w-full text-left px-2 py-1 text-xs hover:bg-gray-100 rounded">
                            Import Data
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              >
                <div>
                  <h3 className="text-xl font-semibold mb-4">Right-Aligned Sidebar</h3>
                  <p className="text-gray-600 mb-4">
                    The sidebar can be positioned on either the left or right side of the layout.
                    This example shows a right-aligned sidebar with grain texture.
                  </p>
                  <p className="text-gray-600">
                    The main content area automatically adjusts its order and spacing based on 
                    the sidebar position.
                  </p>
                </div>
              </SidebarLayout>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Collapsible Sidebar</h2>
          <div className="h-96">
            <SidebarLayout
              collapsible
              texture="linen"
              sidebar={
                <div>
                  <h3 className="font-semibold mb-4">Collapsible Menu</h3>
                  <nav className="space-y-2">
                    <a href="#" className="block px-3 py-2 hover:bg-gray-50 rounded">
                      📊 Analytics
                    </a>
                    <a href="#" className="block px-3 py-2 hover:bg-gray-50 rounded">
                      📁 Projects
                    </a>
                    <a href="#" className="block px-3 py-2 hover:bg-gray-50 rounded">
                      👥 Team
                    </a>
                    <a href="#" className="block px-3 py-2 hover:bg-gray-50 rounded">
                      ⚙️ Settings
                    </a>
                  </nav>
                </div>
              }
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">Collapsible Sidebar Demo</h3>
                <p className="text-gray-600 mb-4">
                  Click the toggle button on the sidebar to collapse and expand it. The main 
                  content area will automatically adjust to use the available space.
                </p>
                <p className="text-gray-600 mb-4">
                  This is perfect for applications that need to maximize content space while 
                  keeping navigation accessible.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">💡 Pro Tip</h4>
                  <p className="text-blue-800 text-sm">
                    The collapsible state is managed internally, but you can also control it 
                    externally by managing your own state and passing the collapsed state to the component.
                  </p>
                </div>
              </div>
            </SidebarLayout>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Use Cases</h2>
          <div className="prose max-w-none">
            <ul>
              <li><strong>Admin Dashboards</strong> - Navigation sidebar with main dashboard content</li>
              <li><strong>Documentation Sites</strong> - Table of contents with article content</li>
              <li><strong>E-commerce</strong> - Filter sidebar with product listings</li>
              <li><strong>Applications</strong> - Tool palette with canvas or workspace</li>
              <li><strong>Content Management</strong> - Category tree with content editor</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}