<script>
import menuTitle from "../../../components-menu-props/menuTitle.vue";
import multiRadios from "../../../components-menu-props/menuMultiRadioItem.vue";
export default {
  name: "reels",
  components: {
    menuTitle,
    multiRadios,
  },
  data: function () {
    return {
      header: 'Reels',
      radioRemixName: 'remix',
      radioRemixItems: [
        {itemId: 'reels-radio-allow-remix-yes', itemName: 'Yes'},
        {itemId: 'reels-radio-allow-remix-no', itemName: 'No'},
      ],
      radioStoriesName: 'stories',
      radioStoriesItems: [
        {itemId: 'reels-radio-stories-yes', itemName: 'Yes'},
        {itemId: 'reels-radio-stories-no', itemName: 'No'},
      ],
      radioDefaultAudienceName: 'audience',
      radioDefaultAudienceItems: [
        {itemId: 'reels-radio-default-audience-public', itemName: 'Public'},
        {itemId: 'reels-radio-default-audience-friends', itemName: 'Friends'},
        {itemId: 'reels-radio-default-audience-friends-except', itemName: 'Friends except…'},
      ],
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <h2>Allow anyone to remix your future public reels?</h2>
    <multi-radios :radio-items="radioRemixItems"
                  :radio-name="radioRemixName"
    ></multi-radios>

    <h2>Allow others to share your reels to their stories?</h2>
    <multi-radios :radio-items="radioRemixItems"
                  :radio-name="radioRemixName"
    ></multi-radios>

    <h2>Reels default audience</h2>
    <multi-radios :radio-items="radioDefaultAudienceItems"
                  :radio-name="radioDefaultAudienceName"
    ></multi-radios>

  </div>
</div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}
</style>