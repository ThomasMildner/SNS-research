<script>
import menuTitle from "../../../components-menu-props/menuTitle.vue";
import menuItem from "../../../components-menu-props/menuItem.vue";
export default {
  name: "Stories",
  components: {
    menuTitle,
    menuItem
  },
  data: function () {
    return {
      header: 'Stories',
      storiesItems: [
        {itemId: 'stories-items-privacy', itemName: 'Story privacy', itemChild: 'ExtendedPrivacySettings Story Privacy'},
        {itemId: 'stories-items-sharing', itemName: 'Sharing options', itemChild: 'StoriesSharingOptions'},
        {itemId: 'stories-items-archive', itemName: 'Story archive', itemChild: 'StoryArchive'},
        {itemId: 'stories-items-muted', itemName: "Stories you've muted", itemChild: 'MissingFeature'},
      ],
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <h2>Choose who can see your stories, and manage your story archive.</h2>
    <br>
    <menu-item class="item"
               v-for="item in storiesItems"
               :item-name="item.itemName"
               :item-id="item.itemId"
               @click="$router.push(item.itemChild)"
    ></menu-item>
  </div>
</div>
</template>

<style scoped>
.frame-inner{
  width: 95%;
  margin: 0 auto;
}

h2{
  text-align: center;
}

.item {
  height: min-content;
  border-bottom: solid 1px #bcbcd2;
}
</style>