<script>
  import ozon from "@/assets/ozoninc-lo.png";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<div class="footer">
  Powered by:
  <i
    class="footer__logo"
    style="background-image: url({ozon});"
    on:click={() => dispatch("click")}
  />
</div>

<style lang="scss">
  .footer {
    flex-direction: row;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 10px;
    &__logo {
      display: block;
      margin-left: 4px;
      width: 100px;
      height: 22px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      background-color: rgb(48, 48, 48);
      border-radius: 4px;
      cursor: pointer;
    }
  }
</style>
