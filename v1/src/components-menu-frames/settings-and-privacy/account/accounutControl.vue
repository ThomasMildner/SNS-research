<script>
import menuTitle from "../../../components-menu-props/menuTitle.vue";
import menuItem from "../../../components-menu-props/menuItem.vue";
export default {
  name: "accountControl",
  components: {
    menuTitle,
    menuItem
  },
  data: function () {
    return {
      accountInfoItems: [
        {itemId: 'account-control-memorialisation', itemName: 'Memorialisation settings', itemChild: 'MissingFeature'},
        {itemId: 'account-control-deactivation-deletion', itemName: 'Deactivation and deletion', itemChild: 'DeleteAccount'},
      ]
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title></menu-title>
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