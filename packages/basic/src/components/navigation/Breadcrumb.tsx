import React from 'react';
import { Home } from 'lucide-react';
import { cn } from '../../utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
  disabled?: boolean;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  showHome?: boolean;
  homeIcon?: React.ReactNode;
  maxItems?: number;
  className?: string;
}

export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ 
    items, 
    separator = '/', 
    size = 'md',
    showHome = false,
    homeIcon = <Home size={16} />,
    maxItems,
    className, 
    ...props 
  }, ref) => {
    // Size classes for different text sizes and spacing
    const sizeClasses = {
      sm: {
        text: 'text-xs',
        spacing: 'space-x-1',
        separator: 'mx-1',
        padding: 'px-2 py-1'
      },
      md: {
        text: 'text-sm',
        spacing: 'space-x-1 md:space-x-3',
        separator: 'mx-2',
        padding: 'px-3 py-2'
      },
      lg: {
        text: 'text-base',
        spacing: 'space-x-2 md:space-x-4',
        separator: 'mx-3',
        padding: 'px-4 py-2'
      }
    };

    const classes = sizeClasses[size];

    // Handle truncation with ellipsis
    const processedItems = React.useMemo(() => {
      if (!maxItems || items.length <= maxItems) {
        return items;
      }

      const firstItem = items[0];
      const lastItems = items.slice(-(maxItems - 2));
      
      return [
        firstItem,
        { label: '...', href: undefined, current: false, disabled: true },
        ...lastItems
      ];
    }, [items, maxItems]);

    return (
      <nav
        ref={ref}
        className={cn('flex', className)}
        aria-label="Breadcrumb"
        {...props}
      >
        <ol className={cn('flex items-center', classes.spacing)}>
          {/* Home icon if enabled */}
          {showHome && (
            <li className="flex items-center">
              <a
                href="/"
                className={cn(
                  'font-medium text-gray-500 hover:text-gray-700 transition-colors',
                  classes.text
                )}
              >
                {homeIcon}
              </a>
              {processedItems.length > 0 && (
                <span className={cn('text-gray-400', classes.text, classes.separator)}>
                  {separator}
                </span>
              )}
            </li>
          )}

          {processedItems.map((item, index) => {
            const isLast = index === processedItems.length - 1;
            
            return (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <span className={cn('text-gray-400', classes.text, classes.separator)}>
                    {separator}
                  </span>
                )}
                {item.href && !item.current && !item.disabled ? (
                  <a
                    href={item.href}
                    className={cn(
                      'font-medium text-gray-500 hover:text-gray-700 transition-colors',
                      classes.text
                    )}
                  >
                    {item.label}
                  </a>
                ) : (
                  <span
                    className={cn(
                      'font-medium',
                      classes.text,
                      item.current || isLast
                        ? 'text-gray-900'
                        : item.disabled
                        ? 'text-gray-400 cursor-default'
                        : 'text-gray-500'
                    )}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';