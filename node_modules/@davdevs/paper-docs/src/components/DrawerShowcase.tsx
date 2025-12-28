import React, { useState } from 'react';
import { Gauge, Briefcase, Users, ChartSpline, Cog } from 'lucide-react';

// Mock Drawer component for demonstration
const Drawer = ({ 
  children, 
  open = false, 
  onClose, 
  side = 'right', 
  size = 'md', 
  title, 
  showCloseButton = true,
  className = '' 
}: any) => {
  if (!open) return null;

  const sides = {
    left: 'inset-y-0 left-0',
    right: 'inset-y-0 right-0',
    top: 'inset-x-0 top-0',
    bottom: 'inset-x-0 bottom-0'
  };

  const sizes = {
    sm: side === 'left' || side === 'right' ? 'w-64' : 'h-64',
    md: side === 'left' || side === 'right' ? 'w-80' : 'h-80',
    lg: side === 'left' || side === 'right' ? 'w-96' : 'h-96',
    xl: side === 'left' || side === 'right' ? 'w-[32rem]' : 'h-[32rem]'
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={handleBackdropClick}
      />

      {/* Drawer */}
      <div className={`fixed z-50 bg-white shadow-xl border-gray-200 ${sides[side]} ${sizes[size]} ${
        side === 'left' ? 'border-r' : 
        side === 'right' ? 'border-l' : 
        side === 'top' ? 'border-b' : 'border-t'
      } ${className}`}>
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            {title && (
              <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            )}
            {showCloseButton && (
              <button
                type="button"
                className="p-1 ml-3 rounded-sm text-gray-400 hover:text-gray-600 transition-colors"
                onClick={onClose}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        )}
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </>
  );
};

