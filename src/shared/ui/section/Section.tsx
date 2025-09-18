import type { ReactNode } from 'react';
import * as S from './Section.styled';

export function Section({ children }: { children: ReactNode }) {
  return <S.StyledSection>{children}</S.StyledSection>;
}
