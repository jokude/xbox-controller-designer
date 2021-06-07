<script lang="typescript">
  import Container from '../Shared/Container/Container.svelte';
  import ButtonSelection from '../Shared/ButtonSelection/ButtonSelection.svelte';
  import { Color, ABXYColor } from '../../../../../constants/types';
  import { OPTION_ABXY } from '../../../../../constants/customizations';
  import { ABXY_BUTTON_COLORS } from '../../../../../constants/colors';
  import { mainState } from '../../../../../mainState/state';

  let selectedColor: ABXYColor;
  const { subscribeOption, setOption } = mainState;

  subscribeOption(OPTION_ABXY, (abxy) => (selectedColor = abxy.color));

  const getColorStyle = (color: ABXYColor): string => `
    --color-fill: ${color.background};
    --color-stroke: ${color.name === 'Grey on White' ? color.x : color.background};
    --color-button-a: ${color.a};
    --color-button-b: ${color.b};
    --color-button-x: ${color.x};
    --color-button-y: ${color.y};
  `;

  const setColor = (color: Color) => setOption(OPTION_ABXY, { color: color as ABXYColor });
</script>

<Container title={selectedColor.name}>
  <ButtonSelection
    option={OPTION_ABXY}
    colorList={ABXY_BUTTON_COLORS}
    solveColorStyle={getColorStyle}
    {selectedColor}
    {setColor}
  />
</Container>
