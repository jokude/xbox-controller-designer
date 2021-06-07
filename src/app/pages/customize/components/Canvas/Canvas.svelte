<script lang="typescript">
  import { onMount, afterUpdate } from 'svelte';
  import { InteractiveSceneController } from '../../../../mainState/canvas/SceneController';
  import { mainState } from '../../../../mainState/state';
  import { MenuOption } from '../../../../constants/types';

  export let selectedOption: MenuOption;

  let canvas: HTMLCanvasElement;
  let sceneController: InteractiveSceneController;
  let subscribed: boolean = false;

  onMount(async () => {
    sceneController = new InteractiveSceneController(canvas);
    await sceneController.init();
    subscribed = true;
    mainState.subscribe((state) => sceneController.updateState(selectedOption, state));
  });

  afterUpdate(() => {
    if (subscribed) {
      sceneController.updateState(selectedOption);
    }
  });

</script>

<svelte:window on:resize={sceneController.resize} />

<canvas id="canvas" class="canvas" bind:this={canvas} />

<style>
  .canvas {
    height: 100%;
    width: 100%;
    outline: none;
    cursor: grab;
  }
  .canvas:active {
    cursor: grabbing;
  }

</style>
