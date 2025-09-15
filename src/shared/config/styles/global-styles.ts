import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import { reset } from './reset';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${reset}
`;
