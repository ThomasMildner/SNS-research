<script>
import menuTitle from "../../../components-menu-props/menuTitle.vue";
import menuSlider from "../../../components-menu-props/menuItemWithSlider.vue";
export default {
  name: "uploadContacts",
  components: {
    menuTitle,
    menuSlider
  },
  data: function () {
    return {
      header: 'Upload Contacts'
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <p>Automatically upload new and updated contacts</p>
    <menu-slider item-id="upload-contacts-slider"
                 item-name="Upload contacts"
    ></menu-slider>

  </div>
</div>
</template>

<style scoped>

.frame-inner{
  width: 95%;
  height: 100%;
  margin: 0 auto;
}
.frame-inner p {
  text-transform: uppercase;
  color: #bcbcd2;
}
</style>