<script>
import menuTitle from "../../../components-menu-props/menuTitle.vue";
import menuSlider from "../../../components-menu-props/menuItemWithSlider.vue";
export default {
  name: "searchEngineResults",
  components: {
    menuTitle,
    menuSlider
  },
  data: function () {
    return {
      header: 'Search Engine Results'
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <!--Facebook reference-->
    <h2>Do you want search engines outside this app to link to your profile?</h2>
    <br><hr>
    <br>
<!--    item-id="search-engine-results-slider"  replaced by t4-->
    <menu-slider id="t4"
                 item-name="Allow search engines outside this app to link to your Profile"
                 class="goal-node path-node"
    ></menu-slider>
  </div>
</div>
</template>

<style scoped>
.frame-inner{
  width: 95%;
  margin: 0 auto;
}
</style>