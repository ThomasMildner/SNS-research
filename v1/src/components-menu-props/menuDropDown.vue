<script>
import menuItem from '../components-menu-props/menuItem.vue';
export default {
  name: "menuDropDown",
  components: {
    menuItem
  },
  props: {
    columnClass: String,
    dropDownId: String,
    dropDownName: String,
    itemName: String,
    itemId: String,
    itemChildComponent: String,
    dropDownItems: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggleVisibility() {
      if(this.isVisible){
        this.isVisible = false;
        this.rotate()
      }
      else {
        this.isVisible = true;
        this.rotate()
      }
    },
    rotate() {
      this.deg += 180
    }
  },
  data: function(){
    return {
      deg: 0,
      isVisible: false,
    }
  }
}
</script>

<template>
  <div
      @click="toggleVisibility()"
      :id="dropDownId"
      style="text-decoration: none; color: inherit;"
      class="drop-down-head menu-item path-node">
    <h3>{{dropDownName}}</h3>
    <img
        src="../../img/item-arrow.png"
        class="transition"
        v-bind:style="{transform: `rotate(${deg}deg)`}">
  </div>
  <div class="dropdown-item-wrapper" :class="columnClass">
    <menuItem class="drop-down-menu-item"
              v-for="item in this.dropDownItems"
              v-show="this.isVisible"
              :itemName="item.itemName"
              :itemId="item.itemId"
              @click="$router.push(item.itemChild);">
    </menuItem>
  </div>
</template>

<style scoped>
.drop-down-head{
  border-top: 1px solid #bcbcd2;
  margin-top: 2vw;
  padding-bottom: 2vw;
}

.dropdown-item-wrapper {
  width: 95%;
  margin: 0 auto 2vw;
  display: grid;
  grid-gap: 2vw;
}

.menu-item {
  display: grid;
  grid-template-columns: 5fr 1fr;
  width: 100%;
}
.menu-item:active {
  background: #f9f9ff;
}

.menu-item img {
  height: 3em;
  float: right;
  margin: 0 auto;
  rotate: 90deg;
  align-self: center;
}

.menu-item h3 {
  padding-left: 3vw;
  font-family: Poppins;
  font-weight: 400;
  font-size: 2.3em;
  line-height: 1.2em;
  color: #001a2f;
  align-self: center;
}

.drop-down-menu-item{
  border-radius: 3vw;
  height: fit-content;
  background: #ffffff;
  filter: drop-shadow(0 0 1rem #e3e3e3);
}
.transition {
  transition: transform 0.2s ease-out;
}
</style>