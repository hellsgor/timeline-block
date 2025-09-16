import { css } from 'styled-components';

const fontRules = css`
  font-style: normal;
  font-display: swap;
`;

export const fonts = css`
  @font-face {
    font-family: PT-Sans;
    font-weight: 400;
    src: url('/fonts/PTSans-Regular.woff2') format('woff2');
    ${fontRules}
  }

  @font-face {
    font-family: PT-Sans;
    font-weight: 700;
    src: url('/fonts/PTSans-Bold.woff2') format('woff2');
    ${fontRules}
  }

  @font-face {
    font-family: Bebas;
    font-weight: 400;
    src: url('/fonts/BebasNeue-Regular.woff2') format('woff2');
    ${fontRules}
  }
`;
