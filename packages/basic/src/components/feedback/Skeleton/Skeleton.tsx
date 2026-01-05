import React from 'react';
import { cn } from '../../../utils/cn';
import type { SkeletonProps, SkeletonRef, SkeletonSizePreset, SkeletonWidthPreset } from './Skeleton.types';

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

    // Base skeleton class
    const baseClasses = ['skeleton'];

    // Animation classes
    const animationClasses = {
      pulse: animate ? 'skeleton--animate' : '',
      wave: animate ? 'skeleton--wave' : ''
    };

    // Variant classes
    const variantClasses = {
      text: 'skeleton--text',
      circular: 'skeleton--circular',
      rectangular: 'skeleton--rectangular',
      rounded: 'skeleton--rounded'
    };

    /**
     * Get width class based on preset or custom value
     */
    const getWidthClass = (w: typeof width): string => {
      // Handle preset width values
      const presetMap: Record<SkeletonWidthPreset, string> = {
        xs: 'skeleton--width-xs',
        sm: 'skeleton--width-sm', 
        base: 'skeleton--width-base',
        md: 'skeleton--width-md',
        lg: 'skeleton--width-lg',
        xl: 'skeleton--width-xl',
        '2xl': 'skeleton--width-2xl',
        full: 'skeleton--width-full',
        '1/2': 'skeleton--width-1-2',
        '1/3': 'skeleton--width-1-3',
        '2/3': 'skeleton--width-2-3',
        '1/4': 'skeleton--width-1-4',
        '3/4': 'skeleton--width-3-4',
        '4/5': 'skeleton--width-4-5',
        '3/5': 'skeleton--width-3-5'
      };

      if (typeof w === 'string' && w in presetMap) {
        return presetMap[w as SkeletonWidthPreset];
      }

      // Handle custom values
      if (w === 'auto') return '';
      if (typeof w === 'number') return `w-[${w}px]`;
      if (typeof w === 'string') {
        // Check if it's a percentage or includes units
        if (w.includes('%') || w.includes('px') || w.includes('rem') || w.includes('em')) {
          return `w-[${w}]`;
        }
        return `w-${w}`;
      }

      return 'skeleton--width-full';
    };

    /**
     * Get height class based on preset or custom value
     */
    const getHeightClass = (h: typeof height): string => {
      // Handle auto height with variant defaults
      if (h === 'auto') {
        return variant === 'text' ? 'skeleton--height-sm' : 'skeleton--height-base';
      }

      // Handle preset height values
      const presetMap: Record<SkeletonSizePreset, string> = {
        xs: 'skeleton--height-xs',
        sm: 'skeleton--height-sm',
        base: 'skeleton--height-base', 
        md: 'skeleton--height-md',
        lg: 'skeleton--height-lg',
        xl: 'skeleton--height-xl',
        '2xl': 'skeleton--height-2xl'
      };

      if (typeof h === 'string' && h in presetMap) {
        return presetMap[h as SkeletonSizePreset];
      }

      // Handle custom values
      if (typeof h === 'number') return `h-[${h}px]`;
      if (typeof h === 'string') {
        if (h.includes('%') || h.includes('px') || h.includes('rem') || h.includes('em')) {
          return `h-[${h}]`;
        }
        return `h-${h}`;
      }

      return 'skeleton--height-base';
    };

    const classes = cn(
      baseClasses,
      variantClasses[variant],
      getWidthClass(width),
      getHeightClass(height),
      animationClasses[animation],
      className
    );

    /* -------------------------------
       Multi-line text
    --------------------------------*/
    if (variant === 'text' && lines > 1) {
      return (
        <div className="skeleton__lines" {...props}>
          {Array.from({ length: lines }).map((_, index) => (
            <Component
              key={index}
              ref={index === 0 ? ref : undefined}
              className={cn(
                classes,
                index === lines - 1 && 'skeleton__line--short'
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
