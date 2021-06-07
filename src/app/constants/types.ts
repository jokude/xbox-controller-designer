import { ALL_OPTIONS } from './customizations';
import { ALL_MATERIALS } from './materials';

export interface Color {
  name: string;
}

export interface SurfaceColor extends Color {
  value: string;
}

export interface ViewMenuColor extends Color {
  icon: string;
  background: string;
}

export interface ABXYColor extends Color {
  background: string;
  x: string;
  y: string;
  a: string;
  b: string;
}

export type MenuOption = typeof ALL_OPTIONS[number];
export type MaterialName = typeof ALL_MATERIALS[number];
