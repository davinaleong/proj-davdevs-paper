import React, { useState } from 'react';
import { Tabs } from '@davdevs/paper-basic';
import type { TabItem } from '@davdevs/paper-basic';

export function TabsShowcase() {
  const [activeTab1, setActiveTab1] = useState('tab1');
  const [activeTab2, setActiveTab2] = useState('profile');

  const basicTabs: TabItem[] = [
    {
      id: 'tab1',
      label: 'Overview',
      content: (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Overview Content</h3>
          <p className="text-gray-600">This is the overview tab content with some sample text.</p>
        </div>
      )
    },
    {
      id: 'tab2',
      label: 'Details',
      content: (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Details Content</h3>
          <p className="text-gray-600">Detailed information would be displayed here.</p>
        </div>
      )
    },
    {
      id: 'tab3',
      label: 'Settings',
      content: (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Settings Content</h3>
          <p className="text-gray-600">Configuration options and preferences.</p>
        </div>
      )
    }
  ];

  const tabsWithIcons: TabItem[] = [
    {
      id: 'profile',
      label: 'Profile',
      icon: '👤',
      content: (
        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold mb-2">Profile Settings</h3>
          <p className="text-gray-600">Manage your profile information and preferences.</p>
        </div>
      )
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: '🔔',
      badge: '3',
      content: (
        <div className="p-4 bg-yellow-50 rounded-lg">
          <h3 className="font-semibold mb-2">Notification Settings</h3>
          <p className="text-gray-600">Control how you receive notifications.</p>
        </div>
      )
    },
    {
      id: 'security',
      label: 'Security',
      icon: '🔒',
      content: (
        <div className="p-4 bg-green-50 rounded-lg">
          <h3 className="font-semibold mb-2">Security Settings</h3>
          <p className="text-gray-600">Manage your account security and privacy.</p>
        </div>
      )
    },
    {
      id: 'billing',
      label: 'Billing',
      icon: '💳',
      disabled: true,
      content: (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Billing Information</h3>
          <p className="text-gray-600">This section is currently unavailable.</p>
        </div>
      )
    }
  ];

  const verticalTabs: TabItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      content: <div className="p-6 bg-gray-50 rounded-lg"><h3 className="font-semibold">Dashboard Overview</h3><p>Your main dashboard content here.</p></div>
    },
    {
      id: 'analytics',
      label: 'Analytics',
      badge: 'New',
      content: <div className="p-6 bg-blue-50 rounded-lg"><h3 className="font-semibold">Analytics Data</h3><p>Charts and metrics would be displayed here.</p></div>
    },
    {
      id: 'reports',
      label: 'Reports',
      content: <div className="p-6 bg-green-50 rounded-lg"><h3 className="font-semibold">Report Generation</h3><p>Generate and view reports here.</p></div>
    }
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Tabs</h1>
        <p className="text-gray-600">Content switching with paper-inspired design</p>
      </div>

      <div className="space-y-8">
        {/* Basic Usage */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Basic Usage</h2>
          <Tabs items={basicTabs} defaultActiveTab="tab1" />
        </div>

        {/* Controlled */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Controlled</h2>
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Current active tab: {activeTab1}</p>
            <button 
              onClick={() => setActiveTab1(activeTab1 === 'tab1' ? 'tab2' : 'tab1')}
              className="px-3 py-1 bg-blue-600 text-white rounded text-sm"
            >
              Toggle Tab
            </button>
          </div>
          <Tabs 
            items={basicTabs} 
            activeTab={activeTab1}
            onTabChange={setActiveTab1}
          />
        </div>

        {/* Variants */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Variants</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Underline (Default)</h3>
              <Tabs items={basicTabs} variant="underline" showContent={false} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Pills</h3>
              <Tabs items={basicTabs} variant="pills" showContent={false} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Cards</h3>
              <Tabs items={basicTabs} variant="cards" showContent={false} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Segmented</h3>
              <Tabs items={basicTabs} variant="segmented" showContent={false} />
            </div>
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Sizes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Small</h3>
              <Tabs items={basicTabs} size="sm" showContent={false} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Medium (Default)</h3>
              <Tabs items={basicTabs} size="md" showContent={false} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Large</h3>
              <Tabs items={basicTabs} size="lg" showContent={false} />
            </div>
          </div>
        </div>

        {/* With Icons and Badges */}
        <div>
          <h2 className="text-lg font-semibold mb-4">With Icons and Badges</h2>
          <Tabs 
            items={tabsWithIcons} 
            activeTab={activeTab2}
            onTabChange={setActiveTab2}
          />
        </div>

        {/* Layout Options */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Layout Options</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Centered</h3>
              <Tabs items={basicTabs} centered={true} showContent={false} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Full Width</h3>
              <Tabs items={basicTabs} fullWidth={true} showContent={false} />
            </div>
          </div>
        </div>

        {/* Vertical Tabs */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Vertical Orientation</h2>
          <div className="max-w-3xl">
            <Tabs 
              items={verticalTabs} 
              orientation="vertical"
              variant="pills"
            />
          </div>
        </div>

        {/* Implementation Example */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Usage Example</h2>
          <pre className="text-sm bg-white p-4 rounded border overflow-x-auto">
            <code>{`import { Tabs } from '@davdevs/paper-basic';
import type { TabItem } from '@davdevs/paper-basic';

const tabs: TabItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    icon: '📊',
    content: <div>Overview content</div>
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: '⚙️',
    badge: '3',
    content: <div>Settings content</div>
  }
];

function MyTabs() {
  return (
    <Tabs 
      items={tabs}
      variant="pills"
      size="md"
      defaultActiveTab="overview"
    />
  );
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}