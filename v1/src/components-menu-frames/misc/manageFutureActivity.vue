<script>
import menuTitle from '../../components-menu-props/menuTitle.vue'
import menuItem from '../../components-menu-props/menuItem.vue'
import menuSlider from '../../components-menu-props/menuItemWithSlider.vue';
export default {
  name: "manageFutureActivity",
  components:{
    menuTitle,
    menuItem,
    menuSlider,
  },
  data: function () {
    return {
      header: 'Manage Future Activity',
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <menu-slider item-name="Future off-app activity"
                 item-id="t2"
                 class="item goal-node"
    ></menu-slider>
    <menu-item item-id="manage-future-activity-turned-off"
               item-name="Activity you've turned off"
               @click="$router.push('MissingFeature')"
               class="item"
    ></menu-item>
  </div>
</div>
</template>

<style scoped>
.frame-inner{
  width: 95%;
  margin: 0 auto;
}

.item{
  height: min-content;
}
</style>