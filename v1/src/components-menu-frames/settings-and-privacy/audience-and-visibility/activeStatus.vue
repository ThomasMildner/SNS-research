<script>
import menuTitle from "../../../components-menu-props/menuTitle.vue";
import menuSlider from "../../../components-menu-props/menuItemWithSlider.vue";
export default {
  name: "activeStatus",
  components: {
    menuTitle,
    menuSlider
  },
  data: function () {
    return {
      header: 'Active Status',
    }
  }
}
</script>

<template>
  <div class="menu-frame-wrapper">
    <menu-title :header-title="header"></menu-title>
    <div class="frame-inner">
      <menu-slider item-id="active-status-slider"
                   item-name="Show when you're active"
      ></menu-slider>

    </div>
  </div>
</template>

<style scoped>

.frame-inner{
  width: 95%;
  height: 100%;
  margin: 0 auto;
}
.frame-inner p {
  text-transform: uppercase;
  color: #bcbcd2;
}
</style>