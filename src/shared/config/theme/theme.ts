import { MEDIA } from './media';
import { PALETTE } from './palette';
import { SAFE_INDENTS } from './safe-indents';
import { TRANSITION_PARAMS } from './transitions';

export const THEME = {
  colors: PALETTE,
  media: MEDIA,
  transitions: TRANSITION_PARAMS,
  safeIndents: SAFE_INDENTS,
} as const;

export type AppTheme = typeof THEME;
