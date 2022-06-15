<script>
  import { createEventDispatcher } from "svelte";
  import Toggle from "./Toggle.svelte";
  const dispatch = createEventDispatcher();
</script>

<div class="header">
  <Toggle on:toggle={() => dispatch("click")} />
</div>

<style lang="scss">
  .header {
    position: relative;
    flex-direction: row;
    display: flex;
    justify-content: end;
    align-items: center;
  }
</style>
