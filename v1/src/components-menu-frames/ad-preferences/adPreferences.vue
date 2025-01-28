<script>
import menuTitle from '../../components-menu-props/menuTitle.vue';
import menuItems from '../../components-menu-props/menuItem.vue';

export default {
  name: "adPreferences",
  components: {
    menuTitle,
    menuItems,
  },
  methods:{
    toggleAdvertisers() {
      this.showAdvertisers = true
      this.showAdSettings = false
    },
    toggleAdSettings() {
      this.showAdvertisers = false
      this.showAdSettings = true
    },
  },
  data: function(){
    return {
      showAdvertisers: true,
      showAdSettings: false,
      scrollerItems: [
        {itemId:'ad-preferences-advertisers', itemName: 'Advertisers', itemChild: ''},
        {itemId:'ad-preferences-ad-topics', itemName: 'Ad topics', itemChild: 'MissingFeature'},
        {itemId:'ad-preferences-ad-settings', itemName: 'Ad settings', itemChild: ''},
      ],
      adSettingsItems: [
        {itemId:'ad-preferences-ad-settings-partners', itemName: 'Data about your activity from partners', itemChild: 'PersonalisedAds'},
        {itemId:'ad-preferences-ad-settings-categories', itemName: 'Categories used to reach you', itemChild: 'CategoriesToReach'},
        {itemId:'ad-preferences-ad-settings-audience', itemName: 'Audience-based advertising', itemChild: 'MissingFeature'},
        {itemId:'ad-preferences-ad-settings-off-app', itemName: 'Ads shown off app', itemChild: 'AdsOffApp'}, // Facebook reference
      ],
    }
  },
}
</script>

<template>
  <div class="menu-frame-wrapper">
    <menu-title></menu-title>
    <div class="frame-inner">
      <h2>Ad Preferences</h2>
      <br><br>
      <div class='horizontal-item-scroller'>
        <div
             v-bind:class="{'scroll-item button-active': showAdvertisers, 'scroll-item': !showAdvertisers}"
             :id="scrollerItems[0].itemId"
             @click="toggleAdvertisers()"
        >
          <p>{{scrollerItems[0].itemName}}</p>
        </div>

        <div class="scroll-item"
             :id="scrollerItems[1].itemId"
             @click="$router.push(scrollerItems[1].itemChild); "
        >
          <p>{{scrollerItems[1].itemName}}</p>
        </div>

        <div class="scroll-item"
             v-bind:class="{'scroll-item button-active': showAdSettings, 'scroll-item': !showAdSettings}"
             :id="scrollerItems[2].itemId"
             @click="toggleAdSettings()"
        >
          <p>{{scrollerItems[2].itemName}}</p>
        </div>
      </div>


      <div class="ad-advertisers-container"
           v-if="showAdvertisers"
      >
        <div class="ad-advertisers-inner">
          <p>There are not recent advertisers in your ad preferences.</p>
        </div>
        <menu-items class="item"
                    item-id="ad-preferences-hidden"
                    item-name="Advertisers you've hidden"
                    @click="$router.push('MissingFeature')"
        ></menu-items>
      </div>

      <div class="ad-settings-container"
           v-if="showAdSettings"
      >
        <h2>Manage data used to show you ads</h2>
        <menu-items class="item"
                    v-for="item in adSettingsItems"
                    :item-id="item.itemId"
                    :item-name="item.itemName"
                    @click="$router.push(item.itemChild)"
        ></menu-items>
        <br>
        <br>
        <hr>
        <menu-items class="item"
                    item-id="ad-preferences-social-interactions"
                    item-name="Social Interactions"
                    @click="$router.push('SocialInteractions')"
        ></menu-items>
      </div>


    </div>
  </div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}

.horizontal-item-scroller{
  width: 100%;
  height: 6vh;
  display: flex;;
  overflow-x: scroll;
  padding-top: 2%;
  padding-bottom: 2%;
  border-bottom: 1px solid #bcbcd2;
}
.item{
  padding-top: 2vh;
  height: min-content;
}

.ad-advertisers-container {
  width: 100%;
}

.ad-advertisers-inner {
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #939393;
  border-bottom: solid 1px #939393;
}

.ad-advertisers-inner  p{
  font-weight: 600;
  font-size: 2.8rem;
  line-height: 4rem;
  text-align: center;
}

.scroll-item{
  align-self: center;
  width: fit-content;
  height: 4vh;
  background-color: #e0e0e0;
  border-radius: 50px;
  padding-left: 2%;
  padding-right: 2%;
  margin-right: 1%;
  margin-left: 1%;
  flex-shrink: 0;
}

.scroll-item:active{
  background: #bcbcd2;
}

.scroll-item p{
  margin-top: 1vh;
  color: #282828;
}

.button-active{
  background: #d3e4ff;
}

.button-active p{
  color: #0c56c9;
}
</style>