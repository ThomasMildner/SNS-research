<script>
import menuItem from '../../components-menu-props/menuItem.vue'
import menuTitle from '../../components-menu-props/menuTitle.vue'
export default {
  name: "privacyCheckupFrame",
  components:{
    menuTitle,
    menuItem,
  },
  data: function() {
    return {
      header: 'Privacy Checkup',
      checkupItems: [
        {itemId: 'privacy-checkup-who-sees-shared', itemName: 'Who can see what you share', itemChild: 'CheckupWhoSeesShared'},
        {itemId: 'privacy-checkup-how-to-secure', itemName: 'How to keep your account secure', itemChild: 'CheckupHowToSecure'},
        {itemId: 'privacy-checkup-how-people-find-you', itemName: 'How people can find you', itemChild: 'CheckupHowPeopleFindYou'}, // App: ... on Facebook
        {itemId: 'privacy-checkup-data-settings', itemName: 'Your data settings', itemChild: 'CheckupDataSettings'}, // App: ... on Facebook
        {itemId: 'privacy-checkup-ad-preferences', itemName: 'Your ad preferences', itemChild: 'CheckupAdPreferences'}, // App: ... on Facebook
      ]
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"
  ></menu-title>
  <div class="intro-wrapper">
    <p>We'll guide you through some settings so that can make the right choices for your account
      <br><br>
      What topic do you want to start with?
    </p>
  </div>
  <div class="checkups-grid">
    <menuItem class="item"
              v-for="item in checkupItems"
              :item-id="item.itemId"
              :item-name="item.itemName"
              @click="$router.push(item.itemChild);">
    </menuItem>
  </div>
</div>
</template>


<style scoped>

.intro-wrapper {
  padding-left: 2vh;
  padding-right: 2vh;
  padding-bottom: 4vh;
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

p {
  line-height: 1.4em;
}
</style>