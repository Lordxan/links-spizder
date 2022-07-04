<script>
  import { fieldValue } from "./store";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let value = fieldValue;
</script>

<div class="toolbar">
  <input
    type="text"
    bind:value={$value}
    placeholder="Search (global) attribute"
  />
  <button on:click={() => dispatch("select")}>Select element</button>
  <button on:click={() => dispatch("open")}>Open all</button>
  <button on:click={() => dispatch("export")}>Export csv</button>
</div>

<style lang="scss">
.toolbar {
  margin-bottom: 10px;
  margin-right: 4px;
}
</style>
