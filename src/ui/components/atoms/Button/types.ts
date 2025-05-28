import type { ButtonHTMLAttributes, ReactNode, RefObject } from 'react';

export type Variant = 'primary' | 'outline';
type iconPosition = 'start' | 'end';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  icon?: ReactNode;
  iconSize?: number;
  iconPosition?: iconPosition;
  ref?: RefObject<HTMLButtonElement>;
}
