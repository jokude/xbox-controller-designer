import { TransitionConfig } from 'svelte/transition';
import { linear, expoIn } from 'svelte/easing';

interface TransitionParams {
  duration: number;
  entering: boolean;
}

const DURATION = 500;

export const ENTERING_PROPS: TransitionParams = { duration: DURATION, entering: true };
export const EXITING_PROPS: TransitionParams = { duration: DURATION, entering: false };

export const slide = (_: Element, { duration, entering }: TransitionParams): TransitionConfig => {
  const ltrMultiplier = entering ? 100 : -100;
  return {
    duration,
    css: (t: number) => {
      const opacity = entering ? 1 : expoIn(t);
      const translation = ltrMultiplier * linear(1 - t);
      return `
        opacity: ${opacity};
        transform: translate(${translation}%);
      `;
    }
  };
};
