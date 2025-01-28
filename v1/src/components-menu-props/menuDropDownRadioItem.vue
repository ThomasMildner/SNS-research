<script>
export default {
  name: 'MultiDropDownRadio',

  props: {
    multiRadioTitle: String,
    dropDownTitle: String,
    dropDownId: String,
    radioName: String,
    radioItems: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    },
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
    },
  },

  data: function() {
    return {
      isActive: false,
      isVisible: false,
      deg: 0,
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
    <h3>{{dropDownTitle}}</h3>
    <img
        src="../../img/item-arrow.png"
        class="transition"
        v-bind:style="{transform: `rotate(${deg}deg)`}">
  </div>
  <div class="dropdown-item-wrapper" v-show="this.isVisible">
    <form>
      <h3>{{multiRadioTitle}}</h3>
      <div class="multi-radio-wrapper"
          v-for="item in this.radioItems"
      >
        <label :for="item.itemId">{{item.itemName}}</label>
        <input type="radio"
               :id="item.itemId"
               :name="radioName"
       >

        <br>
      </div>
    </form>
  </div>
</template>


<style scoped>
.drop-down-head{
  width: 100%;
  float: right;
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.dropdown-item-wrapper {
  width: 95%;
  margin: 0 auto 2vw;
  display: grid;
  grid-gap: 2vw;
}

.menu-item img {
  height: 3em;
  float: right;
  margin: 0 auto;
  rotate: 90deg;
  align-self: center;
}

.multi-radio-wrapper{
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  border-bottom: 1px solid #bcbcd2;
  padding-top: 4%;
}

form{
  padding-bottom: 2.5vh;
}

label{
  padding-left: 2.5%;
  font-size: 2.4em;
}

h3 {
  font-size: 2.8em;
  font-weight: 400;
}

input{
  appearance: none;
}

input[type='radio'] {
  position: relative;
  display: inline-block;
  width: 3.5rem;
  height: 3.5rem;
  margin: 0 auto;
  border-radius: 3rem;
  background: none;
}

input[type='radio']::after{
  content: '';
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-radius: 3rem;
  border: solid 6px #fff;
  background: #fff;
  z-index: 1;
}

input[type='radio']::before{
  position: absolute;
  content: '';
  right: .375rem;
  bottom: .375rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 3rem;
  background: #939393;
}

input[type='radio']:checked{
  width: 3.5rem;
  height: 3.5rem;
  border: none;
}

input[type='radio']:checked::after{
  content: '';
  position: absolute;
  width: 2rem;
  height: 2rem;
  border: solid 6px #fff;
  background: #3C8BFF;
  z-index: 1;
}

input[type='radio']:checked::before{
  position: absolute;
  content: '';
  right: .375rem;
  bottom: .375rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 3rem;
  background: #3C8BFF;
}
</style>