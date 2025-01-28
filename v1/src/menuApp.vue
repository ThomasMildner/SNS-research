<script>
import HomeFrame from './components-menu-frames/homeFrame.vue'
export default {
  name: 'menuMain',
  components: {
    HomeFrame,
  },
  data: function () {
    return {
      currentComponent: 'HomeFrame'
    }
  }
}
</script>

<template>
  <component :is="currentComponent"></component>
  <router-view></router-view>
</template>

