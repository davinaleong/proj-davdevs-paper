import React from 'react';
import { cn } from '../../../utils/cn';
import type { SkeletonProps, SkeletonRef } from './Skeleton.types';

/**
 * Skeleton - Loading states with paper feel
 * 
 * Displays loading placeholders with paper-inspired design and
 * smooth animations for better perceived performance.
 */
export const Skeleton = React.forwardRef<SkeletonRef, SkeletonProps>(
  (
    {
      className,
      width = 'full',
      height = 'auto',
      variant = 'rounded',
      animate = true,
      animation = 'pulse',
      lines = 1,
      as,
      ...props
    },
    ref
  ) => {
    const Component = as || 'div';

    const baseClasses = [
      'paper-skeleton',
      'bg-gray-200',
      'overflow-hidden'
    ];

    // Animation classes
    const animationClasses = {
      pulse: 'animate-pulse',
      wave: 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent'
    };

    // Variant classes
    const variantClasses = {
      text: 'rounded h-4',
      circular: 'rounded-full aspect-square',
      rectangular: 'rounded-none',
      rounded: 'rounded'
    };

    // Width handling
    const getWidthClass = (w: typeof width) => {
      if (w === 'full') return 'w-full';
      if (w === 'auto') return 'w-auto';
      if (typeof w === 'string') return `w-[${w}]`;
      if (typeof w === 'number') return `w-[${w}px]`;
      return 'w-full';
    };

    // Height handling
    const getHeightClass = (h: typeof height) => {
      if (h === 'auto') return variant === 'text' ? 'h-4' : 'h-auto';
      if (typeof h === 'string') return `h-[${h}]`;
      if (typeof h === 'number') return `h-[${h}px]`;
      return 'h-auto';
    };

    const classes = cn(
      baseClasses,
      variantClasses[variant],
      getWidthClass(width),
      getHeightClass(height),
      animate && animationClasses[animation],
      className
    );

    // For text variant with multiple lines
    if (variant === 'text' && lines > 1) {
      return (
        <div className="space-y-2" {...props}>
          {Array.from({ length: lines }, (_, index) => (
            <Component
              key={index}
              ref={index === 0 ? ref : undefined}
              className={cn(
                classes,
                // Last line is typically shorter
                index === lines - 1 && 'w-3/4'
              )}
            />
          ))}
        </div>
      );
    }

    return (
      <Component
        ref={ref}
        className={classes}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';