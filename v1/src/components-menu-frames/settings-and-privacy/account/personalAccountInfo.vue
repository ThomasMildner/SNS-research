<script>
import menuTitle from "../../../components-menu-props/menuTitle.vue";
import menuItem from "../../../components-menu-props/menuItem.vue";
export default {
  name: "personalAccountInfo",
  components: {
    menuTitle,
    menuItem
  },
  data: function () {
    return {
      header: 'Personal and account information',
      accountInfoItems: [
        {itemId: 'personal-account-info-name', itemName: 'Name', itemChild: 'MissingFeature'},
        {itemId: 'personal-account-info-contact', itemName: 'Contact info', itemChild: 'MissingFeature'},
        {itemId: 'personal-account-info-identity', itemName: 'Identity confirmation', itemChild: 'MissingFeature'},
        {itemId: 'personal-account-info-ownership', itemName: 'Account ownership and control', itemChild: 'AccountControl'},
      ]
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <menu-item class="item"
               v-for="item in accountInfoItems"
               :item-id="item.itemId"
               :item-name="item.itemName"
               @click="$router.push(item.itemChild)"
    ></menu-item>
  </div>
</div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}

.item {
  border-bottom: solid 1px #bcbcd2;
  height: min-content;
}
</style>