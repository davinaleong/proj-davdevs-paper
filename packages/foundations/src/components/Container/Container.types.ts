import React from 'react';

// Base props that are always available
interface BaseContainerProps {
  /**
   * The content to be rendered inside the Container
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Maximum width of the container
   * @default 'lg'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full' | 'none';

  /**
   * Horizontal padding
   * @default 'md'
   */
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * Whether to center the container
   * @default true
   */
  centered?: boolean;

  /**
   * Whether the container should be fluid (no max-width)
   * @default false
   */
  fluid?: boolean;

  /**
   * Responsive breakpoint behavior
   * @default 'responsive'
   */
  breakpoint?: 'responsive' | 'static';

  /**
   * The HTML element to render
   * @default 'div'
   */
  as?: React.ElementType;
}

// Props when using built-in HTML elements
type ContainerPropsWithElement<T extends React.ElementType> = BaseContainerProps &
  Omit<React.ComponentPropsWithRef<T>, keyof BaseContainerProps> & {
    as?: T;
  };

// Generic props that work with any element
export type ContainerProps<T extends React.ElementType = 'div'> = ContainerPropsWithElement<T>;

// Ref type for the Container component
export type ContainerRef = HTMLDivElement;