<script>
import menuTitle  from '../../components-menu-props/menuTitle.vue'
import menuItem  from '../../components-menu-props/menuItem.vue'

export default {
  name: "privacyCentreSharing",
  components: {
    menuTitle,
    menuItem,
  },
}
</script>

<template>
  <div class="menu-frame-wrapper">
    <div id="privacy-centre-sharing-menu-button"
         class="privacy-centre-menu path-node"
         @click="$router.push('PrivacyCentreMenu')"
    ></div>
    <menu-title ></menu-title>
    <div class="frame-inner">
      <p>Sharing</p>
      <h1>Control who can see what you share</h1> <!--Facebook reference-->
      <br>
      <button class="content-button path-node"
              id="privacy-centre-sharing-review-button"
              @click="$router.push('CheckupWhoSeesShared')"
      >Review Your Sharing Settings</button>
      <br>
      <br>
      <br>
      <menu-item class="item"
                 id="privacy-centre-sharing-clean-up-profile"
                 item-name="How to clean up your profile"
                 @click="$router.push('MissingFeature')"
      ></menu-item>
      <menu-item class="item"
                 id="privacy-centre-sharing-wrong-person"
                 item-name="What to do if something was shared with the wrong person"
                 @click="$router.push('ActivityLog')"
      ></menu-item>
      <menu-item class="item"
                 id="privacy-centre-sharing-unknown-requests"
                 item-name="Unknown friend requests and followers"
                 @click="$router.push('HowPeopleFindYou')"
      ></menu-item>

      <h2>Learn more in the Privacy Policy</h2>
      <menu-item class="item"
                 id="privacy-centre-sharing-privacy-policy"
                 item-name="How is your information shared here or with integrated partners?"
                 @click="$router.push('PrivacyPolicy')"
      ></menu-item>

      <h2>More resources</h2>
      <menu-item class="item"
                 id="privacy-centre-sharing-more-resources"
                 item-name="Mange apps and websites"
                 @click="$router.push('AccessAppsAndWebsites')"
      ></menu-item>
      <menu-item class="item"
                 id="privacy-centre-sharing-privacy-basics"
                 item-name="Privacy Basics: more about sharing"
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