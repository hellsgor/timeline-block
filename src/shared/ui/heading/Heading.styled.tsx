import { getRems } from '@/shared/lib';
import styled, { css } from 'styled-components';

const styledHeading = css`
  color: ${({ theme }) => theme.colors.content.base};
  font-weight: 700;
  line-height: 1.2;
`;

const bar = css`
  content: '';
  width: 5px;
  background: ${({ theme }) => theme.colors.gradient};
  display: block;
`;

export const StyledH1 = styled.h1`
  font-size: ${getRems(72)};
`;

export const StyledH2 = styled.h2`
  ${styledHeading}
  font-size: ${getRems(56)};
  position: relative;
  padding-left: 76px;

  &::before {
    ${bar};
    position: absolute;
    top: 7px;
    bottom: 7px;
    left: 0;
  }
`;
