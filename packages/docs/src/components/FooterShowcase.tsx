import React from 'react';
import { Footer } from '@davdevs/paper-basic';

export function FooterShowcase() {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'API Reference', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '#' },
        { label: 'Community', href: '#' },
        { label: 'Status', href: '#' },
        { label: 'GitHub', href: '#', external: true },
      ],
    },
  ];

  const socialLinks = [
    { label: 'Twitter', href: '#', external: true },
    { label: 'GitHub', href: '#', external: true },
    { label: 'Discord', href: '#', external: true },
  ];

  const logo = (
    <div className="flex items-center">
      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
        <span className="text-white font-bold text-sm">P</span>
      </div>
      <span className="text-lg font-semibold text-gray-900">Paper UI</span>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Footer</h1>
          <p className="text-gray-600">Page footer sections with paper-inspired design</p>
        </div>

        <div className="space-y-12">
          {/* Full Footer */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Full Footer</h2>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-white p-4 text-center text-gray-500 text-sm border-b">
                Page content above footer
              </div>
              <Footer
                sections={footerSections}
                logo={logo}
                socialLinks={socialLinks}
                copyright="© 2024 Paper UI. All rights reserved."
                variant="full"
              />
            </div>
          </div>

          {/* Default Footer */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Default Footer</h2>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-white p-4 text-center text-gray-500 text-sm border-b">
                Page content above footer
              </div>
              <Footer
                sections={footerSections.slice(0, 2)}
                logo={logo}
                socialLinks={socialLinks}
                copyright="© 2024 Paper UI. All rights reserved."
                variant="default"
              />
            </div>
          </div>

          {/* Minimal Footer */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Minimal Footer</h2>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-white p-4 text-center text-gray-500 text-sm border-b">
                Page content above footer
              </div>
              <Footer
                logo={logo}
                socialLinks={socialLinks.slice(0, 2)}
                copyright="© 2024 Paper UI. All rights reserved."
                variant="minimal"
              />
            </div>
          </div>

          {/* Copyright Only */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Copyright Only</h2>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-white p-4 text-center text-gray-500 text-sm border-b">
                Page content above footer
              </div>
              <Footer
                copyright="© 2024 Paper UI. All rights reserved."
                variant="minimal"
              />
            </div>
          </div>

          {/* Custom Content */}
          <div>
            <h2 className="text-lg font-semibold mb-4">With Custom Content</h2>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-white p-4 text-center text-gray-500 text-sm border-b">
                Page content above footer
              </div>
              <Footer
                sections={[
                  {
                    title: 'Newsletter',
                    links: []
                  }
                ]}
                logo={logo}
                copyright="© 2024 Paper UI. All rights reserved."
                variant="default"
              >
                <div className="col-span-1">
                  <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                    Subscribe
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get the latest updates and news.
                  </p>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-r-md hover:bg-blue-700 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </Footer>
            </div>
          </div>

          {/* Code Example */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Code Example</h2>
            <pre className="showcase-code mt-4">{`import { Footer } from '@davdevs/paper-basic';

const footerSections = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Documentation', href: '/docs' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com', external: true },
  { label: 'GitHub', href: 'https://github.com', external: true },
];

const logo = (
  <div className="flex items-center">
    <img src="/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
    <span className="text-lg font-semibold">My Company</span>
  </div>
);

function App() {
  return (
    <Footer
      sections={footerSections}
      logo={logo}
      socialLinks={socialLinks}
      copyright="© 2024 My Company. All rights reserved."
      variant="default"
    />
  );
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}