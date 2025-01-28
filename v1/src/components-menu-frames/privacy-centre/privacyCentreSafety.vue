<script>
import menuTitle  from '../../components-menu-props/menuTitle.vue'
import menuItem  from '../../components-menu-props/menuItem.vue'

export default {
  name: "privacyCentreSafety",
  components: {
    menuTitle,
    menuItem,
  },
}
</script>

<template>
<div class="menu-frame-wrapper">
  <div id="privacy-centre-safety-menu-button"
       class="privacy-centre-menu path-node"
       @click="$router.push('PrivacyCentreMenu')"
  ></div>
  <menu-title ></menu-title>
  <div class="frame-inner">
    <p>Safety</p>
    <h1>Protecting yourself and your information</h1>
    <br>
    <h2>Steps to protect your account</h2>
    <menu-item class="item"
               id="privacy-centre-safety-two-factor-auth"
               item-name="Two-factor authentication"
               @click="$router.push('TwoFactorAuth')"
    ></menu-item>
    <h2>Steps to protect your information</h2>
    <menu-item class="item"
               id="privacy-centre-safety-limit-who-can-see"
               item-name="Limit who can see what you share"
               @click="$router.push('ActivityLog')"
    ></menu-item>
    <menu-item class="item"
               id="privacy-centre-safety-protect-messages"
               item-name="Protect your messages and other private information"
               @click="$router.push('TwoFactorAuth')"
    ></menu-item>

    <menu-item class="item"
               id="privacy-centre-safety-get-support"
               item-name="Get support if you feel you're being bullied or harassed"
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