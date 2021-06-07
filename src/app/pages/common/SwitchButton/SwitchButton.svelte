<script lang="typescript">
  import cx from 'clsx';
  export let id: string;
  export let toggleText: string;
  export let isToggled: boolean;
  export let onClick: svelte.JSX.MouseEventHandler<HTMLElement>;
</script>

<style>
  .container {
    display: inline-flex;
    flex-wrap: nowrap;
    align-items: center;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 32px;
    margin-right: 12px;
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-mid-gray);
  }
  .slider:before {
    position: absolute;
    content: '';
    height: 24px;
    width: 24px;
    left: 4px;
    bottom: 4px;
    background-color: var(--color-white);
    transition: 0.4s;
  }
  .slider.selected {
    background-color: var(--color-light-green);
  }
  .slider.selected:before {
    transform: translateX(26px);
  }
  .toggle-text.disabled {
    color: var(--color-light-gray);
  }
  .label {
    cursor: pointer;
  }
</style>

<span class="container">
  <span class="switch" on:click={onClick}>
    <input type="checkbox" checked={isToggled} {id} />
    <span class={cx('slider', { selected: isToggled })} />
  </span>
  <label for={id} class={cx('toggle-text label', { disabled: !isToggled })}>{toggleText}</label>
</span>
