import React from 'react';
import { cn } from '../../utils/cn';
import type { DividerProps, DividerRef } from './Divider.types';

/**
 * Divider - Paper-style separators
 * 
 * A foundational component for creating visual separation between content
 * sections with paper-inspired styling and flexible customization.
 */
export const Divider = React.forwardRef<DividerRef, DividerProps>(({
  className,
  orientation = 'horizontal',
  variant = 'default',
  size = 'base',
  spacing = 'md',
  color = 'default',
  label,
  labelPosition = 'center',
  as,
  ...props
}, ref) => {
  const Component = as || 'hr';
  
  const baseClasses = [
    'paper-divider',
    `paper-divider--${orientation}`,
    `paper-divider--${variant}`,
    `paper-divider--${size}`,
    `paper-divider--spacing-${spacing}`,
    `paper-divider--color-${color}`
  ];

  // If there's a label, we need to render a different structure
  if (label && orientation === 'horizontal') {
    const labelClasses = cn(
      'paper-divider__label',
      `paper-divider__label--${labelPosition}`
    );

    const containerClasses = cn(
      baseClasses, 
      'paper-divider--with-label',
      `paper-divider__label--${labelPosition}`,
      className
    );

    // Different structure based on label position
    if (labelPosition === 'left') {
      return (
        <div 
          className={containerClasses}
          role="separator"
          aria-label={label}
          {...props}
        >
          <span className={labelClasses}>{label}</span>
          <div className="paper-divider__line" />
        </div>
      );
    }

    if (labelPosition === 'right') {
      return (
        <div 
          className={containerClasses}
          role="separator"
          aria-label={label}
          {...props}
        >
          <div className="paper-divider__line" />
          <span className={labelClasses}>{label}</span>
        </div>
      );
    }

    // Center position (default)
    return (
      <div 
        className={containerClasses}
        role="separator"
        aria-label={label}
        {...props}
      >
        <div className="paper-divider__line paper-divider__line--before" />
        <span className={labelClasses}>{label}</span>
        <div className="paper-divider__line paper-divider__line--after" />
      </div>
    );
  }

  const classes = cn(
    baseClasses,
    className
  );

  return (
    <Component
      ref={ref}
      className={classes}
      role="separator"
      {...props}
    />
  );
});

Divider.displayName = 'Divider';