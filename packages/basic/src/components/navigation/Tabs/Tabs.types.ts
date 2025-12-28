export interface TabItem {
  id: string;
  label: string;
  content?: React.ReactNode;
  disabled?: boolean;
  badge?: string | number;
  icon?: React.ReactNode;
}

export interface TabsProps {
  /** Array of tab items */
  items: TabItem[];
  /** Active tab id */
  activeTab?: string;
  /** Default active tab id */
  defaultActiveTab?: string;
  /** Callback when tab changes */
  onTabChange?: (tabId: string) => void;
  /** Tab variant */
  variant?: 'underline' | 'pills' | 'cards' | 'segmented';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Whether tabs are centered */
  centered?: boolean;
  /** Whether tabs fill container width */
  fullWidth?: boolean;
  /** Whether to show content panel */
  showContent?: boolean;
  /** Custom className */
  className?: string;
  /** Content panel className */
  contentClassName?: string;
  /** Polymorphic component prop */
  as?: React.ElementType;
}

export type TabsRef = HTMLDivElement;