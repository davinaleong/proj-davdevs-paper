import React from 'react';

// Base props that are always available
export interface BaseTagProps {
  /**
   * The content to be rendered inside the Tag
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Visual variant of the tag
   * @default 'default'
   */
  variant?: 'default' | 'primary' | 'secondary' | 'category' | 'keyword';

  /**
   * Size of the tag
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Whether the tag is removable
   * @default false
   */
  removable?: boolean;

  /**
   * Whether the tag is selectable/toggleable
   * @default false
   */
  selectable?: boolean;

  /**
   * Whether the tag is selected (when selectable)
   * @default false
   */
  selected?: boolean;

  /**
   * Icon to display before the text
   */
  icon?: React.ReactNode;

  /**
   * Callback when tag is removed
   */
  onRemove?: () => void;

  /**
   * Callback when tag is clicked (when selectable)
   */
  onToggle?: (selected: boolean) => void;

  /**
   * The HTML element or React component to render
   * @default 'span'
   */
  as?: React.ElementType;
}

// Props when used as a polymorphic component
export type TagProps<T extends React.ElementType = 'span'> = BaseTagProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof BaseTagProps> & {
    as?: T;
  };

export type TagRef = HTMLElement;