export function DrawerShowcase() {
  const [drawers, setDrawers] = useState<{[key: string]: boolean}>({});

  const openDrawer = (id: string) => {
    setDrawers(prev => ({ ...prev, [id]: true }));
  };

  const closeDrawer = (id: string) => {
    setDrawers(prev => ({ ...prev, [id]: false }));
  };

  return (
    <div>
      <div className="showcase-section">
        <h1 className="showcase-title">Drawer Component</h1>
        <p className="text-gray-600 mb-8">
          Display content in a sliding panel with paper-inspired design, focus management, and smooth animations.
        </p>
      </div>

      {/* Drawer Sides */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Drawer Sides</h2>
        <div className="showcase-grid grid-cols-2 md:grid-cols-4">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Left</h3>
            <button 
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              onClick={() => openDrawer('left')}
            >
              Left Drawer
            </button>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Right</h3>
            <button 
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              onClick={() => openDrawer('right')}
            >
              Right Drawer
            </button>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Top</h3>
            <button 
              className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
              onClick={() => openDrawer('top')}
            >
              Top Drawer
            </button>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Bottom</h3>
            <button 
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              onClick={() => openDrawer('bottom')}
            >
              Bottom Drawer
            </button>
          </div>
        </div>

        <pre className="showcase-code">
{`// Different sides
<Drawer side="left">Left drawer content</Drawer>
<Drawer side="right">Right drawer content</Drawer>
<Drawer side="top">Top drawer content</Drawer>
<Drawer side="bottom">Bottom drawer content</Drawer>`}
        </pre>
      </section>

      {/* Drawer Sizes */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Drawer Sizes</h2>
        <div className="showcase-grid grid-cols-2 md:grid-cols-4">
          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Small</h3>
            <button 
              className="px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm"
              onClick={() => openDrawer('size-sm')}
            >
              Small Drawer
            </button>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Medium</h3>
            <button 
              className="px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm"
              onClick={() => openDrawer('size-md')}
            >
              Medium Drawer
            </button>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Large</h3>
            <button 
              className="px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm"
              onClick={() => openDrawer('size-lg')}
            >
              Large Drawer
            </button>
          </div>

          <div className="showcase-item">
            <h3 className="font-semibold mb-2">Extra Large</h3>
            <button 
              className="px-3 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm"
              onClick={() => openDrawer('size-xl')}
            >
              XL Drawer
            </button>
          </div>
        </div>

        <pre className="showcase-code">
{`// Different sizes
<Drawer size="sm">Small drawer (256px width)</Drawer>
<Drawer size="md">Medium drawer (320px width)</Drawer>
<Drawer size="lg">Large drawer (384px width)</Drawer>
<Drawer size="xl">Extra large drawer (512px width)</Drawer>`}
        </pre>
      </section>

      {/* Navigation Drawer */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Navigation Drawer</h2>
        <div className="showcase-item">
          <button 
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            onClick={() => openDrawer('navigation')}
          >
            Open Navigation
          </button>
          <pre className="showcase-code mt-2">
{`<Drawer 
  open={isOpen} 
  onClose={() => setIsOpen(false)}
  side="left"
  title="Navigation"
>
  <nav className="space-y-2">
    <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100">
      Dashboard
    </a>
    <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100">
      Projects
    </a>
    <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100">
      Settings
    </a>
  </nav>
</Drawer>`}
          </pre>
        </div>
      </section>

      {/* Settings Drawer */}
      <section className="showcase-section">
        <h2 className="showcase-subtitle">Settings Drawer</h2>
        <div className="showcase-item">
          <button 
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            onClick={() => openDrawer('settings')}
          >
            Open Settings
          </button>
          <pre className="showcase-code mt-2">
{`<Drawer 
  open={isOpen} 
  onClose={() => setIsOpen(false)}
  side="right"
  title="Settings"
  size="lg"
>
  <div className="space-y-6">
    <div>
      <label className="block text-sm font-medium mb-2">
        Theme
      </label>
      <select className="w-full px-3 py-2 border rounded-md">
        <option>Light</option>
        <option>Dark</option>
      </select>
    </div>
    <div>
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" />
        Enable notifications
      </label>
    </div>
  </div>
</Drawer>`}
          </pre>
        </div>
      </section>

      {/* Rendered Drawers */}
      <Drawer 
        open={drawers['left']} 
        onClose={() => closeDrawer('left')}
        side="left"
        title="Left Drawer"
      >
        <p>This drawer slides in from the left side.</p>
        <p className="mt-4 text-gray-600">Perfect for navigation menus or secondary content.</p>
      </Drawer>

      <Drawer 
        open={drawers['right']} 
        onClose={() => closeDrawer('right')}
        side="right"
        title="Right Drawer"
      >
        <p>This drawer slides in from the right side.</p>
        <p className="mt-4 text-gray-600">Commonly used for settings, filters, or additional information.</p>
      </Drawer>

      <Drawer 
        open={drawers['top']} 
        onClose={() => closeDrawer('top')}
        side="top"
        title="Top Drawer"
      >
        <p>This drawer slides in from the top.</p>
        <p className="mt-4 text-gray-600">Useful for notifications or quick actions.</p>
      </Drawer>

      <Drawer 
        open={drawers['bottom']} 
        onClose={() => closeDrawer('bottom')}
        side="bottom"
        title="Bottom Drawer"
      >
        <p>This drawer slides in from the bottom.</p>
        <p className="mt-4 text-gray-600">Great for mobile interfaces and quick forms.</p>
      </Drawer>

      <Drawer 
        open={drawers['size-sm']} 
        onClose={() => closeDrawer('size-sm')}
        side="right"
        size="sm"
        title="Small Drawer"
      >
        <p>This is a small drawer (256px wide).</p>
      </Drawer>

      <Drawer 
        open={drawers['size-md']} 
        onClose={() => closeDrawer('size-md')}
        side="right"
        size="md"
        title="Medium Drawer"
      >
        <p>This is a medium drawer (320px wide).</p>
      </Drawer>

      <Drawer 
        open={drawers['size-lg']} 
        onClose={() => closeDrawer('size-lg')}
        side="right"
        size="lg"
        title="Large Drawer"
      >
        <p>This is a large drawer (384px wide).</p>
        <p className="mt-4 text-gray-600">More space for complex content.</p>
      </Drawer>

      <Drawer 
        open={drawers['size-xl']} 
        onClose={() => closeDrawer('size-xl')}
        side="right"
        size="xl"
        title="Extra Large Drawer"
      >
        <p>This is an extra large drawer (512px wide).</p>
        <p className="mt-4 text-gray-600">Maximum space for detailed forms or content.</p>
      </Drawer>

      <Drawer 
        open={drawers['navigation']} 
        onClose={() => closeDrawer('navigation')}
        side="left"
        title="Navigation"
      >
        <nav className="space-y-2">
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
            <Gauge size={16} />
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
            <Briefcase size={16} />
            Projects
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
            <Users size={16} />
            Team
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
            <ChartSpline size={16} />
            Analytics
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors">
            <Cog size={16} />
            Settings
          </a>
        </nav>
      </Drawer>

      <Drawer 
        open={drawers['settings']} 
        onClose={() => closeDrawer('settings')}
        side="right"
        title="Settings"
        size="lg"
      >
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Theme</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Light</option>
              <option>Dark</option>
              <option>System</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Language</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Notifications</h3>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              Email notifications
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Push notifications
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              Marketing emails
            </label>
          </div>
          <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
            <button 
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              onClick={() => closeDrawer('settings')}
            >
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Save Settings
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}