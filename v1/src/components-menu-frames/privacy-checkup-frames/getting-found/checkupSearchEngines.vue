<script>
import menuTitle from '../../../components-menu-props/menuTitle.vue'
import menuItemWithSlider from '../../../components-menu-props/menuItemWithSlider.vue'
export default {
  name: 'checkupSearchEngines',
  components: {
    menuTitle,
    menuItemWithSlider,
  },
  data: function () {
    return {
      isActive: false,
      header: 'Search engines',
      alertItems: [
        {itemId: 'privacy-checkup-finding-outside-app', itemName: 'Do you want search engines to link to your profile?'}, // App: Facebook reference
      ]
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <p>Search engines (such as Google) can link to your profile to help people find you more easily.</p>
    <p>If you turn this off, your profile can still be found in the app if people search for your name.</p>
    <br>
    <div class="alert-items-wrapper goal-node" id="t4">
      <!--:id="item.itemId" replaced by t4-->
      <menu-item-with-slider class="alert-item path-node goal-node"
                             v-for="item in alertItems"
                             item-id="t4"
                             item-class="goal-item"
                             :item-name="item.itemName"
      ></menu-item-with-slider>
    </div>
    <div class="bottom-nav">
      <div class="bottom-nav-progress">
        <div class="bottom-nav-progress-circ"></div>
        <div class="bottom-nav-progress-circ"></div>
        <div class="bottom-nav-progress-circ active"></div>
      </div>
      <button @click="$router.push('CheckupFindingEnding')"
              id="privacy-checkup-finding-search-engines-next-button"
              class="content-button path-node">Next</button>
    </div>
  </div>
</div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}

ul{
  list-style: none;
}

p{
  line-height: 1.4em;
}

.alert-item{
  border-bottom: solid 1px #939393;
  height: 5vh;
  padding-bottom: 2vh;
}

.bottom-nav{
  top: 8vh;
  border-top: solid 1px #939393;
  position: relative;
  width: 98%;
  height: 10vh;
  margin: 0 auto;
  display: grid;
  z-index: 1;
  grid-template-columns: 1fr 3fr;
}

.bottom-nav-progress {
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-self: center;
}

.bottom-nav-progress-circ {
  height: 2rem;
  width: 2rem;
  border-radius: 3rem;
  background: #e3e3e3;
}

.active{
  background: #3C8BFF;
}

.content-button {
  width: 40%;
  justify-self: end;
  align-self: center;
  background: #3C8BFF;
  color: #ffffff;
}

.content-button:active{
  background: #0c56c9;
}

</style>