<script>
import menuTitle from "../../../components-menu-props/menuTitle.vue";
import menuSlider from "../../../components-menu-props/menuItemWithSlider.vue";
export default {
  name: "cookies",
  components: {
    menuTitle,
    menuSlider
  },
  data: function () {
    return {
      header: 'Cookies'
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <!--Facebook reference-->
    <p>You can control certain cookies that we use to collect information on and off this app. We'll remember your cookie choices and apply them wherever you're logged in.</p>
    <br>
    <menu-slider item-id="t6"
                 item-class="goal-node"
                 item-name="Essential Cookies"
    ></menu-slider>
    <br><hr>
    <h2>Optional cookies</h2>
    <menu-slider item-id="t6"
                 item-class="goal-node"
                 item-name="Our cookies on other apps and websites"
    ></menu-slider>
    <br>
    <menu-slider item-id="t6"
                 item-class="goal-node"
                 item-name="Cookies from other companies"
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