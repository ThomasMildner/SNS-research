<script>
import menuTitle from "../../../components-menu-props/menuTitle.vue";
import menuItem from "../../../components-menu-props/menuItem.vue";
export default {
  name: "shortcuts",
  components: {
    menuTitle,
    menuItem
  },
  data: function () {
    return {
      header: 'Shortcuts'
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <menu-item item-id="shortcuts-shortcut-bar"
               item-name="Shortcut bar"
               @click="$router.push('MissingFeature')"
               class="item"
    ></menu-item>
    <menu-item item-id="shortcuts-notifications"
               item-name="Notification dots"
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
.item {
  height: min-content;
}
</style>