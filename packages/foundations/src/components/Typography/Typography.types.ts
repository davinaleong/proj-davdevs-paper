import React from 'react';

// Base props for all typography variants
interface BaseTypographyProps {
  /**
   * The content to be rendered
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Color variant for text
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'muted' | 'subtle' | 'inverse' | 'inherit';

  /**
   * Text alignment
   * @default 'left'
   */
  align?: 'left' | 'center' | 'right' | 'justify';

  /**
   * Font family variant
   * @default 'sans'
   */
  font?: 'sans' | 'serif' | 'mono';

  /**
   * Font weight
   * @default varies by variant
   */
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'black';

  /**
   * Enable/disable text balance for better line wrapping
   * @default false
   */
  balance?: boolean;

  /**
   * Whether the text should be truncated with ellipsis
   * @default false
   */
  truncate?: boolean;

  /**
   * Number of lines to clamp the text to
   */
  clamp?: number;
}

// Heading-specific props
export interface BaseHeadingProps extends BaseTypographyProps {
  /**
   * Heading level
   */
  level: 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * Size variant for the heading (overrides default level sizing)
   */
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';

  /**
   * Whether to use display styling for large headings
   * @default false
   */
  display?: boolean;
}

// Text-specific props
export interface BaseTextProps extends BaseTypographyProps {
  /**
   * Size variant for body text
   * @default 'base'
   */
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';

  /**
   * Text style variant
   * @default 'body'
   */
  variant?: 'body' | 'lead' | 'small' | 'caption' | 'overline';

  /**
   * Whether the text is inline code
   * @default false
   */
  code?: boolean;
}

// List-specific props
export interface BaseListProps extends Omit<BaseTypographyProps, 'children'> {
  /**
   * List items
   */
  children: React.ReactNode;

  /**
   * List type
   * @default 'unordered'
   */
  type?: 'ordered' | 'unordered';

  /**
   * List style variant
   * @default 'default'
   */
  variant?: 'default' | 'paper' | 'minimal';

  /**
   * Spacing between list items
   * @default 'sm'
   */
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
}

// Blockquote-specific props
export interface BaseBlockquoteProps extends BaseTypographyProps {
  /**
   * Citation text
   */
  cite?: string;

  /**
   * Author of the quote
   */
  author?: string;

  /**
   * Source of the quote
   */
  source?: string;

  /**
   * Blockquote variant
   * @default 'default'
   */
  variant?: 'default' | 'paper' | 'minimal';

  /**
   * Size of the blockquote
   * @default 'base'
   */
  size?: 'sm' | 'base' | 'lg' | 'xl';
}

// Component types with polymorphic support
export type HeadingProps<T extends React.ElementType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> = BaseHeadingProps & {
  /**
   * The HTML element or React component to render as
   */
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof BaseHeadingProps>;

export type TextProps<T extends React.ElementType = 'p'> = BaseTextProps & {
  /**
   * The HTML element or React component to render as
   * @default 'p'
   */
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof BaseTextProps>;

export type ListProps<T extends React.ElementType = 'ul' | 'ol'> = BaseListProps & {
  /**
   * The HTML element or React component to render as
   */
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof BaseListProps>;

export type BlockquoteProps<T extends React.ElementType = 'blockquote'> = BaseBlockquoteProps & {
  /**
   * The HTML element or React component to render as
   * @default 'blockquote'
   */
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof BaseBlockquoteProps>;

// Ref types
export type HeadingRef = HTMLHeadingElement;
export type TextRef = HTMLElement;
export type ListRef = HTMLUListElement | HTMLOListElement;
export type BlockquoteRef = HTMLQuoteElement;