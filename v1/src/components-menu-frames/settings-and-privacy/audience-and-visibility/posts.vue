<script>
import menuTitle from "../../../components-menu-props/menuTitle.vue";
import menuItem from "../../../components-menu-props/menuItem.vue";
export default {
  name: "posts",
  components: {
    menuTitle,
    menuItem
  },
  data: function () {
    return {
      header: 'Posts'
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <menu-item item-id="posts-settings-future-posts"
               id="t5"
               item-name="Who can see your future posts?"
               @click="$router.push('ExtendedPrivacySettings Future Posts')"
               class="item goal-node"
    ></menu-item>
    <menu-item item-id="posts-settings-limit-past-posts"
               item-name="Limit who can see past posts"
               @click="$router.push('MissingFeature')"
               class="item"
    ></menu-item>
  </div>
</div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}
.item {
  height: min-content;
}
</style>