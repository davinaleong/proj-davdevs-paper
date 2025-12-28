import React from 'react';
import { cn } from '../../../utils/cn';
import type { BreadcrumbProps, BreadcrumbRef } from './Breadcrumb.types';

/**
 * Breadcrumb - Navigation trails
 * 
 * Displays navigation hierarchy with paper-inspired design,
 * helping users understand their current location.
 */
export const Breadcrumb = React.forwardRef<BreadcrumbRef, BreadcrumbProps>(
  (
    {
      items,
      className,
      separator = '/',
      size = 'md',
      maxItems,
      showHome = false,
      homeIcon = '🏠',
      as,
      ...props
    },
    ref
  ) => {
    const Component = as || 'nav';

    // Process items based on maxItems
    let displayItems = items;
    let hasEllipsis = false;

    if (maxItems && items.length > maxItems) {
      hasEllipsis = true;
      const firstItem = items[0];
      const lastItems = items.slice(-(maxItems - 2));
      displayItems = [firstItem, ...lastItems];
    }

    const baseClasses = [
      'paper-breadcrumb',
      'flex',
      'items-center',
      'flex-wrap',
      'gap-1'
    ];

    // Size classes
    const sizeClasses = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base'
    };

    const breadcrumbClasses = cn(
      baseClasses,
      sizeClasses[size],
      className
    );

    // Separator component
    const Separator = () => (
      <span className="text-gray-400 mx-1 select-none">
        {separator}
      </span>
    );

    // Home item
    const HomeItem = () => {
      if (!showHome) return null;
      
      return (
        <>
          <span className="text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
            {homeIcon}
          </span>
          {(items.length > 0 || hasEllipsis) && <Separator />}
        </>
      );
    };

    // Ellipsis item
    const EllipsisItem = () => {
      if (!hasEllipsis) return null;

      return (
        <>
          <span className="text-gray-400 px-1">
            ...
          </span>
          <Separator />
        </>
      );
    };

    return (
      <Component
        ref={ref}
        className={breadcrumbClasses}
        aria-label="Breadcrumb navigation"
        {...props}
      >
        <HomeItem />
        
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const isFirst = index === 0;
          
          return (
            <React.Fragment key={index}>
              {/* Show ellipsis after first item if needed */}
              {hasEllipsis && isFirst && index < displayItems.length - 1 && (
                <EllipsisItem />
              )}
              
              {/* Breadcrumb item */}
              <span
                className={cn(
                  'transition-colors',
                  item.current || isLast
                    ? 'text-gray-900 font-medium'
                    : item.disabled
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:text-gray-800 cursor-pointer'
                )}
                aria-current={item.current || isLast ? 'page' : undefined}
              >
                {item.href && !item.disabled && !item.current && !isLast ? (
                  <a href={item.href} className="hover:underline">
                    {item.label}
                  </a>
                ) : (
                  item.label
                )}
              </span>

              {/* Separator (except for last item) */}
              {!isLast && <Separator />}
            </React.Fragment>
          );
        })}
      </Component>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';