<script>
import menuTitle from "../../../components-menu-props/menuTitle.vue";
import menuItem from "../../../components-menu-props/menuItem.vue";
export default {
  name: "newsFeed",
  components: {
    menuTitle,
    menuItem
  },
  data: function () {
    return {
      header: 'Feed preferences',
      newsFeedItems: [
        {itemId: 'news-feed-favourites', itemName: 'Favourites', itemChild: 'MissingFeature'},
        {itemId: 'news-feed-unfollow', itemName: 'Unfollow', itemChild: 'MissingFeature'},
        {itemId: 'news-feed-reconnect', itemName: 'Reconnect', itemChild: 'MissingFeature'},
        {itemId: 'news-feed-snooze', itemName: 'Snooze', itemChild: 'MissingFeature'},
        {itemId: 'news-feed-voting-reminders', itemName: 'Voting reminders', itemChild: 'MissingFeature'},
      ],
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <menu-item class="item"
               v-for="item in newsFeedItems"
               :item-id="item.itemId"
               :item-name="item.itemName"
               @click="$router.push(item.itemChild)"
    ></menu-item>
  </div>
</div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}

.item{
  height: min-content;
}
</style>