import React from 'react';
import { cn } from '../../../utils/cn';
import type { SkeletonProps, SkeletonRef } from './Skeleton.types';

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
      'bg-gray-200 dark:bg-gray-700',
      'overflow-hidden',
      'block'
    ];

    const animationClasses = {
      pulse: 'animate-pulse',
      wave:
        'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent'
    };

    const variantClasses = {
      text: 'rounded',
      rectangular: 'rounded-none',
      rounded: 'rounded-lg',
      circular: 'rounded-full'
    };

    /* -------------------------------
       Width
    --------------------------------*/
    const widthClass =
      width === 'full'
        ? 'w-full'
        : typeof width === 'number'
        ? `w-[${width}px]`
        : typeof width === 'string'
        ? `w-[${width}]`
        : 'w-full';

    /* -------------------------------
       Height
    --------------------------------*/
    const heightClass =
      height === 'auto'
        ? variant === 'text'
          ? 'h-4'
          : variant === 'circular'
          ? 'h-12'
          : 'h-12'
        : typeof height === 'number'
        ? `h-[${height}px]`
        : typeof height === 'string'
        ? `h-[${height}]`
        : 'h-auto';

    /* -------------------------------
       Circular override
       (NO aspect-ratio, force square)
    --------------------------------*/
    const circularSizing =
      variant === 'circular'
        ? cn(widthClass, heightClass)
        : null;

    const classes = cn(
      baseClasses,
      variantClasses[variant],
      variant !== 'circular' && widthClass,
      variant !== 'circular' && heightClass,
      animate && animationClasses[animation],
      className
    );

    /* -------------------------------
       Multi-line text
    --------------------------------*/
    if (variant === 'text' && lines > 1) {
      return (
        <div className="space-y-2" {...props}>
          {Array.from({ length: lines }).map((_, index) => (
            <Component
              key={index}
              ref={index === 0 ? ref : undefined}
              className={cn(
                classes,
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
        className={cn(classes, circularSizing)}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';
