<script>
import menuTitle from "../../../components-menu-props/menuTitle.vue";
import menuItemSlider from "../../../components-menu-props/menuItemWithSlider.vue";
export default {
  name: "storyArchive",
  components: {
    menuTitle,
    menuItemSlider
  },
  data: function () {
    return {

    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title></menu-title>
  <div class="frame-inner">
    <h2>Story archive</h2>
    <h2>Archiving your stories</h2>
    <br>
    <menu-item-slider item-name="Save to archive"
                      item-id="stories-archive-slider"
    ></menu-item-slider>
  </div>
</div>
</template>

<style scoped>
.frame-inner{
  width: 95%;
  margin: 0 auto;
}


.item {
  height: min-content;
  border-bottom: solid 1px #bcbcd2;
}
</style>