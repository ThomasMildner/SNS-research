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
    <menu-title ></menu-title>
    <div class="frame-inner">
      <div class="item-wrapper">
        <p>Recommended</p>
        <menu-item class="item"
                   id="review-security-check-import-security-settings"
                   item-name="Check your important security settings"
                   @click="$router.push('SecurityCheckup')"
        ></menu-item>
      </div>
      <div class="item-wrapper">
        <p>Login</p>
        <menu-item class="item"
                   id="review-security-change-password"
                   item-name="Change password"
                   @click="$router.push('MissingFeature')"
        ></menu-item>
        <menu-item class="item"
                   id="review-security-save-login-info"
                   item-name="Save your login information"
                   @click="$router.push('MissingFeature')"
        ></menu-item>
      </div>
      <div class="item-wrapper">
        <p>Two-factor authentication</p>
        <menu-item class="item"
                   id="review-security-two-factor-auth"
                   item-name="Use two-factor authentication"
                   @click="$router.push('TwoFactorAuth')"
        ></menu-item>
      </div>
      <div class="item-wrapper">
        <p>Setting up extra security</p>
        <menu-item class="item"
                   id="review-security-extra-security"
                   item-name="Get alerts for unrecognised logins"
                   @click="$router.push('LoginAlerts')"
        ></menu-item>
      </div>
      <div class="item-wrapper">
        <p>Get help</p>
        <menu-item class="item"
                   id="review-security-learn-more"
                   item-name="Learn more about security"
                   @click="$router.push('MissingFeature')"
        ></menu-item>
        <menu-item class="item"
                   id="review-security-hacked"
                   item-name="If you think you're account has been hacked"
                   @click="$router.push('MissingFeature')"
        ></menu-item>
      </div>
    </div>
  </div>
</template>


<style scoped>
.menu-frame-wrapper {
}

h1{
  font-size: 4rem;
}

.frame-inner {
  width: 95%;
  margin: 0 auto;
}

.item-wrapper{
  width: 100%;
  height: min-content;
  filter: drop-shadow(0 0 1rem #e3e3e3);
  border-radius: 1rem;
  background: #ffffff;
}
.item-wrapper p {
  text-transform: uppercase;
  color: #bcbcd2;
  filter: none;
  padding-left: 2vw;
  font-size: 2rem;
}

.item {
  height: min-content;
  border-top: solid 1px #bcbcd2;
}

</style>