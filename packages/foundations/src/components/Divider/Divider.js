import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../../utils/cn';
/**
 * Divider - Paper-style separators
 *
 * A foundational component for creating visual separation between content
 * sections with paper-inspired styling and flexible customization.
 */
export const Divider = React.forwardRef(({ className, orientation = 'horizontal', variant = 'default', size = 'base', spacing = 'md', color = 'default', label, labelPosition = 'center', as, ...props }, ref) => {
    const Component = as || 'hr';
    const baseClasses = [
        'paper-divider',
        `paper-divider--${orientation}`,
        `paper-divider--${variant}`,
        `paper-divider--${size}`,
        `paper-divider--spacing-${spacing}`,
        `paper-divider--color-${color}`
    ];
    // If there's a label, we need to render a different structure
    if (label && orientation === 'horizontal') {
        const labelClasses = cn('paper-divider__label', `paper-divider__label--${labelPosition}`);
        const containerClasses = cn(baseClasses, 'paper-divider--with-label', `paper-divider__label--${labelPosition}`, className);
        // Different structure based on label position
        if (labelPosition === 'left') {
            return (_jsxs("div", { className: containerClasses, role: "separator", "aria-label": label, ...props, children: [_jsx("span", { className: labelClasses, children: label }), _jsx("div", { className: "paper-divider__line" })] }));
        }
        if (labelPosition === 'right') {
            return (_jsxs("div", { className: containerClasses, role: "separator", "aria-label": label, ...props, children: [_jsx("div", { className: "paper-divider__line" }), _jsx("span", { className: labelClasses, children: label })] }));
        }
        // Center position (default)
        return (_jsxs("div", { className: containerClasses, role: "separator", "aria-label": label, ...props, children: [_jsx("div", { className: "paper-divider__line paper-divider__line--before" }), _jsx("span", { className: labelClasses, children: label }), _jsx("div", { className: "paper-divider__line paper-divider__line--after" })] }));
    }
    const classes = cn(baseClasses, className);
    return (_jsx(Component, { ref: ref, className: classes, role: "separator", ...props }));
});
Divider.displayName = 'Divider';
