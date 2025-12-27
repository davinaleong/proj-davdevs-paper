import React from 'react';

// Base props that are always available
interface BaseTooltipProps {
  /**
   * The content to be displayed in the tooltip
   */
  content: React.ReactNode;

  /**
   * The trigger element that shows the tooltip
   */
  children: React.ReactElement;

  /**
   * Additional CSS classes to apply to the tooltip
   */
  className?: string;

  /**
   * Placement of the tooltip relative to trigger
   * @default 'top'
   */
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';

  /**
   * Visual variant of the tooltip
   * @default 'default'
   */
  variant?: 'default' | 'dark' | 'light' | 'info' | 'success' | 'warning' | 'danger';

  /**
   * Size of the tooltip
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Delay before showing tooltip (in ms)
   * @default 500
   */
  showDelay?: number;

  /**
   * Delay before hiding tooltip (in ms)
   * @default 200
   */
  hideDelay?: number;

  /**
   * Whether to show an arrow pointing to trigger
   * @default true
   */
  showArrow?: boolean;

  /**
   * Whether the tooltip is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether to show tooltip on hover
   * @default true
   */
  trigger?: 'hover' | 'click' | 'focus' | 'manual';

  /**
   * Whether the tooltip is open (for manual trigger)
   */
  open?: boolean;

  /**
   * Callback when tooltip open state changes
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * Maximum width of the tooltip
   */
  maxWidth?: number | string;

  /**
   * Z-index of the tooltip
   * @default 1000
   */
  zIndex?: number;

  /**
   * Portal container for the tooltip
   * @default document.body
   */
  portal?: Element | null;
}

export type TooltipProps = BaseTooltipProps;

export type TooltipRef = HTMLDivElement;