<script>
  import Draggable from "./components/common/Draggable.svelte";
  import Toolbar from "./components/Toolbar.svelte";
  import TagList from "./components/TagList.svelte";
  import elementPicker from "element-picker";
  import { finder } from "@medv/finder";
  import Header from "./components/common/Header.svelte";
  import Footer from "./components/common/Footer.svelte";
  import { stringify } from "csv-stringify/browser/esm/sync";
  import Toggle from "./components/common/Toggle.svelte";
  let items = [];
  let toggle = false;
  $: itemsCSV = Array(items.length);
  function handleShit(element) {
    const result = finder(element).replace(/:nth-child\(\d+\)/, "");
    items = Array.from(document.querySelectorAll(result));
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
  function toggleTool(params) {
    toggle = !toggle;
  }
</script>

<Draggable right={50} top={50}>
  {#if !toggle}
    <Toggle on:toggle={toggleTool} style="margin: 10px;" />
  {:else}
    <div class="app">
      <Header on:click={toggleTool} />
      <Toolbar on:select={select} on:export={exportCSV} />
      <TagList
        {items}
        on:updated={({ detail: d }) => (itemsCSV[d.index] = d.field)}
      />
      <Footer />
    </div>
  {/if}
</Draggable>

<style lang="scss">
  $border: dotted 2px gray;
  .app {
    border-radius: 10px 30px 10px 10px;
    background: #a500bb;
    box-shadow: -8px -8px 8px 2px rgb(32 90 135 / 60%) inset;
    padding: 0 0 4px 4px;
    font-family: monospace;
    border: $border;
    // clip-path: inset(54px 0 0 0);
  }
</style>
