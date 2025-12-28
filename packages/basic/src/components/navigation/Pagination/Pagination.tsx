import React, { useMemo } from 'react';
import { cn } from '../../../utils/cn';
import type { PaginationProps, PaginationRef } from './Pagination.types';

/**
 * Pagination - Page navigation
 * 
 * Displays page navigation with paper-inspired design,
 * supporting various configurations and styles.
 */
export const Pagination = React.forwardRef<PaginationRef, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      className,
      siblingCount = 1,
      showFirstLast = true,
      showPrevNext = true,
      showPageInfo = false,
      labels = {},
      size = 'md',
      variant = 'default',
      disabled = false,
      as,
      ...props
    },
    ref
  ) => {
    const Component = as || 'nav';

    // Default labels
    const defaultLabels = {
      first: '««',
      previous: '‹',
      next: '›',
      last: '»»',
      pageInfo: (current: number, total: number) => `Page ${current} of ${total}`,
      ...labels
    };

    // Generate page numbers to show
    const pageNumbers = useMemo(() => {
      const range = [];
      const totalNumbers = siblingCount * 2 + 3; // Current + siblings + first + last
      const totalBlocks = totalNumbers + 2; // Add 2 for ellipsis

      if (totalPages <= totalBlocks) {
        // Show all pages if total is small enough
        for (let i = 1; i <= totalPages; i++) {
          range.push(i);
        }
      } else {
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

        const shouldShowLeftEllipsis = leftSiblingIndex > 2;
        const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 2;

        if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
          // Only right ellipsis
          const leftItemCount = 3 + 2 * siblingCount;
          for (let i = 1; i <= leftItemCount; i++) {
            range.push(i);
          }
          range.push('ellipsis-right');
          range.push(totalPages);
        } else if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
          // Only left ellipsis
          const rightItemCount = 3 + 2 * siblingCount;
          range.push(1);
          range.push('ellipsis-left');
          for (let i = totalPages - rightItemCount + 1; i <= totalPages; i++) {
            range.push(i);
          }
        } else if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
          // Both ellipsis
          range.push(1);
          range.push('ellipsis-left');
          for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
            range.push(i);
          }
          range.push('ellipsis-right');
          range.push(totalPages);
        } else {
          // No ellipsis
          for (let i = 1; i <= totalPages; i++) {
            range.push(i);
          }
        }
      }

      return range;
    }, [currentPage, totalPages, siblingCount]);

    const handlePageClick = (page: number) => {
      if (!disabled && page !== currentPage && page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    };

    const canGoPrevious = currentPage > 1 && !disabled;
    const canGoNext = currentPage < totalPages && !disabled;

    const baseClasses = [
      'paper-pagination',
      'flex',
      'items-center',
      'gap-1'
    ];

    // Size classes
    const sizeClasses = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base'
    };

    // Button classes based on variant
    const getButtonClasses = (isActive = false, isDisabled = false) => {
      const baseButtonClasses = [
        'relative',
        'inline-flex',
        'items-center',
        'justify-center',
        'font-medium',
        'transition-all',
        'duration-200',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-blue-500',
        'focus:ring-offset-2',
        size === 'sm' ? 'px-2 py-1 min-w-[32px] h-8' : 
        size === 'md' ? 'px-3 py-2 min-w-[40px] h-10' : 
        'px-4 py-2 min-w-[44px] h-11'
      ];

      if (isDisabled) {
        baseButtonClasses.push('opacity-50', 'cursor-not-allowed');
      }

      switch (variant) {
        case 'minimal':
          return cn(
            baseButtonClasses,
            'rounded',
            isActive
              ? 'text-blue-600 bg-blue-50'
              : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
          );

        case 'pills':
          return cn(
            baseButtonClasses,
            'rounded-full',
            'border',
            isActive
              ? 'text-white bg-blue-600 border-blue-600'
              : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
          );

        default:
          return cn(
            baseButtonClasses,
            'rounded-md',
            'border',
            isActive
              ? 'text-blue-600 bg-blue-50 border-blue-200 z-10'
              : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
          );
      }
    };

    const EllipsisButton = ({ id }: { id: string }) => (
      <span
        key={id}
        className={cn(
          'inline-flex items-center justify-center text-gray-400',
          size === 'sm' ? 'px-2 py-1 h-8' : 
          size === 'md' ? 'px-3 py-2 h-10' : 
          'px-4 py-2 h-11'
        )}
        aria-hidden="true"
      >
        …
      </span>
    );

    return (
      <Component
        ref={ref}
        className={cn(baseClasses, sizeClasses[size], className)}
        aria-label="Pagination"
        role="navigation"
        {...props}
      >
        {/* Page Info */}
        {showPageInfo && (
          <span className="text-gray-600 mr-4">
            {defaultLabels.pageInfo!(currentPage, totalPages)}
          </span>
        )}

        {/* First Page Button */}
        {showFirstLast && totalPages > 1 && (
          <button
            className={getButtonClasses(false, !canGoPrevious)}
            onClick={() => handlePageClick(1)}
            disabled={!canGoPrevious}
            aria-label="Go to first page"
            type="button"
          >
            {defaultLabels.first}
          </button>
        )}

        {/* Previous Button */}
        {showPrevNext && (
          <button
            className={getButtonClasses(false, !canGoPrevious)}
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={!canGoPrevious}
            aria-label="Go to previous page"
            type="button"
          >
            {defaultLabels.previous}
          </button>
        )}

        {/* Page Numbers */}
        {pageNumbers.map((page, index) => {
          if (typeof page === 'string') {
            return <EllipsisButton key={page} id={page} />;
          }

          const isActive = page === currentPage;

          return (
            <button
              key={page}
              className={getButtonClasses(isActive, disabled)}
              onClick={() => handlePageClick(page)}
              disabled={disabled}
              aria-label={`Go to page ${page}`}
              aria-current={isActive ? 'page' : undefined}
              type="button"
            >
              {page}
            </button>
          );
        })}

        {/* Next Button */}
        {showPrevNext && (
          <button
            className={getButtonClasses(false, !canGoNext)}
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={!canGoNext}
            aria-label="Go to next page"
            type="button"
          >
            {defaultLabels.next}
          </button>
        )}

        {/* Last Page Button */}
        {showFirstLast && totalPages > 1 && (
          <button
            className={getButtonClasses(false, !canGoNext)}
            onClick={() => handlePageClick(totalPages)}
            disabled={!canGoNext}
            aria-label="Go to last page"
            type="button"
          >
            {defaultLabels.last}
          </button>
        )}
      </Component>
    );
  }
);

Pagination.displayName = 'Pagination';