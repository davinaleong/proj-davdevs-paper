import React from 'react';

// Base props that are always available
interface BaseInlineProps {
  /**
   * The content to be rendered inside the Inline
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Spacing between inline items
   * @default 'md'
   */
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

  /**
   * How items align vertically
   * @default 'center'
   */
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';

  /**
   * How items are distributed horizontally
   * @default 'start'
   */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

  /**
   * Whether items should wrap to new lines
   * @default true
   */
  wrap?: boolean;

  /**
   * Whether to use responsive wrapping behavior
   * @default true
   */
  responsive?: boolean;

  /**
   * The HTML element to render
   * @default 'div'
   */
  as?: React.ElementType;
}

// Props when using built-in HTML elements
type InlinePropsWithElement<T extends React.ElementType> = BaseInlineProps &
  Omit<React.ComponentPropsWithRef<T>, keyof BaseInlineProps> & {
    as?: T;
  };

// Generic props that work with any element
export type InlineProps<T extends React.ElementType = 'div'> = InlinePropsWithElement<T>;

// Ref type for the Inline component
export type InlineRef = HTMLDivElement;