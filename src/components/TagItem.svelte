<script>
  import { fieldValue } from "./store";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let item = {};
  let input = "";
  let itemName = "";
  let field;
  let toggle = false;
  $: {
    field = item.attributes && item.attributes[input || $fieldValue];
    itemName = "<" + item.nodeName + "/>";
  }
  $: if (field) {
    dispatch("updated", field);
  }
  $: childNodes = Array.from(item.childNodes).filter(
    ({ nodeName: n }) => n !== "#text"
  );
</script>

<div class="item">
  Tag: {itemName}
  {#if childNodes.length}
    <button on:click={() => (toggle = !toggle)}>
      {toggle ? "˄" : "v"}
    </button>
  {/if}
  <div>
    <input type="text" bind:value={input} placeholder="Search attribute" />
    {field?.value || (input && "Not found")}
    {#if toggle && childNodes.length}
      {#each childNodes as item}
        <div style="padding-left: 6px;">
          <svelte:self
            {item}
            on:updated={({ detail: field }) => dispatch("updated", field)}
          />
        </div>
      {/each}
    {/if}
  </div>
</div>

<style lang="scss">
  .item {
    padding: 2px;
    margin: 10px 0;
    // border-bottom: solid 1px black;
    background-color: rgb(228, 228, 228);
  }
</style>
