import React, { useState } from 'react';
import { BoxShowcase } from './components/BoxShowcase';
import { StackShowcase } from './components/StackShowcase';
import { InlineShowcase } from './components/InlineShowcase';
import { DividerShowcase } from './components/DividerShowcase';

interface NavItem {
  id: string;
  label: string;
  component: React.ComponentType;
}

const navigationItems: NavItem[] = [
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
  // Add more components here as they're created
];

function App() {
  const [activeComponent, setActiveComponent] = useState<string>('box');

  const ActiveComponent = navigationItems.find(item => item.id === activeComponent)?.component || BoxShowcase;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <nav className="sidebar">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-gray-900 mb-2">Dav/Devs Paper UI</h1>
          <p className="text-sm text-gray-600">Component Library</p>
        </div>
        
        <div className="sidebar-nav">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Primitives
          </h2>
          {navigationItems.map((item) => (
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
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <ActiveComponent />
      </main>
    </div>
  );
}

export default App;