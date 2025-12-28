import React from 'react';

// Base props for Skeleton component
export interface SkeletonProps {
  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Width of the skeleton
   * @default 'full'
   */
  width?: string | number | 'full' | 'auto';

  /**
   * Height of the skeleton
   * @default 'auto'
   */
  height?: string | number | 'auto';

  /**
   * Shape variant of the skeleton
   * @default 'rounded'
   */
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';

  /**
   * Whether to animate the skeleton
   * @default true
   */
  animate?: boolean;

  /**
   * Animation type
   * @default 'pulse'
   */
  animation?: 'pulse' | 'wave';

  /**
   * Number of lines for text variant
   * @default 1
   */
  lines?: number;

  /**
   * The HTML element to render as
   * @default 'div'
   */
  as?: React.ElementType;
}

export type SkeletonRef = HTMLDivElement;