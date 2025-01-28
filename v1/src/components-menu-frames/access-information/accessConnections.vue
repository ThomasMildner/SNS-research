<script>
import menuTitle from '../../components-menu-props/menuTitle.vue'
import menuItem from '../../components-menu-props/menuItem.vue'
export default {
  name: 'accessConnections',
  components: {
    menuTitle,
    menuItem
  },
  methods: {
    toggleVisibilityFriends() {
      if (this.seeMoreFriends) {
        this.itemWrapperStateFriends = 'See more'
        this.seeMoreFriends = false;
      } else {
        this.itemWrapperStateFriends = 'See less'
        this.seeMoreFriends = true;
      }
    },
  },
  data: function () {
    return {
      header: 'Connections',
      seeMoreFriends: false,
      itemWrapperStateFriends: 'See more',
      activityConnectionsFriendsItems: [
        {itemId: 'access-information-connections-requests-sent', itemName: 'Friend requests sent', itemChild: 'ActivityLog'},
        {itemId: 'access-information-connections-requests-received', itemName: 'Friend requests received', itemChild: 'ActivityLog'},
        {itemId: 'access-information-connections-removed-friends', itemName: 'Removed friends', itemChild: 'ActivityLog'},
        {itemId: 'access-information-connections-following', itemName: 'Who you follow', itemChild: 'ActivityLog'},
        {itemId: 'access-information-connections-follower', itemName: 'People who follow you', itemChild: 'ActivityLog'},
      ],
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <h2>Friends and followers</h2>
    <menu-item item-name="Friends"
               class="item"
               item-id="access-activity-connections-friends"
               @click="$router.push('ActivityLog')"
    ></menu-item>
    <menu-item v-show="this.seeMoreFriends"
               class="item"
               v-for="item in activityConnectionsFriendsItems"
               :item-name="item.itemName"
               :item-id="item.itemId"
               @click="$router.push(item.itemChild)"
    ></menu-item>
    <br>
    <button id="access-activity-connections-button"
            class="content-button gray-button"
            @click="toggleVisibilityFriends()">
      {{ itemWrapperStateFriends }}</button>
    <br>
  </div>
</div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}

ul{
  list-style: none;
}

p{
  line-height: 1.4em;
}

.item {
  height: min-content;
  width: 100%;
  margin: 0 auto;
  border-bottom: solid 1px #939393;
}


.content-button {
  width: 40%;
  justify-self: end;
  align-self: center;
}

.gray-button{
  width: 95%;
  left: 2.5%;
  background: #e3e3e3;
  color: #2c3e50;
}

.gray-button:active{
  background: #bcbcd2;
}
</style>