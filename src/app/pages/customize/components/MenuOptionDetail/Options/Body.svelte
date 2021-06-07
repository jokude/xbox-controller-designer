<script lang="typescript">
  import ColorSelection from '../Shared/ColorSelection/ColorSelection.svelte';
  import { SurfaceColor } from '../../../../../constants/types';
  import { OPTION_BODY } from '../../../../../constants/customizations';
  import { mainState } from '../../../../../mainState/state';

  const { subscribeOption, setOption } = mainState;
  let selectedColor: SurfaceColor;
  subscribeOption(OPTION_BODY, (body) => (selectedColor = body.color));
</script>

<ColorSelection {selectedColor} select={(color) => setOption(OPTION_BODY, { color })} />
