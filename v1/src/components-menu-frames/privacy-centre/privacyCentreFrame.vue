<script>
import menuTitle  from '../../components-menu-props/menuTitle.vue'
import menuItem  from '../../components-menu-props/menuItem.vue'

export default {
  name: "privacyCentreFame",
  components: {
    menuTitle,
    menuItem,
  },
  data: function () {
    return{
      header: 'Privacy Centre'
   }
  }
}
</script>


<template>
<div class="menu-frame-wrapper">
  <div id="privacy-centre-menu-button"
       class="privacy-centre-menu path-node"
       @click="$router.push('PrivacyCentreMenu')"
  ></div>
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <p>Make the privacy choices that are right for you. Learn how to manage and control your privacy.</p> <!--Facebook Reference-->
    <br>
    <div class="privacy-centre-section-wrapper">
      <div class="section-inner">
        <p class="section-subheader">Safety</p>
        <h2>Protecting yourself and your information</h2>
        <button id="privacy-centre-safety-button"
                class="content-button privacy-button path-node"
                @click="$router.push('PrivacyCentreSafety')"
        >Get Started</button>
      </div>
    </div>
    <br>
    <div class="privacy-centre-section-wrapper">
      <div class="section-inner">
        <p class="section-subheader">Sharing</p>
        <h2>Control who can see what you share</h2>
        <button id="privacy-centre-sharing-button"
                class="content-button privacy-button path-node"
                @click="$router.push('PrivacyCentreSharing')"
        >Get Started</button>
      </div>
    </div>
    <br>
    <div class="privacy-centre-section-wrapper">
      <div class="section-inner">
        <p class="section-subheader">Security</p>
        <h2>Keeping your information secure protects your privacy</h2>
        <button id="privacy-centre-security-button"
                class="content-button privacy-button path-node"
                @click="$router.push('PrivacyCentreSecurity')"
        >Get Started</button>
      </div>
    </div>
    <br>
    <div class="privacy-centre-section-wrapper">
      <div class="section-inner">
        <p class="section-subheader">Collection</p>
        <h2>What we collect, and what you do</h2>
        <button id="privacy-centre-collection-button"
                class="content-button privacy-button path-node"
                @click="$router.push('PrivacyCentreCollection')"
        >Get Started</button>
      </div>
    </div>
    <br>
    <div class="privacy-centre-section-wrapper">
      <div class="section-inner">
        <p class="section-subheader">Use</p>
        <h2>Learn how we use your information</h2>
        <button id="privacy-centre-use-button"
                class="content-button privacy-button path-node"
                @click="$router.push('PrivacyCentreUse')"
        >Get Started</button>
      </div>
    </div>
    <br>
    <div class="privacy-centre-section-wrapper">
      <div class="section-inner">
        <p class="section-subheader">Ads</p>
        <h2>You have options to manage the ads you see</h2> <!--Facebook reference-->
        <button id="privacy-centre-ads-button"
                class="content-button privacy-button path-node"
                @click="$router.push('PrivacyCentreAds')"
        >Get Started</button>
      </div>
    </div>
    <br>
    <div class="privacy-centre-section-wrapper">
      <div class="section-inner">
        <p class="section-subheader">Teens</p>
        <h2>Teen privacy explained</h2>
        <button id="privacy-centre-teens-button"
                class="content-button privacy-button path-node"
                @click="$router.push('PrivacyCentreTeens')"
        >Get Started</button>
      </div>
    </div>
    <br>
    <div class="privacy-centre-section-wrapper">
      <div class="section-inner">
        <p class="section-subheader">Activity</p>
        <h2>Why and how your information is shared between us and others</h2> <!--Facebook reference-->
        <button id="privacy-centre-activity-button"
                class="content-button privacy-button path-node"
                @click="$router.push('PrivacyCentreActivity')"
        >Get Started</button>
      </div>
    </div>
    <br>
    <h2>Learn more about the Privacy Policy</h2>
    <menu-item class="item"
               item-id="privacy-centre-privacy-policy"
               item-name="What is the Privacy Policy, and what does it cover?"
               @click="$router.push('PrivacyPolicy')"
    ></menu-item>
    <br>
    <h2>Looking for more privacy settings?</h2>
    <menu-item class="item"
               item-id="privacy-centre-privacy-settings"
               item-name="Settings and Privacy"
               @click="$router.push('SettingsAndPrivacy')"
    ></menu-item>
    <br>
  </div>
</div>
</template>


<style scoped>
.menu-frame-wrapper {
  background: #f9f9ff;
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

.privacy-centre-section-wrapper{
  background: #ffffff;
  padding: 2vw;
  width: 90%;
  margin: 0 auto;
  border-radius: 1rem;
  /*
  filter: drop-shadow(0 0 1rem #e3e3e3);
  */
  box-shadow: 0 0 30px rgba(51, 51, 51, 0.15);
}


.section-inner {
  padding: 2vh;
}

.section-subheader {
  font-weight: 200;
}

.privacy-button{
  width: 100%;
  border-radius: 8px;
  background: #ffffff;
  color: #2c3e50;
  border: solid 1px #bcbcd2;
}

.privacy-button:active{
  background: #e0e0e0;
}

.item {
  background: #ffffff;
  border-radius: 1rem;
  filter: drop-shadow(0 0 1rem #e3e3e3);
  height: min-content;
}
</style>