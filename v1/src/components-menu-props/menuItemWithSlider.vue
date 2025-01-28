<script>
  export default {
    name: 'menuItem',

    props: {
      itemName: String,
      itemId: String,
      itemClass: String,
    },
    methods: {
      toggleActive() {
        this.isActive = !this.isActive
      }
    },
    data: function() {
      return {
        isActive: true, // init slider as active
      }
    }
  }
</script>

<template>
  <div
      :id="itemId"
      style="text-decoration: none; color: inherit;"
      class="menu-item path-node"
      :class="itemClass"
  >
    <h4>{{itemName}}</h4>
    <div class="slider"
         @click="toggleActive()"
         v-bind:style="{'background' : (isActive ? '#3C8BFF' : '#e3e3e3')}"
    >
      <div class="slider-circ"
           v-bind:style="{'float' : (isActive ? 'right' : 'left'),
                          'left' : (isActive ? '-0.5vh' : '0.5vh'),
      }">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .menu-item {
    display: grid;
    grid-template-columns: 4fr 1fr;
    width: 100%;
    height: min-content;
    min-height: fit-content;
    grid-gap: 3vw;
  }
  .menu-item:active {
    background-color: #f6f6f6;
  }

  .menu-item h4 {
    padding-left: 3vw;
    font-family: Poppins;
    font-weight: 400;
    font-size: 2.3em;
    line-height: 1.2em;
    color: #001a2f;
    align-self: center;
  }

  .slider {
    width: 80%;
    background: #e3e3e3;
    height: 4vh;
    border-radius: 2.5vh;
    align-self: center;
  }

  .slider-circ{
    position: relative;
    top: 0.5vh;
    left: 0.5vh;
    width: 3vh;
    height: 3vh;
    border-radius: 2vh;
    background: #ffffff;
    filter: drop-shadow(0.4vh 0.2vh 0.4vh rgba(0, 0, 0, 0.15));
  }

</style>