<script>
import menuTitle from '../../../components-menu-props/menuTitle.vue'
export default {
  name: 'checkupAppsAndWebsites',
  components: {
    menuTitle,
  },
  data: function () {
    return {
      isActive: false,
      header: 'Apps and websites',
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <p>Here are the apps and websites from other companies you've used to log in to and have recently used. You can remove any that you no longer want to use.</p>
    <div class="info-wrapper">
      <p>You don't have any apps or websites to remove</p>
    </div>

    <div class="bottom-nav">
      <div class="bottom-nav-progress">
        <div class="bottom-nav-progress-circ active"></div>
        <div class="bottom-nav-progress-circ"></div>
      </div>
      <button @click="$router.push('CheckupLocation')"
              id="privacy-checkup-data-apps-and-websites-next-button"
              class="content-button path-node">Next</button>
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

.info-wrapper{
  width: 90%;
  background: #f6f6f6;
  border-radius: 20px;
  margin: 0 auto;
  padding: 1vw;
}

.info-wrapper p{
  padding-left: 1vw;
  padding-right: 1vw;
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