export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
  disabled?: boolean;
}

export interface BreadcrumbProps {
  /** Array of breadcrumb items */
  items: BreadcrumbItem[];
  /** Custom separator element */
  separator?: React.ReactNode;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Maximum number of items to show before truncating */
  maxItems?: number;
  /** Show home icon at the start */
  showHome?: boolean;
  /** Custom home icon */
  homeIcon?: React.ReactNode;
  /** Custom className */
  className?: string;
  /** Polymorphic component prop */
  as?: React.ElementType;
}

export type BreadcrumbRef = HTMLElement;