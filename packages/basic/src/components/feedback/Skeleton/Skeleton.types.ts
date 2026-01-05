import React from 'react';

// Preset size types
export type SkeletonSizePreset = 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl';
export type SkeletonWidthPreset = SkeletonSizePreset | 'full' | '1/2' | '1/3' | '2/3' | '1/4' | '3/4' | '4/5' | '3/5';

// Base props for Skeleton component
export interface SkeletonProps {
  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Width of the skeleton - can be a preset, custom string, number, or 'auto'
   * @default 'full'
   */
  width?: SkeletonWidthPreset | string | number | 'auto';

  /**
   * Height of the skeleton - can be a preset, custom string, number, or 'auto'
   * @default 'auto'
   */
  height?: SkeletonSizePreset | string | number | 'auto';

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