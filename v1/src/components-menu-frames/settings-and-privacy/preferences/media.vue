<script>
import menuTitle from "../../../components-menu-props/menuTitle.vue";
import menuItem from "../../../components-menu-props/menuItem.vue";
import menuSlider from "../../../components-menu-props/menuItemWithSlider.vue";
import multiRadios from "../../../components-menu-props/menuMultiRadioItem.vue";

export default {
  name: "personalAccountInfo",
  components: {
    menuTitle,
    menuItem,
    menuSlider,
    multiRadios
  },
  data: function () {
    return {
      header: 'Videos and photos',
      videoQualityRadioName: 'quality',
      videoQualityRadioItems: [
        {itemId: 'media-settings-quality-optimised', itemName: 'Optimised'},
        {itemId: 'media-settings-quality-saving', itemName: 'Data saver'},
      ],
      autoplayRadioName: 'autoplay',
      autoplayRadioItems: [
        {itemId: 'media-settings-autoplay-data-wifi', itemName: 'On mobile data and Wi-Fo'},
        {itemId: 'media-settings-autoplay-wifi', itemName: 'On Wi-Fi- only'},
        {itemId: 'media-settings-autoplay-never', itemName: 'Never autoplay videos'},
      ],
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <h2>Sounds</h2>
    <menu-slider item-name="In-app sound"
                 item-id="media-settings-sounds-slider"
    ></menu-slider>
    <hr>
    <h2>Video quality</h2>
    <multi-radios :radio-items="videoQualityRadioItems"
                  :radio-name="videoQualityRadioName"
    ></multi-radios>
    <hr>
    <h2>Autoplay</h2>
    <multi-radios :radio-items="autoplayRadioItems"
                  :radio-name="autoplayRadioName"
    ></multi-radios>
    <menu-slider item-name="Videos start with sound"
                 item-id="media-settings-autoplay-slider-videos"
    ></menu-slider>
    <menu-slider item-name="Stories start with sound"
                 item-id="media-settings-autoplay-slider-stories"
    ></menu-slider>
    <hr>
    <h2>Video and photo settings</h2>
    <menu-slider item-name="Reduce 3D photo motion"
                 item-id="media-settings-video-photo-slider"
    ></menu-slider>
    <br>
  </div>
</div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}

</style>