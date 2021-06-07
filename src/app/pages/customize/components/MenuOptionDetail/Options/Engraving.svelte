<script lang="typescript">
  import Container from '../Shared/Container/Container.svelte';
  import SwitchButton from '../../../../common/SwitchButton/SwitchButton.svelte';
  import InputText from '../../../../common/InputText/InputText.svelte';
  import { createToggleState } from '../../../../common/SwitchButton/toggleState';
  import { OPTION_ENGRAVING } from '../../../../../constants/customizations';
  import { mainState } from '../../../../../mainState/state';

  const MAX_LENGTH = 16;

  let engravedText: string;
  let isActive: boolean;

  const { subscribeOption, setOption } = mainState;
  subscribeOption(OPTION_ENGRAVING, (et) => (engravedText = et.text));

  const { subscribe, setToggle } = createToggleState();
  subscribe((active) => (isActive = active));

  const onInputChange: svelte.JSX.FormEventHandler<HTMLInputElement> = (evt) =>
    setOption(OPTION_ENGRAVING, { text: evt.currentTarget.value });
</script>

<Container>
  <SwitchButton isToggled={isActive} onClick={setToggle} id={`${OPTION_ENGRAVING}-toggle`} toggleText="Active" />
  <p>{`Personalize your controller with a laser engraved. Add up to ${MAX_LENGTH} characters.`}</p>
  <InputText value={engravedText} onChange={onInputChange} disabled={!isActive} maxLength={MAX_LENGTH} />
</Container>
