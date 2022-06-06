<script>
  import ozon from "../assets/ozoninc-lo.png";
</script>

<div class="header">
  Powered by:
  <div class="header__logo" style="background-image: url({ozon});" />
</div>

<style lang="scss">
  .header {
    flex-direction: row;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 10px;
    &__logo {
      margin-left: 4px;
      width: 100px;
      height: 22px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      background-color: rgb(48, 48, 48);
      border-radius: 4px;
    }
  }
</style>
