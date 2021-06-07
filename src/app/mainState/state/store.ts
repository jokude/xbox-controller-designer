import { writable, Readable } from 'svelte/store';
import { initialState } from './constants';
import { MainState, Updater } from './types';

const setOption = (updater: Updater) => <T extends keyof MainState>(option: T, value: MainState[T]) =>
  updater((state) => ({
    ...state,
    [option]: value
  }));

const subscribeOption = (subscribe: Readable<MainState>['subscribe']) => <T extends keyof MainState>(
  option: T,
  subscriber: (state: MainState[T]) => void
) => subscribe((state) => subscriber(state[option]));

const createStore = () => {
  const { subscribe, update } = writable<MainState>(initialState);
  return {
    subscribe,
    subscribeOption: subscribeOption(subscribe),
    setOption: setOption(update)
  };
};

export const mainState = createStore();
