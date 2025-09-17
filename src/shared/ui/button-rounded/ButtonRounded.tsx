import * as S from './ButtonRounded.styled';
import type { ButtonRoundedProps } from './types';

export function ButtonRounded({
  children,
  isBordered,
  isShadowed,
  isTransparent,
  hint,
  ...rest
}: ButtonRoundedProps) {
  return (
    <S.StyledButtonRounded
      $isBordered={isBordered}
      $isShadowed={isShadowed}
      $isTransparent={isTransparent}
      $hint={hint}
      {...rest}
    >
      {children}
    </S.StyledButtonRounded>
  );
}
