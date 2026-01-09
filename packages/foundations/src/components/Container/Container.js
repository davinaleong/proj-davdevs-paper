import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../../utils/cn';
/**
 * Container - Responsive content containers
 *
 * A foundational component for creating consistent, responsive content containers
 * with configurable max-widths, padding, and centering behavior.
 */
export const Container = React.forwardRef(({ children, className, size = 'lg', padding = 'md', centered = true, fluid = false, breakpoint = 'responsive', as, ...props }, ref) => {
    const Component = as || 'div';
    const baseClasses = [
        'paper-container',
        breakpoint === 'responsive' ? 'paper-container--responsive' : 'paper-container--static'
    ];
    const sizeClasses = {
        xs: 'max-w-xs',
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-4xl',
        xl: 'max-w-5xl',
        '2xl': 'max-w-6xl',
        '3xl': 'max-w-7xl',
        '4xl': 'max-w-[1408px]',
        '5xl': 'max-w-[1536px]',
        '6xl': 'max-w-[1664px]',
        '7xl': 'max-w-[1792px]',
        full: 'max-w-full',
        none: ''
    };
    const paddingClasses = {
        none: '',
        xs: 'px-2',
        sm: 'px-4',
        md: 'px-6',
        lg: 'px-8',
        xl: 'px-12',
        '2xl': 'px-16'
    };
    const classes = cn(baseClasses, !fluid && sizeClasses[size], paddingClasses[padding], centered && 'mx-auto', fluid && 'w-full', className);
    return (_jsx(Component, { ref: ref, className: classes, ...props, children: children }));
});
Container.displayName = 'Container';
