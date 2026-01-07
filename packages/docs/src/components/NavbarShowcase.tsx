
import { Navbar } from '@davdevs/paper-basic';
import { Search, Bell } from 'lucide-react';

export function NavbarShowcase() {

  const navLinks = [
    { label: 'Home', href: '#', active: true },
    { label: 'About', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  const actions = (
    <div className="flex items-center space-x-3">
      <button className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
        Sign In
      </button>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
        Sign Up
      </button>
    </div>
  );

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="showcase-title">Navbar Component</h1>
        <p className="text-gray-700 dark:text-gray-300">Site navigation with paper elevation</p>
      </div>

      <div className="space-y-8">
        {/* Basic Usage */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Basic Usage</h2>
          <div className="space-y-4">
            <Navbar
              title="Paper UI"
              titleHref="#"
              links={navLinks}
              actions={actions}
            />
          </div>
        </div>

        {/* Variants */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Variants</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Default</h3>
              <Navbar
                title="Default Navbar"
                titleHref="#"
                links={navLinks.slice(0, 3)}
                variant="default"
              />
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Elevated</h3>
              <Navbar
                title="Elevated Navbar"
                titleHref="#"
                links={navLinks.slice(0, 3)}
                variant="elevated"
              />
            </div>

            <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Transparent</h3>
              <Navbar
                title="Transparent Navbar"
                titleHref="#"
                links={navLinks.slice(0, 3)}
                variant="transparent"
              />
            </div>
          </div>
        </div>

        {/* Positions */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Position Types</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Static (Default)</h3>
              <Navbar
                title="Static Navbar"
                titleHref="#"
                links={navLinks.slice(0, 3)}
                position="static"
              />
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sticky</h3>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden h-48">
                <Navbar
                  title="Sticky Navbar"
                  titleHref="#"
                  links={navLinks.slice(0, 3)}
                  position="sticky"
                />
                <div className="p-4 h-96 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
                  <p className="text-gray-700 dark:text-gray-300">Scroll to see sticky behavior (in a real page)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Navbar */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Simple Title Only</h2>
          <div className="space-y-4">
            <Navbar title="Simple App" titleHref="#" />
          </div>
        </div>

        {/* Custom Actions */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Custom Actions</h2>
          <div className="space-y-4">
            <Navbar
              title="Custom Actions"
              titleHref="#"
              links={navLinks.slice(0, 2)}
              actions={
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100">
                    <Search size={16} />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100">
                    <Bell size={16} />
                  </button>
                </div>
              }
            />
          </div>
        </div>

        {/* Code Example */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Code Example</h2>
          <pre className="showcase-code mt-4">{`import { Navbar } from '@davdevs/paper-basic';

const navLinks = [
  { label: 'Home', href: '/', active: true },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const actions = (
  <div className="flex items-center space-x-3">
    <button className="text-sm text-gray-700 hover:text-gray-900">
      Sign In
    </button>
    <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
      Sign Up
    </button>
  </div>
);

function App() {
  return (
    <Navbar
      title="My App"
      titleHref="/"
      links={navLinks}
      actions={actions}
      variant="elevated"
      position="sticky"
    />
  );
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}