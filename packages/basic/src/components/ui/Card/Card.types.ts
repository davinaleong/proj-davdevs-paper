import React from 'react';

// Base props that are always available
interface BaseCardProps {
  /**
   * The content to be rendered inside the Card
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Visual variant of the card
   * @default 'default'
   */
  variant?: 'default' | 'outlined' | 'filled' | 'ghost';

  /**
   * Elevation level (shadow depth)
   * @default 'sm'
   */
  elevation?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';

  /**
   * Internal padding amount
   * @default 'md'
   */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Border radius amount
   * @default 'base'
   */
  radius?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';

  /**
   * Whether the card is interactive (hoverable/clickable)
   * @default false
   */
  interactive?: boolean;

  /**
   * The HTML element or React component to render
   * @default 'div'
   */
  as?: React.ElementType;
}

// Props when used as a polymorphic component
export type CardProps<T extends React.ElementType = 'div'> = BaseCardProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof BaseCardProps> & {
    as?: T;
  };

export type CardRef = HTMLDivElement;