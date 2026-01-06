import React from 'react';
import { cn } from '../../../utils/cn';
import type { IconProps, IconRef } from './Icon.types';

/**
 * Icon - Paper-friendly iconography
 * 
 * Flexible icon component with consistent sizing, colors, and accessibility
 * features designed for paper-inspired interfaces.
 */
export const Icon = React.forwardRef<IconRef, IconProps>((
  {
    className,
    size = 'md',
    variant = 'current',
    children,
    name,
    spin = false,
    rotate,
    decorative = false,
    label,
    interactive = false,
    onClick,
    as,
    ...props
  },
  ref
) => {
  const Component = as || (interactive ? 'button' : 'span');
  
  const baseClasses = [
    'paper-icon',
    'inline-flex',
    'items-center',
    'justify-center',
    'flex-shrink-0',
    'transition-all',
    'duration-200',
    'ease-out'
  ];

  // Size classes
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8',
    '2xl': 'w-10 h-10'
  };

  // Animation classes
  const animationClasses = [
    spin && 'animate-spin'
  ].filter(Boolean);

  // Interactive classes
  const interactiveClasses = interactive ? [
    'cursor-pointer',
    'rounded',
    'hover:bg-black/5',
    'active:bg-black/10',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-1',
    'focus:ring-blue-500',
    'p-1',
    '-m-1'
  ] : [];

  // Transform styles
  const transformStyle = rotate ? {
    transform: `rotate(${rotate}deg)`
  } : undefined;

  // Built-in icons (basic set)
  const builtInIcons: Record<string, React.ReactNode> = {
    // Common icons
    'x': (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    'check': (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    'chevron-down': (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    ),
    'chevron-up': (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    ),
    'chevron-left': (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    ),
    'chevron-right': (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    ),
    'plus': (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    'minus': (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
      </svg>
    ),
    'search': (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    'user': (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    'info': (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    'warning': (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
    'error': (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  };

  const renderIcon = () => {
    if (children) {
      return children;
    }
    
    if (name && builtInIcons[name]) {
      return builtInIcons[name];
    }

    // Fallback icon
    return (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  };

  return (
    <Component
      ref={ref as any}
      className={cn(
        baseClasses,
        sizeClasses[size],
        animationClasses,
        interactiveClasses,
        className
      )}
      data-variant={variant}
      data-size={size}
      style={transformStyle}
      onClick={interactive ? onClick : undefined}
      aria-hidden={decorative}
      aria-label={!decorative ? label : undefined}
      role={interactive ? 'button' : undefined}
      {...props}
    >
      {renderIcon()}
    </Component>
  );
});

Icon.displayName = 'Icon';