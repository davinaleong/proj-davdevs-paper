import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../../utils/cn';
import type { TooltipProps, TooltipRef } from './Tooltip.types';

/**
 * Tooltip - Floating paper hints
 * 
 * Contextual tooltips with paper-inspired design, smart positioning,
 * and comprehensive accessibility support.
 */
export const Tooltip = React.forwardRef<TooltipRef, TooltipProps>((
  {
    content,
    children,
    className,
    placement = 'top',
    variant = 'default',
    size = 'md',
    showDelay = 500,
    hideDelay = 200,
    showArrow = true,
    disabled = false,
    trigger = 'hover',
    open,
    onOpenChange,
    maxWidth = 320,
    zIndex = 1000,
    portal
  },
  _ref // Ref parameter intentionally unused but required by forwardRef
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [actualPlacement, setActualPlacement] = useState(placement);
  
  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const showTimeoutRef = useRef<NodeJS.Timeout>();
  const hideTimeoutRef = useRef<NodeJS.Timeout>();
  
  const isControlled = open !== undefined;
  const isVisible = isControlled ? open : isOpen;
  
  const baseClasses = [
    'paper-tooltip',
    'absolute',
    'z-50',
    'px-2',
    'py-1',
    'text-sm',
    'font-medium',
    'rounded',
    'shadow-md',
    'border',
    'transition-opacity',
    'duration-200',
    'ease-out',
    'pointer-events-none'
  ];

  // Size classes
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-2.5 py-1.5 text-sm',
    lg: 'px-3 py-2 text-sm'
  };

  const updatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;
    
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    
    let newTop = 0;
    let newLeft = 0;
    let newPlacement = placement;
    
    const offset = 8; // Distance from trigger
    const arrowSize = showArrow ? 6 : 0;
    
    // Calculate positions based on placement
    switch (placement) {
      case 'top':
        newTop = triggerRect.top - tooltipRect.height - offset - arrowSize;
        newLeft = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        
        // Check if tooltip goes above viewport
        if (newTop < 0) {
          newTop = triggerRect.bottom + offset + arrowSize;
          newPlacement = 'bottom';
        }
        break;
        
      case 'bottom':
        newTop = triggerRect.bottom + offset + arrowSize;
        newLeft = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
        
        // Check if tooltip goes below viewport
        if (newTop + tooltipRect.height > viewport.height) {
          newTop = triggerRect.top - tooltipRect.height - offset - arrowSize;
          newPlacement = 'top';
        }
        break;
        
      case 'left':
        newTop = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        newLeft = triggerRect.left - tooltipRect.width - offset - arrowSize;
        
        // Check if tooltip goes left of viewport
        if (newLeft < 0) {
          newLeft = triggerRect.right + offset + arrowSize;
          newPlacement = 'right';
        }
        break;
        
      case 'right':
        newTop = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
        newLeft = triggerRect.right + offset + arrowSize;
        
        // Check if tooltip goes right of viewport
        if (newLeft + tooltipRect.width > viewport.width) {
          newLeft = triggerRect.left - tooltipRect.width - offset - arrowSize;
          newPlacement = 'left';
        }
        break;
    }
    
    // Ensure tooltip stays within viewport horizontally
    if (newLeft < 8) newLeft = 8;
    if (newLeft + tooltipRect.width > viewport.width - 8) {
      newLeft = viewport.width - tooltipRect.width - 8;
    }
    
    // Ensure tooltip stays within viewport vertically
    if (newTop < 8) newTop = 8;
    if (newTop + tooltipRect.height > viewport.height - 8) {
      newTop = viewport.height - tooltipRect.height - 8;
    }
    
    setPosition({ top: newTop, left: newLeft });
    setActualPlacement(newPlacement);
  };
  
  const show = () => {
    if (disabled) return;
    clearTimeout(hideTimeoutRef.current);
    
    showTimeoutRef.current = setTimeout(() => {
      if (isControlled) {
        onOpenChange?.(true);
      } else {
        setIsOpen(true);
      }
    }, showDelay);
  };
  
  const hide = () => {
    clearTimeout(showTimeoutRef.current);
    
    hideTimeoutRef.current = setTimeout(() => {
      if (isControlled) {
        onOpenChange?.(false);
      } else {
        setIsOpen(false);
      }
    }, hideDelay);
  };
  
  const handleTriggerClick = () => {
    if (trigger === 'click') {
      if (isVisible) {
        hide();
      } else {
        show();
      }
    }
  };
  
  useEffect(() => {
    if (isVisible) {
      // Small delay to ensure tooltip is rendered before positioning
      requestAnimationFrame(() => {
        updatePosition();
      });
    }
  }, [isVisible, content, placement]);
  
  useEffect(() => {
    if (isVisible) {
      const handleResize = () => updatePosition();
      const handleScroll = () => updatePosition();
      
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll, true);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll, true);
      };
    }
  }, [isVisible]);
  
  useEffect(() => {
    return () => {
      clearTimeout(showTimeoutRef.current);
      clearTimeout(hideTimeoutRef.current);
    };
  }, []);
  
  const renderArrow = () => {
    if (!showArrow) return null;
    
    const arrowClasses = [
      'paper-tooltip-arrow',
      'absolute',
      'w-2',
      'h-2',
      'border',
      'border-r-0',
      'border-b-0',
      'transform',
      'rotate-45'
    ];
    
    const arrowPositions = {
      top: 'bottom-[-4px] left-1/2 -translate-x-1/2',
      bottom: 'top-[-4px] left-1/2 -translate-x-1/2 rotate-[225deg]',
      left: 'right-[-4px] top-1/2 -translate-y-1/2 rotate-[135deg]',
      right: 'left-[-4px] top-1/2 -translate-y-1/2 rotate-[315deg]'
    };
    
    return (
      <div
        className={cn(arrowClasses, arrowPositions[actualPlacement as keyof typeof arrowPositions])}
        data-arrow
      />
    );
  };
  
  const tooltip = isVisible ? (
    <div
      ref={tooltipRef}
      className={cn(
        baseClasses,
        sizeClasses[size],
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        ...position,
        maxWidth: typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth,
        zIndex
      }}
      data-variant={variant}
      data-placement={actualPlacement}
      role="tooltip"
      aria-hidden={!isVisible}
    >
      {content}
      {renderArrow()}
    </div>
  ) : null;
  
  const triggerElement = React.cloneElement(children, {
    ref: triggerRef,
    onMouseEnter: trigger === 'hover' ? show : children.props.onMouseEnter,
    onMouseLeave: trigger === 'hover' ? hide : children.props.onMouseLeave,
    onFocus: trigger === 'focus' ? show : children.props.onFocus,
    onBlur: trigger === 'focus' ? hide : children.props.onBlur,
    onClick: trigger === 'click' ? handleTriggerClick : children.props.onClick,
    'aria-describedby': isVisible ? 'tooltip' : undefined
  });
  
  const portalContainer = portal || (typeof document !== 'undefined' ? document.body : null);
  
  return (
    <>
      {triggerElement}
      {portalContainer && tooltip && createPortal(tooltip, portalContainer)}
    </>
  );
});

Tooltip.displayName = 'Tooltip';