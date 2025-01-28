<script>
import menuTitle  from '../../components-menu-props/menuTitle.vue'
import menuItem  from '../../components-menu-props/menuItem.vue'

export default {
  name: "privacyCentreAds",
  components: {
    menuTitle,
    menuItem,
  },
}
</script>

<template>
  <div class="menu-frame-wrapper">
    <div id="privacy-centre-ads-menu-button"
         class="privacy-centre-menu path-node"
         @click="$router.push('PrivacyCentreMenu')"
    ></div>
    <menu-title ></menu-title>
    <div class="frame-inner">
      <p>Ads</p>
      <h1>You have options to manage the ads you see</h1> <!--Facebook reference-->
      <br>
      <button class="content-button path-node"
              id="privacy-centre-ads-review-button"
              @click="$router.push('AdPreferences')"
      >Review Ad Preferences</button>
      <br>
      <br>
      <br>
      <menu-item class="item"
                 id="privacy-centre-ads-businesses"
                 item-name="How businesses use our ads system"
                 @click="$router.push('AdPreferences')"
      ></menu-item>
      <menu-item class="item"
                 id="privacy-centre-ads-partner-info"
                 item-name="How we use information from partners to show you ads"
                 @click="$router.push('PersonalisedAds')"
      ></menu-item>
      <menu-item class="item"
                 id="privacy-centre-security-hacked"
                 item-name="Why do I see similar ads across the internet"
                 @click="$router.push('PersonalisedAds')"
      ></menu-item>

      <h2>Learn more in the Privacy Policy</h2>
      <menu-item class="item"
                 id="privacy-centre-use-privacy-policy"
                 item-name="How do we use your information"
                 @click="$router.push('PrivacyPolicy')"
      ></menu-item>

      <h2>More resources</h2>
      <menu-item class="item"
                 id="privacy-centre-use-privacy-basics"
                 item-name="Privacy Basics: advertising"
                 @click="$router.push('MissingFeature')"
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