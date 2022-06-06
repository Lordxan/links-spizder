<script>
  export let right = 100;
  export let top = 100;

  let moving = false;

  function onMouseDown() {
    moving = true;
  }

  function onMouseMove(e) {
    if (moving) {
      right -= e.movementX;
      top += e.movementY;
    }
  }

  function onMouseUp() {
    moving = false;
  }
</script>

<div
  on:mousedown={onMouseDown}
  style="right: {right}px; top: {top}px; cursor: {!moving ? 'grab' : 'grabbing'};"
  class="draggable"
>
  <slot />
</div>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style lang="scss">
  $zindex: 2147483647;
  .draggable {
    user-select: none;
    border: dotted 1px gray;
    position: fixed;
    z-index: $zindex;
  }
</style>
