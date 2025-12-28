import React, { useEffect, useState } from 'react';
import { cn } from '../../../utils/cn';
import type { ToastProps, ToastRef } from './Toast.types';

/**
 * Toast - Notification system
 * 
 * Displays temporary notifications with paper-inspired design,
 * automatic dismissal, and positioning options.
 */
export const Toast = React.forwardRef<ToastRef, ToastProps>(
  (
    {
      children,
      className,
      variant = 'info',
      position = 'top-right',
      duration = 4000,
      showIcon = true,
      icon,
      dismissible = true,
      onDismiss,
      title,
      open = true,
      elevation = 'lg',
      radius = 'md',
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(open);

    // Auto-dismiss functionality
    useEffect(() => {
      if (duration > 0 && isVisible) {
        const timer = setTimeout(() => {
          setIsVisible(false);
          onDismiss?.();
        }, duration);

        return () => clearTimeout(timer);
      }
    }, [duration, isVisible, onDismiss]);

    // Sync with external open prop
    useEffect(() => {
      setIsVisible(open);
    }, [open]);

    const handleDismiss = () => {
      setIsVisible(false);
      onDismiss?.();
    };

    if (!isVisible) return null;

    const baseClasses = [
      'paper-toast',
      'fixed',
      'z-50',
      'flex',
      'max-w-sm',
      'w-full',
      'p-4',
      'border',
      'backdrop-blur-sm',
      'transition-all',
      'duration-300',
      'ease-out',
      'animate-in',
      'slide-in-from-top-2',
      'fade-in'
    ];

    // Position classes
    const positionClasses = {
      'top-left': 'top-4 left-4',
      'top-center': 'top-4 left-1/2 -translate-x-1/2',
      'top-right': 'top-4 right-4',
      'bottom-left': 'bottom-4 left-4',
      'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
      'bottom-right': 'bottom-4 right-4'
    };

    // Variant classes
    const variantClasses = {
      info: 'bg-blue-50/90 border-blue-200 text-blue-800',
      success: 'bg-green-50/90 border-green-200 text-green-800',
      warning: 'bg-yellow-50/90 border-yellow-200 text-yellow-800',
      error: 'bg-red-50/90 border-red-200 text-red-800'
    };

    // Elevation classes (shadow)
    const elevationClasses = {
      none: '',
      sm: 'shadow-sm',
      base: 'shadow',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl'
    };

    // Radius classes
    const radiusClasses = {
      none: 'rounded-none',
      sm: 'rounded-sm',
      base: 'rounded',
      md: 'rounded-md',
      lg: 'rounded-lg'
    };

    // Default icons for each variant
    const defaultIcons = {
      info: (
        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
      success: (
        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      warning: (
        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      ),
      error: (
        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      )
    };

    const classes = cn(
      baseClasses,
      positionClasses[position],
      variantClasses[variant],
      elevationClasses[elevation],
      radiusClasses[radius],
      className
    );

    return (
      <div
        ref={ref}
        role="alert"
        aria-live="assertive"
        className={classes}
        {...props}
      >
        {/* Icon */}
        {showIcon && (
          <div className="mr-3">
            {icon || defaultIcons[variant]}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className="font-medium text-sm mb-1">
              {title}
            </h4>
          )}
          <div className="text-sm">
            {children}
          </div>
        </div>

        {/* Dismiss Button */}
        {dismissible && (
          <button
            type="button"
            className="ml-3 flex-shrink-0 p-1 rounded-sm opacity-70 hover:opacity-100 focus:opacity-100 focus:outline-none transition-opacity"
            onClick={handleDismiss}
            aria-label="Dismiss notification"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Toast.displayName = 'Toast';