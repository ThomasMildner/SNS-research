<script>
import ExampleFrame from "../components-menu-frames/testing/exampleMenuFrame.vue";
export default {
  name: 'menuMain',

  components: {
    ExampleFrame
  },

  data: function(){
    return {
      currentMenu: 'ExampleFrame'
    }
  }
}
</script>

<template>
  <ExampleFrame/>
</template>

<style scoped>

</style>