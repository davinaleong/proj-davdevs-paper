import React from 'react';

// Base props for Progress component
export interface ProgressProps {
  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Current progress value (0-100)
   * @default 0
   */
  value?: number;

  /**
   * Maximum value
   * @default 100
   */
  max?: number;

  /**
   * Size of the progress bar
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Visual variant of the progress bar
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';

  /**
   * Border radius amount
   * @default 'base'
   */
  radius?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'full';

  /**
   * Whether to show the percentage text
   * @default false
   */
  showPercentage?: boolean;

  /**
   * Custom label text
   */
  label?: string;

  /**
   * Position of the label
   * @default 'top'
   */
  labelPosition?: 'top' | 'bottom' | 'inline';

  /**
   * Whether to animate the progress
   * @default true
   */
  animated?: boolean;

  /**
   * Whether to show a striped pattern
   * @default false
   */
  striped?: boolean;

  /**
   * Whether the progress is indeterminate (loading state)
   * @default false
   */
  indeterminate?: boolean;

  /**
   * Color of the track (background)
   */
  trackColor?: string;

  /**
   * Color of the fill
   */
  fillColor?: string;

  /**
   * The HTML element to render as
   * @default 'div'
   */
  as?: React.ElementType;
}

export type ProgressRef = HTMLDivElement;