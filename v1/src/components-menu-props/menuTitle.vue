<script>
export default {
  name: "menuHeader",
  props: {
    headerTitle: String,
    child: String
  }
}
</script>

<template>
  <div class="menu-frame-header">
    <img v-if="!child"
         @click='$router.go(-1)'
         class="back-arrow path-node"
         id="back-arrow"
         src="../../img/item-arrow.png">
    <img v-if="child"
        @click='$router.push(child)'
         class="back-arrow path-node"
         id="back-arrow-conditional"
         src="../../img/item-arrow.png">
    <h3>{{ headerTitle }}</h3>
  </div>
</template>

<style scoped>
  h3 {
    font-family: Poppins;
    font-size: 3em;
    margin:0;
    font-weight: 600;
  }

  .menu-frame-header {
    width: 95vw;
    min-height: 8vh;
    height: fit-content;
    color: #011c44;
    border-bottom: 4px solid #f6f6f6;
    display: grid;
    grid-template-columns: 1fr 5fr;
    align-items: center;
    margin: 0 auto 2vh;
  }
</style>