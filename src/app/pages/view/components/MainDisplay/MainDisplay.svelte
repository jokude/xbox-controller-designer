<script lang="typescript">
  import { onMount } from 'svelte';
  import { ExhibitionSceneController } from '../../../../mainState/canvas/SceneController';
  import { MAIN_IMAGE } from './constants';

  const images: {
    main: string;
    grid: string[];
  } = {
    main: null,
    grid: []
  };

  let canvas: HTMLCanvasElement;
  let sceneController: ExhibitionSceneController;

  onMount(async () => {
    //const canvas = document.createElement('canvas');
    sceneController = new ExhibitionSceneController(canvas);
    await sceneController.init();

    setTimeout(async () => {
      images.main = await sceneController.getMainScreenshot();
    }, 2000);
  });

</script>

<canvas id="canvas" class="canvas" bind:this={canvas} />
<img id="canvas" alt={MAIN_IMAGE} src={images.main} width="800" height="588" />

<style>
  .canvas {
    height: 100%;
    width: 100%;
    outline: none;
    border: 2px solid red;
  }
  :global(body) {
    overflow: hidden;
  }

</style>
