<script>
import menuTitle from '../../../components-menu-props/menuTitle.vue'
export default {
  name: 'checkupMoreSecurity',
  components: {
    menuTitle,
  },
  data: function () {
    return {
      isActive: false,
      header: 'Two-factor authentication',
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
    <div class="bottom-nav">
      <div class="bottom-nav-progress">
        <div class="bottom-nav-progress-circ"></div>
        <div class="bottom-nav-progress-circ"></div>
        <div class="bottom-nav-progress-circ active"></div>
      </div>
      <button @click="$router.push('CheckupSecurityEnd')"
              id="privacy-checkup-secure-more-security-button"
              class="content-button path-node">Skip</button>
    </div>
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

.bottom-nav{
  top: 8vh;
  border-top: solid 1px #939393;
  position: relative;
  width: 98%;
  height: 10vh;
  margin: 0 auto;
  display: grid;
  z-index: 1;
  grid-template-columns: 1fr 3fr;
}

.bottom-nav-progress {
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-self: center;
}

.bottom-nav-progress-circ {
  height: 2rem;
  width: 2rem;
  border-radius: 3rem;
  background: #e3e3e3;
}

.active{
  background: #3C8BFF;
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