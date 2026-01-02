import { SelectHTMLAttributes, ReactNode } from 'react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectOptGroup {
  label: string;
  options: SelectOption[];
  disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Select variant */
  variant?: 'default' | 'filled' | 'outlined';
  /** Select size */
  size?: 'sm' | 'md' | 'lg';
  /** Select state */
  state?: 'default' | 'error' | 'success' | 'warning';
  /** Options array - can be flat options or grouped options */
  options?: SelectOption[];
  /** Grouped options array */
  optgroups?: SelectOptGroup[];
  /** Placeholder text */
  placeholder?: string;
  /** Leading icon */
  startIcon?: ReactNode;
  /** Helper text */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Full width */
  fullWidth?: boolean;
  /** Paper elevation */
  elevation?: 'none' | 'sm' | 'md' | 'lg';
}