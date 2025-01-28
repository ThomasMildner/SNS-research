<script>
import menuTitle from '../../components-menu-props/menuTitle.vue'
import menuSideScroller from '../../components-menu-props/menuItemHorizontalList.vue';

export default {
  name: "recyclingBin",
  components: {
    menuTitle,
  },
  data: function(){
    return {
      title: 'Recycling Bin',
    }
  }
}
</script>

<template>
  <div class="menu-frame-wrapper">
    <menuTitle :headerTitle="this.title"></menuTitle>
    <br><br>
    <div class="archive-items-container">
      <p>No items</p>
    </div>
  </div>
</template>

<style scoped>
h3 {
  padding-left: 2vw;
  font-size: 3em;
  font-family: Poppins;
  font-weight: 600;
}

.archive-items-container {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #bcbcd2;
}
</style>