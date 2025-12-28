import React, { useEffect, useCallback } from 'react';
import { cn } from '../../../utils/cn';
import type { DrawerProps, DrawerRef } from './Drawer.types';

/**
 * Drawer - Side panel with paper slide
 * 
 * Displays content in a sliding panel with paper-inspired design,
 * focus management, and smooth animations.
 */
export const Drawer = React.forwardRef<DrawerRef, DrawerProps>(
  (
    {
      children,
      className,
      open = false,
      onClose,
      side = 'right',
      size = 'md',
      elevation = 'xl',
      closeOnBackdropClick = true,
      closeOnEscape = true,
      title,
      showCloseButton = true,
      backdropClassName,
      bordered = true,
      animationDuration = 300,
      ...props
    },
    ref
  ) => {
    // Handle escape key
    const handleEscapeKey = useCallback((event: KeyboardEvent) => {
      if (event.key === 'Escape' && closeOnEscape && open) {
        onClose?.();
      }
    }, [closeOnEscape, open, onClose]);

    // Handle backdrop click
    const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget && closeOnBackdropClick) {
        onClose?.();
      }
    };

    // Escape key listener
    useEffect(() => {
      if (open) {
        document.addEventListener('keydown', handleEscapeKey);
        return () => document.removeEventListener('keydown', handleEscapeKey);
      }
    }, [open, handleEscapeKey]);

    // Body scroll lock
    useEffect(() => {
      if (open) {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = '';
        };
      }
    }, [open]);

    if (!open) return null;

    const baseClasses = [
      'paper-drawer',
      'fixed',
      'bg-white',
      'outline-none',
      'transition-transform',
      'duration-300',
      'ease-out',
      'z-50'
    ];

    // Position and size classes based on side
    const sideClasses = {
      left: {
        position: 'inset-y-0 left-0',
        transform: 'translate-x-0',
        sizes: {
          sm: 'w-64',
          md: 'w-80',
          lg: 'w-96',
          xl: 'w-[32rem]',
          full: 'w-full'
        }
      },
      right: {
        position: 'inset-y-0 right-0',
        transform: 'translate-x-0',
        sizes: {
          sm: 'w-64',
          md: 'w-80',
          lg: 'w-96',
          xl: 'w-[32rem]',
          full: 'w-full'
        }
      },
      top: {
        position: 'inset-x-0 top-0',
        transform: 'translate-y-0',
        sizes: {
          sm: 'h-64',
          md: 'h-80',
          lg: 'h-96',
          xl: 'h-[32rem]',
          full: 'h-full'
        }
      },
      bottom: {
        position: 'inset-x-0 bottom-0',
        transform: 'translate-y-0',
        sizes: {
          sm: 'h-64',
          md: 'h-80',
          lg: 'h-96',
          xl: 'h-[32rem]',
          full: 'h-full'
        }
      }
    };

    // Elevation classes (shadow)
    const elevationClasses = {
      none: '',
      sm: 'shadow-sm',
      base: 'shadow',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
      '2xl': 'shadow-2xl'
    };

    // Animation classes for slide in
    const slideInClasses = {
      left: 'animate-in slide-in-from-left',
      right: 'animate-in slide-in-from-right',
      top: 'animate-in slide-in-from-top',
      bottom: 'animate-in slide-in-from-bottom'
    };

    const currentSide = sideClasses[side];
    
    const drawerClasses = cn(
      baseClasses,
      currentSide.position,
      currentSide.sizes[size],
      elevationClasses[elevation],
      slideInClasses[side],
      bordered && side === 'left' && 'border-r border-gray-200',
      bordered && side === 'right' && 'border-l border-gray-200',
      bordered && side === 'top' && 'border-b border-gray-200',
      bordered && side === 'bottom' && 'border-t border-gray-200',
      className
    );

    const backdropClasses = cn(
      'fixed inset-0 z-40',
      'bg-black/50',
      'backdrop-blur-sm',
      'transition-opacity duration-300 ease-out',
      'animate-in fade-in',
      backdropClassName
    );

    return (
      <>
        {/* Backdrop */}
        <div className={backdropClasses} onClick={handleBackdropClick} />

        {/* Drawer */}
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'drawer-title' : undefined}
          className={drawerClasses}
          style={{ animationDuration: `${animationDuration}ms` }}
          {...props}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              {title && (
                <h2 id="drawer-title" className="text-lg font-semibold text-gray-900">
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  type="button"
                  className="p-1 ml-3 rounded-sm text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition-colors"
                  onClick={onClose}
                  aria-label="Close drawer"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className={cn(
            'flex-1 overflow-y-auto p-6',
            !(title || showCloseButton) && 'pt-6'
          )}>
            {children}
          </div>
        </div>
      </>
    );
  }
);

Drawer.displayName = 'Drawer';