<script lang="typescript">
  import Body from './Options/Body.svelte';
  import Back from './Options/Back.svelte';
  import Bumpers from './Options/Bumpers.svelte';
  import Triggers from './Options/Triggers.svelte';
  import Dpad from './Options/Dpad.svelte';
  import Thumbsticks from './Options/Thumbsticks.svelte';
  import ABXY from './Options/ABXY.svelte';
  import ViewMenu from './Options/ViewMenu.svelte';
  import Engraving from './Options/Engraving.svelte';
  import {
    OPTION_BODY,
    OPTION_BACK,
    OPTION_BUMPERS,
    OPTION_TRIGGERS,
    OPTION_THUMBSTICKS,
    OPTION_DPAD,
    OPTION_ABXY,
    OPTION_VIEWMENU,
    OPTION_ENGRAVING
  } from '../../../../constants/customizations';
  import { MenuOption } from '../../../../constants/types';

  const getOptionComponent = (selectedOption: MenuOption) => {
    switch (selectedOption) {
      case OPTION_BODY:
        return Body;
      case OPTION_BACK:
        return Back;
      case OPTION_BUMPERS:
        return Bumpers;
      case OPTION_TRIGGERS:
        return Triggers;
      case OPTION_THUMBSTICKS:
        return Thumbsticks;
      case OPTION_DPAD:
        return Dpad;
      case OPTION_ABXY:
        return ABXY;
      case OPTION_VIEWMENU:
        return ViewMenu;
      case OPTION_ENGRAVING:
        return Engraving;
      default:
        return null;
    }
  };

  export let selectedOption: MenuOption;
</script>

<svelte:component this={getOptionComponent(selectedOption)} />
