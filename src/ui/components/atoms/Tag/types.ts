import type { HTMLAttributes, ReactNode, RefObject } from 'react';

export type Variant = 'primary' | 'secondary' | 'success' | 'info' | 'error' | 'warning';
export type Position = 'start' | 'end';

export interface IUITagProps extends HTMLAttributes<HTMLElement> {
  withIcon?: ReactNode;
  position?: Position;
  ref?: RefObject<HTMLButtonElement>;
  variant?: Variant;
}
