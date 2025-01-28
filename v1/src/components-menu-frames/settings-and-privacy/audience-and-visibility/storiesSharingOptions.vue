<script>
import menuTitle from "../../../components-menu-props/menuTitle.vue";
import radioItems from "../../../components-menu-props/menuMultiRadioItem.vue";
export default {
  name: "Stories",
  components: {
    menuTitle,
    radioItems
  },
  data: function () {
    return {
      radioName: 'sharing',
      sharingRadioOptions: [
        {itemId: 'stories-sharing-allow', itemName: 'Allow'},
        {itemId: 'stories-sharing-do-not-allow', itemName: "Don't allow"},
      ],
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title></menu-title>
  <div class="frame-inner">
    <h2>Sharing Options</h2>
    <h2>Allow others to share your public stories to their own story?</h2>
    <br>
    <radio-items :radio-items="sharingRadioOptions"
                 :radio-name="radioName"
    ></radio-items>
  </div>
</div>
</template>

<style scoped>
.frame-inner{
  width: 95%;
  margin: 0 auto;
}


.item {
  height: min-content;
  border-bottom: solid 1px #bcbcd2;
}
</style>