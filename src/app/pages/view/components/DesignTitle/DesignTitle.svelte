<script lang="typescript">
  import { writable } from 'svelte/store';
  import InlineSVG from 'svelte-inline-svg';
  import InputText from '../../../common/InputText/InputText.svelte';
  import { getImageUrl } from '../../../../helpers/getImageUrl';

  const MAX_LENGTH = 16;
  const ICON_SIZE = 32;
  const buttonImage = getImageUrl('edit', 'svg');

  let inputText = '';
  const state = writable('Untitled design');

  const onInputChange: svelte.JSX.FormEventHandler<HTMLInputElement> = (evt) => state.set(evt.currentTarget.value);

  state.subscribe((value) => (inputText = value));
</script>

<InputText value={inputText} onChange={onInputChange} maxLength={MAX_LENGTH} />
<button>
  <InlineSVG src={buttonImage} height={ICON_SIZE} width={ICON_SIZE} />
</button>