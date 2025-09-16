import type { HTMLAttributes } from 'react';
import * as S from './Container.styled';

export function Container({ children, ...rest }: HTMLAttributes<HTMLElement>) {
  return <S.StyledContainer {...rest}>{children}</S.StyledContainer>;
}
