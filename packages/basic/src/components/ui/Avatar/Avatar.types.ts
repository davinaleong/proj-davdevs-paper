import React from 'react';

// Base props that are always available
export interface BaseAvatarProps {
  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Size of the avatar
   * @default 'md'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * Shape of the avatar
   * @default 'circle'
   */
  shape?: 'circle' | 'square';

  /**
   * Source URL for the avatar image
   */
  src?: string;

  /**
   * Alternative text for the image
   */
  alt?: string;

  /**
   * Initials to display when no image is provided
   */
  initials?: string;

  /**
   * Name for generating initials automatically
   */
  name?: string;

  /**
   * Icon to display when no image or initials
   */
  icon?: React.ReactNode;

  /**
   * Color variant for the background
   * @default 'default'
   */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

  /**
   * Whether the avatar has an online/status indicator
   * @default false
   */
  showStatus?: boolean;

  /**
   * Status indicator type
   * @default 'online'
   */
  status?: 'online' | 'offline' | 'away' | 'busy';

  /**
   * Whether the avatar is clickable
   * @default false
   */
  interactive?: boolean;

  /**
   * Click handler for interactive avatars
   */
  onClick?: () => void;

  /**
   * Fallback content when image fails to load
   */
  fallback?: React.ReactNode;

  /**
   * The HTML element or React component to render
   * @default 'div'
   */
  as?: React.ElementType;
}

// Props when used as a polymorphic component
export type AvatarProps<T extends React.ElementType = 'div'> = BaseAvatarProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof BaseAvatarProps> & {
    as?: T;
  };

export type AvatarRef = HTMLElement;