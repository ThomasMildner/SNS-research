<script>
export default {
  name: 'bulletMenuItem',

  props: {
    itemName: String,
    itemId: String,
  },
  methods: {
    toggleBullet() {
      this.isActive = !this.isActive
    }
  },
  data: function(){
    return{
      isActive: false,
    }
  }
}
</script>

<template>
  <div
      @click=toggleBullet()
      :id="itemId"
      style="text-decoration: none; color: inherit;"
      class="menu-item path-node">
    <h3>{{itemName}}</h3>
    <div
        class="item-bullet"
        v-bind:style='{"border" : (isActive? "solid 6px #3C8BFF" : "solid 6px  #bcbcd2" )}'>
      <div
          class="item-bullet-inner"
          v-bind:style='{"display" : (isActive? "inline-block" : "none")}'></div>
    </div>
  </div>
</template>

<style scoped>
.menu-item {
  display: grid;
  grid-template-columns: 5fr 1fr;
  width: 100%;
  height: 5vh;
}
.menu-item:hover {
  background-color: #f6f6f6;
}
.menu-item img {
  height: 3em;
  float: right;
  margin: 0 auto;
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

.item-bullet{
  width: 2.5em;
  height: 2.5em;
  border: solid 6px #3C8BFF;
  border-radius: 8em;
  align-self: center;
  display: flex;
}

.item-bullet-inner{
  align-self: center;
  margin: 0 auto;
  width: 1.7em;
  height: 1.7em;
  border-radius: 1.7em;
  background: #3C8BFF;
}
</style>