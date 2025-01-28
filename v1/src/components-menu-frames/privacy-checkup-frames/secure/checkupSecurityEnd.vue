<script>
import menuTitle from '../../../components-menu-props/menuTitle.vue'
export default {
  name: 'checkupBlocking',
  components: {
    menuTitle,
  },
  data: function () {
    return {
      isActive: false,
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title></menu-title>
  <div class="frame-inner">
    <h2>You're all set</h2>
    <p>Thank you for reviewing your security options. You can make changes at any time in Settings.</p>
    <ul>
      <li class="list-element"><div class="checkmark"></div><p>Turn on alerts</p></li>
      <li class="list-element"><div class="checkmark"></div><p>Your password is OK</p></li>
      <li class="list-element"><div class="checkmark"></div><p>Turn on two-factor authentication</p></li>
    </ul>
    <div class="bottom-nav">
      <button @click="$router.push('PrivacyCheckup')"
              id="privacy-checkup-secure-end-next-button"
              class="content-button path-node">Review Another Topic</button>
    </div>
  </div>
</div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}

.frame-inner h2{
  font-size: 3.5rem;
  text-align: center;
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
  display: flex;
  z-index: 1;
}

.content-button {
  width: 100%;
  margin: 2vh auto;
  background: #3C8BFF;
  color: #ffffff;
}

.content-button:active{
  background: #0c56c9;
}

.blocked-list-link p{
  align-self: center;
  font-size: 2.6rem;
}

.blocked-list-link p:active{
  color: #0c56c9;
}
.list-element {
  display: grid;
  grid-template-columns: 1fr 5fr;
}


</style>