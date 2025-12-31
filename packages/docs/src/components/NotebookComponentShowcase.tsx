import React, { useState } from 'react';
import { Notebook } from '@davdevs/paper-premium';
import type { NotebookPage } from '@davdevs/paper-premium';

export function NotebookComponentShowcase() {
  const [activePage, setActivePage] = useState('notes');

  const samplePages: NotebookPage[] = [
    {
      id: 'notes',
      title: 'Meeting Notes',
      icon: '📝',
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Project Kickoff Meeting</h3>
            <p className="text-gray-600 text-sm mb-4">December 31, 2025 - 2:00 PM</p>
          </div>
          
          <div className="space-y-3">
            <div>
              <h4 className="font-medium">Attendees:</h4>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>Sarah Johnson - Project Manager</li>
                <li>Mike Chen - Lead Developer</li>
                <li>Elena Rodriguez - Designer</li>
                <li>David Kim - QA Engineer</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium">Key Discussion Points:</h4>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>Premium component architecture</li>
                <li>Timeline and deliverables</li>
                <li>Testing strategy</li>
                <li>Documentation requirements</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium">Action Items:</h4>
              <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                <li>✅ Create component specifications</li>
                <li>⏳ Design mockups and prototypes</li>
                <li>📅 Schedule code review sessions</li>
                <li>📋 Set up testing environment</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ideas',
      title: 'Ideas',
      icon: '💡',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-4">Feature Ideas</h3>
          
          <div className="space-y-6">
            <div className="border-l-4 border-yellow-400 pl-4">
              <h4 className="font-medium text-yellow-800">Paper Animation Effects</h4>
              <p className="text-sm text-gray-600 mt-1">
                Add subtle animations when pages turn or stack layers shift. Could include 
                paper flutter effects and realistic physics-based movements.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-400 pl-4">
              <h4 className="font-medium text-blue-800">Handwriting Font Integration</h4>
              <p className="text-sm text-gray-600 mt-1">
                Integrate with handwriting fonts to make text look more natural on paper surfaces.
                Could be toggleable for different use cases.
              </p>
            </div>
            
            <div className="border-l-4 border-green-400 pl-4">
              <h4 className="font-medium text-green-800">Coffee Stain Effects</h4>
              <p className="text-sm text-gray-600 mt-1">
                Optional weathering effects like coffee stains, ink blots, or aging marks 
                for more authentic paper feel.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-400 pl-4">
              <h4 className="font-medium text-purple-800">Multi-Notebook Views</h4>
              <p className="text-sm text-gray-600 mt-1">
                Allow multiple notebooks to be open simultaneously with tab management 
                and cross-notebook linking.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'todo',
      title: 'Todo',
      icon: '✅',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-4">Development Tasks</h3>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <input type="checkbox" checked readOnly className="rounded" />
              <span className="line-through text-gray-500">Create PaperStack component</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <input type="checkbox" checked readOnly className="rounded" />
              <span className="line-through text-gray-500">Implement SidebarLayout</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <input type="checkbox" checked readOnly className="rounded" />
              <span className="line-through text-gray-500">Build Notebook component</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <input type="checkbox" readOnly className="rounded" />
              <span>Add keyboard navigation</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <input type="checkbox" readOnly className="rounded" />
              <span>Implement drag and drop for pages</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <input type="checkbox" readOnly className="rounded" />
              <span>Add export functionality</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <input type="checkbox" readOnly className="rounded" />
              <span>Create comprehensive documentation</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <input type="checkbox" readOnly className="rounded" />
              <span>Write unit tests</span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Progress Summary</h4>
            <div className="w-full bg-blue-200 rounded-full h-2 mb-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '37.5%' }}></div>
            </div>
            <p className="text-sm text-blue-800">3 of 8 tasks completed</p>
          </div>
        </div>
      )
    },
    {
      id: 'sketches',
      title: 'Sketches',
      icon: '🎨',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-4">Design Sketches</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="text-4xl mb-2">📐</div>
              <p className="text-sm text-gray-600">Component Architecture</p>
            </div>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="text-4xl mb-2">🎨</div>
              <p className="text-sm text-gray-600">UI Mockups</p>
            </div>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="text-4xl mb-2">🔄</div>
              <p className="text-sm text-gray-600">User Flow</p>
            </div>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="text-4xl mb-2">📊</div>
              <p className="text-sm text-gray-600">Data Models</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 italic">
              💡 In a real application, this area could contain an integrated drawing canvas 
              or image upload functionality for actual sketches and diagrams.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Notebook (Component)</h1>
      <p className="text-lg text-gray-600 mb-8">
        Multi-page container with realistic notebook styling and tabbed navigation
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">Interactive Notebook</h2>
          <div className="flex justify-center">
            <Notebook
              pages={samplePages}
              activePage={activePage}
              onPageChange={setActivePage}
              style="spiral"
              size="lg"
              lines="ruled"
              texture="grain"
              interactive
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Notebook Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <Notebook
                style="spiral"
                size="sm"
                lines="ruled"
              >
                <div className="text-center">
                  <h4 className="font-medium">Spiral</h4>
                  <p className="text-xs text-gray-600">Ring binding</p>
                </div>
              </Notebook>
              <span className="mt-2 text-sm font-medium">Spiral</span>
            </div>

            <div className="flex flex-col items-center">
              <Notebook
                style="composition"
                size="sm"
                lines="ruled"
              >
                <div className="text-center">
                  <h4 className="font-medium">Composition</h4>
                  <p className="text-xs text-gray-600">Classic notebook</p>
                </div>
              </Notebook>
              <span className="mt-2 text-sm font-medium">Composition</span>
            </div>

            <div className="flex flex-col items-center">
              <Notebook
                style="leather"
                size="sm"
                lines="none"
              >
                <div className="text-center">
                  <h4 className="font-medium">Leather</h4>
                  <p className="text-xs text-gray-600">Premium bound</p>
                </div>
              </Notebook>
              <span className="mt-2 text-sm font-medium">Leather</span>
            </div>

            <div className="flex flex-col items-center">
              <Notebook
                style="ring"
                size="sm"
                lines="dotted"
              >
                <div className="text-center">
                  <h4 className="font-medium">Ring Binder</h4>
                  <p className="text-xs text-gray-600">Three rings</p>
                </div>
              </Notebook>
              <span className="mt-2 text-sm font-medium">Ring Binder</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Line Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Notebook size="sm" lines="none" style="composition">
              <div>
                <h4 className="font-medium mb-2">Blank</h4>
                <p className="text-xs text-gray-600">Plain paper for free-form content</p>
              </div>
            </Notebook>

            <Notebook size="sm" lines="ruled" style="composition">
              <div>
                <h4 className="font-medium mb-2">Ruled</h4>
                <p className="text-xs text-gray-600">Traditional lined paper</p>
              </div>
            </Notebook>

            <Notebook size="sm" lines="dotted" style="composition">
              <div>
                <h4 className="font-medium mb-2">Dotted</h4>
                <p className="text-xs text-gray-600">Dot grid for flexible layouts</p>
              </div>
            </Notebook>

            <Notebook size="sm" lines="grid" style="composition">
              <div>
                <h4 className="font-medium mb-2">Grid</h4>
                <p className="text-xs text-gray-600">Square grid for precise layouts</p>
              </div>
            </Notebook>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Features</h2>
          <div className="prose max-w-none">
            <ul>
              <li><strong>Multiple Binding Styles</strong> - Spiral, composition, leather, and ring binder options</li>
              <li><strong>Line Variants</strong> - Blank, ruled, dotted, and grid paper styles</li>
              <li><strong>Tabbed Navigation</strong> - Easy page switching with visual tabs</li>
              <li><strong>Paper Textures</strong> - Realistic grain, linen, and fiber effects</li>
              <li><strong>Responsive Sizing</strong> - Multiple size options from small to extra large</li>
              <li><strong>Interactive Effects</strong> - Hover animations and depth changes</li>
              <li><strong>Margin Guidelines</strong> - Traditional red margin lines for authentic feel</li>
              <li><strong>Page Numbers</strong> - Automatic page numbering for multi-page content</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}