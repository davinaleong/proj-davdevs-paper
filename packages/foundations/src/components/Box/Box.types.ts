import React from 'react';

// Base props that are always available
interface BaseBoxProps {
  /**
   * The content to be rendered inside the Box
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Visual variant of the box
   * @default 'default'
   */
  variant?: 'default' | 'secondary' | 'tertiary' | 'inverse' | 'transparent';

  /**
   * Elevation level (shadow depth)
   * @default 'none'
   */
  elevation?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * Internal padding amount
   * @default 'md'
   */
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * Border radius amount
   * @default 'base'
   */
  radius?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';

  /**
   * Whether to show a border
   * @default false
   */
  border?: boolean;
}

// Polymorphic component types
export type BoxProps<T extends React.ElementType = 'div'> = BaseBoxProps & {
  /**
   * The HTML element or React component to render as
   * @default 'div'
   */
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof BaseBoxProps>;

// Ref type for polymorphic component
export type BoxRef<T extends React.ElementType = 'div'> = React.ComponentRef<T>;