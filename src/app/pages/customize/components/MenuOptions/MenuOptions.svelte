<script lang="typescript">
  import OptionButton from './OptionButton/OptionButton.svelte';
  import OptionSelected from './OptionButton/OptionSelected.svelte';
  import { ALL_OPTIONS } from '../../../../constants/customizations';
  import { MenuOption } from '../../../../constants/types';

  export let selectedOption: MenuOption;
</script>

<style>
  .main-menu {
    height: 100px;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    position: relative;
    background: var(--color-white);
    border-top: 2px solid var(--color-green);
  }
</style>

<div class="main-menu">
  <OptionSelected position={ALL_OPTIONS.indexOf(selectedOption)} />
  {#each ALL_OPTIONS as option (option)}
    <OptionButton selected={selectedOption === option} {option} />
  {/each}
</div>
