import React from 'react';
import { cn } from '../../utils';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  variant?: 'default' | 'minimal' | 'pills';
  size?: 'sm' | 'md' | 'lg';
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  showPageInfo?: boolean;
  siblingCount?: number;
  disabled?: boolean;
  labels?: {
    first?: string;
    previous?: string;
    next?: string;
    last?: string;
    pageInfo?: (current: number, total: number) => string;
  };
  className?: string;
}

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  ({ 
    currentPage, 
    totalPages, 
    onPageChange, 
    variant = 'default',
    size = 'md',
    showFirstLast = true, 
    showPrevNext = true,
    showPageInfo = false,
    siblingCount = 2,
    disabled = false,
    labels = {},
    className,
    ...props 
  }, ref) => {
    const {
      first = 'First',
      previous = 'Previous',
      next = 'Next',
      last = 'Last',
      pageInfo = (current, total) => `Page ${current} of ${total}`
    } = labels;

    const handlePageClick = (page: number) => {
      if (disabled || page >= 1 && page <= totalPages && page !== currentPage) {
        if (!disabled) {
          onPageChange(page);
        }
      }
    };

    // Size classes
    const sizeClasses = {
      sm: {
        button: 'px-2 py-1 text-xs',
        spacing: 'space-x-1'
      },
      md: {
        button: 'px-3 py-2 text-sm',
        spacing: 'space-x-1'
      },
      lg: {
        button: 'px-4 py-3 text-base',
        spacing: 'space-x-2'
      }
    };

    // Variant classes (light + dark)
    const variantClasses = {
      default: {
        button:
          'border border-gray-300 bg-white hover:bg-gray-50 ' +
          'dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800',
        active:
          'bg-blue-600 text-white border-blue-600 ' +
          'dark:bg-blue-500 dark:border-blue-500',
        inactive:
          'text-gray-500 hover:text-gray-700 ' +
          'dark:text-gray-400 dark:hover:text-gray-200'
      },

      minimal: {
        button:
          'border-none bg-transparent hover:bg-gray-100 ' +
          'dark:hover:bg-gray-800',
        active:
          'bg-blue-100 text-blue-700 ' +
          'dark:bg-blue-900/40 dark:text-blue-300',
        inactive:
          'text-gray-500 hover:text-gray-700 ' +
          'dark:text-gray-400 dark:hover:text-gray-200'
      },

      pills: {
        button:
          'border-none bg-gray-100 hover:bg-gray-200 rounded-full ' +
          'dark:bg-gray-800 dark:hover:bg-gray-700',
        active:
          'bg-blue-600 text-white ' +
          'dark:bg-blue-500',
        inactive:
          'text-gray-600 hover:text-gray-800 ' +
          'dark:text-gray-300 dark:hover:text-white'
      }
    };


    const sizes = sizeClasses[size];
    const variants = variantClasses[variant];

    const getVisiblePages = () => {
      const delta = siblingCount;
      const range = [];
      const rangeWithDots = [];

      for (let i = Math.max(2, currentPage - delta); 
           i <= Math.min(totalPages - 1, currentPage + delta); 
           i++) {
        range.push(i);
      }

      if (currentPage - delta > 2) {
        rangeWithDots.push(1, '...');
      } else {
        rangeWithDots.push(1);
      }

      rangeWithDots.push(...range);

      if (currentPage + delta < totalPages - 1) {
        rangeWithDots.push('...', totalPages);
      } else {
        rangeWithDots.push(totalPages);
      }

      return rangeWithDots;
    };

    if (totalPages <= 1 && !showPageInfo) return null;

    return (
      <div className={cn('flex flex-col items-center', className)}>
        {/* Page Info */}
        {showPageInfo && (
          <div className="mb-3 text-sm text-gray-500">
            {pageInfo(currentPage, totalPages)}
          </div>
        )}

        {/* Pagination Controls */}
        <div
          ref={ref}
          className={cn(
            "flex items-center",
            sizes.spacing,
            disabled && "opacity-50 pointer-events-none"
          )}
          {...props}
        >
          {/* First Page */}
          {showFirstLast && currentPage > 1 && totalPages > 1 && (
            <button
              onClick={() => handlePageClick(1)}
              disabled={disabled}
              className={cn(
                "font-medium rounded-md transition-colors",
                sizes.button,
                variants.button,
                variants.inactive
              )}
            >
              {first}
            </button>
          )}

          {/* Previous Page */}
          {showPrevNext && currentPage > 1 && totalPages > 1 && (
            <button
              onClick={() => handlePageClick(currentPage - 1)}
              disabled={disabled}
              className={cn(
                "font-medium rounded-md transition-colors",
                sizes.button,
                variants.button,
                variants.inactive
              )}
            >
              {previous}
            </button>
          )}

          {/* Page Numbers */}
          {totalPages > 1 && getVisiblePages().map((page, index) => {
            if (page === '...') {
              return (
                <span
                  key={`dots-${index}`}
                  className={cn("font-medium", sizes.button, "text-gray-500")}
                >
                  ...
                </span>
              );
            }

            const pageNum = page as number;
            const isActive = pageNum === currentPage;

            return (
              <button
                key={pageNum}
                onClick={() => handlePageClick(pageNum)}
                disabled={disabled}
                className={cn(
                  "font-medium rounded-md transition-colors",
                  sizes.button,
                  variants.button,
                  isActive ? variants.active : variants.inactive
                )}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Next Page */}
          {showPrevNext && currentPage < totalPages && totalPages > 1 && (
            <button
              onClick={() => handlePageClick(currentPage + 1)}
              disabled={disabled}
              className={cn(
                "font-medium rounded-md transition-colors",
                sizes.button,
                variants.button,
                variants.inactive
              )}
            >
              {next}
            </button>
          )}

          {/* Last Page */}
          {showFirstLast && currentPage < totalPages && totalPages > 1 && (
            <button
              onClick={() => handlePageClick(totalPages)}
              disabled={disabled}
              className={cn(
                "font-medium rounded-md transition-colors",
                sizes.button,
                variants.button,
                variants.inactive
              )}
            >
              {last}
            </button>
          )}
        </div>
      </div>
    );
  }
);

Pagination.displayName = 'Pagination';