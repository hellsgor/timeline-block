import type { ReactNode } from 'react';
import { GlobalStyles, THEME } from '@/shared/config';
import { ThemeProvider } from 'styled-components';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
