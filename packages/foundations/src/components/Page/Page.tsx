import React from 'react';
import { cn } from '../../utils/cn';
import type { PageProps, PageRef } from './Page.types';

/**
 * Page - Full-page paper background container
 * 
 * Provides a full-page container with paper-inspired backgrounds,
 * proper spacing, and responsive design capabilities.
 */
export const Page = React.forwardRef<PageRef, PageProps>(({
  children,
  className,
  variant = 'default',
  padding = 'none',
  fullHeight = false,
  maxWidth = 'none',
  centered = false,
  as,
  ...props
}, ref) => {
  const Component = as || 'main';

  const baseClasses = [
    'paper-page',
  ];

  const classes = cn(
    baseClasses,
    className
  );

  const dataAttributes = {
    'data-variant': variant,
    'data-padding': padding,
    'data-full-height': fullHeight,
    'data-max-width': maxWidth,
    'data-centered': centered,
  };

  return (
    <Component
      ref={ref}
      className={classes}
      {...dataAttributes}
      {...props}
    >
      <div className="paper-page-content">
        {children}
      </div>
    </Component>
  );
});

Page.displayName = 'Page';