<script lang="typescript">
  import ColorSelection from '../Shared/ColorSelection/ColorSelection.svelte';
  import { SurfaceColor } from '../../../../../constants/types';
  import { OPTION_THUMBSTICKS } from '../../../../../constants/customizations';
  import { mainState } from '../../../../../mainState/state';

  const { subscribeOption, setOption } = mainState;
  let selectedColor: SurfaceColor;
  subscribeOption(OPTION_THUMBSTICKS, (thumbsticks) => (selectedColor = thumbsticks.color));
</script>

<ColorSelection {selectedColor} select={(color) => setOption(OPTION_THUMBSTICKS, { color })} />
