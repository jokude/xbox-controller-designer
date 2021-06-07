import { MenuOption } from './types';

export const OPTION_ABXY = 'abxy';
export const OPTION_ABXY_TOP = 'abxy.top';
export const OPTION_ABXY_BASE= 'abxy.base';
export const OPTION_ABXY_A = 'abxy.a';
export const OPTION_ABXY_B = 'abxy.b';
export const OPTION_ABXY_X = 'abxy.x';
export const OPTION_ABXY_Y = 'abxy.y';
export const OPTION_BACK = 'back';
export const OPTION_BODY = 'body';
export const OPTION_BUMPERS = 'bumpers';
export const OPTION_DPAD = 'dpad';
export const OPTION_ENGRAVING = 'engraving';
export const OPTION_THUMBSTICKS = 'thumbsticks';
export const OPTION_TRIGGERS = 'triggers';
export const OPTION_VIEWMENU = 'viewmenu';
export const OPTION_VIEWMENU_BASE = 'viewmenu.base';
export const OPTION_VIEWMENU_ICONS = 'viewmenu.icons';

export const OPTION_NAMES: Record<MenuOption, string> = {
  [OPTION_ABXY]: 'ABXY',
  [OPTION_BACK]: 'Back',
  [OPTION_BODY]: 'Body',
  [OPTION_BUMPERS]: 'Bumpers',
  [OPTION_DPAD]: 'D-Pad',
  [OPTION_ENGRAVING]: 'Engraving',
  [OPTION_THUMBSTICKS]: 'Thumbsticks',
  [OPTION_TRIGGERS]: 'Triggers',
  [OPTION_VIEWMENU]: 'View & Menu'
};

export const ALL_OPTIONS = [
  OPTION_BODY,
  OPTION_BACK,
  OPTION_BUMPERS,
  OPTION_TRIGGERS,
  OPTION_DPAD,
  OPTION_THUMBSTICKS,
  OPTION_ABXY,
  OPTION_VIEWMENU,
  OPTION_ENGRAVING
] as const;
