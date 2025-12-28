import React, { useEffect, useCallback } from 'react';
import { cn } from '../../../utils/cn';
import type { ModalProps, ModalRef } from './Modal.types';

/**
 * Modal - Overlay dialogs with paper depth
 * 
 * Displays content in an overlay with paper-inspired design,
 * focus management, and accessibility support.
 */
export const Modal = React.forwardRef<ModalRef, ModalProps>(
  (
    {
      children,
      className,
      open = false,
      onClose,
      size = 'md',
      elevation = 'xl',
      radius = 'lg',
      closeOnBackdropClick = true,
      closeOnEscape = true,
      title,
      showCloseButton = true,
      backdropClassName,
      centered = true,
      bordered = true,
      animationDuration = 200,
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
      'paper-modal',
      'relative',
      'bg-white',
      'outline-none',
      'transition-all',
      'duration-200',
      'ease-out'
    ];

    // Size classes
    const sizeClasses = {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
      full: 'max-w-full w-full h-full'
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

    // Radius classes
    const radiusClasses = {
      none: 'rounded-none',
      sm: 'rounded-sm',
      base: 'rounded',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl'
    };

    const modalClasses = cn(
      baseClasses,
      sizeClasses[size],
      elevationClasses[elevation],
      radiusClasses[radius],
      bordered && 'border border-gray-200',
      className
    );

    const backdropClasses = cn(
      'fixed inset-0 z-50 flex p-4',
      'bg-black/50',
      'backdrop-blur-sm',
      'transition-opacity duration-200 ease-out',
      centered ? 'items-center justify-center' : 'items-start justify-center pt-16',
      'animate-in fade-in',
      backdropClassName
    );

    return (
      <div className={backdropClasses} onClick={handleBackdropClick}>
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'modal-title' : undefined}
          className={modalClasses}
          style={{ animationDuration: `${animationDuration}ms` }}
          {...props}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              {title && (
                <h2 id="modal-title" className="text-lg font-semibold text-gray-900">
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  type="button"
                  className="p-1 ml-3 rounded-sm text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition-colors"
                  onClick={onClose}
                  aria-label="Close modal"
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
            'p-6',
            !(title || showCloseButton) && 'pt-6'
          )}>
            {children}
          </div>
        </div>
      </div>
    );
  }
);

Modal.displayName = 'Modal';