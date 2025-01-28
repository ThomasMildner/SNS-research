<script>
import menuItem from './menuItem.vue';
export default {
  name: 'menuItemHorizontalList',
  components:{
  },
  props: {
    scrollItems: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class='horizontal-item-scroller'>
    <div class="scroll-item"
         v-for="item in this.scrollItems"
         @click="$router.push(item.itemChild);">
    <p>{{item.itemName}}</p>
    </div>
  </div>
</template>

<style scoped>
.horizontal-item-scroller{
  width: 100%;
  height: 6vh;
  display: flex;;
  overflow-x: scroll;
  padding-top: 2%;
  padding-bottom: 2%;
  border-bottom: 1px solid #bcbcd2;
}
.scroll-item{
  align-self: center;
  width: fit-content;
  height: 4vh;
  background-color: #e0e0e0;
  border-radius: 50px;
  padding-left: 2%;
  padding-right: 2%;
  margin-right: 1%;
  margin-left: 1%;
  flex-shrink: 0;
}

.scroll-item:active{
  background: #bcbcd2;
}

.scroll-item p{
  margin-top: 1vh;
  color: #282828;
}
</style>