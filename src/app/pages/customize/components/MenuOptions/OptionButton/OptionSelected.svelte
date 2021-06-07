<script lang="typescript">
  import cx from 'clsx';
  export let position: number;

  let animateClass: string = '';

  $: if (position !== undefined) {
    animateClass = 'animate';
  }

  const removeClass = () => (animateClass = '');
</script>

<style>
  @keyframes changeSize {
    0% {
      width: 96px;
      height: 96px;
      opacity: 1;
    }
    30% {
      width: 30px;
      height: 30px;
      opacity: 0.4;
    }
    70% {
      width: 30px;
      height: 30px;
      opacity: 0.4;
    }
    100% {
      width: 96px;
      height: 96px;
      opacity: 1;
    }
  }

  .option-selected {
    width: 96px;
    height: 96px;
    position: absolute;
    background: var(--color-green);
    border: 6px solid var(--color-white);
    border-radius: 10px;
    transform: translate3d(-50%, -51px, 0) rotate(45deg);
    transition: left 0.5s ease-out;
  }
  .animate {
    animation: changeSize 0.5s ease-in;
  }
</style>

<div
  class={cx('option-selected', animateClass)}
  style={`left: calc(11.11%*(${position}.5));`}
  on:animationend={removeClass}>
  <slot />
</div>
