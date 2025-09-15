import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import { reset } from './reset';
import { fonts } from './fonts';
import { typography } from './typography';
import { root } from './root';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${reset}
  ${fonts}
  ${typography}
  ${root}
`;
