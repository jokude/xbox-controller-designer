<script lang="typescript">
  import { afterUpdate } from 'svelte';
  import cx from 'clsx';
  export let value: string;
  export let disabled: boolean;
  export let onChange: svelte.JSX.FormEventHandler<HTMLInputElement>;

  export let maxLength: number;
  let ref: HTMLElement;

  afterUpdate(() => !disabled && ref.focus());
</script>

<style>
  .input-text {
    position: relative;
    display: inline-block;
    border: none;
    outline: none;
    min-width: 250px;
    max-width: 100%;
    padding: 10px 8px;
    background: var(--color-white);
    box-shadow: 0px 0px var(--color-light-gray);
    border: 4px solid var(--color-light-gray);
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
    font-family: 'Segoe UI';
    font-size: 16px;
  }
  .input-text.filled {
    box-shadow: 4px 4px var(--color-mid-gray);
    border-color: var(--color-mid-gray);
  }
  .input-text.disabled {
    cursor: none;
    pointer-events: none;
    opacity: 0.4;
  }
  .input-text:focus {
    box-shadow: 4px 4px var(--color-yellow-green);
    border-color: var(--color-yellow-green);
  }
</style>

<input
  class={cx('input-text', { filled: Boolean(value) && !disabled, disabled })}
  type="text"
  autocomplete="off"
  maxlength={maxLength}
  spellcheck={false}
  {value}
  {disabled}
  bind:this={ref}
  on:input={onChange} />
