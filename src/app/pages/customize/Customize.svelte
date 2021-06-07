<script lang="typescript">
  import Canvas from './components/Canvas/Canvas.svelte';
  import MenuOptions from './components/MenuOptions/MenuOptions.svelte';
  import MenuOptionDetail from './components/MenuOptionDetail/MenuOptionDetail.svelte';
  import Header from './components/Header/Header.svelte';
  import { MenuOption } from '../../constants/types';

  export let params: { option: MenuOption };
  $: option = params.option;

</script>

<div class="main-wrapper">
  <Header />
  <div class="top-section">
    <div class="canvas">
      <Canvas selectedOption={option} />
    </div>
    <div class="menu-item-detail">
      <MenuOptionDetail selectedOption={option} />
    </div>
  </div>
  <MenuOptions selectedOption={option} />
</div>

<style>
  .main-wrapper {
    height: 100%;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .top-section {
    display: flex;
    flex-wrap: nowrap;
    height: calc(100% - 204px);
  }
  .canvas {
    width: 60%;
  }
  .menu-item-detail {
    position: relative;
    overflow: hidden;
    width: 40%;
    padding: 16px;
  }

</style>
