<script>
import menuTitle from "../../../components-menu-props/menuTitle.vue";
import menuSlider from "../../../components-menu-props/menuItemWithSlider.vue";
export default {
  name: "reactionPreferences",
  components: {
    menuTitle,
    menuSlider
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
    <h2>Reaction preferences</h2>
    <h2>Hide number of reactions</h2>
    <menu-slider item-id="reaction-preferences-slider-other-posts"
                 item-name="On posts from others"
    ></menu-slider>
    <menu-slider item-id="reaction-preferences-slider-your-posts"
                 item-name="On your posts"
    ></menu-slider>
  </div>
</div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}
</style>