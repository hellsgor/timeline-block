import { MEDIA } from './media';
import { PALETTE } from './palette';
import { TRANSITION_PARAMS } from './transitions';

export const THEME = {
  colors: PALETTE,
  media: MEDIA,
  transitions: TRANSITION_PARAMS,
} as const;

export type AppTheme = typeof THEME;
