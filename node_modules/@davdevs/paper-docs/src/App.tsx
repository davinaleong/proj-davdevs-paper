import React, { useState } from 'react';
import { BoxShowcase } from './components/BoxShowcase';
import { StackShowcase } from './components/StackShowcase';
import { InlineShowcase } from './components/InlineShowcase';
import { DividerShowcase } from './components/DividerShowcase';
import { SurfaceShowcase } from './components/SurfaceShowcase';
import { ContainerShowcase } from './components/ContainerShowcase';
import { HeadingShowcase } from './components/HeadingShowcase';
import { BodyTextShowcase } from './components/BodyTextShowcase';
import { RichContentShowcase } from './components/RichContentShowcase';
import { PageShowcase } from './components/PageShowcase';
import { SectionShowcase } from './components/SectionShowcase';
import { GridShowcase } from './components/GridShowcase';

interface NavItem {
  id: string;
  label: string;
  component: React.ComponentType;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

const navigationGroups: NavGroup[] = [
  {
    title: 'Foundations',
    items: [
      {
        id: 'box',
        label: 'Box',
        component: BoxShowcase
      },
      {
        id: 'stack',
        label: 'Stack',
        component: StackShowcase
      },
      {
        id: 'inline',
        label: 'Inline',
        component: InlineShowcase
      },
      {
        id: 'divider',
        label: 'Divider',
        component: DividerShowcase
      },
      {
        id: 'surface',
        label: 'Surface',
        component: SurfaceShowcase
      },
      {
        id: 'container',
        label: 'Container',
        component: ContainerShowcase
      },
    ]
  },
  {
    title: 'Layout',
    items: [
      {
        id: 'page',
        label: 'Page',
        component: PageShowcase
      },
      {
        id: 'section',
        label: 'Section',
        component: SectionShowcase
      },
      {
        id: 'grid',
        label: 'Grid',
        component: GridShowcase
      }
    ]
  },
  {
    title: 'Typography',
    items: [
      {
        id: 'headings',
        label: 'Headings',
        component: HeadingShowcase
      },
      {
        id: 'body-text',
        label: 'Body Text',
        component: BodyTextShowcase
      },
      {
        id: 'rich-content',
        label: 'Rich Content',
        component: RichContentShowcase
      },
    ]
  },
  // Add more groups here as they're created
];

// Flatten all items for easy lookup
const allNavigationItems = navigationGroups.flatMap(group => group.items);

function App() {
  const [activeComponent, setActiveComponent] = useState<string>('box');

  const ActiveComponent = allNavigationItems.find(item => item.id === activeComponent)?.component || BoxShowcase;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <nav className="sidebar">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-blue-500 mb-2">Dav/Devs Paper UI</h1>
          <p className="text-sm text-gray-600">Component Library</p>
        </div>
        
        <div className="sidebar-nav">
          {navigationGroups.map((group) => (
            <div key={group.title} className="mb-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                {group.title}
              </h2>
              {group.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveComponent(item.id)}
                  className={`sidebar-link w-full text-left ${
                    activeComponent === item.id ? 'active' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <ActiveComponent />
      </main>
    </div>
  );
}

export default App;