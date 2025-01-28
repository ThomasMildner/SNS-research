<script>
import menuTitle  from '../../components-menu-props/menuTitle.vue'
import menuItem  from '../../components-menu-props/menuItem.vue'

export default {
  name: "privacyCentreMenu",
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
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <br>
    <menu-item class="item"
               item-id="privacy-centre-menu-home"
               item-name="Privacy Centre home"
               @click="$router.push('PrivacyCentre')"
    ></menu-item>
    <br>
    <menu-item class="item"
               item-id="privacy-centre-menu-privacy-policy"
               item-name="Privacy Policy"
               @click="$router.push('PrivacyPolicy')"
    ></menu-item>
    <br>
    <menu-item class="item"
               item-id="privacy-centre-menu-home"
               item-name="Other policies"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <br>
    <menu-item class="item"
               item-id="privacy-centre-menu-home"
               item-name="Settings"
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
  filter: drop-shadow(0 0 1rem #e3e3e3);
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