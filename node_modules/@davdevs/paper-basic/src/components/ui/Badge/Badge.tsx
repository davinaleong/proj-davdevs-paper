import React from 'react';
import { cn } from '../../../utils/cn';
import type { BadgeProps, BadgeRef } from './Badge.types';

/**
 * Badge - Small paper labels
 * 
 * Compact labels for status, categories, counts, and other metadata
 * with paper-inspired design.
 */
export const Badge = React.forwardRef<BadgeRef, BadgeProps>((
  {
    children,
    className,
    variant = 'default',
    size = 'md',
    shape = 'rounded',
    subtle = false,
    outline = false,
    startIcon,
    endIcon,
    dismissible = false,
    onDismiss,
    as,
    ...props
  },
  ref
) => {
  const Component = as || 'span';
  
  const baseClasses = [
    'paper-badge',
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'transition-all',
    'duration-200',
    'ease-out'
  ];

  // Size classes
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs gap-1',
    md: 'px-2.5 py-1 text-sm gap-1.5',
    lg: 'px-3 py-1.5 text-sm gap-2'
  };

  // Shape classes
  const shapeClasses = {
    rounded: 'rounded',
    pill: 'rounded-full'
  };

  // Style modifier classes
  const modifierClasses = [
    subtle && 'badge-subtle',
    outline && 'badge-outline'
  ].filter(Boolean);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDismiss?.();
  };

  return (
    <Component
      ref={ref}
      className={cn(
        baseClasses,
        sizeClasses[size],
        shapeClasses[shape],
        modifierClasses,
        className
      )}
      data-variant={variant}
      data-size={size}
      {...props}
    >
      {startIcon && (
        <span className="badge-start-icon">{startIcon}</span>
      )}
      
      <span className="badge-content">{children}</span>
      
      {endIcon && !dismissible && (
        <span className="badge-end-icon">{endIcon}</span>
      )}
      
      {dismissible && (
        <button
          type="button"
          className="badge-dismiss ml-1 hover:bg-black/10 rounded-full p-0.5 transition-colors"
          onClick={handleDismiss}
          aria-label="Remove badge"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </Component>
  );
});

Badge.displayName = 'Badge';