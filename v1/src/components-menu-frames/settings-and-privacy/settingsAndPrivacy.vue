<script>
import menuItem from '../../components-menu-props/menuItem.vue'
import menuTitle from '../../components-menu-props/menuTitle.vue'
export default {
  name: "SettingsAndPrivacy",
  components: {
    menuItem,
    menuTitle,
  },
  data: function(){
    return {
      header: 'Settings & privacy',
      accountItems: [
        {itemId: 'settings-and-privacy-account-personal-and-account-info', itemName: 'Personal and account information', itemChild: 'PersonalAccountInfo'},
        {itemId: 'settings-and-privacy-account-password', itemName: 'Password and security', itemChild: 'PasswordSecurity'},
        {itemId: 'settings-and-privacy-account-payments', itemName: 'Payments', itemChild: 'MissingFeature'},
      ],
      preferenceItems: [
        {itemId: 'settings-and-privacy-preference-news-feed', itemName: 'News Feed', itemChild: 'NewsFeed'},
        {itemId: 'settings-and-privacy-preference-reactions', itemName: 'Reaction preferences', itemChild: 'ReactionPreferences'},
        {itemId: 'settings-and-privacy-preference-notifications', itemName: 'Notifications', itemChild: 'Notifications'},
        {itemId: 'settings-and-privacy-preference-shortcuts', itemName: 'Shortcuts', itemChild: 'Shortcuts'},
        {itemId: 'settings-and-privacy-preference-language-region', itemName: 'Language and region', itemChild: 'MissingFeature'},
        {itemId: 'settings-and-privacy-preference-media', itemName: 'Media', itemChild: 'Media'},
        {itemId: 'settings-and-privacy-preference-time-on-app', itemName: 'Your time on this app', itemChild: 'MissingFeature'}, // Facebook reference
        {itemId: 'settings-and-privacy-preference-dark-mode', itemName: 'Dark mode', itemChild: 'MissingFeature'},
      ],
      audienceVisibilityItems: [
        {itemId: 'settings-and-privacy-audience-profile-information', itemName: 'Profile Information', itemChild: 'MissingFeature'},
        {itemId: 'settings-and-privacy-audience-being-found', itemName: 'How people can find and contact you', itemChild: 'HowPeopleFindYou'},
        {itemId: 'settings-and-privacy-audience-posts', itemName: 'Posts', itemChild: 'Posts'},
        {itemId: 'settings-and-privacy-audience-stories', itemName: 'Stories', itemChild: 'Stories'},
        {itemId: 'settings-and-privacy-audience-reels', itemName: 'Reels', itemChild: 'Reels'},
        {itemId: 'settings-and-privacy-audience-public-content', itemName: 'Followers and public content', itemChild: 'FollowSettings'},
        {itemId: 'settings-and-privacy-audience-profile-tagging', itemName: 'Profile and tagging', itemChild: 'ProfileAndTagging'},
        {itemId: 'settings-and-privacy-audience-blocking', itemName: 'Blocking', itemChild: 'Blocking'},
        {itemId: 'settings-and-privacy-audience-active-status', itemName: 'Active Status', itemChild: 'ActiveStatus'},
      ],
      permissionItems: [
        {itemId: 'settings-and-privacy-permission-ad-preferences', itemName: 'Ad preferences', itemChild: 'AdPreferences'},
        {itemId: 'settings-and-privacy-permission-location', itemName: 'Location', itemChild: 'LocationSettings'},
        {itemId: 'settings-and-privacy-permission-apps-websites', itemName: 'Apps and Websites', itemChild: 'MissingFeature'},
        {itemId: 'settings-and-privacy-permission-business', itemName: 'Business integrations', itemChild: 'MissingFeature'},
        {itemId: 'settings-and-privacy-permission-upload-contacts', itemName: 'Upload contacts', itemChild: 'UploadContacts'},
        {itemId: 'settings-and-privacy-permission-cookies', itemName: 'Cookies', itemChild: 'Cookies'},
        {itemId: 'settings-and-privacy-permission-browser', itemName: 'Browser', itemChild: 'MissingFeature'},
        {itemId: 'settings-and-privacy-permission-off-app-activity', itemName: 'Off-app activity', itemChild: 'OffAppActivity'}, // Facebook reference
      ],
      yourInfoItems: [
        {itemId: 'settings-and-privacy-info-activity-log', itemName: 'Activity log', itemChild: 'ActivityLog'},
        {itemId: 'settings-and-privacy-info-access-info', itemName: 'Access your information', itemChild: 'AccessInformation'},
        {itemId: 'settings-and-privacy-info-download-info', itemName: 'Download your information', itemChild: 'DownloadInformation'},
        {itemId: 'settings-and-privacy-info-transfer-info', itemName: 'Transfer a copy of your information', itemChild: 'MissingFeature'},
        {itemId: 'settings-and-privacy-info-manage-info', itemName: 'Learn how to manage your information', itemChild: 'MissingFeature'},
      ],
      policiesItems: [
        {itemId: 'settings-and-privacy-policies-terms-of-service', itemName: 'Terms of Service', itemChild: 'TermsOfService'},
        {itemId: 'settings-and-privacy-policies-privacy-policy', itemName: 'Privacy Policy', itemChild: 'PrivacyPolicy'},
        {itemId: 'settings-and-privacy-policies-cookies-policy', itemName: 'Cookies Policy', itemChild: 'CookiePolicy'},
        {itemId: 'settings-and-privacy-policies-community-standards', itemName: 'Community Standards', itemChild: 'MissingFeature'},
      ],
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title=header></menu-title>
  <div class="settings-section">
    <h2>Account</h2>
    <p>Update your info to keep your account secure.</p>
    <menu-item class="item"
               v-for="item in accountItems"
               :item-id="item.itemId"
               :item-name="item.itemName"
               @click="$router.push(item.itemChild)"
    ></menu-item>
    <br>
    <menu-item class="item promoted-item"
               item-id="settings-and-privacy-account-privacy-checkup"
               item-name="Privacy Checkup"
               @click="$router.push('PrivacyCheckup')"
    ></menu-item>
  </div>

  <div class="settings-section">
    <h2>Preferences</h2>
    <p>Customise your experience on this app.</p> <!--Facebook reference-->
    <menu-item class="item"
               v-for="item in preferenceItems"
               :item-id="item.itemId"
               :item-name="item.itemName"
               @click="$router.push(item.itemChild)"
    ></menu-item>
  </div>

  <div class="settings-section">
    <h2>Audience and visibility</h2>
    <p>Control who can see your posts, stories and profile.</p>
    <menu-item class="item"
               v-for="item in audienceVisibilityItems"
               :item-id="item.itemId"
               :item-name="item.itemName"
               @click="$router.push(item.itemChild)"
    ></menu-item>
  </div>

  <div class="settings-section">
    <h2>Permissions</h2>
    <p>Manage what info this app uses to make your experience better, such as your interests and location.</p> <!--Facebook reference-->
    <menu-item class="item"
               v-for="item in permissionItems"
               :item-id="item.itemId"
               :item-name="item.itemName"
               @click="$router.push(item.itemChild)"
    ></menu-item>
  </div>

  <div class="settings-section">
    <h2>Your information</h2>
    <p>Access a log of your activity and controls to manage your information.</p> <!--Facebook reference-->
    <menu-item class="item"
               v-for="item in yourInfoItems"
               :item-id="item.itemId"
               :item-name="item.itemName"
               @click="$router.push(item.itemChild)"
    ></menu-item>
  </div>

  <div class="settings-section">
    <h2>Community Standards and legal policies</h2>
    <p>Access a log of your activity and controls to manage your information.</p> <!--Facebook reference-->
    <menu-item class="item"
               v-for="item in policiesItems"
               :item-id="item.itemId"
               :item-name="item.itemName"
               @click="$router.push(item.itemChild)"
    ></menu-item>
  </div>
</div>
</template>


<style scoped>
.settings-section {
  width: 95%;
  margin: 0 auto;
  padding-bottom: 2vh;
  border-bottom: solid 1px #939393;
}

.promoted-item{
  height: 7vh;
  width: 100%;
  border-radius: 3vw;
  background: #ffffff;
  filter: drop-shadow(0 0 1rem #e3e3e3);
}

.item {
  height: min-content;
}
</style>