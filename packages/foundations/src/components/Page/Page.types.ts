import React from 'react';

// Base props for Page component
export interface BasePageProps {
  /**
   * The content to be rendered inside the Page
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Page background variant
   * @default 'default'
   */
  variant?: 'default' | 'paper' | 'minimal' | 'inverse';

  /**
   * Padding around the page content
   * @default 'none'
   */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Whether the page should fill the full viewport height
   * @default false
   */
  fullHeight?: boolean;

  /**
   * Maximum width constraint for page content
   * @default 'none'
   */
  maxWidth?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';

  /**
   * Whether the page content should be centered
   * @default false
   */
  centered?: boolean;
}

// Polymorphic component types
export type PageProps<T extends React.ElementType = 'main'> = BasePageProps & {
  /**
   * The HTML element or React component to render as
   * @default 'main'
   */
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof BasePageProps>;

export type PageRef = HTMLElement;