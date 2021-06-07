<script lang="typescript">
  import { replace } from 'svelte-spa-router';
  import cx from 'clsx';
  import Icon from './Icon.svelte';
  import { OPTION_NAMES } from '../../../../../constants/customizations';
  import { MenuOption } from '../../../../../constants/types';

  export let selected: boolean;
  export let option: MenuOption;
</script>

<button class={cx('option-button', { selected })} on:click={() => replace(`/customize/${option}`)}>
  <Icon {option} {selected} />
  <div class="option-button-name">{OPTION_NAMES[option]}</div>
</button>

<style>
  .option-button {
    font-size: 14px;
    font-family: inherit;
    padding: 0;
    background: none;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    font-weight: bold;
    color: #8c8c8c;
    position: relative;
    outline: none;
    transition: top 0.5s ease-out;
    top: 16px;
  }
  .option-button.selected {
    color: #401118;
    top: -36px;
    display: block;
  }
  .option-button > .option-button-name {
    white-space: nowrap;
    background: var(--color-light-green);
    border: 2px solid var(--color-white);
    border-radius: 14px;
    color: var(--color-white);
    position: relative;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    padding: 2px 0;
    width: 140px;
    font-size: 1rem;
    opacity: 0;
    transition: opacity 0.5s ease-out;
  }
  .option-button.selected > .option-button-name {
    opacity: 1;
  }
</style>
