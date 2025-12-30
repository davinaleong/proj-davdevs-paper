import React from 'react';
import { cn } from '../../utils';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  className?: string;
}

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  ({ 
    currentPage, 
    totalPages, 
    onPageChange, 
    showFirstLast = true, 
    showPrevNext = true,
    className,
    ...props 
  }, ref) => {
    const handlePageClick = (page: number) => {
      if (page >= 1 && page <= totalPages && page !== currentPage) {
        onPageChange(page);
      }
    };

    const getVisiblePages = () => {
      const delta = 2;
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

    if (totalPages <= 1) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center space-x-1",
          className
        )}
        {...props}
      >
        {/* First Page */}
        {showFirstLast && currentPage > 1 && (
          <button
            onClick={() => handlePageClick(1)}
            className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-700"
          >
            First
          </button>
        )}

        {/* Previous Page */}
        {showPrevNext && currentPage > 1 && (
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-700"
          >
            Previous
          </button>
        )}

        {/* Page Numbers */}
        {getVisiblePages().map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`dots-${index}`}
                className="px-3 py-2 text-sm font-medium text-gray-500"
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
              className={cn(
                "px-3 py-2 text-sm font-medium border rounded-md",
                isActive
                  ? "bg-blue-600 text-white border-blue-600"
                  : "text-gray-500 bg-white border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              )}
            >
              {pageNum}
            </button>
          );
        })}

        {/* Next Page */}
        {showPrevNext && currentPage < totalPages && (
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-700"
          >
            Next
          </button>
        )}

        {/* Last Page */}
        {showFirstLast && currentPage < totalPages && (
          <button
            onClick={() => handlePageClick(totalPages)}
            className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-700"
          >
            Last
          </button>
        )}
      </div>
    );
  }
);

Pagination.displayName = 'Pagination';