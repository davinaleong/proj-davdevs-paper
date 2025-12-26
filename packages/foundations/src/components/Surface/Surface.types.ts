import React from 'react';

// Base props that are always available
interface BaseSurfaceProps {
  /**
   * The content to be rendered inside the Surface
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Surface level/variant for theme-aware styling
   * @default 'primary'
   */
  level?: 'primary' | 'secondary' | 'tertiary' | 'elevated' | 'overlay' | 'inverse';

  /**
   * Background appearance
   * @default 'default'
   */
  appearance?: 'default' | 'subtle' | 'muted' | 'accent' | 'transparent';

  /**
   * Elevation shadow depth
   * @default 'none'
   */
  elevation?: 'none' | 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * Border radius
   * @default 'none'
   */
  radius?: 'none' | 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * Padding inside the surface
   * @default 'none'
   */
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * Border style
   * @default 'none'
   */
  border?: 'none' | 'subtle' | 'default' | 'accent' | 'primary';

  /**
   * Whether the surface should be interactive (hover effects)
   * @default false
   */
  interactive?: boolean;

  /**
   * The HTML element to render
   * @default 'div'
   */
  as?: React.ElementType;
}

// Props when using built-in HTML elements
type SurfacePropsWithElement<T extends React.ElementType> = BaseSurfaceProps &
  Omit<React.ComponentPropsWithRef<T>, keyof BaseSurfaceProps> & {
    as?: T;
  };

// Generic props that work with any element
export type SurfaceProps<T extends React.ElementType = 'div'> = SurfacePropsWithElement<T>;

// Ref type for the Surface component
export type SurfaceRef = HTMLDivElement;