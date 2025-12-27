import { InputHTMLAttributes, ReactNode } from 'react';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Radio size */
  size?: 'sm' | 'md' | 'lg';
  /** Label text */
  label?: ReactNode;
  /** Helper text */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Color variant */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /** Paper elevation */
  elevation?: 'none' | 'sm' | 'md' | 'lg';
}

export interface RadioGroupProps {
  /** Radio group name */
  name: string;
  /** Selected value */
  value?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Radio options */
  options: Array<{
    value: string;
    label: ReactNode;
    disabled?: boolean;
    helperText?: string;
  }>;
  /** Group size */
  size?: 'sm' | 'md' | 'lg';
  /** Color variant */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /** Error message for the group */
  error?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Layout orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Custom className */
  className?: string;
}