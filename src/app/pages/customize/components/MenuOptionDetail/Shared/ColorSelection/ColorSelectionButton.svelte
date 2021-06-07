<script lang="typescript">
  import cx from 'clsx';
  import { SurfaceColor } from '../../../../../../constants/types';

  export let color: SurfaceColor;
  export let isSelected: boolean;
  export let onClick: () => void;
</script>

<button
  on:click={onClick}
  style="background-color: {color.value};"
  class={cx('color-item-button', { selected: isSelected })}
/>

<style>
  .color-item-button {
    position: relative;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 50px;
    margin: 16px;
    padding: 0;
    transition: transform 0.1s ease;
    box-shadow: 4px 4px var(--color-mid-gray);
    border: none;
  }
  .color-item-button:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    border-top: 20px solid var(--color-white);
    border-right: 20px solid transparent;
    width: 0;
  }
  .color-item-button.selected::after {
    content: '';
    background-image: url('../../../../../../../assets/images/check-mark.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 32px;
    display: block;
    position: absolute;
    top: 4px;
    left: 2px;
    right: 0;
    bottom: 0;
  }
  .color-item-button:hover {
    transform: scale(1.2);
  }
</style>
