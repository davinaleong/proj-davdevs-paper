import React from 'react';

// Base props that are always available
interface BaseDividerProps {
  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Orientation of the divider
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Visual variant of the divider
   * @default 'default'
   */
  variant?: 'default' | 'dashed' | 'dotted' | 'double' | 'thick' | 'subtle';

  /**
   * Size/thickness of the divider
   * @default 'base'
   */
  size?: 'thin' | 'base' | 'thick';

  /**
   * Spacing around the divider
   * @default 'md'
   */
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Color variant
   * @default 'default'
   */
  color?: 'default' | 'muted' | 'accent' | 'primary' | 'secondary';

  /**
   * Optional text label to display in the divider
   */
  label?: string;

  /**
   * Position of the label (for horizontal dividers)
   * @default 'center'
   */
  labelPosition?: 'left' | 'center' | 'right';

  /**
   * The HTML element to render
   * @default 'hr'
   */
  as?: React.ElementType;
}

// Props when using built-in HTML elements
type DividerPropsWithElement<T extends React.ElementType> = BaseDividerProps &
  Omit<React.ComponentPropsWithRef<T>, keyof BaseDividerProps> & {
    as?: T;
  };

// Generic props that work with any element
export type DividerProps<T extends React.ElementType = 'hr'> = DividerPropsWithElement<T>;

// Ref type for the Divider component
export type DividerRef = HTMLHRElement;