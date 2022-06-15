<script>
  import TagItem from "./TagItem.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let items = [];
  let innerHeight;
</script>

<div class="list" style="max-height: {innerHeight - 200}px;">
  {#each items as item, index}
    <TagItem
      {item}
      on:updated={({ detail: field }) => dispatch("updated", { field, index })}
    />
  {/each}
</div>

<svelte:window bind:innerHeight />

<style lang="scss">
  .list {
    max-height: 600px;
    padding: 2px;
    overflow: auto;
  }
</style>
