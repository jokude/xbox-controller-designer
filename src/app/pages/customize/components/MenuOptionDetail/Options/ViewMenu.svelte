<script lang="typescript">
  import Container from '../Shared/Container/Container.svelte';
  import ButtonSelection from '../Shared/ButtonSelection/ButtonSelection.svelte';
  import { Color, ViewMenuColor } from '../../../../../constants/types';
  import { OPTION_VIEWMENU } from '../../../../../constants/customizations';
  import { VIEW_AND_MENU_BUTTON_COLORS } from '../../../../../constants/colors';
  import { mainState } from '../../../../../mainState/state';

  let selectedColor: ViewMenuColor;
  const { subscribeOption, setOption } = mainState;

  subscribeOption(OPTION_VIEWMENU, (abxy) => (selectedColor = abxy.color));

  const getColorStyle = (color: ViewMenuColor): string => `
    --color-fill: ${color.background};
    --color-stroke: ${color.icon};
  `;

  const setColor = (color: Color) => setOption(OPTION_VIEWMENU, { color: color as ViewMenuColor });
</script>

<Container title={selectedColor.name}>
  <ButtonSelection
    option={OPTION_VIEWMENU}
    colorList={VIEW_AND_MENU_BUTTON_COLORS}
    solveColorStyle={getColorStyle}
    {selectedColor}
    {setColor}
  />
</Container>
