<script>
import menuTitle from '../../components-menu-props/menuTitle.vue';
export default {
  name: "termsOfService",
  components: {
    menuTitle
  },
  data: function() {
    return{
      header: 'Terms of service'
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
</div>
</template>


<style scoped>

</style>