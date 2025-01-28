<script>
  export default {
    name: 'menuItem',

    props: {
      itemName: String,
      itemId: String,
      itemChildComponent: String,
    }
  }
</script>

<template>
  <div
      :id="itemId"
      style="text-decoration: none; color: inherit;"
      class="menu-item path-node">

    <h4 :id="(itemId+'-h4')"
        class="path-node">{{itemName}}</h4>

    <img :id="(itemId+'-img')"
         class="path-node"
         src="../../img/item-arrow.png">
  </div>
</template>

<style scoped>
  .menu-item {
    display: grid;
    grid-template-columns: 5fr 1fr;
    width: 100%;
    height: 5vh;
    min-height: fit-content;
  }
  .menu-item:active {
    background-color: #f6f6f6;
  }
  .menu-item img {
    height: 3em;
    float: right;
    margin: 0 auto;
    align-self: center;
  }

  .menu-item h4 {
    padding-left: 3vw;
    font-family: Poppins;
    font-weight: 400;
    font-size: 2.3em;
    line-height: 1.2em;
    color: #001a2f;
    align-self: center;
  }

</style>