<script>
import menuTitle from "../../../components-menu-props/menuTitle.vue";
import menuItem from "../../../components-menu-props/menuItem.vue";
export default {
  name: "howPeopleFindYou",
  components: {
    menuTitle,
    menuItem
  },
  data: function () {
    return {
      header: 'How people find and contact you',
      findingItems: [
        {itemId: 'people-finding-send-friend-requests', itemName: 'Who can send you friend requests?', itemChild: 'ExtendedPrivacySettings Friend requests'},
        {itemId: 'people-finding-see-friends', itemName: 'Who can see your friends list?', itemChild: 'ExtendedPrivacySettings Friend list'} ,
        {itemId: 'people-finding-look-up-email', itemName: 'Who can look you up using the email address you provided?', itemChild: 'ExtendedPrivacySettings Email address'} ,
        {itemId: 'people-finding-look-up-phone', itemName: 'Who can look you up using the phone number you provided?', itemChild: 'ExtendedPrivacySettings Phone number'} ,
        {itemId: 'people-finding-search-engines', itemName: 'Do you want search engines outside this app to link to your profile?', itemChild: 'SearchEngineResults'} ,
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
               v-for="item in findingItems"
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

.item {
  height: min-content;
  border-bottom: solid 1px #bcbcd2;
}
</style>