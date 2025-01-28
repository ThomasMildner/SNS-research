<script>
import menuTitle  from '../../components-menu-props/menuTitle.vue'
import menuItem  from '../../components-menu-props/menuItem.vue'

export default {
  name: "privacyCentreFame",
  components: {
    menuTitle,
    menuItem,
  },
}
</script>

<template>
  <div class="menu-frame-wrapper">
    <div id="privacy-centre-security-menu-button"
         class="privacy-centre-menu path-node"
         @click="$router.push('PrivacyCentreMenu')"
    ></div>
    <menu-title ></menu-title>
    <div class="frame-inner">
      <p>Security</p>
      <h1>Keeping your information secure protects your privacy</h1> <!--Facebook reference-->
      <br>
      <button class="content-button path-node"
              id="privacy-centre-security-review-button"
              @click="$router.push('ReviewSecurity')"
      >Review Your Security Settings</button>
      <br>
      <br>
      <br>
      <menu-item class="item"
                 id="privacy-centre-security-secure-further"
                 item-name="How you can further secure your account"
                 @click="$router.push('TwoFactorAuth')"
      ></menu-item>
      <menu-item class="item"
                 id="privacy-centre-security-data-misuse"
                 item-name="How we fight against data misuse"
                 @click="$router.push('/AccessAppsAndWebsites')"
      ></menu-item>
      <menu-item class="item"
                 id="privacy-centre-security-hacked"
                 item-name="What to do if you think you've been hacked"
                 @click="$router.push('MissingFeature')"
      ></menu-item>

      <h2>Learn more in the Privacy Policy</h2>
      <menu-item class="item"
                 id="privacy-centre-security-privacy-policy"
                 item-name="Promoting safety, security and integrity"
                 @click="$router.push('PrivacyPolicy')"
      ></menu-item>

      <h2>More resources</h2>
      <menu-item class="item"
                 id="privacy-centre-security-safety-centre"
                 item-name="Safety Centre"
                 @click="$router.push('PrivacyPolicy')"
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