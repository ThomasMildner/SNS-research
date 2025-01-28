<script>
import menuTitle from '../../components-menu-props/menuTitle.vue'
import menuItem from '../../components-menu-props/menuItem.vue'
export default {
  name: 'accessInformation',
  components: {
    menuTitle,
    menuItem
  },
  data: function () {
    return {
      isActive: false,
      header: 'Access your information',
      informationItems: [
        {itemId: 'access-information-app-activity', itemName: 'Your activity across this app', itemChild: 'AccessActivityAcrossApp'}, // Facebook reference
        {itemId: 'access-information-personal-info', itemName: 'Personal information', itemChild: 'AccessPersonalInformation'},
        {itemId: 'access-information-connections', itemName: 'Connections', itemChild: 'AccessConnections'},
        {itemId: 'access-information-logged-info', itemName: 'Logged information', itemChild: 'AccessLoggedInformation'},
        {itemId: 'access-information-security-login-info', itemName: 'Security and login information', itemChild: 'AccessSecurityLogin'},
        {itemId: 'access-information-off-app', itemName: 'Apps and websites outside this App', itemChild: 'AccessAppsAndWebsites'},
        {itemId: 'access-information-preferences', itemName: 'Preferences', itemChild: 'AccessPreferences'},
        {itemId: 'access-information-ads-info', itemName: 'Ads information', itemChild: 'AccessAdsInformation'},
      ]
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <h2>Recent activity</h2>
    <br>
    <br>
    <br>
    <button id="access-information-manage-location-button"
            class="content-button gray-button path-node"
            @click="$router.push('LocationSettings')"
    >Manage location settings</button>
    <br>
    <br>
    <br>
    <button id="access-information-more-recent-activity-button"
            class="content-button gray-button path-node"
            @click="$router.push('MissingFeature')"
    >See More Recent Activity</button>
    <br>
    <br>
    <br>
    <h2>Your information</h2>
    <div class="checkups-grid">
      <menuItem class="item"
                v-for="item in informationItems"
                :item-id="item.itemId"
                :item-name="item.itemName"
                @click="$router.push(item.itemChild);">
      </menuItem>
    </div>
    <br>
    <h2>Access your information</h2>
    <menu-item item-name="Download your information"
               item-id="access-information-download-info"
               @click="$router.push('DownloadInformation')"
    >
    </menu-item>
    <menu-item item-name="View our Privacy Policy"
               item-id="access-information-privacy-policy"
               @click="$router.push('PrivacyPolicy')"
    >
    </menu-item>
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

ul{
  list-style: none;
}

p{
  line-height: 1.4em;
}

.checkups-grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 2rem;
}

.item {
  min-height: 15rem;
  height: min-content;
  border-bottom: 1px solid #bcbcd2;
  width: 90%;
  margin: 0 auto;
  border-radius: 20px;
  background: #fff;
  filter: drop-shadow(0 0 1rem #e3e3e3);
}

.content-button {
  width: 40%;
  justify-self: end;
  align-self: center;
}

.gray-button{
  width: 95%;
  left: 2.5%;
  background: #e3e3e3;
  color: #2c3e50;
}

.gray-button:active{
  background: #bcbcd2;
}
</style>