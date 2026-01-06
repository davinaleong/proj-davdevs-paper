import React from 'react';

// Base props that are always available
export interface BaseIconProps {
  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Size of the icon
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * Color variant of the icon
   * @default 'current'
   */
  variant?: 'current' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'muted';

  /**
   * The icon content (SVG or other ReactNode)
   */
  children?: React.ReactNode;

  /**
   * Built-in icon name (optional convenience)
   */
  name?: string;

  /**
   * Whether the icon should spin/rotate
   * @default false
   */
  spin?: boolean;

  /**
   * Custom rotation angle in degrees
   */
  rotate?: number;

  /**
   * Whether the icon is decorative (hides from screen readers)
   * @default false
   */
  decorative?: boolean;

  /**
   * Accessible label for the icon
   */
  label?: string;

  /**
   * Whether the icon is interactive/clickable
   * @default false
   */
  interactive?: boolean;

  /**
   * Click handler for interactive icons
   */
  onClick?: (event: React.MouseEvent) => void;

  /**
   * The HTML element or React component to render
   * @default 'span'
   */
  as?: React.ElementType;
}

// Props when used as a polymorphic component
export type IconProps<T extends React.ElementType = 'span'> = BaseIconProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof BaseIconProps> & {
    as?: T;
  };

export type IconRef = HTMLElement;