import React from 'react';
import { Footer } from '@davdevs/paper-basic';
// import Logo from "../../../../../assets/logo.svg"

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
      <img src={Logo} alt="Logo" className="w-8 h-8 mr-2" />
      <span className="text-blue-500 text-lg font-semibold">Dav/Devs Paper UI</span>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">Footer</h1>
          <p className="text-gray-700 dark:text-gray-300">Page footer sections with paper-inspired design</p>
        </div>

        <div className="space-y-12">
          {/* Full Footer */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Full Footer</h2>
            <div className="border border-white dark:border-black rounded-lg overflow-hidden">
              <div className="bg-white dark:bg-black p-4 text-center text-gray-500 text-sm border-b border-gray-200 dark:border-gray-700">
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
            <div className="border border-white dark:border-black rounded-lg overflow-hidden">
              <div className="bg-white dark:bg-black p-4 text-center text-gray-500 text-sm border-b border-gray-200 dark:border-gray-700">
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
            <div className="border border-white dark:border-black rounded-lg overflow-hidden">
              <div className="bg-white dark:bg-black p-4 text-center text-gray-500 text-sm border-b border-gray-200 dark:border-gray-700">
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
            <div className="border border-white dark:border-black rounded-lg overflow-hidden">
              <div className="bg-white dark:bg-black p-4 text-center text-gray-500 text-sm border-b border-gray-200 dark:border-gray-700">
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
            <div className="border border-white dark:border-black rounded-lg overflow-hidden">
              <div className="bg-white dark:bg-black p-4 text-center text-gray-500 text-sm border-b border-gray-200 dark:border-gray-700">
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
                <div className="col-span-2">
                  <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 tracking-wider uppercase mb-4">
                    Subscribe
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Get the latest updates and news.
                  </p>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-3 py-2 border border-gray-300 bg-white dark:border-gray-700 dark:bg-black rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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