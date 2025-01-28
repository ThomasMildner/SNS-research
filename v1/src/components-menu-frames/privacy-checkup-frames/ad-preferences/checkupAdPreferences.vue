<script>
import menuTitle from '../../../components-menu-props/menuTitle.vue'

export default {
  name: 'checkupAdPreferences',
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
    <h2>Your ad preferences</h2>
    <p>We'll walk you through the options to make sure that your preferences are right for you.</p>
    <br>
    <ul>
      <li><p>Learn about ads</p></li>
      <li><p>Profile information</p></li>
      <li><p>Social interactions</p></li>
    </ul>
    <button class="content-button path-node"
            id="privacy-checkup-ad-preferences-next-button"
            @click="$router.push('CheckupAboutAds')"
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