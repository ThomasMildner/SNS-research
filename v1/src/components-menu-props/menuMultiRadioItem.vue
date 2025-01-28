<script>
export default {
  name: 'MultiRadioMenuItem',

  props: {
    multiRadioTitle: String,
    radioName: String,
    radioItems: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    }
  },
  data: function() {
    return {
      isActive: false,
    }
  }
}
</script>

<template>
  <form>
    <h3>{{multiRadioTitle}}</h3>
    <div class="multiRadioWrapper"
        v-for="item in this.radioItems"
    >
      <label :for="item.itemId">{{item.itemName}}</label>
      <input type="radio"
             :id="item.itemId"
             :name="radioName"
             class="path-node"
     >

      <br>
    </div>
  </form>
</template>


<style scoped>
form{
  padding-bottom: 2.5vh;
}

.multiRadioWrapper{
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  border-bottom: 1px solid #bcbcd2;
  padding-top: 4%;
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