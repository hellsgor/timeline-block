import { getRems } from '@/shared/lib';
import styled, { css } from 'styled-components';

const styledHeading = css`
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.content.base};
`;

const bar = css`
  content: '';
  display: block;
  width: 5px;
  background: ${({ theme }) => theme.colors.gradient};
`;

export const StyledH1 = styled.h1`
  font-size: ${getRems(72)};
`;

export const StyledH2 = styled.h2`
  ${styledHeading}
  font-size: clamp(${getRems(20)}, 0.311rem + 3.543vi, ${getRems(56)});
  position: relative;
  padding-left: 76px;

  &::before {
    ${bar};
    position: absolute;
    top: 7px;
    bottom: 7px;
    left: 0;
  }

  @media ${({ theme }) => theme.media.vertTablet} {
    position: static;
    padding-left: 0;

    &::before {
      content: unset;
    }
  }
`;
