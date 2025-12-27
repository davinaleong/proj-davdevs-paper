import React from 'react';
import { cn } from '../../../utils/cn';
import type { ButtonProps, ButtonRef } from './Button.types';

/**
 * Button - Paper-style buttons with elevation
 * 
 * Interactive buttons with paper-inspired design, elevation effects,
 * and comprehensive accessibility support.
 */
export const Button = React.forwardRef<ButtonRef, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      elevation = 'sm',
      radius = 'base',
      disabled = false,
      loading = false,
      startIcon,
      endIcon,
      fullWidth = false,
      as,
      ...props
    },
    ref
  ) => {
  const Component = as || 'button';
  
  const baseClasses = [
    'paper-button',
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'transition-all',
    'duration-200',
    'ease-out',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-blue-500'
  ];

  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2',
    xl: 'px-8 py-4 text-lg gap-3'
  };

  // Elevation classes
  const elevationClasses = {
    none: '',
    sm: 'shadow-sm hover:shadow-md active:shadow-sm',
    base: 'shadow hover:shadow-lg active:shadow',
    md: 'shadow-md hover:shadow-lg active:shadow-md',
    lg: 'shadow-lg hover:shadow-xl active:shadow-lg'
  };

  // Radius classes
  const radiusClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    base: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };

  // State classes
  const stateClasses = [
    disabled && 'opacity-50 cursor-not-allowed',
    loading && 'cursor-wait',
    fullWidth && 'w-full',
    !disabled && !loading && 'hover:-translate-y-0.5 active:translate-y-0'
  ].filter(Boolean);

  return (
    <Component
      ref={ref}
      className={cn(
        baseClasses,
        sizeClasses[size],
        elevationClasses[elevation],
        radiusClasses[radius],
        stateClasses,
        className
      )}
      data-variant={variant}
      data-size={size}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        startIcon && <span className="button-start-icon">{startIcon}</span>
      )}
      
      {children}
      
      {!loading && endIcon && (
        <span className="button-end-icon">{endIcon}</span>
      )}
    </Component>
  );
});

Button.displayName = 'Button';