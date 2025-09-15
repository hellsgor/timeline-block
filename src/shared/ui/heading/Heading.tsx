import type { ReactNode } from 'react';
import * as S from './Heading.styled';

type THeading = {
  children: ReactNode;
  type: number;
};

export function Heading({ children, type }: THeading) {
  const StyledHeading = (() => {
    switch (type) {
      case 1:
        return S.StyledH1;
      case 2:
        return S.StyledH2;
      default:
        return S.StyledH1;
    }
  })();

  return <StyledHeading>{children}</StyledHeading>;
}
