<script>
import menuTitle from '../../components-menu-props/menuTitle.vue'
import menuItem from '../../components-menu-props/menuItem.vue'
export default {
  name: 'accessPersonalInformation',
  components: {
    menuTitle,
    menuItem
  },
  methods: {
    toggleVisibilityProfile() {
      if (this.seeMoreProfile) {
        this.itemWrapperStateProfile = 'See more'
        this.seeMoreProfile = false;
      } else {
        this.itemWrapperStateProfile = 'See less'
        this.seeMoreProfile = true;
      }
    },
  },
  data: function () {
    return {
      header: 'Personal Information',
      seeMoreProfile: false,
      itemWrapperStateProfile: 'See more',
      accessProfilesInfoItems: [
        {itemId: 'access-profile-about-you', itemName: 'About you', itemChild: 'MissingFeature'},
        {itemId: 'access-profile-auto-fill', itemName: 'Auto-fill information', itemChild: 'MissingFeature'},
        {itemId: 'access-profile-contact-info', itemName: 'Your contact information', itemChild: 'MissingFeature'},
        {itemId: 'access-profile-life-events', itemName: 'Life events', itemChild: 'MissingFeature'},
        {itemId: 'access-profile-music', itemName: 'Your music', itemChild: 'MissingFeature'},
        {itemId: 'access-profile-hobbies', itemName: 'Your hobbies', itemChild: 'ActivityLog'},
      ]
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <h2>Account Centre</h2>
    <menu-item item-name="Accounts Centre"
               class="item"
               item-id="access-activity-profile-accounts-centre"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <br>
    <h2>Profile Information</h2>
    <menu-item item-name="Your account creation date"
               class="item"
               item-id="access-activity-profile-info-creation-date"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <menu-item v-show="this.seeMoreProfile"
               class="item"
               v-for="item in accessProfilesInfoItems"
               :item-name="item.itemName"
               :item-id="item.itemId"
               @click="$router.push(item.itemChild)"
    ></menu-item>
    <br>
    <button id="access-activity-profile-info-button"
            class="content-button gray-button"
            @click="toggleVisibilityProfile()">
      {{ itemWrapperStateProfile }}</button>
    <br>
    <br>
    <h2>Portal</h2> <!-- Facebook reference-->
    <menu-item item-name="Your Portals"
               class="item"
               item-id="access-activity-profile-portals"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <menu-item item-name="Your portal albums"
               class="item"
               item-id="access-activity-profile-portal-albums"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <br>
    <h2>Assistant</h2> <!-- Facebook reference-->
    <menu-item item-name="Your pronunciations"
               class="item"
               item-id="access-activity-assistant-pronunciations"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <menu-item item-name="Reminders"
               class="item"
               item-id="access-activity-assistant-reminders"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <br>
    <h2>Your address books</h2>
    <menu-item item-name="Your address books"
               class="item"
               item-id="access-activity-address-books"
               @click="$router.push('MissingFeature')"
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

ul{
  list-style: none;
}

p{
  line-height: 1.4em;
}

.item {
  height: min-content;
  width: 100%;
  margin: 0 auto;
  border-bottom: solid 1px #939393;
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