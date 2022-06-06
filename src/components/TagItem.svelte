<script>
  import { fieldValue } from "./store";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let item = {};
  let input = "";
  let itemName = "";
  let field;
  $: {
    field = item.attributes[input || $fieldValue];
    itemName = "<" + item.nodeName + "/>";
  }
  $: if (field) {
    dispatch("updated", field);
  }
</script>

<div class="item">
  Tag: {itemName}
  <div>
    <input type="text" bind:value={input} placeholder="Search attribute" />
    {field?.value || (input ? "Not found" : "<- Type to search")}
  </div>
</div>

<style lang="scss">
  .item {
    padding: 2px;
    margin: 10px 0;
    border-bottom: solid 1px black;
    background-color: rgb(228, 228, 228);
  }
</style>
