<script>
import menuTitle from "../../components-menu-props/menuTitle.vue";
export default {
  name: "securityCheckup",
  components: {
    menuTitle,
  },
  data: function () {
    return {
      header: 'Two-factor authentication'
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <h2>Add an extra layer of security to your account</h2>
    <p>If you turn on two-factor authentication, we'll ask for a code if we see an attempted login from an unrecognised device or browser.</p>
    <br>
    <button class="content-button change-pw-button"
            @click="$router.push('TwoFactorAuth')"
    >Get Started</button>
    <br><br>
    <button class="content-button change-pw-button"
            style="color: #2c3e50; background: #e3e3e3"
            @click="$router.push('MissingFeature')"
    >Learn more</button>
  </div>
</div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}

.content-button {
  width: 40%;
  justify-self: end;
  align-self: center;
  background: #3C8BFF;
  color: #ffffff;
}

.content-button:active{
  background: #0c56c9;
}

.change-pw-button{
  width: 100%;
  background: #d3e4ff;
  color: #0c56c9;
}

.change-pw-button:active{
  background: #9ac3ff;
}
</style>