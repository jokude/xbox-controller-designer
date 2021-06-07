declare const BASE_PATH: string;

declare module "*.svg" {
  const content: unknown;
  export default content;
}

declare module 'svelte-inline-svg';
