import type { ReactNode } from 'react';
import * as S from './Container.styled';

export function Container({ children }: { children: ReactNode }) {
  return <S.StyledContainer>{children}</S.StyledContainer>;
}
