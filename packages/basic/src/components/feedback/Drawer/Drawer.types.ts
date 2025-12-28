import React from 'react';

// Base props for Drawer component
export interface DrawerProps {
  /**
   * The content to be rendered inside the Drawer
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Whether the drawer is open
   * @default false
   */
  open?: boolean;

  /**
   * Callback when drawer is requested to close
   */
  onClose?: () => void;

  /**
   * Side from which the drawer slides in
   * @default 'right'
   */
  side?: 'left' | 'right' | 'top' | 'bottom';

  /**
   * Size of the drawer
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * Elevation level (shadow depth)
   * @default 'xl'
   */
  elevation?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * Whether clicking the backdrop closes the drawer
   * @default true
   */
  closeOnBackdropClick?: boolean;

  /**
   * Whether pressing Escape closes the drawer
   * @default true
   */
  closeOnEscape?: boolean;

  /**
   * Drawer title
   */
  title?: string;

  /**
   * Whether to show the close button
   * @default true
   */
  showCloseButton?: boolean;

  /**
   * Custom backdrop classes
   */
  backdropClassName?: string;

  /**
   * Whether to show a border
   * @default true
   */
  bordered?: boolean;

  /**
   * Animation duration in milliseconds
   * @default 300
   */
  animationDuration?: number;
}

export type DrawerRef = HTMLDivElement;