<script>
import menuDropDown from '../../components-menu-props/menuDropDown.vue'
import menuItem from '../../components-menu-props/menuItem.vue'
import menuTitle from '../../components-menu-props/menuTitle.vue'

export default {
  name: "profileSettingsFrame",
  components: {
    menuItem,
    menuDropDown,
    menuTitle,
  },
  data: function() {
    return{
      profileName: 'Profile settings',
      frameItems: [
        {itemId: 'profile-settings-follow-settings', itemName: 'Follow Settings', itemChild: 'FollowSettings'},
        {itemId: 'profile-settings-account-status', itemName: 'Account status', itemChild: 'MissingFeature'},
        {itemId: 'profile-settings-archive', itemName: 'Archive', itemChild: 'Archive'},
        {itemId: 'profile-settings-view-as', itemName: 'View as', itemChild: 'MissingFeature'},
        {itemId: 'profile-settings-activity-log', itemName: 'Activity log', itemChild: 'ActivityLog'},
        {itemId: 'profile-settings-profile-and-tagging', itemName: 'Profile and tagging settings', itemChild: 'ProfileAndTagging'},
        {itemId: 'profile-settings-review-posts-and-tags', itemName: 'Review posts and tags', itemChild: 'MissingFeature'},
        {itemId: 'profile-settings-review-privacy-centre', itemName: 'Privacy Centre', itemChild: 'PrivacyCentre'},
        /*{itemId: 'profile-settings-view-privacy-shortcuts-frames', itemName: 'View Privacy Shortcuts', itemChild: 'PrivacyShortcuts'},*/ // Replaced by Privacy Centre in Nov. 2022
        {itemId: 'profile-settings-search', itemName: 'Search', itemChild: 'MissingFeature'},
        {itemId: 'profile-settings-memorialisation-settings', itemName: 'Memorialisation settings', itemChild: 'MissingFeature'},
        {itemId: 'profile-settings-professional-mode', itemName: 'Turn on professional mode', itemChild: 'MissingFeature'},
        {itemId: 'profile-settings-create-another-profile', itemName: 'Create another profile', itemChild: 'MissingFeature'},
      ]
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menuTitle :headerTitle=this.profileName></menuTitle>
  <div class="profile-menu-content">
    <div class="item-wrapper">
      <menuItem class="item"
                v-for="item in this.frameItems"
                :itemName="item.itemName"
                :itemId="item.itemId"
                @click="$router.push(item.itemChild);">
      </menuItem>
    </div>
  </div>
  <hr>
</div>
</template>

<style scoped>
.item {
  min-height: 7vh;
  height: min-content;
  width: inherit;
  border-bottom: 1px solid #bcbcd2;
}
</style>