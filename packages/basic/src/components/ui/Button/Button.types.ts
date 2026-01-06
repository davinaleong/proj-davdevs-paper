import React from 'react';

// Base props that are always available
export interface BaseButtonProps {
  /**
   * The content to be rendered inside the Button
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Visual variant of the button
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

  /**
   * Size of the button
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Elevation level (shadow depth)
   * @default 'sm'
   */
  elevation?: 'none' | 'sm' | 'base' | 'md' | 'lg';

  /**
   * Border radius amount
   * @default 'base'
   */
  radius?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the button is in a loading state
   * @default false
   */
  loading?: boolean;

  /**
   * Icon to display before the text
   */
  startIcon?: React.ReactNode;

  /**
   * Icon to display after the text
   */
  endIcon?: React.ReactNode;

  /**
   * Whether the button should take full width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * The HTML element or React component to render
   * @default 'button'
   */
  as?: React.ElementType;
}

// Props when used as a polymorphic component
export type ButtonProps<T extends React.ElementType = 'button'> = BaseButtonProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof BaseButtonProps> & {
    as?: T;
  };

export type ButtonRef = HTMLButtonElement;