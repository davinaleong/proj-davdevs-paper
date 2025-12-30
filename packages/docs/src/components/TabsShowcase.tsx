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

  const tabsWithDisabled: TabItem[] = [
    {
      id: 'profile',
      label: 'Profile',
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
      disabled: true,
      content: (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Billing Information</h3>
          <p className="text-gray-600">This section is currently unavailable.</p>
        </div>
      )
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
              <h3 className="text-sm font-medium text-gray-700 mb-2">Default</h3>
              <Tabs items={basicTabs} variant="default" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Pills</h3>
              <Tabs items={basicTabs} variant="pills" />
            </div>
          </div>
        </div>

        {/* With Disabled Tab */}
        <div>
          <h2 className="text-lg font-semibold mb-4">With Disabled Tab</h2>
          <Tabs 
            items={tabsWithDisabled} 
            activeTab={activeTab2}
            onTabChange={setActiveTab2}
          />
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
    content: <div>Overview content</div>
  },
  {
    id: 'settings',
    label: 'Settings',
    disabled: true,
    content: <div>Settings content</div>
  }
];

function MyTabs() {
  return (
    <Tabs 
      items={tabs}
      variant="pills"
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