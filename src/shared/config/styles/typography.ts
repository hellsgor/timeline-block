import { getRems } from '@/shared/lib';
import { css } from 'styled-components';

export const typography = css`
  body {
    font-family: PT-sans, sans-serif;
    font-size: ${getRems(20)};
    font-weight: 400;
    font-style: normal;
    line-height: 1.5;
  }
`;
