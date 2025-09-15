import type { ReactNode } from 'react';
import { GlobalStyles } from '@/shared/config';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}
