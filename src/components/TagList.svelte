<script>
  import TagItem from "./TagItem.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let items = [];
</script>

<div class="list">
  {#each items as item, index}
    <TagItem
      {item}
      on:updated={({ detail: field }) => dispatch("updated", { field, index })}
    />
  {/each}
</div>

<style lang="scss">
  .list {
    max-height: 600px;
    padding: 2px;
    overflow: auto;
  }
</style>
