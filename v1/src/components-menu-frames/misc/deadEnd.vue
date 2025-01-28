<script>
import menuTitle from '../../components-menu-props/menuTitle.vue'

export default {
  name: "deadEnd",
  components: {
    menuTitle
  },
  data: function(){
    return {
      title: 'Missing Feature'
    }
  }
}
</script>

<template>
  <div class="menu-frame-wrapper">
    <menuTitle :headerTitle="this.title"></menuTitle>
    <div id="deadEndContent">
      <div class="deadEndInner">
        <h3>Sorry, this still feature is under construction.</h3>
        <p>This does not limit this study as we only defined tasks that are fully achievable. This means that you can continue looking elsewhere.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

#deadEndContent{
  height: fit-content;
  width: 80%;
  margin: 20% auto;
  padding-bottom: 10%;
  border-radius: 20px;
  border: solid 8px #3C8BFF;
}

.deadEndInner{
  width: 90%;
  height: 80%;
  margin: 20% auto 0;
}

.deadEndInner h3{
  font-size: 3em;
  line-height: 1.2em;
}

.deadEndInner p{
  line-height: 1.4em;
}

</style>