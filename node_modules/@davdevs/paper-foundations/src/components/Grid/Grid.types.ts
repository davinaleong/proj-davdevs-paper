import React from 'react';

// Base props for Grid component
interface BaseGridProps {
  /**
   * The content to be rendered inside the Grid
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Number of columns in the grid
   * @default 'auto'
   */
  columns?: 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

  /**
   * Number of rows in the grid
   * @default 'auto'
   */
  rows?: 'auto' | 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * Gap between grid items
   * @default 'md'
   */
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * Horizontal gap between grid items
   */
  gapX?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * Vertical gap between grid items
   */
  gapY?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * How items are placed in the grid
   * @default 'stretch'
   */
  placeItems?: 'start' | 'end' | 'center' | 'stretch';

  /**
   * How content is aligned within the grid container
   * @default 'stretch'
   */
  placeContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly';

  /**
   * Responsive column configuration
   */
  responsive?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };

  /**
   * Whether the grid should have equal height items
   * @default false
   */
  equalHeight?: boolean;

  /**
   * Whether to enable auto-fit columns
   * @default false
   */
  autoFit?: boolean;

  /**
   * Minimum column width when using auto-fit
   * @default '250px'
   */
  minColWidth?: string;
}

// Polymorphic component types
export type GridProps<T extends React.ElementType = 'div'> = BaseGridProps & {
  /**
   * The HTML element or React component to render as
   * @default 'div'
   */
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof BaseGridProps>;

export type GridRef = HTMLElement;