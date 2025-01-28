<script>
import menuTitle from '../../../components-menu-props/menuTitle.vue'
import menuItemWithSlider from '../../../components-menu-props/menuItemWithSlider.vue'
export default {
  name: 'checkupAdsProfileInformation',
  components: {
    menuTitle,
    menuItemWithSlider,
  },
  data: function () {
    return {
      isActive: false,
      header: 'Profile Information',
      adsItems: [
        {itemId: 'privacy-checkup-ad-preferences-relationship', itemName: 'Relationship Status'},
        {itemId: 'privacy-checkup-ad-preferences-employer', itemName: 'Employer'},
        {itemId: 'privacy-checkup-ad-preferences-job', itemName: 'Job title'},
        {itemId: 'privacy-checkup-ad-preferences-education', itemName: 'Education'},
      ]
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <p>Some advertisers try to reach certain people by using information that they've provided on their profiles.</p>
    <br>
    <p>Decide whether you want advertisers to contact you based on this profile information.</p>
    <br>
    <div class="alert-items-wrapper">
      <menu-item-with-slider class="alert-item"
                             v-for="item in adsItems"
                             :id="item.itemId"
                             :item-name="item.itemName"
      >

      </menu-item-with-slider>
    </div>
    <div class="bottom-nav">
      <div class="bottom-nav-progress">
        <div class="bottom-nav-progress-circ"></div>
        <div class="bottom-nav-progress-circ active"></div>
        <div class="bottom-nav-progress-circ"></div>
      </div>
      <button @click="$router.push('CheckupSocialInteractions')"
              id="privacy-checkup-ad-preferences-profile-info-next-button"
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