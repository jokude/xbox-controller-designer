<script lang="typescript">
  import InlineSVG from 'svelte-inline-svg';
  import ButtonOption from './ButtonOption.svelte';
  import { getImageUrl } from '../../../../../../helpers/getImageUrl';
  import { Color, MenuOption } from '../../../../../../constants/types';

  export let option: MenuOption;
  export let colorList: Color[];
  export let solveColorStyle: (color: Color) => string;
  export let selectedColor: Color;
  export let setColor: (color: Color) => void;

  const buttonImage = getImageUrl(`options/${option}`, 'svg');
  const iconSize = 120;
</script>

<div class="color-item-group">
  {#each colorList as color (color.name)}
    <ButtonOption isSelected={selectedColor.name === color.name} onClick={() => setColor(color)}>
      <InlineSVG src={buttonImage} height={iconSize} width={iconSize} style={solveColorStyle(color)} />
    </ButtonOption>
  {/each}
</div>

<style>
  .color-item-group {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -16px;
  }
</style>
