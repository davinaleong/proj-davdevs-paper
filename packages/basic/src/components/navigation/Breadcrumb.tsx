import React from 'react';
import { cn } from '../../utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}

export const Breadcrumb = React.forwardRef<HTMLNavElement, BreadcrumbProps>(
  ({ items, separator = '/', className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn('flex', className)}
        aria-label="Breadcrumb"
        {...props}
      >
        <ol className="flex items-center space-x-1 md:space-x-3">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            return (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <span className="mx-2 text-gray-400">{separator}</span>
                )}
                {item.href && !item.current ? (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span
                    className={cn(
                      'text-sm font-medium',
                      item.current || isLast
                        ? 'text-gray-900'
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