import React, { useState } from 'react';
import { cn } from '../../../utils/cn';
import type { TabsProps, TabsRef } from './Tabs.types';

/**
 * Tabs - Content switching
 * 
 * Displays tabbed content with paper-inspired design,
 * supporting multiple variants and orientations.
 */
export const Tabs = React.forwardRef<TabsRef, TabsProps>(
  (
    {
      items,
      activeTab,
      defaultActiveTab,
      onTabChange,
      className,
      contentClassName,
      variant = 'underline',
      size = 'md',
      orientation = 'horizontal',
      centered = false,
      fullWidth = false,
      showContent = true,
      as,
      ...props
    },
    ref
  ) => {
    const Component = as || 'div';

    // Internal state for active tab
    const [internalActiveTab, setInternalActiveTab] = useState(
      defaultActiveTab || items[0]?.id
    );

    const currentActiveTab = activeTab ?? internalActiveTab;

    const handleTabChange = (tabId: string) => {
      if (!activeTab) {
        setInternalActiveTab(tabId);
      }
      onTabChange?.(tabId);
    };

    const activeTabItem = items.find(item => item.id === currentActiveTab);

    const baseClasses = [
      'paper-tabs',
      orientation === 'vertical' ? 'flex gap-4' : 'space-y-4'
    ];

    // Tab list classes
    const tabListClasses = cn(
      'flex',
      orientation === 'horizontal' ? 'border-b border-gray-200' : 'flex-col border-r border-gray-200',
      centered && orientation === 'horizontal' && 'justify-center',
      fullWidth && orientation === 'horizontal' && 'w-full'
    );

    // Size classes
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base'
    };

    // Variant classes
    const getTabClasses = (item: typeof items[0], isActive: boolean) => {
      const baseTabClasses = [
        'relative',
        'font-medium',
        'transition-all',
        'duration-200',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-blue-500',
        'focus:ring-offset-2',
        sizeClasses[size],
        fullWidth && orientation === 'horizontal' && 'flex-1',
        item.disabled && 'opacity-50 cursor-not-allowed'
      ];

      switch (variant) {
        case 'underline':
          return cn(
            baseTabClasses,
            'border-b-2',
            'rounded-none',
            isActive
              ? 'text-blue-600 border-blue-600'
              : 'text-gray-600 border-transparent hover:text-gray-800 hover:border-gray-300'
          );

        case 'pills':
          return cn(
            baseTabClasses,
            'rounded-full',
            isActive
              ? 'bg-blue-100 text-blue-700'
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
          );

        case 'cards':
          return cn(
            baseTabClasses,
            'rounded-lg',
            'border',
            isActive
              ? 'bg-white text-blue-600 border-blue-200 shadow-sm'
              : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
          );

        case 'segmented':
          return cn(
            baseTabClasses,
            'first:rounded-l-lg',
            'last:rounded-r-lg',
            'border',
            'border-r-0',
            'last:border-r',
            isActive
              ? 'bg-blue-600 text-white z-10'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          );

        default:
          return cn(baseTabClasses);
      }
    };

    return (
      <Component ref={ref} className={cn(baseClasses, className)} {...props}>
        {/* Tab List */}
        <div
          className={tabListClasses}
          role="tablist"
          aria-orientation={orientation}
        >
          {items.map((item) => {
            const isActive = item.id === currentActiveTab;

            return (
              <button
                key={item.id}
                className={getTabClasses(item, isActive)}
                onClick={() => !item.disabled && handleTabChange(item.id)}
                disabled={item.disabled}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${item.id}`}
                id={`tab-${item.id}`}
                type="button"
              >
                <span className="flex items-center gap-2">
                  {item.icon && (
                    <span className="flex-shrink-0">
                      {item.icon}
                    </span>
                  )}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={cn(
                      'inline-flex items-center justify-center px-2 py-1 text-xs font-bold rounded-full',
                      isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                    )}>
                      {item.badge}
                    </span>
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Panel */}
        {showContent && activeTabItem?.content && (
          <div
            className={cn(
              'paper-tab-content',
              orientation === 'vertical' ? 'flex-1' : 'pt-4',
              contentClassName
            )}
            role="tabpanel"
            aria-labelledby={`tab-${currentActiveTab}`}
            id={`panel-${currentActiveTab}`}
          >
            {activeTabItem.content}
          </div>
        )}
      </Component>
    );
  }
);

Tabs.displayName = 'Tabs';