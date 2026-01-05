import React from 'react';
import { cn } from '../../../utils/cn';
import type { ProgressProps, ProgressRef } from './Progress.types';

/**
 * Progress - Progress indicators
 *
 * Displays progress with paper-inspired design, animations,
 * and clear visual feedback for loading states and completion.
 */
export const Progress = React.forwardRef<ProgressRef, ProgressProps>(
  (
    {
      className,
      value = 0,
      max = 100,
      size = 'md',
      variant = 'primary',
      radius = 'base',
      showPercentage = false,
      label,
      labelPosition = 'top',
      animated = true,
      striped = false,
      indeterminate = false,
      trackColor,
      fillColor,
      as,
      ...props
    },
    ref
  ) => {
    const Component = as || 'div';

    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    /* ----------------------------------------
     * Track (background)
     * -------------------------------------- */
    const baseClasses = [
      'relative',
      'overflow-hidden',
      'bg-gray-300 dark:bg-gray-700',
    ];

    const sizeClasses = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3',
      xl: 'h-4',
    };

    const radiusClasses = {
      none: 'rounded-none',
      sm: 'rounded-sm',
      base: 'rounded',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    };

    const trackClasses = cn(
      baseClasses,
      sizeClasses[size],
      radiusClasses[radius],
      className
    );

    /* ----------------------------------------
     * Fill
     * -------------------------------------- */
    const variantClasses = {
      primary: 'bg-blue-600',
      secondary: 'bg-gray-600',
      success: 'bg-green-600',
      warning: 'bg-yellow-600',
      error: 'bg-red-600',
    };

    const fillClasses = cn(
      'h-full',
      animated && 'transition-all duration-500 ease-out',
      variantClasses[variant],
      striped && 'bg-stripes bg-stripes-white/20',
      indeterminate && 'animate-indeterminate',
      radius === 'full' ? 'rounded-full' : 'rounded-inherit'
    );

    const fillStyle: React.CSSProperties = {
      width: indeterminate ? '100%' : `${percentage}%`,
      backgroundColor: fillColor,
      ...(indeterminate && {
        backgroundImage:
          'linear-gradient(45deg, transparent 25%, currentColor 25%, currentColor 50%, transparent 50%, transparent 75%, currentColor 75%)',
        backgroundSize: '1rem 1rem',
        animation: 'progress-indeterminate 2s linear infinite',
      }),
    };

    const trackStyle: React.CSSProperties = {
      backgroundColor: trackColor,
    };

    /* ----------------------------------------
     * Label
     * -------------------------------------- */
    const LabelComponent = () => {
      if (!label && !showPercentage) return null;

      const text =
        label ?? (showPercentage ? `${Math.round(percentage)}%` : '');

      return (
        <div
          className={cn(
            'text-sm font-medium text-gray-700 dark:text-gray-300',
            labelPosition === 'inline' &&
              'absolute inset-0 flex items-center justify-center text-xs'
          )}
        >
          {text}
        </div>
      );
    };

    return (
      <Component ref={ref} className="space-y-1" {...props}>
        {labelPosition === 'top' && <LabelComponent />}

        <div
          className={trackClasses}
          style={trackStyle}
          role="progressbar"
          aria-valuenow={indeterminate ? undefined : value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={label}
        >
          <div className={fillClasses} style={fillStyle} />
          {labelPosition === 'inline' && <LabelComponent />}
        </div>

        {labelPosition === 'bottom' && <LabelComponent />}
      </Component>
    );
  }
);

Progress.displayName = 'Progress';
