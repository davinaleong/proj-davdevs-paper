import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../../utils/cn';
/**
 * Page - Full-page paper background container
 *
 * Provides a full-page container with paper-inspired backgrounds,
 * proper spacing, and responsive design capabilities.
 */
export const Page = React.forwardRef(({ children, className, variant = 'default', padding = 'none', fullHeight = false, maxWidth = 'none', centered = false, as, ...props }, ref) => {
    const Component = as || 'main';
    const baseClasses = [
        'paper-page',
    ];
    const classes = cn(baseClasses, className);
    const dataAttributes = {
        'data-variant': variant,
        'data-padding': padding,
        'data-full-height': fullHeight,
        'data-max-width': maxWidth,
        'data-centered': centered,
    };
    return (_jsx(Component, { ref: ref, className: classes, ...dataAttributes, ...props, children: _jsx("div", { className: "paper-page-content", children: children }) }));
});
Page.displayName = 'Page';
