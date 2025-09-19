import * as S from './ButtonRounded.styled';
import type { ButtonRoundedProps } from './types';

export function ButtonRounded({
  children,
  isBordered,
  isShadowed,
  isTransparent,
  ...rest
}: ButtonRoundedProps) {
  return (
    <S.StyledButtonRounded
      $isBordered={isBordered}
      $isShadowed={isShadowed}
      $isTransparent={isTransparent}
      {...rest}
    >
      {children}
    </S.StyledButtonRounded>
  );
}
