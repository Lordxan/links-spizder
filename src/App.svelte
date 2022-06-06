<script>
  import Draggable from "./components/Draggable.svelte";
  import Toolbar from "./components/Toolbar.svelte";
  import TagList from "./components/TagList.svelte";
  import elementPicker from "element-picker";
  import { finder } from "@medv/finder";
  import Header from "./components/Header.svelte";
  import { stringify } from "csv-stringify/browser/esm/sync";
  let items = [];
  $: itemsCSV = Array(items.length);
  function handleShit(element) {
    const result = finder(element).replace(/:nth-child\(\d+\)/, "");
    items = Array.from(document.querySelectorAll(result));
    console.log(items, result);
  }
  const delay = (ms) =>
    new Promise((resolve) => setTimeout(() => resolve(true), ms));
  async function select() {
    await delay(100);
    elementPicker.init({ onClick: handleShit });
  }
  function exportCSV() {
    console.log(itemsCSV);
    const output = stringify(
      itemsCSV.map(({ value, nodeName }) => ({ nodeName, value }))
    );
    const file = new Blob([output]);
    const uri = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.setAttribute("download", "temp.csv");
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
</script>

<Draggable right={50} top={50}>
  <div class="app">
    <Header />
    <Toolbar on:select={select} on:export={exportCSV} />
    <TagList
      {items}
      on:updated={({ detail: d }) => (itemsCSV[d.index] = d.field)}
    />
  </div>
</Draggable>

<style lang="scss">
  .app {
    background: #a500bb;
    box-shadow: -8px -8px 8px 2px rgb(32 90 135 / 60%) inset;
    padding: 4px;
    font-family: monospace;
  }
</style>
