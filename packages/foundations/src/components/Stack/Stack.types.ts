import React from 'react';

// Base props that are always available
interface BaseStackProps {
  /**
   * The content to be rendered inside the Stack
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Direction of the stack
   * @default 'vertical'
   */
  direction?: 'vertical' | 'horizontal';

  /**
   * Spacing between stack items
   * @default 'md'
   */
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

  /**
   * How items align in the cross-axis
   * @default 'stretch'
   */
  align?: 'start' | 'center' | 'end' | 'stretch';

  /**
   * How items align in the main-axis
   * @default 'start'
   */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

  /**
   * Whether items should wrap to new lines
   * @default false
   */
  wrap?: boolean;

  /**
   * The HTML element to render
   * @default 'div'
   */
  as?: React.ElementType;
}

// Props when using built-in HTML elements
type StackPropsWithElement<T extends React.ElementType> = BaseStackProps &
  Omit<React.ComponentPropsWithRef<T>, keyof BaseStackProps> & {
    as?: T;
  };

// Generic props that work with any element
export type StackProps<T extends React.ElementType = 'div'> = StackPropsWithElement<T>;

// Ref type for the Stack component
export type StackRef = HTMLDivElement;