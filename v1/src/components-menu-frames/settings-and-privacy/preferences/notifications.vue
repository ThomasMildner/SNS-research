<script>
import menuTitle from "../../../components-menu-props/menuTitle.vue";
import menuItem from "../../../components-menu-props/menuItem.vue";
import menuSlider from "../../../components-menu-props/menuItemWithSlider.vue";
export default {
  name: "notifications",
  components: {
    menuTitle,
    menuItem,
    menuSlider
  },
  data: function () {
    return {
      header: 'Notification settings',
      notificationItems: [
        {itemId: 'notification-item-comments', itemName: 'Comments', itemChild: 'MissingFeature'},
        {itemId: 'notification-item-tags', itemName: 'Tags', itemChild: 'MissingFeature'},
        {itemId: 'notification-item-reminders', itemName: 'Reminders', itemChild: 'MissingFeature'},
        {itemId: 'notification-item-more-activity', itemName: 'More activity about you', itemChild: 'MissingFeature'},
        {itemId: 'notification-item-friend-updates', itemName: 'Updates from friends', itemChild: 'MissingFeature'},
        {itemId: 'notification-item-friend-requests', itemName: 'Friend requests', itemChild: 'MissingFeature'},
        {itemId: 'notification-item-people', itemName: 'People you may know', itemChild: 'MissingFeature'},
        {itemId: 'notification-item-birthdays', itemName: 'Birthdays', itemChild: 'MissingFeature'},
        {itemId: 'notification-item-groups', itemName: 'Groups', itemChild: 'MissingFeature'},
        {itemId: 'notification-item-video', itemName: 'Video', itemChild: 'MissingFeature'},
        {itemId: 'notification-item-events', itemName: 'Events', itemChild: 'MissingFeature'},
        {itemId: 'notification-item-stages', itemName: 'Stages', itemChild: 'MissingFeature'},
        {itemId: 'notification-item-pages-profiles-managed', itemName: 'Pages and profiles you manage', itemChild: 'MissingFeature'},
        {itemId: 'notification-item-pages-profiles-followed', itemName: 'Pages and profiles you follow', itemChild: 'MissingFeature'},
        {itemId: 'notification-item-marketplace', itemName: 'Marketplace', itemChild: 'MissingFeature'},
        {itemId: 'notification-item-fundraisers', itemName: 'Fundraisers and crises', itemChild: 'MissingFeature'},
        {itemId: 'notification-item-voting', itemName: 'Voting reminders', itemChild: 'MissingFeature'},
        {itemId: 'notification-item-messaging', itemName: 'App messaging', itemChild: 'MissingFeature'},
        {itemId: 'notification-item-other', itemName: 'Other notifications', itemChild: 'MissingFeature'},
      ],
      whereReceivedItems: [
        {itemId: 'notification-item-push', itemName: 'Push', itemChild: 'MissingFeature'},
        {itemId: 'notification-item-email', itemName: 'Email', itemChild: 'MissingFeature'},
        {itemId: 'notification-item-sms', itemName: 'SMS', itemChild: 'MissingFeature'},
      ],
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <h2>Manage your notifications</h2>
    <menu-slider item-id="notification-slider-mute-push"
                 item-name="Mute push notifications"
    ></menu-slider>
    <hr>
    <h2>What notifications you receive</h2>
    <menu-item class="item"
               v-for="item in notificationItems"
               :item-id="item.itemId"
               :item-name="item.itemName"
               @click="$router.push(item.itemChild)"
    ></menu-item>
    <hr>
    <h2>Where you receive notifications</h2>
    <menu-item class="item"
               v-for="item in whereReceivedItems"
               :item-id="item.itemId"
               :item-name="item.itemName"
               @click="$router.push(item.itemChild)"
    ></menu-item>
    <br>
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