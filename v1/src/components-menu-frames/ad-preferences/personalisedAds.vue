<script>
import menuTitle from '../../components-menu-props/menuTitle.vue'
import menuSlider from '../../components-menu-props/menuItemWithSlider.vue'
export default {
  name: 'personalisedAds',
  components: {
    menuTitle,
    menuSlider,
  },
  methods: {
    toggleLimitPosts(){
      this.showLimitPosts = !this.showLimitPosts
    },
  },
  data: function () {
    return {
      showLimitPosts: false,
    }
  }
}
</script>

<template>
  <div class="menu-frame-wrapper">
    <menu-title></menu-title>
    <div class="frame-inner">
      <h2>Personalised ads based on your activity on other websites, apps, or offline</h2>
      <p>You can choose whether we can show you personalised ads based on data about your activity from partners, and you can change your choice at any time.</p>  <!--Facebook reference-->
      <menu-slider item-name="Allow personalised ads"
                   item-id="personalised-ads-slider"
      ></menu-slider>
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
</style>