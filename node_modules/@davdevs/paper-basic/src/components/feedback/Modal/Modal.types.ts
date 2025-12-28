import React from 'react';

// Base props for Modal component
export interface ModalProps {
  /**
   * The content to be rendered inside the Modal
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes to apply
   */
  className?: string;

  /**
   * Whether the modal is open
   * @default false
   */
  open?: boolean;

  /**
   * Callback when modal is requested to close
   */
  onClose?: () => void;

  /**
   * Size of the modal
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';

  /**
   * Elevation level (shadow depth)
   * @default 'xl'
   */
  elevation?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl';

  /**
   * Border radius amount
   * @default 'lg'
   */
  radius?: 'none' | 'sm' | 'base' | 'md' | 'lg' | 'xl';

  /**
   * Whether clicking the backdrop closes the modal
   * @default true
   */
  closeOnBackdropClick?: boolean;

  /**
   * Whether pressing Escape closes the modal
   * @default true
   */
  closeOnEscape?: boolean;

  /**
   * Modal title
   */
  title?: string;

  /**
   * Whether to show the close button
   * @default true
   */
  showCloseButton?: boolean;

  /**
   * Custom backdrop classes
   */
  backdropClassName?: string;

  /**
   * Whether to center the modal
   * @default true
   */
  centered?: boolean;

  /**
   * Whether to show a border
   * @default true
   */
  bordered?: boolean;

  /**
   * Animation duration in milliseconds
   * @default 200
   */
  animationDuration?: number;
}

export type ModalRef = HTMLDivElement;