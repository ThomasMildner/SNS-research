<script>
import menuTitle from '../../components-menu-props/menuTitle.vue'
import menuItem from '../../components-menu-props/menuItem.vue'
export default {
  name: 'accessLoggedInformation',
  components: {
    menuTitle,
    menuItem
  },
  methods: {
    toggleVisibilitySearch() {
      if (this.seeMoreSearch) {
        this.itemWrapperStateSearch = 'See more'
        this.seeMoreSearch = false;
      } else {
        this.itemWrapperStateSearch = 'See less'
        this.seeMoreSearch = true;
      }
    },
  },
  data: function () {
    return {
      seeMoreSearch: false,
      itemWrapperStateSearch: 'See more',
      header: 'Logged information',
      activitySearchItems: [
        {itemId: 'access-activity-logged-info--search-videos', itemName: "Videos you've searched for", itemChild: 'ActivityLog'},
        {itemId: 'access-activity-logged-info-search-voice', itemName: 'Voice search history', itemChild: 'ActivityLog'},
        {itemId: 'access-activity-logged-info-words', itemName: 'Words and phrases you searched for in Comments Manager', itemChild: 'ActivityLog'},
      ]
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <h2>Friend peer group</h2>
    <menu-item item-name="Friend peer group"
               class="item"
               item-id="access-activity-logged-info-fiend-peers"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <br>
    <h2>Search</h2>
    <menu-item item-name="Your search history"
               class="item"
               item-id="access-activity-logged-info-search-history"
               @click="$router.push('ActivityLog')"
    ></menu-item>
    <menu-item v-show="this.seeMoreSearch"
               class="item"
               v-for="item in activitySearchItems"
               :item-name="item.itemName"
               :item-id="item.itemId"
               @click="$router.push(item.itemChild)"
    ></menu-item>
    <br>
    <button id="access-activity-connections-button"
            class="content-button gray-button"
            @click="toggleVisibilitySearch()">
      {{ itemWrapperStateSearch}}</button>
    <br>
    <br>
    <h2>Location</h2>
    <menu-item item-name="Primary location"
               class="item"
               item-id="access-activity-logged-info-primary-location"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <br>
    <h2>Ads interests</h2>
    <menu-item item-name="Ads interests"
               class="item"
               item-id="access-activity-logged-info-ads-interests"
               @click="$router.push('AdsInterestCategories')"
    ></menu-item>
    <br>
    <h2>News</h2> <!-- Facebook reference -->
    <menu-item item-name="See less like this"
               class="item"
               item-id="access-activity-logged-info-news-less"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <menu-item item-name="See more like this"
               class="item"
               item-id="access-activity-logged-info-news-more"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <br>
    <h2>Privacy Checkup</h2>
    <menu-item item-name="Updates you've seen"
               class="item"
               item-id="access-activity-logged-info-privacy-checkup-updates"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <menu-item item-name="Interactions"
               class="item"
               item-id="access-activity-logged-info-privacy-checkup-interactions"
               @click="$router.push('ActivityLog')"
    ></menu-item>
    <menu-item item-name="Reminders"
               class="item"
               item-id="access-activity-logged-info-privacy-checkup-reminders"
               @click="$router.push('ActivityLog')"
    ></menu-item>
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