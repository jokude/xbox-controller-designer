<script lang="typescript">
  import ColorSelectionButton from './ColorSelectionButton.svelte';
  import Container from '../Container/Container.svelte';
  import SwitchButton from '../../../../../common/SwitchButton/SwitchButton.svelte';
  import { SURFACE_COLORS } from '../../../../../../constants/colors';
  import { SurfaceColor } from '../../../../../../constants/types';

  export let selectedColor: SurfaceColor;
  export let select: (color: SurfaceColor) => void;
  export let isMetallic: boolean | undefined;
  export let toggletMetallic: () => void;
  export let toggleId: string;
</script>

<Container title={selectedColor.name}>
  <div class="color-item-group">
    {#each SURFACE_COLORS as color (color.name)}
      <ColorSelectionButton {color} isSelected={selectedColor.name === color.name} onClick={() => select(color)} />
    {/each}
  </div>
  {#if isMetallic !== undefined}
    <SwitchButton isToggled={isMetallic} onClick={toggletMetallic} id={toggleId} toggleText="Metallic" />
  {/if}
</Container>

<style>
  .color-item-group {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -16px 48px;
  }
</style>
