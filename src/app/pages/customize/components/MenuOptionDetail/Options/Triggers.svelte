<script lang="typescript">
  import ColorSelection from '../Shared/ColorSelection/ColorSelection.svelte';
  import { SurfaceColor } from '../../../../../constants/types';
  import { OPTION_TRIGGERS } from '../../../../../constants/customizations';
  import { mainState } from '../../../../../mainState/state';

  let isMetallic: boolean = false;
  let selectedColor: SurfaceColor;

  const { subscribeOption, setOption } = mainState;
  subscribeOption(OPTION_TRIGGERS, (triggers) => {
    selectedColor = triggers.color;
    isMetallic = triggers.metallic;
  });
</script>

<ColorSelection
  toggleId={`${OPTION_TRIGGERS}-toggle`}
  {isMetallic}
  {selectedColor}
  toggletMetallic={() => setOption(OPTION_TRIGGERS, { color: selectedColor, metallic: !isMetallic })}
  select={(color) => setOption(OPTION_TRIGGERS, { color, metallic: isMetallic })}
/>
