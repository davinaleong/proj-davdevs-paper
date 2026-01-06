import React from 'react';
import { Home } from 'lucide-react';
import { Breadcrumb } from '@davdevs/paper-basic';
import type { BreadcrumbItem } from '@davdevs/paper-basic';

const sampleBreadcrumbs: BreadcrumbItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Category', href: '#' },
  { label: 'Subcategory', href: '#' },
  { label: 'Current Page', current: true }
];

const longBreadcrumbs: BreadcrumbItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Level 1', href: '#' },
  { label: 'Level 2', href: '#' },
  { label: 'Level 3', href: '#' },
  { label: 'Level 4', href: '#' },
  { label: 'Level 5', href: '#' },
  { label: 'Current Page', current: true }
];

export function BreadcrumbShowcase() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">Breadcrumb</h1>
        <p className="text-gray-600">Navigation trails with paper-inspired design</p>
      </div>

      <div className="space-y-8">
        {/* Basic Usage */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Basic Usage</h2>
          <div className="space-y-4">
            <Breadcrumb items={sampleBreadcrumbs} />
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Sizes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Small</h3>
              <Breadcrumb items={sampleBreadcrumbs} size="sm" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Medium (Default)</h3>
              <Breadcrumb items={sampleBreadcrumbs} size="md" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Large</h3>
              <Breadcrumb items={sampleBreadcrumbs} size="lg" />
            </div>
          </div>
        </div>

        {/* With Home Icon */}
        <div>
          <h2 className="text-lg font-semibold mb-4">With Home Icon</h2>
          <div className="space-y-4">
            <Breadcrumb items={sampleBreadcrumbs} showHome={true} />
            <Breadcrumb 
              items={sampleBreadcrumbs} 
              showHome={true} 
              homeIcon="🏡" 
            />
          </div>
        </div>

        {/* Custom Separator */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Custom Separators</h2>
          <div className="space-y-4">
            <Breadcrumb items={sampleBreadcrumbs} separator="→" />
            <Breadcrumb items={sampleBreadcrumbs} separator=">" />
            <Breadcrumb items={sampleBreadcrumbs} separator={<span className="text-blue-500">•</span>} />
          </div>
        </div>

        {/* Max Items with Ellipsis */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Truncation</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full breadcrumb (7 items)</h3>
              <Breadcrumb items={longBreadcrumbs} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Max 5 items</h3>
              <Breadcrumb items={longBreadcrumbs} maxItems={5} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Max 3 items</h3>
              <Breadcrumb items={longBreadcrumbs} maxItems={3} />
            </div>
          </div>
        </div>

        {/* With Disabled Items */}
        <div>
          <h2 className="text-lg font-semibold mb-4">With Disabled Items</h2>
          <div className="space-y-4">
            <Breadcrumb 
              items={[
                { label: 'Home', href: '#' },
                { label: 'Restricted Area', disabled: true },
                { label: 'Subcategory', href: '#' },
                { label: 'Current Page', current: true }
              ]} 
            />
          </div>
        </div>

        {/* Implementation Example */}
        <div>
            <h2 className="text-lg font-semibold mb-4">Usage Example</h2>
            <pre className="showcase-code mt-4">{`import { Breadcrumb } from '@davdevs/paper-basic';

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Laptops', href: '/products/laptops' },
  { label: 'MacBook Pro', current: true }
];

function MyBreadcrumb() {
  return (
    <Breadcrumb 
      items={breadcrumbItems}
      showHome={true}
      maxItems={4}
      separator="/"
    />
  );
}`}</pre>
        </div>
      </div>
    </div>
  );
}