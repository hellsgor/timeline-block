import { PALETTE } from './palette';

export const THEME = {
  colors: PALETTE,
} as const;

export type AppTheme = typeof THEME;
