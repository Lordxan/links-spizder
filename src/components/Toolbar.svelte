<script>
  import { fieldValue } from "./store";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let value = fieldValue;
</script>

<div>
  <input type="text" bind:value={$value} placeholder="Search (global) attribute" />
  <button on:click={() => dispatch("select")}>Select element</button>
  <button on:click={() => dispatch("export")}>Export csv</button>
</div>
