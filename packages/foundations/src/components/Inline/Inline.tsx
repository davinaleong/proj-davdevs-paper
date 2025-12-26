import React from 'react';
import { cn } from '../../utils/cn';
import type { InlineProps, InlineRef } from './Inline.types';

/**
 * Inline - Horizontal layout with gaps
 * 
 * The foundational layout primitive for creating horizontal arrangements
 * with consistent spacing, alignment, and responsive wrapping.
 */
export const Inline = React.forwardRef<InlineRef, InlineProps>(({
  children,
  className,
  gap = 'md',
  align = 'center',
  justify = 'start',
  wrap = true,
  responsive = true,
  as,
  ...props
}, ref) => {
  const Component = as || 'div';
  
  const baseClasses = [
    'paper-inline'
  ];

  const gapClasses = {
    none: 'gap-0',
    xs: 'gap-1',
    sm: 'gap-2', 
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
    '2xl': 'gap-12',
    '3xl': 'gap-16'
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center', 
    end: 'items-end',
    baseline: 'items-baseline',
    stretch: 'items-stretch'
  };

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end', 
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly'
  };

  const classes = cn(
    baseClasses,
    gapClasses[gap],
    alignClasses[align],
    justifyClasses[justify],
    wrap && 'flex-wrap',
    responsive && 'paper-inline--responsive',
    className
  );

  return (
    <Component
      ref={ref}
      className={classes}
      {...props}
    >
      {children}
    </Component>
  );
});

Inline.displayName = 'Inline';