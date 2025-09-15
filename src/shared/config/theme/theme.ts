import { MEDIA } from './media';
import { PALETTE } from './palette';

export const THEME = {
  colors: PALETTE,
  media: MEDIA,
} as const;

export type AppTheme = typeof THEME;
