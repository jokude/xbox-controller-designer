<script lang="typescript">
  import cx from 'clsx';

  export let className: string;
  export let isSelected: boolean;
  export let onClick: () => void;
</script>

<style>
  .color-item-button {
    position: relative;
    cursor: pointer;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 120px;
    height: 120px;
    margin: 16px;
    padding: 0;
    transition: transform 0.1s ease, box-shadow 0.25s ease, border-color 0.25s ease;
    border: 4px solid var(--color-light-gray);
    box-shadow: 0px 0px var(--color-light-gray);
    background: var(--color-white);
  }
  .color-item-button:hover {
    transform: scale(1.2);
  }
  .color-item-button.selected {
    box-shadow: 4px 4px var(--color-mid-gray);
    border-color: var(--color-mid-gray);
  }
</style>

<button on:click={onClick} class={cx(className, 'color-item-button', { selected: isSelected })}>
  <slot />
</button>
