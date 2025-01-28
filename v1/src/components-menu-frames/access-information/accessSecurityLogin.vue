<script>
import menuTitle from '../../components-menu-props/menuTitle.vue'
import menuItem from '../../components-menu-props/menuItem.vue'
export default {
  name: 'accessSecurityLogin',
  components: {
    menuTitle,
    menuItem
  },
  data: function () {
    return {
      isActive: false,
      header: 'Security and login information',
      activityItems: [
      ]
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <menu-item item-name="Where you're logged in"
               class="item"
               item-id="access-activity-security-login-where"
               @click="$router.push('ActivityLog')"
    ></menu-item>
    <menu-item item-name="Authorised logins"
               class="item"
               item-id="access-activity-security-login-authorised"
               @click="$router.push('ActivityLog')"
    ></menu-item>
    <menu-item item-name="Logins and logouts"
               class="item"
               item-id="access-activity-security-login-and-logouts"
               @click="$router.push('ActivityLog')"
    ></menu-item>
  </div>
</div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}

ul{
  list-style: none;
}

p{
  line-height: 1.4em;
}

.item {
  height: min-content;
  width: 100%;
  margin: 0 auto;
  border-bottom: solid 1px #939393;
}
</style>