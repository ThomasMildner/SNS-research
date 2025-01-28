<script>
import menuTitle from "../../components-menu-props/menuTitle.vue";
import menuItem from "../../components-menu-props/menuItem.vue";

export default {
  name: "beforeDeleteAccount",
  components: {
    menuTitle,
    menuItem
  },
  methods:{
  },
  data: function () {
    return {
      reasonItems: [
        {itemId: 'before-account-deletion-time', itemName: 'I spend too much time here.', itemChild: 'MissingFeature'},
        {itemId: 'before-account-deletion-privacy', itemName: 'I have privacy concerns.', itemChild: 'MissingFeature'},
        {itemId: 'before-account-deletion-safe', itemName: "I don't feel safe here.", itemChild: 'MissingFeature'}, // Facebook reference
        {itemId: 'before-account-deletion-hacked', itemName: 'My account was hacked.', itemChild: 'MissingFeature'},
        {itemId: 'before-account-deletion-useful', itemName: 'I no longer find this app useful.', itemChild: 'MissingFeature'}, // Facebook reference
      ]
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title></menu-title>
  <div class="frame-inner">
    <h2>Before you delete, we may be able to help</h2>
    <p>We're sorry to see you leave. We'd love to know why you're deleting your account, as we may be able to help with common issues. You can also just continue to deletion.</p>
    <br>
    <menu-item class="item"
               v-for="item in reasonItems"
               :item-id="item.itemId"
               :item-name="item.itemName"
               @click="$router.push(item.itemChild)"
    ></menu-item>
  </div>
  <br>
  <div class="frame-outer">
    <br>
    <button class="content-button"
            @click="$router.push('ContinueDeleteAccount')"
    >Continue to account deletion</button>
    <br>
    <br>
    <button class="content-button gray-button">Cancel</button>
  </div>
</div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}

.frame-outer{
  background: #e3e3e3;
  padding-bottom: 3vh;
  padding-top: 1vh;
}

.content-button {
  width: 95%;
  background: #3C8BFF;
  left: 2.5%;
}

.content-button:active {
  background: #0c56c9;
}

.gray-button{
  background: #f9f9ff;
  color: #282828;
  border: 1px solid #939393;
}

.gray-button:active{
  background: #939393;
}

.item{
  height: min-content;
  border-bottom: solid 1px #939393;
}
</style>