import {
  OPTION_BODY,
  OPTION_BACK,
  OPTION_BUMPERS,
  OPTION_TRIGGERS,
  OPTION_DPAD,
  OPTION_THUMBSTICKS,
  OPTION_VIEWMENU,
  OPTION_ABXY,
  OPTION_ENGRAVING
} from '../../constants/customizations';
import { SURFACE_COLORS, VIEW_AND_MENU_BUTTON_COLORS, ABXY_BUTTON_COLORS } from '../../constants/colors';
import { MainState } from './types';

export const initialState: MainState = {
  [OPTION_BODY]: {
    color: SURFACE_COLORS[14]
  },
  [OPTION_BACK]: {
    color: SURFACE_COLORS[14],
    rubberGrips: false
  },
  [OPTION_BUMPERS]: {
    color: SURFACE_COLORS[14],
    metallic: false
  },
  [OPTION_TRIGGERS]: {
    color: SURFACE_COLORS[14],
    metallic: false
  },
  [OPTION_DPAD]: {
    color: SURFACE_COLORS[13],
    metallic: false
  },
  [OPTION_THUMBSTICKS]: {
    color: SURFACE_COLORS[13]
  },
  [OPTION_VIEWMENU]: {
    color: VIEW_AND_MENU_BUTTON_COLORS[0]
  },
  [OPTION_ABXY]: {
    color: ABXY_BUTTON_COLORS[0]
  },
  [OPTION_ENGRAVING]: {
    text: ''
  }
};
