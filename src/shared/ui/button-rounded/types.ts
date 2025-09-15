import type { ButtonHTMLAttributes } from 'react';

export interface IButtonRounded
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'big' | 'medium' | 'small';
  isBordered?: boolean;
  isShadowed?: boolean;
  isTransparent?: boolean;
}
