<script>
import menuTitle from '../../components-menu-props/menuTitle.vue'
import menuSideScroller from '../../components-menu-props/menuItemHorizontalList.vue';

export default {
  name: "archive",
  components: {
    menuTitle,
    menuSideScroller
  },
  props:{
    title: String
  },
  data: function(){
    return {
      scrollerItems: [
        {itemId:'activity-log-archive', itemName: 'Archive', itemChild: 'Archive'},
        {itemId:'activity-log-recycle-bin', itemName: 'Recycle Bin', itemChild: 'RecyclingBin'},
      ],
    }
  }
}
</script>

<template>
  <div class="menu-frame-wrapper">
    <menuTitle :headerTitle="this.title"></menuTitle>
    <menuSideScroller :scroll-items="scrollerItems"></menuSideScroller>
    <br><br>
    <h3>Welcome to Archive</h3>
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