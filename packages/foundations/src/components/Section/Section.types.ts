import React from 'react';

// Base props for Section component
export interface BaseSectionProps {
  /**
   * The content to be rendered inside the Section
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Section variant for different styling
   * @default 'default'
   */
  variant?: 'default' | 'paper' | 'elevated' | 'bordered' | 'minimal';

  /**
   * Padding inside the section
   * @default 'lg'
   */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * Margin around the section
   * @default 'none'
   */
  margin?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * Maximum width of the section
   * @default 'none'
   */
  maxWidth?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full';

  /**
   * Whether the section should be centered
   * @default false
   */
  centered?: boolean;

  /**
   * Border radius for the section
   * @default 'none'
   */
  radius?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';

  /**
   * Whether to add a divider at the bottom
   * @default false
   */
  divider?: boolean;
}

// Polymorphic component types
export type SectionProps<T extends React.ElementType = 'section'> = BaseSectionProps & {
  /**
   * The HTML element or React component to render as
   * @default 'section'
   */
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof BaseSectionProps>;

export type SectionRef = HTMLElement;