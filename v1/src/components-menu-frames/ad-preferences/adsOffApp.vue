<script>
import menuTitle from '../../components-menu-props/menuTitle.vue'
import menuSlider from '../../components-menu-props/menuItemWithSlider.vue'
export default {
  name: 'adsOffApp',
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
      <h2>How advertisers can reach you through off-app ads</h2> <!--Facebook reference-->
      <p>You can decide whether advertisers can choose to reach you through ads outside this app based on categories like these, and you can change your choice at any time.</p>  <!--Facebook reference-->
      <menu-slider item-name="Allow"
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