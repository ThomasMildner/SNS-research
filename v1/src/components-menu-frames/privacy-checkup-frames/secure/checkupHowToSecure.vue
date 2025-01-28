<script>
import menuTitle from '../../../components-menu-props/menuTitle.vue'

export default {
  name: 'checkupHowToSecure',
  components: {
    menuTitle,
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
    <h2>How to keep your account secure</h2>
    <p>We'll take you through some steps to help you protect your account.</p>
    <br>
    <ul>
      <li><p>Turn on login alerts</p></li>
      <li><p>Your password</p></li>
      <li><p>Turn on two-factor authentication</p></li>
    </ul>
    <button @click="$router.push('CheckTurnOnAlerts')"
            id="privacy-checkup-secure-info-next-button"
            class="content-button path-node">Continue</button>
  </div>
</div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}

.content-button {
  width: 95%;
  margin: 0 auto;
  position: absolute;
  bottom: 2vh;
  background: #3C8BFF;
  color: #ffffff;
}

ul{
  list-style: none;
}

p{
  line-height: 1.4em;
}

.content-button:active{
  background: #0c56c9;
}
</style>