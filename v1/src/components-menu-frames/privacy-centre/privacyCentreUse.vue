<script>
import menuTitle  from '../../components-menu-props/menuTitle.vue'
import menuItem  from '../../components-menu-props/menuItem.vue'

export default {
  name: "privacyCentreUse",
  components: {
    menuTitle,
    menuItem,
  },
}
</script>


<template>
  <div class="menu-frame-wrapper">
    <div id="privacy-centre-use-menu-button"
         class="privacy-centre-menu path-node"
         @click="$router.push('PrivacyCentreMenu')"
    ></div>
    <menu-title ></menu-title>
    <div class="frame-inner">
      <p>Use</p>
      <h1>Lean how we use your information</h1>
      <br>
      <button class="content-button path-node"
              id="privacy-centre-use-review-button"
              @click="$router.push('AccessInformation')"
      >Review Your Information</button>
      <br>
      <br>
      <br>
      <menu-item class="item"
                 id="privacy-centre-use-collected-info"
                 item-name="How we use the information that we collect about you"
                 @click="$router.push('PrivacyPolicy')"
      ></menu-item>
      <menu-item class="item"
                 id="privacy-centre-use-location"
                 item-name="How we use your location"
                 @click="$router.push('LocationSettings')"
      ></menu-item>
      <menu-item class="item"
                 id="privacy-centre-use-personalisation"
                 item-name="What we mean when we talk about personalisation"
                 @click="$router.push('PrivacyPolicy')"
      ></menu-item>

      <h2>Learn more in the Privacy Policy</h2>
      <menu-item class="item"
                 id="privacy-centre-use-privacy-policy"
                 item-name="How do we use your information"
                 @click="$router.push('PrivacyPolicy')"
      ></menu-item>

      <h2>More resources</h2>
      <menu-item class="item"
                 id="privacy-centre-use-collection"
                 item-name="What we collect, and what you can do"
                 @click="$router.push('PrivacyCentreCollection')"
      ></menu-item>
      <menu-item class="item"
                 id="privacy-centre-use-ads"
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