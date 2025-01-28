<script>
import menuTitle from '../../components-menu-props/menuTitle.vue'
import menuItem from '../../components-menu-props/menuItem.vue'
export default {
  name: 'accessPreferences',
  components: {
    menuTitle,
    menuItem
  },
  data: function () {
    return {
      header: 'Preferences',
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <h2>Feed</h2>
    <menu-item item-id="access-preferences-favourites"
               item-name="Favourites"
               @click="$router.push('MissingFeature')"
               class="item"
    ></menu-item>
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

.item {
  height: min-content;
}

</style>