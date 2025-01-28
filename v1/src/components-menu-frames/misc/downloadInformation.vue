<script>
import menuTitle from "../../components-menu-props/menuTitle.vue";
import menuSlider from "../../components-menu-props/menuItemWithSlider.vue";
export default {
  name: "downloadInformation",
  components: {
    menuTitle,
    menuSlider
  },
  data: function () {
    return {
      header: 'Download your information',
      activitySliderItems: [
        {itemId: 'download-info-activity-saved-items-collections', itemName: 'Saved items and collections'},
        {itemId: 'download-info-activity-voting-reminders', itemName: 'Voting location and reminders'},
        {itemId: 'download-info-activity-messages', itemName: 'Messages'},
        {itemId: 'download-info-activity-posts', itemName: 'Posts'},
        {itemId: 'download-info-activity-pages-profiles', itemName: 'Pages and profiles'},
        {itemId: 'download-info-activity-polls', itemName: 'Polls'},
        {itemId: 'download-info-activity-events', itemName: 'Events'},
        {itemId: 'download-info-activity-gaming', itemName: 'Gaming'},
        {itemId: 'download-info-activity-places', itemName: 'Your places'},
        {itemId: 'download-info-activity-payments', itemName: 'Payments'},
        {itemId: 'download-info-activity-marketplace', itemName: 'Marketplace'},
        {itemId: 'download-info-activity-comments-reactions', itemName: 'Comments and reactions'},
        {itemId: 'download-info-activity-stories', itemName: 'Stories'},
        {itemId: 'download-info-activity-reels', itemName: 'Reels'},
        {itemId: 'download-info-activity-fundraisers', itemName: 'Fundraisers'},
        {itemId: 'download-info-activity-groups', itemName: 'Groups'},
        {itemId: 'download-info-activity-problems', itemName: 'Problem reports'},
        {itemId: 'download-info-activity-reviews', itemName: 'Reviews'},
        {itemId: 'download-info-activity-shops-q-and-a', itemName: 'Shops questions and answers'},
        {itemId: 'download-info-activity-live-audio-rooms', itemName: 'Live Audio rooms'},
        {itemId: 'download-info-activity-spark', itemName: 'Spark'},
        {itemId: 'download-info-activity-collaborations', itemName: 'Collaborations'},
        {itemId: 'download-info-activity-navigation-bar', itemName: 'Navigation bar'},
        {itemId: 'download-info-activity-other', itemName: 'Other activity'},
      ],
      personalInfoItems: [
        {itemId: 'download-info-personal-portal', itemName: 'Portal'},
        {itemId: 'download-info-personal-profile-information', itemName: 'Profile information'},
        {itemId: 'download-info-personal-assistant', itemName: 'Assistant'},
        {itemId: 'download-info-personal-accounts-centre', itemName: 'Accounts Centre'},
        {itemId: 'download-info-personal-other', itemName: 'Other personal information'},
      ],
      connectionsInfoItems: [
        {itemId: 'download-info-connections-friends', itemName: 'Friends and followers'},
      ],
      loggedInfoItems: [
        {itemId: 'download-info-logged-topics', itemName: 'Your topics'},
        {itemId: 'download-info-logged-location', itemName: 'Location'},
        {itemId: 'download-info-logged-music', itemName: 'Music recommendations'},
        {itemId: 'download-info-logged-search', itemName: 'Search'},
        {itemId: 'download-info-logged-news', itemName: 'News'},
        {itemId: 'download-info-logged-notifications', itemName: 'Notifications'},
        {itemId: 'download-info-logged-interactions', itemName: 'Your interactions'},
        {itemId: 'download-info-logged-activity-messages', itemName: 'Activity messages'},
        {itemId: 'download-info-logged-privacy-checkup', itemName: 'Privacy Checkup'},
        {itemId: 'download-info-logged-privacy-Other', itemName: 'Other logged information'},
      ],
      securityInfoItems: [
        {itemId: 'download-info-security-login', itemName: 'Security and login information'},
      ],
      offAppInfoItems: [
        {itemId: 'download-info-off-app', itemName: 'Apps and websites off-app'},
      ],
      preferencesInfoItems: [
        {itemId: 'download-info-preferences-feed', itemName: 'Feed'},
        {itemId: 'download-info-preferences-preferences', itemName: 'Preferences'},
      ],
      adsInfoItems: [
        {itemId: 'download-info-ads-info', itemName: 'Ads information'},
      ],
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <p>You can download a copy of your app information at any time. You can download a complete copy, or you can select only the types of information and date ranges that you want.</p>
    <h2>Your activity across this app</h2>
    <menu-slider v-for="item in activitySliderItems"
                 :item-name="item.itemName"
                 :item-id="item.itemId"
    ></menu-slider>

    <h2>Personal information</h2>
    <menu-slider v-for="item in personalInfoItems"
                 :item-name="item.itemName"
                 :item-id="item.itemId"
    ></menu-slider>

    <h2>Connections</h2>
    <menu-slider v-for="item in connectionsInfoItems"
                 :item-name="item.itemName"
                 :item-id="item.itemId"
    ></menu-slider>

    <h2>Logged information</h2>
    <menu-slider v-for="item in loggedInfoItems"
                 :item-name="item.itemName"
                 :item-id="item.itemId"
    ></menu-slider>

    <h2>Security and login information</h2>
    <menu-slider v-for="item in securityInfoItems"
                 :item-name="item.itemName"
                 :item-id="item.itemId"
    ></menu-slider>

    <h2>Apps and websites off-app</h2>
    <menu-slider v-for="item in offAppInfoItems"
                 :item-name="item.itemName"
                 :item-id="item.itemId"
    ></menu-slider>

    <h2>Preferences</h2>
    <menu-slider v-for="item in preferencesInfoItems"
                 :item-name="item.itemName"
                 :item-id="item.itemId"
    ></menu-slider>

    <h2>Ads Information</h2>
    <menu-slider v-for="item in adsInfoItems"
                 :item-name="item.itemName"
                 :item-id="item.itemId"
    ></menu-slider>
    <br>
    <br>
    <button id="t3" class="content-button goal-node path-node">Download Information</button>
    <br>
    <br>
    <br>
  </div>
</div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}

.content-button{
  width: 100%;
}
</style>