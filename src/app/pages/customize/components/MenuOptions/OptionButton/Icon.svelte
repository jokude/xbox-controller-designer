<script lang="typescript">
  import cx from 'clsx';
  import InlineSVG from 'svelte-inline-svg';
  import { getImageUrl } from '../../../../../helpers/getImageUrl';
  import { MenuOption } from '../../../../../constants/types';

  export let option: MenuOption;
  export let selected: boolean;

  $: imageUrl = getImageUrl(`options/${option}`, 'svg');
</script>

<style>
  .icon {
    --color-fill: var(--color-light-green);
    --color-fill-alt: var(--color-white);
    --color-stroke: var(--color-white);
    --color-stroke-alt: var(--color-green);
    --color-button-a: var(--color-white);
    --color-button-b: var(--color-white);
    --color-button-x: var(--color-white);
    --color-button-y: var(--color-white);
    transition: transform 0.5s ease-out;
    transform: scale(1);
  }
  .icon.selected {
    --color-fill: var(--color-white);
    --color-fill-alt: var(--color-light-gray);
    --color-stroke: var(--color-green);
    --color-stroke-alt: var(--color-white);
    --color-button-a: var(--color-green);
    --color-button-b: var(--color-green);
    --color-button-x: var(--color-green);
    --color-button-y: var(--color-green);
    transform: scale(1.6);
  }
  .svg {
    transition: fill 0.5s ease-out, stroke 0.5s ease-out;
  }
</style>

<div class={cx('icon', { selected })}>
  <InlineSVG src={imageUrl} height="80" width="80" opacity={selected ? 1 : 0.6} class="svg" />
</div>
