<script>
import menuTitle from '../../../components-menu-props/menuTitle.vue'

export default {
  name: 'checkupDataSettings',
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
    <h2>Your data settings</h2>
    <p>We'll walk through the options to make sure that your settings are right for you.</p>
    <br>
    <ul>
      <li><p>Apps and websites</p></li>
      <li><p>Location</p></li>
    </ul>
    <button class="content-button path-node"
            id="privacy-checkup-data-next-button"
            @click="$router.push('CheckupAppsAndWebsites')"
    >Continue</button>
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