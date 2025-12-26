import React from 'react';
import { cn } from '../../utils/cn';
import type { StackProps, StackRef } from './Stack.types';

/**
 * Stack - Vertical/horizontal rhythm with consistent spacing
 * 
 * The foundational layout primitive for creating consistent spacing
 * between elements with flexible alignment and wrapping options.
 */
export const Stack = React.forwardRef<StackRef, StackProps>(({
  children,
  className,
  direction = 'vertical',
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  as,
  ...props
}, ref) => {
  const Component = as || 'div';
  
  const baseClasses = [
    'paper-stack',
    direction === 'horizontal' ? 'paper-stack--horizontal' : 'paper-stack--vertical'
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
    start: direction === 'horizontal' ? 'items-start' : 'items-start',
    center: direction === 'horizontal' ? 'items-center' : 'items-center', 
    end: direction === 'horizontal' ? 'items-end' : 'items-end',
    stretch: direction === 'horizontal' ? 'items-stretch' : 'items-stretch'
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

Stack.displayName = 'Stack';