<script>
import menuTitle from '../../components-menu-props/menuTitle.vue'
export default {
  name: 'locationSettings',
  components: {
    menuTitle,
  },
  data: function () {
    return {
      isActive: false,
      header: 'Location settings',
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <p>To choose if this app receives this device's precise location, go to your device settings.</p> <!--App: Facebook reference-->
    <br>
    <br>
    <br>
    <button id="privacy-checkup-data-device-settings-button"
            class="content-button gray-button path-node"
            @click="$router.push('MissingFeature')"
    >Go to Device Settings</button>
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

.content-button {
  width: 40%;
  justify-self: end;
  align-self: center;
}

.gray-button{
  width: 95%;
  left: 2.5%;
  background: #e3e3e3;
  color: #2c3e50;
}

.gray-button:active{
  background: #bcbcd2;
}
</style>