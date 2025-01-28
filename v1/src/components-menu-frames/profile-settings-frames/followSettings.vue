<script>
import menuTitle from '../../components-menu-props/menuTitle.vue'
import menuBulletItem from '../../components-menu-props/menuSingleRadioItem.vue'
import menuMultiRadioItem from '../../components-menu-props/menuMultiRadioItem.vue'
import menuItem from '../../components-menu-props/menuItem.vue'
import menuSlider from '../../components-menu-props/menuItemWithSlider.vue'

export default {
  name: "followSettings",
  components: {
    menuItem,
    menuTitle,
    menuBulletItem,
    menuMultiRadioItem,
    menuSlider
  },
  data: function(){
    return {
      extendedSettingsTitle: 'Who can see the people, Pages and lists you follow?',
      followRadioTitle: 'Who can follow me?',
      followRadioName: 'follow',
      followRadioItems: [
        {itemId: 'follow-settings-bullet-follow-public', itemName: 'Public'},
        {itemId: 'follow-settings-bullet-follow-friends', itemName: 'Friends'}
      ],
      postItemsTitle: 'Public post comments',
      postItemName: 'comments',
      postItems: [
        {itemId: 'follow-settings-bullet-comments-public', itemName: 'Public'},
        {itemId: 'follow-settings-bullet-comments-friends-of-friends', itemName: 'Friends of friends'},
        {itemId: 'follow-settings-bullet-comments-friends', itemName: 'Friends'},
      ],
      notificationItemsTitle: 'Public post notification',
      notificationName: 'notification',
      notificationItems: [
        {itemId: 'follow-settings-bullet-notification-everyone', itemName: 'Everyone'},
        {itemId: 'follow-settings-bullet-notification-friends-of-friends', itemName: 'Friends of friends'},
        {itemId: 'follow-settings-bullet-notification-no-one', itemName: 'No one'},
      ],
    }
  }
}
</script>

<template>
  <div class="menu-frame-wrapper">
    <menuTitle></menuTitle>
    <div class="follow-settings-content">
      <h2>Followers and public content</h2>
      <menu-multi-radio-item :radioItems="followRadioItems"
                               :multiRadioTitle="followRadioTitle"
                               :radioName="followRadioName"
      ></menu-multi-radio-item>
      <menuItem class="menuItem path-node"
                :item-name="this.extendedSettingsTitle"
                item-id="follow-settings-item-people-selection"
                @click="$router.push({name:'Extended Privacy Settings', params: {title: extendedSettingsTitle}})"
      ></menuItem>
      <menu-multi-radio-item :radioItems="postItems"
                             :multiRadioTitle="postItemsTitle"
                             :radioName="postItemName"
      ></menu-multi-radio-item>

      <menu-multi-radio-item :radioItems="notificationItems"
                             :multiRadioTitle="notificationItemsTitle"
                             :radioName="notificationName"
      ></menu-multi-radio-item>
      <menu-slider item-id="follow-settings-slider-comment-ranking"
                   item-name="Comment ranking"
      ></menu-slider>
      <menu-slider item-id="follow-settings-slider-off-app-previews"
                   item-name="Off-app previews"
      ></menu-slider>
      <br>
      <br>
    </div>
  </div>
</template>

<style scoped>
.follow-settings-content {
  width: 95vw;
  margin: 0 auto;
}

p{
  font-size: 1.2em;
}

.menuItem {
  width: 100%;
  height: auto;
}

</style>