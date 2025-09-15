import * as S from './ButtonRounded.styled';
import type { IButtonRounded } from './types';

export function ButtonRounded({ children, ...rest }: IButtonRounded) {
  return <S.StyledButtonRounded {...rest}>{children}</S.StyledButtonRounded>;
}
