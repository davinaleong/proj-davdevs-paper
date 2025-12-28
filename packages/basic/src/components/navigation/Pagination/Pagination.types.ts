export interface PaginationProps {
  /** Current page number (1-based) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Callback when page changes */
  onPageChange: (page: number) => void;
  /** Number of pages to show around current page */
  siblingCount?: number;
  /** Show first/last page buttons */
  showFirstLast?: boolean;
  /** Show previous/next buttons */
  showPrevNext?: boolean;
  /** Show page info text */
  showPageInfo?: boolean;
  /** Custom labels */
  labels?: {
    first?: string;
    previous?: string;
    next?: string;
    last?: string;
    pageInfo?: (current: number, total: number) => string;
  };
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Variant style */
  variant?: 'default' | 'minimal' | 'pills';
  /** Disable pagination */
  disabled?: boolean;
  /** Custom className */
  className?: string;
  /** Polymorphic component prop */
  as?: React.ElementType;
}

export type PaginationRef = HTMLElement;