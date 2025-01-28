<script>
import menuItem from '../components-menu-props/menuItem.vue';
import menuDropDown from '../components-menu-props/menuDropDown.vue';
import * as navigation from '/js/bottomNavigation.js'

export default {
  name: "homeFrame",
  props: {

  },
  components:{
    menuItem,
    menuDropDown
  },
  methods: {
    goHome() {
      navigation.toggleActives(navigation.navHome);
      if(navigation.navHome.classList.contains('active')){
        navigation.homeContent.style.display = 'block'
      }
    },
    toggleVisibility() {
      if(this.isVisible){
        this.itemWrapperState = 'See more'
        this.isVisible = false;
      }
      else {
        this.itemWrapperState = 'See less'
        this.isVisible = true;
      }
    },
    switchToProfile() {
      navigation.menuContainer.style.display = 'none'
      navigation.showHeader(true)
      navigation.profileContent.style.display='block'
      navigation.navProfile.src = navigation.buttons[2].activeSrc
    }
  },

  data: function() {
    return {
      id: 'menu-home-Frame',
      isVisible: false,
      itemWrapperState: 'See more',
      homeName: 'Menu',
      frameItems: [
        {itemId: 'menu-home-friends', itemName: 'Friends', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-news', itemName: 'News', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-feeds', itemName: 'Feeds', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-groups', itemName: 'Groups', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-marketplace', itemName: 'Marketplace', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-videos', itemName: 'Videos', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-memories', itemName: 'Memories', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-saved', itemName: 'Saved', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-pages', itemName: 'Pages', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-reels', itemName: 'Reels', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-dating', itemName: 'Dating', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-events', itemName: 'Events', itemChild: 'MissingFeature'},
      ],
      hiddenItems:[
        {itemId: 'menu-home-avatars', itemName: 'Avatars', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-fantasy', itemName: 'Fantasy games', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-favourites', itemName: 'Favourites', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-gaming', itemName: 'Gaming', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-live', itemName: 'Live videos', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-offers', itemName: 'Offers', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-orders', itemName: 'Orders and payments', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-stories', itemName: 'Stories', itemChild: 'MissingFeature'},
      ],
      communityDDId: 'menu-home-community-resources',
      communityDDName: 'Community Resources',
      communityDDItems: [
        {itemId: 'menu-home-community-resources-COVID', itemName: 'COVID-19 Information Centre', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-community-resources-fundraisers', itemName: 'Fundraisers', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-community-resources-emotional', itemName: 'Emotional Health', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-community-resources-crisis', itemName: 'Crisis Response', itemChild: 'MissingFeature'},
      ],
      helpDDId: 'help-support',
      helpDDName: 'Help & Support',
      helpDDItems: [
        {itemId: 'menu-home-help-support-help-centre', itemName: 'Help Centre', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-help-support-support-inbox', itemName: 'Support inbox', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-help-support-report-problem', itemName: 'Report a problem', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-help-support-safety', itemName: 'Safety', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-help-support-impress', itemName: 'Impress/Terms', itemChild: 'TermsOfService'},
        {itemId: 'menu-home-help-support-data-policy', itemName: 'Data Policy', itemChild: 'DataPolicy'},
        {itemId: 'menu-home-help-support-community-standards', itemName: 'Community Standards', itemChild: 'MissingFeature'},
      ],
      settingsPrivacyDDId: 'settingsPrivacyDD',
      settingsPrivacyName: 'Settings & Privacy',
      settingsPrivacyDDItems: [
        {itemId: 'menu-home-settings-privacy-settings', itemName: 'Settings', itemChild: 'SettingsAndPrivacy'},
        {itemId: 'menu-home-settings-privacy-device-requests', itemName: 'Device Requests', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-settings-privacy-recent-ad-activity', itemName: 'Recent ad activity', itemChild: 'MissingFeature'},
        {itemId: 'menu-home-settings-privacy-find-wifi', itemName: 'Find Wi-Fi', itemChild: 'MissingFeature'},
      ]
    }
  }
}
</script>

<template>
  <div class="menu-frame-wrapper">
    <div class="home-menu-header">
        <div class="home-menu-header-top">
          <h2>{{ homeName }}</h2>
          <img @click="$router.push('SettingsAndPrivacy');"
               id="home-menu-header-cog-icon"
               class="path-node"
               src="../../img/menu-cog.png">
        </div>
        <div @click=switchToProfile()
             class="home-menu-header-bottom path-node"
             id="home-menu-header-profile-link"
        >
          <img src="../../img/nav-button-profile.png">
          <p>See profile</p>
        </div>
      </div>
    <br>
    <div class="home-menu-content">
      <div class="home-item-wrapper">
        <menuItem class="single-col-item"
            v-for="item in this.frameItems"
            :itemName="item.itemName"
            :itemId="item.itemId"
            @click="$router.push(item.itemChild);">
        </menuItem>
      </div>

      <div class="home-item-wrapper">
        <menuItem class="single-col-item"
                  v-for="item in this.hiddenItems"
                  v-show="this.isVisible"
                  :itemName="item.itemName"
                  :itemId="item.itemId"
                  @click="$router.push(item.itemChild);">
        </menuItem>
      </div>

      <button class="content-button" @click="toggleVisibility()"> {{ itemWrapperState }}</button>
      <div class="menu-frame-buffer"></div>

      <menuDropDown
          :dropDownId = this.communityDDId
          :dropDownName= this.communityDDName
          :dropDownItems= this.communityDDItems>
      </menuDropDown>

      <menu-item class="double-col-item"
                 item-name="Impress/Terms"
                 item-id="menu-home-community-resources-impress"
                 @click="$router.push('TermsOfService')"
      ></menu-item>
      <div class="menu-frame-buffer"></div>

      <menuDropDown
          :dropDownId = this.helpDDId
          :dropDownName= this.helpDDName
          :dropDownItems= this.helpDDItems>
      </menuDropDown>

      <menuDropDown
          :dropDownId = this.settingsPrivacyDDId
          :dropDownName= this.settingsPrivacyName
          :dropDownItems= this.settingsPrivacyDDItems>
      </menuDropDown>

      <button id="t1" class="content-button path-node">Log out</button>
      <div class="menu-frame-buffer"></div>
    </div>
  </div>
</template>

<style scoped>
.menu-frame-wrapper {
  display: grid;
  grid-template-rows: 1fr auto;
  background: #f9f9ff;
}
.home-menu-header {
  width: 95vw;
  margin: 0 auto;
}

.home-menu-header-top h2 {
  font-size: 3.2em;
  text-transform: none;
}

.home-menu-header-top{
  display: grid;
  grid-template-columns: 9fr 1fr;
  align-items: center;
}

.home-menu-header img{
  height: 4.5em;
}

.home-menu-header-bottom {
  display: grid;
  grid-template-columns: 1fr 9fr;
  align-items: center;
}

.home-item-wrapper{
  width: 95%;
  margin: 0 auto 2vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2vw;
}

.single-col-item{
  border-radius: 3vw;
  height: 7vh;
  background: #ffffff;
  filter: drop-shadow(0 0 1rem #e3e3e3);
  width: auto;
}

.double-col-item {
  border-radius: 3vw;
  height: 7vh;
  background: #ffffff;
  width: 95%;
  margin: 0 auto;
  filter: drop-shadow(0 0 1rem #e3e3e3);
  grid-column: span 2;
}
.content-button {
  grid-column: span 2;
  width: 94%;
  left: 3%;
  background: #95c3de;
}

.content-button:active {
  background: #6a9bb9;
}

#t1 {
  color: #282828;
  background: #e0e0e0;
}

#t1:active {
  background: #939393;
}
</style>