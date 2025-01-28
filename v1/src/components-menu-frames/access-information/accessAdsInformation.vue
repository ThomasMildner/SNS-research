<script>
import menuTitle from '../../components-menu-props/menuTitle.vue'
import menuItem from '../../components-menu-props/menuItem.vue'
export default {
  name: 'accessAdsInformation',
  components: {
    menuTitle,
    menuItem
  },
  data: function () {
    return {
      header: 'Ads Information',
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <menu-item class="item"
               item-name="Advertisers using your activity or information"
               itme-id="access-ad-info-advertisers-using-activity"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <menu-item class="item"
               item-name="Advertisers you've interacted with"
               itme-id="access-ad-info-advertisers-interacted-with"
               @click="$router.push('AdPreferences')"
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
  border-bottom: 1px solid #bcbcd2;
}
</style>