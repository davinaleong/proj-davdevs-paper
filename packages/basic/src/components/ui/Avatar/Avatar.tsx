import React, { useState } from 'react';
import { cn } from '../../../utils/cn';
import type { AvatarProps, AvatarRef } from './Avatar.types';

/**
 * Avatar - User representation
 * 
 * Flexible avatar component supporting images, initials, icons,
 * and status indicators with paper-inspired design.
 */
export const Avatar = React.forwardRef<AvatarRef, AvatarProps>((
  {
    className,
    size = 'md',
    shape = 'circle',
    src,
    alt,
    initials,
    name,
    icon,
    variant = 'default',
    showStatus = false,
    status = 'online',
    interactive = false,
    onClick,
    fallback,
    as,
    ...props
  },
  ref
) => {
  const Component = as || (interactive ? 'button' : 'div');
  const [imageError, setImageError] = useState(false);
  
  const baseClasses = [
    'paper-avatar',
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'flex-shrink-0',
    'font-medium',
    'overflow-hidden',
    'transition-all',
    'duration-200',
    'ease-out'
  ];

  // Size classes
  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-lg',
    '2xl': 'w-20 h-20 text-xl'
  };

  // Shape classes
  const shapeClasses = {
    circle: 'rounded-full',
    square: 'rounded-lg'
  };

  // Status indicator size
  const statusSizes = {
    xs: 'w-2 h-2',
    sm: 'w-2.5 h-2.5',
    md: 'w-3 h-3',
    lg: 'w-3.5 h-3.5',
    xl: 'w-4 h-4',
    '2xl': 'w-5 h-5'
  };

  // Interactive classes
  const interactiveClasses = interactive ? [
    'cursor-pointer',
    'hover:opacity-80',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-blue-500'
  ] : [];

  // Generate initials from name
  const getInitials = () => {
    if (initials) return initials;
    if (name) {
      return name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase())
        .slice(0, 2)
        .join('');
    }
    return '';
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const renderContent = () => {
    // Show image if src exists and no error
    if (src && !imageError) {
      return (
        <img
          className="w-full h-full object-cover"
          src={src}
          alt={alt || name || 'Avatar'}
          onError={handleImageError}
        />
      );
    }

    // Show initials if available
    const displayInitials = getInitials();
    if (displayInitials) {
      return (
        <span className="avatar-initials select-none">
          {displayInitials}
        </span>
      );
    }

    // Show custom fallback
    if (fallback) {
      return fallback;
    }

    // Show icon or default icon
    const defaultIcon = (
      <svg className="w-2/3 h-2/3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    );

    return (
      <span className="avatar-icon text-current">
        {icon || defaultIcon}
      </span>
    );
  };

  const renderStatus = () => {
    if (!showStatus) return null;

    return (
      <span
        className={cn(
          'avatar-status',
          'absolute',
          'bottom-0',
          'right-0',
          'block',
          'rounded-full',
          'border-2',
          'border-white',
          statusSizes[size]
        )}
        data-status={status}
      />
    );
  };

  return (
    <Component
      ref={ref as any}
      className={cn(
        baseClasses,
        sizeClasses[size],
        shapeClasses[shape],
        interactiveClasses,
        className
      )}
      data-variant={variant}
      data-size={size}
      onClick={interactive ? onClick : undefined}
      {...(props as any)}
    >
      {renderContent()}
      {renderStatus()}
    </Component>
  );
});

Avatar.displayName = 'Avatar';