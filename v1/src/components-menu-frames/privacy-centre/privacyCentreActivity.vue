<script>
import menuTitle  from '../../components-menu-props/menuTitle.vue'
import menuItem  from '../../components-menu-props/menuItem.vue'

export default {
  name: "privacyCentreActivity",
  components: {
    menuTitle,
    menuItem,
  },
}
</script>

<template>
  <div class="menu-frame-wrapper">
    <div id="privacy-centre-activity-menu-button"
         class="privacy-centre-menu path-node"
         @click="$router.push('PrivacyCentreMenu')"
    ></div>
    <menu-title ></menu-title>
    <div class="frame-inner">
      <p>Activity</p>
      <h1>Why and how your information is shared between us and others</h1> <!--Facebook reference-->
      <br>
      <button class="content-button path-node"
              id="privacy-centre-activity-review-button"
              @click="$router.push('OffAppActivity')"
      >Review Your Off-App Activity</button>
      <br>
      <br>
      <br>
      <menu-item class="item"
                 id="privacy-centre-activity-businesses"
                 item-name="Why would I want business to share my activity with this app?"
                 @click="$router.push('MissingFeature')"
      ></menu-item>
      <menu-item class="item"
                 id="privacy-centre-activity-selling-info"
                 item-name="Does this app sell your information to advertisers?"
                 @click="$router.push('SellingInfoToAdvertisers')"
      ></menu-item>
      <menu-item class="item"
                 id="privacy-centre-activity-shared-information"
                 item-name="Does my information get shared with anyone else?"
                 @click="$router.push('AccessAppsAndWebsites')"
      ></menu-item>

      <h2>Learn more in the Privacy Policy</h2>
      <menu-item class="item"
                 id="privacy-centre-activity-privacy-policy-collected-info"
                 item-name="What information do we collect?"
                 @click="$router.push('PrivacyPolicy')"
      ></menu-item>
      <menu-item class="item"
                 id="privacy-centre-activity-privacy-policy-delete-info"
                 item-name="How can you manage or delete your information"
                 @click="$router.push('PrivacyPolicy')"
      ></menu-item>

      <h2>More resources</h2>
      <menu-item class="item"
                 id="privacy-centre-activity-use"
                 item-name="Learn how we use your information"
                 @click="$router.push('PrivacyCentreUse')"
      ></menu-item>
      <menu-item class="item"
                 id="privacy-centre-activity-use"
                 item-name="You have options to manage the ads you see"
                 @click="$router.push('PrivacyCentreAds')"
      ></menu-item>
    </div>
  </div>
</template>


<style scoped>
.menu-frame-wrapper {
  background: #f9f9ff;
}

h1{
  font-size: 4rem;
}

.content-button{
  width: 100%;
  border-radius: 1rem;
  background: #3C8BFF;
}

.content-button:active{
  background: #0c56c9;
}

.privacy-centre-menu {
  position: absolute;
  float: right;
  background: #000000;
  border-radius: 4rem;
  right: 4vw;
  top: 5vw;
  width: 3rem;
  height: 0.3rem;
}

.privacy-centre-menu::after {
  content: '';
  position: absolute;
  background: #000000;
  border-radius: 4rem;
  top: 2vw;
  width: 3rem;
  height: 0.3rem;
}

.privacy-centre-menu::before {
  content: '';
  position: absolute;
  background: #000000;
  border-radius: 4rem;
  top: 4vw;
  width: 3rem;
  height: 0.3rem;
}

.frame-inner {
  width: 95%;
  margin: 0 auto;
}

.item {
  background: #ffffff;
  border-radius: 1rem;
  filter: drop-shadow(0 0 1rem #e3e3e3);
  height: min-content;
  margin-bottom: 2vw;
}

</style>