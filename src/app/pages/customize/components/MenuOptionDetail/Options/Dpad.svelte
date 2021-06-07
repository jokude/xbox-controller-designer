<script lang="typescript">
  import ColorSelection from '../Shared/ColorSelection/ColorSelection.svelte';
  import { SurfaceColor } from '../../../../../constants/types';
  import { OPTION_DPAD } from '../../../../../constants/customizations';
  import { mainState } from '../../../../../mainState/state';

  let isMetallic: boolean = false;
  let selectedColor: SurfaceColor;

  const { subscribeOption, setOption } = mainState;
  subscribeOption(OPTION_DPAD, (dpad) => {
    selectedColor = dpad.color;
    isMetallic = dpad.metallic;
  });
</script>

<ColorSelection
  toggleId={`${OPTION_DPAD}-toggle`}
  {isMetallic}
  {selectedColor}
  toggletMetallic={() => setOption(OPTION_DPAD, { color: selectedColor, metallic: !isMetallic })}
  select={(color) => setOption(OPTION_DPAD, { color, metallic: isMetallic })}
/>
