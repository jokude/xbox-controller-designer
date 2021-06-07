<script lang="typescript">
  import { slide, ENTERING_PROPS, EXITING_PROPS } from './sliderTransition';
  export let title: string;
</script>

<style>
  .container {
    padding: 24px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .title {
    margin: 0 0 16px 0;
    font-size: 1.25rem;
    color: var(--color-slate-gray);
  }
</style>

<div class="container" in:slide|local={ENTERING_PROPS} out:slide|local={EXITING_PROPS}>
  {#if Boolean(title)}
    <h2 class="title">{title}</h2>
  {/if}
  <slot />
</div>
