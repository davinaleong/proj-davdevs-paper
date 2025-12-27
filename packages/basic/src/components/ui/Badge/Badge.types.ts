import React from 'react';

// Base props that are always available
interface BaseBadgeProps {
  /**
   * The content to be rendered inside the Badge
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Visual variant of the badge
   * @default 'default'
   */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';

  /**
   * Size of the badge
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Shape of the badge
   * @default 'rounded'
   */
  shape?: 'rounded' | 'pill';

  /**
   * Whether the badge has a subtle background
   * @default false
   */
  subtle?: boolean;

  /**
   * Whether the badge has an outline style
   * @default false
   */
  outline?: boolean;

  /**
   * Icon to display before the text
   */
  startIcon?: React.ReactNode;

  /**
   * Icon to display after the text
   */
  endIcon?: React.ReactNode;

  /**
   * Whether the badge is dismissible
   * @default false
   */
  dismissible?: boolean;

  /**
   * Callback when badge is dismissed
   */
  onDismiss?: () => void;

  /**
   * The HTML element or React component to render
   * @default 'span'
   */
  as?: React.ElementType;
}

// Props when used as a polymorphic component
export type BadgeProps<T extends React.ElementType = 'span'> = BaseBadgeProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof BaseBadgeProps> & {
    as?: T;
  };

export type BadgeRef = HTMLSpanElement;