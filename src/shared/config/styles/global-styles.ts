import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import { reset } from './reset';
import { fonts } from './fonts';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${reset}
  ${fonts}
`;
