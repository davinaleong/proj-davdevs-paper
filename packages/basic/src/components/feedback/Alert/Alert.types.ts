import React from 'react';

// Base props for Alert component
export interface AlertProps {
  /**
   * The content to be rendered inside the Alert
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Visual variant of the alert
   * @default 'info'
   */
  variant?: 'info' | 'success' | 'warning' | 'error';

  /**
   * Size of the alert
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Elevation level (shadow depth)
   * @default 'sm'
   */
  elevation?: 'none' | 'sm' | 'base' | 'md' | 'lg';

  /**
   * Border radius amount
   * @default 'base'
   */
  radius?: 'none' | 'sm' | 'base' | 'md' | 'lg';

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
   * Whether the alert can be dismissed
   * @default false
   */
  dismissible?: boolean;

  /**
   * Callback when alert is dismissed
   */
  onDismiss?: () => void;

  /**
   * Title text for the alert (optional)
   */
  title?: string;

  /**
   * The HTML element to render as
   * @default 'div'
   */
  as?: React.ElementType;
}

export type AlertRef = HTMLDivElement;