<script>
import menuTitle from '../../components-menu-props/menuTitle.vue'
import menuSlider from '../../components-menu-props/menuItemWithSlider.vue'
export default {
  name: "privacyShortcutLoginAlerts",
  components: {
    menuTitle,
    menuSlider
  },
  data: function() {
    return{
      header: 'Login Alerts',
      alertItems: [
        {itemId: 'privacy-checkup-alerts-application', itemName: 'On the App'}, // App: ... on Facebook
        {itemId: 'privacy-checkup-alerts-email', itemName: 'Email address'},
      ]
    }
  }
}
</script>

<template>
  <div class="menu-frame-wrapper">
    <menu-title :header-title="header"></menu-title>
    <div class="frame-inner">
      <h2>Login Alerts</h2>
      <p>If oyu get an alert from an unfamiliar location or browser, you'll be able to reset your password and secure your account.</p>
      <menuSlider class="alert-item"
                  v-for="item in alertItems"
                  :id="item.itemId"
                  :item-name="item.itemName"
      >

      </menuSlider>
    </div>
  </div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}
.alert-item {
  height: min-content;
}
</style>