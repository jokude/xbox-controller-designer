import { writable, Writable } from 'svelte/store';

interface ToggleState {
  subscribe: Writable<boolean>["subscribe"];
  setToggle: () => void;
}

export const createToggleState = (): ToggleState => {
  const { subscribe, update } = writable<boolean>(false);
  const setToggle: () => void = () => update((isActive) => !isActive)

	return {
    subscribe,
    setToggle
	}
}