<script>
import menuTitle from '../../components-menu-props/menuTitle.vue';
export default {
  name: "cookiePolicy",
  components: {
    menuTitle
  },
  data: function() {
    return{
      header: 'Cookie Policy'
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <h2>We do not collect any cookies.</h2>
    <p>We only collect anonymised data relevant to this research and do not collect any cookies. This window exists only for the sake of completeness.</p>
  </div>
</div>
</template>


<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}
</style>