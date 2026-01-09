import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../../utils/cn';
/**
 * Heading - Paper-inspired heading component
 *
 * Semantic headings with paper-appropriate typography, supporting
 * multiple sizes, weights, and styling options.
 */
export const Heading = React.forwardRef(({ children, className, level, size, color = 'primary', align = 'left', font = 'serif', weight, display = false, balance = false, truncate = false, clamp, as, ...props }, ref) => {
    // Determine the element to render
    const getHeadingElement = () => {
        if (as)
            return as;
        return `h${level}`;
    };
    const Component = getHeadingElement();
    const baseClasses = [
        'paper-heading',
        'paper-typography',
    ];
    const classes = cn(baseClasses, className);
    const dataAttributes = {
        'data-level': level,
        'data-size': size,
        'data-color': color,
        'data-align': align,
        'data-font': font,
        'data-weight': weight,
        'data-display': display,
        'data-balance': balance,
        'data-truncate': truncate,
        'data-clamp': clamp,
    };
    const Element = Component;
    return (_jsx(Element, { ref: ref, className: classes, ...dataAttributes, ...props, children: children }));
});
Heading.displayName = 'Heading';
/**
 * Text - Paper-inspired text component
 *
 * Flexible text component for body content, supporting various
 * sizes, variants, and styling options.
 */
export const Text = React.forwardRef(({ children, className, size = 'base', variant = 'body', color = 'primary', align = 'left', font = 'sans', weight = 'regular', balance = false, truncate = false, clamp, code = false, as, ...props }, ref) => {
    const Component = as || 'p';
    const baseClasses = [
        'paper-text',
        'paper-typography',
    ];
    const classes = cn(baseClasses, className);
    const dataAttributes = {
        'data-size': size,
        'data-variant': variant,
        'data-color': color,
        'data-align': align,
        'data-font': font,
        'data-weight': weight,
        'data-balance': balance,
        'data-truncate': truncate,
        'data-clamp': clamp,
        'data-code': code,
    };
    return (_jsx(Component, { ref: ref, className: classes, ...dataAttributes, ...props, children: children }));
});
Text.displayName = 'Text';
/**
 * List - Paper-inspired list component
 *
 * Semantic lists with paper-appropriate styling and spacing.
 */
export const List = React.forwardRef(({ children, className, type = 'unordered', variant = 'default', spacing = 'sm', color = 'primary', align = 'left', font = 'sans', weight = 'regular', as, ...props }, ref) => {
    const Component = as || (type === 'ordered' ? 'ol' : 'ul');
    const baseClasses = [
        'paper-list',
        'paper-typography',
    ];
    const classes = cn(baseClasses, className);
    const dataAttributes = {
        'data-type': type,
        'data-variant': variant,
        'data-spacing': spacing,
        'data-color': color,
        'data-align': align,
        'data-font': font,
        'data-weight': weight,
    };
    return (_jsx(Component, { ref: ref, className: classes, ...dataAttributes, ...props, children: children }));
});
List.displayName = 'List';
/**
 * Blockquote - Paper-inspired blockquote component
 *
 * Styled blockquotes with optional citations and multiple variants.
 */
export const Blockquote = React.forwardRef(({ children, className, cite, author, source, variant = 'default', size = 'base', color = 'primary', align = 'left', font = 'serif', weight = 'regular', as, ...props }, ref) => {
    const Component = as || 'blockquote';
    const baseClasses = [
        'paper-blockquote',
        'paper-typography',
    ];
    const classes = cn(baseClasses, className);
    const dataAttributes = {
        'data-variant': variant,
        'data-size': size,
        'data-color': color,
        'data-align': align,
        'data-font': font,
        'data-weight': weight,
    };
    // Build citation text
    const citationText = React.useMemo(() => {
        if (!author && !source && !cite)
            return null;
        const parts = [];
        if (author)
            parts.push(author);
        if (source)
            parts.push(source);
        return parts.join(', ');
    }, [author, source]);
    return (_jsxs(Component, { ref: ref, className: classes, cite: cite, ...dataAttributes, ...props, children: [children, citationText && (_jsx("cite", { className: "paper-blockquote-citation", children: citationText }))] }));
});
Blockquote.displayName = 'Blockquote';
// Additional utility components
/**
 * H1-H6 - Convenience heading components
 */
export const H1 = React.forwardRef((props, ref) => _jsx(Heading, { ref: ref, level: 1, ...props }));
H1.displayName = 'H1';
export const H2 = React.forwardRef((props, ref) => _jsx(Heading, { ref: ref, level: 2, ...props }));
H2.displayName = 'H2';
export const H3 = React.forwardRef((props, ref) => _jsx(Heading, { ref: ref, level: 3, ...props }));
H3.displayName = 'H3';
export const H4 = React.forwardRef((props, ref) => _jsx(Heading, { ref: ref, level: 4, ...props }));
H4.displayName = 'H4';
export const H5 = React.forwardRef((props, ref) => _jsx(Heading, { ref: ref, level: 5, ...props }));
H5.displayName = 'H5';
export const H6 = React.forwardRef((props, ref) => _jsx(Heading, { ref: ref, level: 6, ...props }));
H6.displayName = 'H6';
/**
 * Specialized text variants as convenience components
 */
export const Lead = React.forwardRef((props, ref) => _jsx(Text, { ref: ref, variant: "lead", ...props }));
Lead.displayName = 'Lead';
export const Small = React.forwardRef((props, ref) => _jsx(Text, { ref: ref, variant: "small", ...props }));
Small.displayName = 'Small';
export const Caption = React.forwardRef((props, ref) => _jsx(Text, { ref: ref, variant: "caption", ...props }));
Caption.displayName = 'Caption';
export const Overline = React.forwardRef((props, ref) => _jsx(Text, { ref: ref, variant: "overline", ...props }));
Overline.displayName = 'Overline';
export const Code = React.forwardRef((props, ref) => _jsx(Text, { ref: ref, code: true, font: "mono", as: "code", ...props }));
Code.displayName = 'Code';
