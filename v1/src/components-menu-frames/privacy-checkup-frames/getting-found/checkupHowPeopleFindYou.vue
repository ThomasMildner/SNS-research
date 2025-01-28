<script>
import menuTitle from '../../../components-menu-props/menuTitle.vue'

export default {
  name: 'checkupHowPeopleFindYou',
  components: {
    menuTitle,
  },
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title></menu-title>
  <div class="frame-inner">
    <h2>How people can find you</h2>
    <p>We'll walk through the options to make sure that your settings are right for you.</p>
    <br>
    <ul>
      <li><p>Friend requests</p></li>
      <li><p>Phone number and email address</p></li>
      <li><p>Search engines</p></li>
    </ul>
    <button class="content-button path-node"
            id="privacy-checkup-finding-next-button"
            @click="$router.push('CheckupFriendRequests')">Continue</button>
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