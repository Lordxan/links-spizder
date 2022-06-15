<script>
  import ozon from "@/assets/ozon.webp";
  import { createEventDispatcher } from "svelte";
  export let style = "";
  const dispatch = createEventDispatcher();
</script>

<div class="toggle" {style}>
  <i
    class="toggle__icon"
    style="background-image: url({ozon})"
    on:click={() => dispatch("toggle")}
  />
</div>

<style lang="scss">
  @use "sass:math";
  $border: dotted 2px gray;
  $width: math.div(400px, 8);
  $height: math.div(400px, 8);
  .toggle {
    background: #a500bb;
    box-shadow: -8px -8px 8px 2px #205a8799 inset;
    height: $height;
    width: $width;
    cursor: pointer;
    user-select: all;
    border-radius: 50%;
    border: $border;
    &__icon {
      display: block;
      height: $height;
      width: $width;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
</style>
