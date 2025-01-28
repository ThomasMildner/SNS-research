<script>
import menuTitle from '../../../components-menu-props/menuTitle.vue'
export default {
  name: 'checkupAboutAds',
  components: {
    menuTitle,
  },
  data: function () {
    return {
      isActive: false,
      header: 'About Ads',
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <p>The ads you see here are personalised based on what we think you're interested in. This is because we want to show you ads that are relevant and useful to you.</p> <!-- Facebook reference-->
    <br>
    <p>To help us figure out which ads you would most likely be interested in, we use information such as what you do here.</p> <!-- Facebook reference-->
    <br>
    <p>We may also consider what you do outside the app, such as websites or apps.</p> <!-- Facebook reference-->
    <br>
    <p>Next, we'll guide you through some optinos to help you decide whether or not certain information can be used to show you ads.</p> <!-- Facebook reference-->
    <div class="bottom-nav">
      <div class="bottom-nav-progress">
        <div class="bottom-nav-progress-circ active"></div>
        <div class="bottom-nav-progress-circ"></div>
        <div class="bottom-nav-progress-circ"></div>
      </div>
      <button @click="$router.push('checkupAdsProfileInformation')"
              id="privacy-checkup-ad-preferences-info-next-button"
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

.blocked-list-link{
  margin-top: 10vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr;
  background: none;
  color: #3C8BFF;
}

.blocked-list-link p{
  align-self: center;
  font-size: 2.6rem;
}

.blocked-list-link p:active{
  color: #0c56c9;
}

.blocked-list-add{
  height: 10vw;
  width: 10vw;
  border-radius: 5vh;
  background: #d3e4ff;
  align-self: center;
}

.blocked-list-add::before, .blocked-list-add::after{
  height: 6vw;
  margin-top: 2vw;
  left: 7.2vw;
  position: absolute;
  content: " ";
  width: 6px;
  background: #3C8BFF;
}

.blocked-list-add::after{
 transform: rotate(90deg);
}

.blocked-list-add:active{
  background: #9ac3ff;
}
</style>