<script>
import menuTitle from '../../components-menu-props/menuTitle.vue'
import menuItem from '../../components-menu-props/menuItem.vue'
export default {
  name: 'accessAppsWebsites',
  components: {
    menuTitle,
    menuItem
  },
  data: function () {
    return {
      isActive: false,
      header: 'Apps and websites off-app',
      activityItems: [
      ]
    }
  }
}
</script>

<template>
  <div class="menu-frame-wrapper">
    <menu-title :header-title="header"></menu-title>
    <div class="frame-inner">
      <menu-item item-name="Posts from apps and websites"
                 class="item"
                 item-id="access-activity-apps-websites-posts"
                 @click="$router.push('ActivityLog')"
      ></menu-item>
      <menu-item item-name="Your apps"
                 class="item"
                 item-id="access-activity-apps-websites-your-apps"
                 @click="$router.push('MissingFeature')"
      ></menu-item>
      <menu-item item-name="Your off-app activity"
                 class="item"
                 item-id="access-activity-apps-websites-off-app-activity"
                 @click="$router.push('OffAppActivity')"
      ></menu-item>
      <menu-item item-name="Apps and websites"
                 class="item"
                 item-id="access-activity-apps-websites-apps-and-websites"
                 @click="$router.push('MissingFeature')"
      ></menu-item>
      <menu-item item-name="Your connected subscriptions"
                 class="item"
                 item-id="access-activity-apps-websites-subscriptions"
                 @click="$router.push('MissingFeature')"
      ></menu-item>
    </div>
  </div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}

ul{
  list-style: none;
}

p{
  line-height: 1.4em;
}

.item {
  height: min-content;
  width: 100%;
  margin: 0 auto;
  border-bottom: solid 1px #939393;
}
</style>