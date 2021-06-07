<script lang="typescript">
  import ColorSelection from '../Shared/ColorSelection/ColorSelection.svelte';
  import { SurfaceColor } from '../../../../../constants/types';
  import { OPTION_BUMPERS } from '../../../../../constants/customizations';
  import { mainState } from '../../../../../mainState/state';

  let isMetallic: boolean = false;
  let selectedColor: SurfaceColor;

  const { subscribeOption, setOption } = mainState;
  subscribeOption(OPTION_BUMPERS, (bumpers) => {
    selectedColor = bumpers.color;
    isMetallic = bumpers.metallic;
  });
</script>

<ColorSelection
  toggleId={`${OPTION_BUMPERS}-toggle`}
  {isMetallic}
  {selectedColor}
  toggletMetallic={() => setOption(OPTION_BUMPERS, { color: selectedColor, metallic: !isMetallic })}
  select={(color) => setOption(OPTION_BUMPERS, { color, metallic: isMetallic })}
/>
