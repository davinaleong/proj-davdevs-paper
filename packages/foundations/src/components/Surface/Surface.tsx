import React from 'react';
import { cn } from '../../utils/cn';
import type { SurfaceProps, SurfaceRef } from './Surface.types';

/**
 * Surface - Theme-aware backgrounds
 * 
 * A foundational component for creating themed background surfaces
 * with consistent styling, elevation, and interactive states.
 */
export const Surface = React.forwardRef<SurfaceRef, SurfaceProps>((
  {
    children,
    className,
    level = 'primary',
    appearance = 'default',
    elevation = 'none',
    radius = 'none',
    padding = 'none',
    border = 'none',
    interactive = false,
    as,
    ...props
  },
  ref
) => {
  const Component = as || 'div';

  const baseClasses = [
    'paper-surface',
    `paper-surface--level-${level}`,
    `paper-surface--appearance-${appearance}`
  ];

  const elevationClasses = {
    none: '',
    xs: 'shadow-sm',
    sm: 'shadow',
    base: 'shadow-md',
    md: 'shadow-lg',
    lg: 'shadow-xl',
    xl: 'shadow-2xl',
    '2xl': 'shadow-2xl'
  };

  const radiusClasses = {
    none: '',
    xs: 'rounded-sm',
    sm: 'rounded',
    base: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    xl: 'rounded-2xl',
    full: 'rounded-full'
  };

  const paddingClasses = {
    none: '',
    xs: 'p-2',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
    '2xl': 'p-12'
  };

  const borderClasses = {
    none: '',
    subtle: 'border border-gray-100 dark:border-gray-800',
    default: 'border border-gray-200 dark:border-gray-700',
    accent: 'border border-gray-300 dark:border-gray-600',
    primary: 'border border-blue-200 dark:border-blue-700'
  };

  const classes = cn(
    baseClasses,
    elevationClasses[elevation],
    radiusClasses[radius],
    paddingClasses[padding],
    borderClasses[border],
    interactive && 'paper-surface--interactive',
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

Surface.displayName = 'Surface';