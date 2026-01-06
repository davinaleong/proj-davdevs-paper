import React, { useState } from 'react';
import { cn } from '../../utils';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  defaultActiveTab?: string;
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  variant?: 'default' | 'pills';
  className?: string;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({
    items,
    defaultActiveTab,
    activeTab: controlledActiveTab,
    onTabChange,
    variant = 'default',
    className,
    ...props
  }, ref) => {
    const [internalActiveTab, setInternalActiveTab] = useState(
      defaultActiveTab || items[0]?.id
    );

    const activeTab = controlledActiveTab || internalActiveTab;

    const handleTabClick = (tabId: string) => {
      if (!controlledActiveTab) {
        setInternalActiveTab(tabId);
      }
      onTabChange?.(tabId);
    };

    const activeTabContent = items.find(item => item.id === activeTab)?.content;

    const tabClasses = {
      default: {
        container: 'border-b border-gray-200 dark:border-gray-800',
        list: '-mb-px flex space-x-8',
        tab: 'py-2 px-1 border-b-2 font-medium text-sm',
        active: 'border-blue-500 text-blue-600',
        inactive: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
      },
      pills: {
        container: '',
        list: 'flex space-x-1 p-1 bg-gray-100 dark:bg-gray-900 rounded-lg',
        tab: 'px-3 py-2 font-medium text-sm rounded-md',
        active: 'bg-white text-gray-900 shadow-sm',
        inactive: 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-white/50'
      }
    };

    const classes = tabClasses[variant];

    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        <div className={classes.container}>
          <nav className={classes.list} aria-label="Tabs">
            {items.map((item) => {
              const isActive = item.id === activeTab;
              const isDisabled = item.disabled;

              return (
                <button
                  key={item.id}
                  onClick={() => !isDisabled && handleTabClick(item.id)}
                  className={cn(
                    classes.tab,
                    isActive ? classes.active : classes.inactive,
                    isDisabled && 'opacity-50 cursor-not-allowed'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                  disabled={isDisabled}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-4">
          {activeTabContent}
        </div>
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';