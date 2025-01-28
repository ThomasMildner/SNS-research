<script>
import menuTitle from "../../components-menu-props/menuTitle.vue";
import menuItem from "../../components-menu-props/menuItem.vue";
export default {
  name: "securityCheckup",
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
    <h2>Security Checkup</h2>
    <br>
    <br>
    <menu-item class="item"
               item-name="Turn on login alerts"
               item-id="security-checkup-login-alerts"
               @click="$router.push('LoginAlerts')"
    ></menu-item>
    <menu-item class="item"
               item-name="Change password"
               item-id="security-checkup-password"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <menu-item class="item"
               item-name="Turn on two-factor authentication"
               item-id="security-checkup-two-factor-auth"
               @click="$router.push('BeforeTwoFactorAuth')"
    ></menu-item>
  </div>
</div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}

.item {
  border-radius: 3vw;
  height: 13vh;
  background: #ffffff;
  filter: drop-shadow(0 0 1rem #e3e3e3);
  width: auto;
  margin-bottom: 2vh;
}
</style>