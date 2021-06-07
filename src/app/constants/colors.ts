import { SurfaceColor, ViewMenuColor, ABXYColor } from './types';

export const SURFACE_COLORS: SurfaceColor[] = [
  { name: 'Retro Pink', value: '#FC9FB6' },
  { name: 'Lightning Yellow', value: '#EAE71D' },
  { name: 'Glacier Blue', value: '#83E7FB' },
  { name: 'Electric Green', value: '#70C85C' },
  { name: 'Storm Grey', value: '#51555D' },
  { name: 'Deep Pink', value: '#D5558C' },
  { name: 'Zest Orange', value: '#E3641A' },
  { name: 'Photon Blue', value: '#2972D1' },
  { name: 'Military Green', value: '#373727' },
  { name: 'Ash Grey', value: '#B2B5B6' },
  { name: 'Regal Purple', value: '#5C498A' },
  { name: 'Oxide Red', value: '#992E39' },
  { name: 'Midnight Blue', value: '#141A39' },
  { name: 'Abyss Black', value: '#101011' },
  { name: 'Robot White', value: '#EFF3F4' },
  { name: 'Desert Tan', value: '#A99787' },
  { name: 'Sierra Brown', value: '#6D5750' },
  { name: 'Mineral Blue', value: '#32717C' },
  { name: 'Ink Blue', value: '#395761' }
];

export const CAMO_COLORS: SurfaceColor[] = [
  { name: 'Robot White Forces', value: '#FC9FB6' },
  { name: 'Military Green Forces', value: '#EAE71D' },
  { name: 'Midnight Blue Forces', value: '#83E7FB' },
  { name: 'Abyss Black Forces', value: '#70C85C' },
  { name: 'Desert Tan Forces', value: '#51555D' }
];

export const SHADOW_COLORS: SurfaceColor[] = [
  { name: 'Oxide Red Shadow', value: '#FC9FB6' },
  { name: 'Bronze Shadow', value: '#EAE71D' },
  { name: 'Photon Blue Shadow', value: '#83E7FB' },
  { name: 'Deep Pink Shadow', value: '#70C85C' },
  { name: 'Mineral Blue Shadow', value: '#51555D' }
];

export const BUTTON_COLORS: Record<string, string> = {
  'Light Grey': '#C8C8C8',
  'Dark Grey': '#767676',
  Black: '#2F2F2F',
  White: '#FFFFFF',
  Yellow: '#ECDB33',
  Blue: '#40CCD0',
  Green: '#3CDB4E',
  Red: '#D04242'
};

export const VIEW_AND_MENU_BUTTON_COLORS: ViewMenuColor[] = [
  { name: 'Grey on White', icon: BUTTON_COLORS['Light Grey'], background: BUTTON_COLORS['White'] },
  { name: 'Black on Grey', icon: BUTTON_COLORS['Black'], background: BUTTON_COLORS['Dark Grey'] },
  { name: 'Grey on Black', icon: BUTTON_COLORS['Dark Grey'], background: BUTTON_COLORS['Black'] },
  { name: 'White on Black', icon: BUTTON_COLORS['White'], background: BUTTON_COLORS['Black'] }
];

export const ABXY_BUTTON_COLORS: ABXYColor[] = [
  ...VIEW_AND_MENU_BUTTON_COLORS.map(({ name, background, icon }) => ({
    name,
    background,
    x: icon,
    y: icon,
    a: icon,
    b: icon
  })),
  {
    name: 'Colors on Black',
    x: BUTTON_COLORS['Blue'],
    y: BUTTON_COLORS['Yellow'],
    a: BUTTON_COLORS['Green'],
    b: BUTTON_COLORS['Red'],
    background: BUTTON_COLORS['Black']
  }
];
