<script>
import menuTitle from '../../../components-menu-props/menuTitle.vue'
import menuItemWithSlider from '../../../components-menu-props/menuItemWithSlider.vue'
export default {
  name: 'checkTurnOnAlerts',
  components: {
    menuTitle,
    menuItemWithSlider,
  },
  data: function () {
    return {
      isActive: false,
      header: 'Login alerts',
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
    <h2>Turn on alerts</h2>
    <p>When you turn on alerts, we'll let you know if someone logs in to your account from a place we donÄt recognise. We'll tell you which device was used and where it's located.</p>
    <br>
    <div class="alert-items-wrapper">
      <menu-item-with-slider class="alert-item"
                             v-for="item in alertItems"
                             :id="item.itemId"
                             :item-name="item.itemName"
      >

      </menu-item-with-slider>
    </div>
    <div class="bottom-nav">
      <div class="bottom-nav-progress">
        <div class="bottom-nav-progress-circ active"></div>
        <div class="bottom-nav-progress-circ"></div>
        <div class="bottom-nav-progress-circ"></div>
      </div>
      <button @click="$router.push('CheckChangePassword')"
              id="privacy-checkup-secure-alerts-next-button"
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

.alert-item{
  border-bottom: solid 1px #939393;
  height: 5vh;
  padding-bottom: 2vh;
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

</style>