<script>
import menuTitle from "../../../components-menu-props/menuTitle.vue";
import menuItem from "../../../components-menu-props/menuItem.vue";
export default {
  name: "passwordSecurity",
  components: {
    menuTitle,
    menuItem
  },
  data: function () {
    return {
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title></menu-title>
  <div class="frame-inner">
    <h2>Password and security</h2>
    <h3>Recommended</h3>
    <menu-item class="item"
               item-name="Check your important security settings"
               item-id="password-security-checkup"
               @click="$router.push('SecurityCheckup')"
    ></menu-item>
    <hr>
    <h3>Login</h3>
    <menu-item class="item"
               item-name="Change password"
               item-id="password-security-change-password"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <hr>
    <h3>Two-factor authentication</h3>
    <menu-item class="item"
               item-name="Use two-factor authentication"
               item-id="password-security-two-factor"
               @click="$router.push('TwoFactorAuth')"
    ></menu-item>
    <menu-item class="item"
               item-name="Authorised logins"
               item-id="password-security-auth-logins"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <hr>
    <h3>Setting up extra security</h3>
    <menu-item class="item"
               item-name="Get alerts about unrecognised logins"
               item-id="password-security-alerts"
               @click="$router.push('LoginAlerts')"
    ></menu-item>
    <hr>
    <h3>End-to-end encryption</h3>
    <menu-item class="item"
               item-name="Secure storage"
               item-id="password-security-end-to-end"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <hr>
    <h3>Advanced</h3>
    <menu-item class="item"
               item-name="See recent emails from us"
               item-id="password-security-recent-emails"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <hr>
    <h3>Get help</h3>
    <menu-item class="item"
               item-name="Learn more about security"
               item-id="password-security-learn-more"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <menu-item class="item"
               item-name="If oyu think that your account has been hacked"
               item-id="password-security-hacked"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <hr>
  </div>
</div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}

.item {
  height: min-content;
}
</style>