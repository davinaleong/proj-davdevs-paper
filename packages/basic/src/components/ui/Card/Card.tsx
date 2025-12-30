import React from 'react';
import { cn } from '../../../utils/cn';
import type { CardProps, CardRef } from './Card.types';

/**
 * Card - Basic paper cards
 * 
 * A versatile container component that provides a paper-like surface
 * with elevation, padding, and interactive states.
 */
export const Card = React.forwardRef<CardRef, CardProps>(({
  children,
  className,
  variant = 'default',
  elevation = 'sm',
  padding = 'md',
  radius = 'base',
  interactive = false,
  as,
  ...props
}, ref) => {
  const Component = as || 'div';
  
  const baseClasses = [
    'paper-card',
    'relative',
    'transition-all',
    'duration-200',
    'ease-out'
  ];

  // Elevation classes
  const elevationClasses = {
    none: '',
    sm: 'shadow-sm',
    base: 'shadow',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  };

  // Padding classes
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8'
  };

  // Radius classes
  const radiusClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    base: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl'
  };

  // Interactive classes
  const interactiveClasses = interactive ? [
    'cursor-pointer',
    'hover:shadow-md',
    'hover:-translate-y-0.5',
    'active:translate-y-0',
    'active:shadow-sm'
  ] : [];

  return (
    <Component
      ref={ref}
      className={cn(
        baseClasses,
        elevationClasses[elevation],
        paddingClasses[padding],
        radiusClasses[radius],
        interactiveClasses,
        className
      )}
      data-variant={variant}
      {...props}
    >
      {children}
    </Component>
  );
});

Card.displayName = 'Card';