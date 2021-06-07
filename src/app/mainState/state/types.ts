import { SurfaceColor, ViewMenuColor, ABXYColor } from '../../constants/types';
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

export interface MainState {
  [OPTION_BODY]: {
    color: SurfaceColor;
  };
  [OPTION_BACK]: {
    color: SurfaceColor;
    rubberGrips: boolean;
  };
  [OPTION_BUMPERS]: {
    color: SurfaceColor;
    metallic: boolean;
  };
  [OPTION_TRIGGERS]: {
    color: SurfaceColor;
    metallic: boolean;
  };
  [OPTION_DPAD]: {
    color: SurfaceColor;
    metallic: boolean;
  };
  [OPTION_THUMBSTICKS]: {
    color: SurfaceColor;
  };
  [OPTION_VIEWMENU]: {
    color: ViewMenuColor;
  };
  [OPTION_ABXY]: {
    color: ABXYColor;
  };
  [OPTION_ENGRAVING]: {
    text?: string;
  };
}

export type Updater = (updater: (state: MainState) => MainState) => void;
