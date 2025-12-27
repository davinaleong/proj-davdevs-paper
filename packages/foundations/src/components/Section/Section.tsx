import React from 'react';
import { cn } from '../../utils/cn';
import type { SectionProps, SectionRef } from './Section.types';

/**
 * Section - Page section dividers with paper styling
 * 
 * Creates semantic page sections with consistent spacing, backgrounds,
 * and styling options for organizing page content.
 */
export const Section = React.forwardRef<SectionRef, SectionProps>(({
  children,
  className,
  variant = 'default',
  padding = 'lg',
  margin = 'none',
  maxWidth = 'none',
  centered = false,
  radius = 'none',
  divider = false,
  as,
  ...props
}, ref) => {
  const Component = as || 'section';

  const baseClasses = [
    'paper-section',
  ];

  const classes = cn(
    baseClasses,
    className
  );

  const dataAttributes = {
    'data-variant': variant,
    'data-padding': padding,
    'data-margin': margin,
    'data-max-width': maxWidth,
    'data-centered': centered,
    'data-radius': radius,
    'data-divider': divider,
  };

  return (
    <Component
      ref={ref}
      className={classes}
      {...dataAttributes}
      {...props}
    >
      {children}
    </Component>
  );
});

Section.displayName = 'Section';