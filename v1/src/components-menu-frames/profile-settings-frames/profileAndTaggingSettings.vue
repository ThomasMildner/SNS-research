<script>
import menuItem from '../../components-menu-props/menuItem.vue'
import menuTitle from '../../components-menu-props/menuTitle.vue'

export default {
  name: "profileAndTaggingSettings",
  components: {
    menuItem,
    menuTitle
  },
  data: function() {
    return {
      header: 'Profile and tagging',
      viewingTaggingItems: [
        {itemId:'profile-and-tagging-who-can-post', itemName: "Who can post on your profile?", itemChild: 'ExtendedPrivacySettings'},
        {itemId:'profile-and-tagging-who-can-see', itemName: "Who can see what others post on your profile?", itemChild: 'ExtendedPrivacySettings'},
        {itemId:'profile-and-tagging-allow-others-to-share', itemName: "Allow others to share your posts to their story?", itemChild: 'ExtendedPrivacySettings'},
      ],
      taggingItems: [
        {itemId:'profile-and-tagging-who-can-see-tagged-posts', itemName: "Who can see posts that you're tagged in on your profile", itemChild: 'ExtendedPrivacySettings'},
        {itemId:'profile-and-tagging-who-to-add-to-audience', itemName: "When you're tagged in a post, who do you want to add to the audience of the post if they can't already see it?", itemChild: 'ExtendedPrivacySettings'},
        {itemId:'profile-and-tagging-share-posts', itemName: "Share your posts with your tagged friends in chat", itemChild: 'ExtendedPrivacySettings'}, // Facebook refers to their Messenger app here.
      ],
      reviewingItems: [
        {itemId:'profile-and-tagging-review-tags', itemName: "Review tags that people add to your posts before the tags appear on Facebook?", itemChild: 'ExtendedPrivacySettings'},
        {itemId:'profile-and-tagging-review-posts', itemName: "Review posts that you're tagged in before the post appears on your profile", itemChild: 'ExtendedPrivacySettings'},
      ],
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <h3>Viewing and sharing</h3>
  <menu-item class="item"
             v-for="item in viewingTaggingItems"
             :item-id="item.itemId"
             :item-name="item.itemName"
             @click="$router.push({name:'Extended Privacy Settings', params: {title: item.itemName}})">
  ></menu-item>

  <h3>Tagging</h3>
  <menu-item class="item"
             v-for="item in taggingItems"
             :item-id="item.itemId"
             :item-name="item.itemName"
             @click="$router.push({name:'Extended Privacy Settings', params: {title: item.itemName}})">
    ></menu-item>

  <h3>Reviewing</h3>
  <menu-item class="item"
             v-for="item in reviewingItems"
             :item-id="item.itemId"
             :item-name="item.itemName"
             @click="$router.push({name:'Extended Privacy Settings', params: {title: item.itemName}})">
    ></menu-item>
</div>
</template>

<style scoped>
h3{
  font-size: 2em;
  font-weight: 600;
  font-family: Poppins;
  padding-left: 2%;
}

.item {
  min-height: 7vh;
  height: min-content;
  width: inherit;
  border-bottom: 1px solid #bcbcd2;
}
</style>