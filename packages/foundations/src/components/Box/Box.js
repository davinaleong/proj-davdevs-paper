import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../../utils/cn';
/**
 * Box - Base paper container with elevation
 *
 * The foundational primitive for creating paper-inspired containers with
 * consistent spacing, borders, and elevation effects.
 */
export const Box = React.forwardRef(({ children, className, variant = 'default', elevation = 'none', padding = 'md', radius = 'base', border = false, as, ...props }, ref) => {
    const Component = as || 'div';
    const baseClasses = [
        'paper-box',
        'transition-shadow',
        'duration-200',
        'ease-out'
    ];
    // Elevation classes
    const elevationClasses = {
        none: '',
        sm: 'shadow-sm',
        base: 'shadow',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl',
        '2xl': 'shadow-2xl'
    };
    // Padding classes
    const paddingClasses = {
        none: '',
        xs: 'p-2',
        sm: 'p-3',
        md: 'p-4',
        lg: 'p-6',
        xl: 'p-8',
        '2xl': 'p-12'
    };
    // Border radius classes
    const radiusClasses = {
        none: 'rounded-none',
        sm: 'rounded-sm',
        base: 'rounded',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        '3xl': 'rounded-3xl',
        full: 'rounded-full'
    };
    // Variant classes
    const variantClasses = {
        default: 'bg-surface-primary border-border-primary',
        secondary: 'bg-surface-secondary border-border-secondary',
        tertiary: 'bg-surface-tertiary border-border-primary',
        inverse: 'bg-surface-inverse border-border-primary text-text-inverse',
        transparent: 'bg-transparent border-border-primary'
    };
    const classes = cn(baseClasses, variantClasses[variant], elevationClasses[elevation], paddingClasses[padding], radiusClasses[radius], border && 'border border-solid', className);
    return (_jsx(Component, { ref: ref, className: classes, "data-variant": variant, "data-elevation": elevation, "data-interactive": props.onClick ? 'true' : 'false', ...props, children: children }));
});
Box.displayName = 'Box';
