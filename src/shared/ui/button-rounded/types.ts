import type { ButtonHTMLAttributes } from 'react';

type TBaseRoundedButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'big' | 'medium' | 'small';
  isShadowed?: boolean;
  color?: string;
  hint?: string;
};

// Прозрачная кнопка всегда с бордером
type TTransparentRoundedButton = {
  isTransparent: true;
  isBordered: true;
};

// Кнопка с бордером может быть прозрачной или нет
type TBorderedRoundedButton = {
  isBordered: true;
  isTransparent?: boolean;
};

// Кнопка без бордера и без прозрачности
type TDefaultRoundedButton = {
  isBordered?: false;
  isTransparent?: false;
};

export type IButtonRounded =
  | (TBaseRoundedButton & TTransparentRoundedButton)
  | (TBaseRoundedButton & TBorderedRoundedButton)
  | (TBaseRoundedButton & TDefaultRoundedButton);
