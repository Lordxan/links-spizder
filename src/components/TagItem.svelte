<script>
  import { fieldValue, fieldValues } from "./store";
  import { createEventDispatcher } from "svelte";
  import { finder } from "@medv/finder";
  const dispatch = createEventDispatcher();
  /**
   * @type {Element}
   */
  // @ts-ignore
  export let item = {};
  export let topLevel = false;
  export let toggle = false;
  export let toggleAllItems = false;
  let input = "";
  let itemName = "";
  let field;
  const selector = finder(item);
  $: {
    field = item.attributes && item.attributes[input || $fieldValue];
    itemName = "<" + item.nodeName + "/>";
  }
  $: if (field) {
    fieldValues[selector] = field;
  }
  $: childNodes = Array.from(item.childNodes).filter(
    ({ nodeName: n }) => n !== "#text"
  );
  function changeRoot(item) {
    dispatch("changeRoot", item);
  }
  function toggleAll() {
    toggle = !toggle;
    toggleAllItems = !toggleAllItems;
  }
</script>

<div class="item">
  Tag: {itemName}
  {#if childNodes.length}
    <button on:click={() => (toggle = !toggle)}>
      {toggle ? "⮝" : "⮟"}
    </button>
  {/if}
  {#if topLevel && !toggle && childNodes.length}
    <button on:click={toggleAll}>{toggle ? "⇑" : "⇓"}</button>
  {/if}
  {#if !topLevel}
    <button on:click={() => changeRoot(item)}>Re root</button>
  {/if}
  <div>
    <input type="text" bind:value={input} placeholder="Search attribute" />
    <span>{field?.value || (input && "Not found")}</span>
    {#if toggle && childNodes.length}
      {#each childNodes as item}
        <div style="padding-left: 6px;">
          <svelte:self
            {item}
            {toggleAllItems}
            toggle={toggleAllItems}
            on:changeRoot={({ detail: item }) => changeRoot(item)}
          />
        </div>
      {/each}
    {/if}
  </div>
</div>

<style lang="scss">
  .item {
    padding: 2px;
    background-color: rgb(228, 228, 228);
  }
</style>
