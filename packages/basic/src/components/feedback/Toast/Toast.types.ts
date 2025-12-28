import React from 'react';

// Base props for Toast component
export interface ToastProps {
  /**
   * The content to be rendered inside the Toast
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Visual variant of the toast
   * @default 'info'
   */
  variant?: 'info' | 'success' | 'warning' | 'error';

  /**
   * Position where toast appears
   * @default 'top-right'
   */
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

  /**
   * Auto-dismiss duration in milliseconds (0 to disable)
   * @default 4000
   */
  duration?: number;

  /**
   * Whether to show an icon
   * @default true
   */
  showIcon?: boolean;

  /**
   * Custom icon to display (overrides default variant icon)
   */
  icon?: React.ReactNode;

  /**
   * Whether the toast can be dismissed
   * @default true
   */
  dismissible?: boolean;

  /**
   * Callback when toast is dismissed
   */
  onDismiss?: () => void;

  /**
   * Title text for the toast (optional)
   */
  title?: string;

  /**
   * Whether the toast is currently visible
   * @default true
   */
  open?: boolean;

  /**
   * Elevation level (shadow depth)
   * @default 'lg'
   */
  elevation?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';

  /**
   * Border radius amount
   * @default 'md'
   */
  radius?: 'none' | 'sm' | 'base' | 'md' | 'lg';
}

export type ToastRef = HTMLDivElement;