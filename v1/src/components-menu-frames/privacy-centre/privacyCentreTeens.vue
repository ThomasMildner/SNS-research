<script>
import menuTitle  from '../../components-menu-props/menuTitle.vue'
import menuItem  from '../../components-menu-props/menuItem.vue'

export default {
  name: "privacyCentreTeens",
  components: {
    menuTitle,
    menuItem,
  },
}
</script>

<template>
  <div class="menu-frame-wrapper">
    <div id="privacy-centre-teens-menu-button"
         class="privacy-centre-menu path-node"
         @click="$router.push('PrivacyCentreMenu')"
    ></div>
    <menu-title ></menu-title>
    <div class="frame-inner">
      <p>Teens</p>
      <h1>You have options to manage the ads you see</h1> <!--Facebook reference-->
      <br>
      <button class="content-button path-node"
              id="privacy-centre-teens-review-button"
              @click="$router.push('CheckupWhoSeesShared')"
      >Review your privacy settings</button>
      <br>
      <br>
      <br>
      <menu-item class="item"
                 id="privacy-centre-teens-who-sees"
                 item-name="Who can see your info and what you share"
                 @click="$router.push('CheckupWhoSeesShared')"
      ></menu-item>
      <menu-item class="item"
                 id="privacy-centre-teens-different-ads"
                 item-name="How ads are different for teens"
                 @click="$router.push('MissingFeature')"
      ></menu-item>
      <menu-item class="item"
                 id="privacy-centre-teens-get-support"
                 item-name="How to get support if you feel you're being bullied or harassed"
                 @click="$router.push('MissingFeature')"
      ></menu-item>
      <menu-item class="item"
                 id="privacy-centre-teens-parent-tools"
                 item-name="Tools that your parent or guardian can use to support your experiences"
                 @click="$router.push('MissingFeature')"
      ></menu-item>

      <h2>More resources</h2>
      <menu-item class="item"
                 id="privacy-centre-teens-get-digital"
                 item-name="Get Digital | Resources for youth"
                 @click="$router.push('MissingFeature')"
      ></menu-item>
      <menu-item class="item"
                 id="privacy-centre-teens-youth-portal"
                 item-name="Youth portal"
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