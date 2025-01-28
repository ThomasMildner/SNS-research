<script>
import menuTitle from '../../components-menu-props/menuTitle.vue'
import menuItem from '../../components-menu-props/menuItem.vue'
export default {
  name: 'accessActivityAcrossApp',
  components: {
    menuTitle,
    menuItem
  },
  methods: {
    toggleVisibilityPosts() {
      if (this.seeMorePosts) {
        this.itemWrapperStatePosts = 'See more'
        this.seeMorePosts = false;
      } else {
        this.itemWrapperStatePosts = 'See less'
        this.seeMorePosts = true;
      }
    },
    toggleVisibilityGroups() {
      if (this.seeMoreGroups) {
        this.itemWrapperStateGroups = 'See more'
        this.seeMoreGroups = false;
      } else {
        this.itemWrapperStateGroups = 'See less'
        this.seeMoreGroups = true;
      }
    },
    toggleVisibilityEvents() {
      if (this.seeMoreEvents) {
        this.itemWrapperStateEvents = 'See more'
        this.seeMoreEvents = false;
      } else {
        this.itemWrapperStateEvents = 'See less'
        this.seeMoreEvents = true;
      }
    },
    toggleVisibilityMarket() {
      if (this.seeMoreMarket) {
        this.itemWrapperStateMarket = 'See more'
        this.seeMoreMarket = false;
      } else {
        this.itemWrapperStateMarket = 'See less'
        this.seeMoreMarket = true;
      }
    },
    toggleVisibilityReels() {
      if (this.seeMoreReels) {
        this.itemWrapperStateReels = 'See more'
        this.seeMoreReels = false;
      } else {
        this.itemWrapperStateReels = 'See less'
        this.seeMoreReels = true;
      }
    },
    toggleVisibilityCommunity() {
      if (this.seeMoreCommunity) {
        this.itemWrapperStateCommunity = 'See more'
        this.seeMoreCommunity = false;
      } else {
        this.itemWrapperStateCommunity = 'See less'
        this.seeMoreCommunity = true;
      }
    },
  },
  data: function () {
    return {
      header: 'Your activity across this app',
      seeMorePosts: false,
      seeMoreGroups: false,
      seeMoreEvents: false,
      seeMoreMarket: false,
      seeMoreReels: false,
      seeMoreCommunity: false,
      itemWrapperStatePosts: 'See more',
      itemWrapperStateGroups: 'See more',
      itemWrapperStateEvents: 'See more',
      itemWrapperStateMarket: 'See more',
      itemWrapperStateReels: 'See more',
      itemWrapperStateCommunity: 'See more',
      activityPostsItems: [
        {itemId: 'access-activity-posts-tagged-activity', itemName: "Activity you're tagged in", itemChild: 'ActivityLog'},
        {itemId: 'access-activity-posts-other-posts', itemName: "Other people's posts on your timeline", itemChild: 'ActivityLog'},
        {itemId: 'access-activity-posts-hidden-posts', itemName: 'Posts hidden from your timeline', itemChild: 'ActivityLog'},
        {itemId: 'access-activity-posts-photos', itemName: 'Your photos', itemChild: 'ActivityLog'},
        {itemId: 'access-activity-posts-tagged-photos-and-videos', itemName: "Photos and videos you're tagged in", itemChild: 'ActivityLog'},
        {itemId: 'access-activity-posts-videos', itemName: 'Your videos', itemChild: 'ActivityLog'},
        {itemId: 'access-activity-posts-watched-videos', itemName: "Videos you've watched", itemChild: 'ActivityLog'},
        {itemId: 'access-activity-posts-news', itemName: "News articles you've opened", itemChild: 'ActivityLog'},
        {itemId: 'access-activity-posts-archive', itemName: 'Archive', itemChild: 'Archive'},
        {itemId: 'access-activity-posts-recycle-bin', itemName: 'Recycle Bin', itemChild: 'RecyclingBin'},
      ],
      activityCommentsItems:[
        {itemId: 'access-activity-comments-comments', itemName: 'Comments', itemChild: 'Activity Log'},
        {itemId: 'access-activity-comments-posts', itemName: 'Posts and comments', itemChild: 'Activity Log'},
      ],
      activityGroupsItems:[
        {itemId: 'access-activity-groups-membership-activity', itemName: 'Your group membership activity', itemChild: 'ActivityLog'},
        {itemId: 'access-activity-groups-posts', itemName: 'Your posts in groups', itemChild: 'ActivityLog'},
        {itemId: 'access-activity-groups-member-profiles', itemName: 'Your group member profiles', itemChild: 'ActivityLog'},
        {itemId: 'access-activity-groups-interests', itemName: 'Your group interests', itemChild: 'ActivityLog'},
        {itemId: 'access-activity-groups-awards', itemName: "Awards you've given", itemChild: 'ActivityLog'},
        {itemId: 'access-activity-groups-feedback', itemName: 'Your group feedback from admins', itemChild: 'ActivityLog'},
        {itemId: 'access-activity-groups-warnings', itemName: 'Your warnings', itemChild: 'ActivityLog'},
        {itemId: 'access-activity-groups-challenges', itemName: 'Your challenges', itemChild: 'ActivityLog'},
        {itemId: 'access-activity-groups-custom-email', itemName: 'Your custom email address for community emails', itemChild: 'ActivityLog'},
      ],
      activityEventsItems: [
        {itemId: 'access-activity-events-responses', itemName: 'Your event responses', itemChild: 'ActivityLog'},
        {itemId: 'access-activity-events-invitations', itemName: 'Event invitations', itemChild: 'ActivityLog'},
        {itemId: 'access-activity-events-hidden', itemName: 'Events hidden', itemChild: 'ActivityLog'},
      ],
      activityMarketItems: [
        {itemId: 'access-activity-market-seller-response', itemName: 'Seller response', itemChild: 'ActivityLog'},
        {itemId: 'access-activity-market-ratings-given', itemName: "Marketplace ratings you've given", itemChild: 'ActivityLog'},
        {itemId: 'access-activity-market-business-info', itemName: 'Your dealership business information', itemChild: 'MissingFeature'},
        {itemId: 'access-activity-market-commerce-profile', itemName: 'Commerce profile', itemChild: 'MissingFeature'},
        {itemId: 'access-activity-market-verified-meetups', itemName: "Local meetups you've verified", itemChild: 'ActivityLog'},
      ],
      activityReelsItems: [
        {itemId: 'access-activity-market-saved-audio', itemName: 'Saved audio', itemChild: 'ActivityLog'},
        {itemId: 'access-activity-market-saved-effects', itemName: 'Saved effects', itemChild: 'ActivityLog'},
        {itemId: 'access-activity-market-search-history', itemName: 'Effect search history', itemChild: 'ActivityLog'},
      ],
      activityCommunityItems: [
        {itemId: 'access-activity-community-posts', itemName: 'Your posts in community profiles', itemChild: 'ActivityLog'},
        {itemId: 'access-activity-community-comments', itemName: 'Your comments in community profiles', itemChild: 'ActivityLog'},
        {itemId: 'access-activity-community-connection-activity', itemName: 'Your community profile connection activity', itemChild: 'ActivityLog'},
      ],
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <h2>Posts</h2>
    <br>
    <menu-item item-name="Your posts"
               class="item"
               item-id="access-activity-posts-your-posts"
               @click="$router.push('ActivityLog')"
    ></menu-item>
    <menu-item v-show="this.seeMoreEvents"
               class="item"
               v-for="item in activityEventsItems"
               :item-name="item.itemName"
               :item-id="item.itemId"
               @click="$router.push(item.itemChild)"
    ></menu-item>
    <div class="hidden-items"> </div>
    <br>
    <br>
    <button id="access-activity-posts-button"
            class="content-button gray-button"
            @click="toggleVisibilityPosts()">
      {{ itemWrapperStatePosts }}</button>
    <br>
    <br>
    <h2>Comments and reactions</h2>
    <menu-item class="item"
               v-for="item in activityCommentsItems"
               :item-name="item.itemName"
               :item-id="item.itemId"
               @click="$router.push(item.itemChild)"
    >
    </menu-item>
    <br>
    <h2>Messages</h2>
    <menu-item item-name="Your messages"
               class="item"
               item-id="access-activity-messages"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <br>
    <h2>Groups</h2>
    <menu-item item-name="Your groups"
               class="item"
               item-id="access-activity-groups-your-groups"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <menu-item v-show="this.seeMoreGroups"
               class="item"
               v-for="item in activityGroupsItems"
               :item-name="item.itemName"
               :item-id="item.itemId"
               @click="$router.push(item.itemChild)"
    ></menu-item>
    <br>
    <br>
    <button id="access-activity-groups-button"
            class="content-button gray-button"
            @click="toggleVisibilityGroups()">
      {{ itemWrapperStateGroups }}</button>
    <br>
    <br>
    <h2>Notes</h2>
    <menu-item item-name="Notes"
               class="item"
               item-id="access-activity-notes"
               @click="$router.push('ActivityLog')"
    ></menu-item>
    <br>
    <h2>Polls</h2>
    <menu-item item-name="Polls"
               class="item"
               item-id="access-activity-polls-polls"
               @click="$router.push('ActivityLog')"
    ></menu-item>
    <menu-item item-name="Polls that you voted on"
               class="item"
               item-id="access-activity-polls-voted"
               @click="$router.push('ActivityLog')"
    ></menu-item>
    <br>
    <h2>Saved items and collections</h2>
    <menu-item item-name="Saved items and collections"
               class="item"
               item-id="access-activity-saved-items-collections"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <br>
    <h2>Pokes</h2>
    <menu-item item-name="Pokes"
               class="item"
               item-id="access-activity-pokes"
               @click="$router.push('ActivityLog')"
    ></menu-item>
    <br>
    <h2>Events</h2>
    <menu-item item-name="Your events"
               class="item"
               item-id="access-activity-events-your-events"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <menu-item v-show="this.seeMoreEvents"
               class="item"
               v-for="item in activityEventsItems"
               :item-name="item.itemName"
               :item-id="item.itemId"
               @click="$router.push(item.itemChild)"
    ></menu-item>
    <br>
    <button id="access-activity-events-button"
            class="content-button gray-button"
            @click="toggleVisibilityEvents()">
      {{ itemWrapperStateEvents }}</button>
    <br>
    <br>
    <h2>Pages and profiles</h2>
    <menu-item item-name="Your pages and profiles"
               class="item"
               item-id="access-activity-pages-profiles"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <menu-item item-name="Pages you've liked"
               class="item"
               item-id="access-activity-pages-liked"
               @click="$router.push('ActivityLog')"
    ></menu-item>
    <br>
    <h2>Marketplace</h2> <!--Facebook reference-->
    <menu-item item-name="Items sold"
               class="item"
               item-id="access-activity-marketplace-items-sold"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <menu-item v-show="this.seeMoreMarket"
               class="item"
               v-for="item in activityMarketItems"
               :item-name="item.itemName"
               :item-id="item.itemId"
               @click="$router.push(item.itemChild)"
    ></menu-item>
    <br>
    <button id="access-activity-market-button"
            class="content-button gray-button"
            @click="toggleVisibilityMarket()">
      {{ itemWrapperStateMarket }}</button>
    <br>
    <br>
    <h2>Gaming</h2>
    <menu-item item-name="Gaming profile"
               class="item"
               item-id="access-activity-gaming-profile"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <menu-item item-name="Your gaming app search history"
               class="item"
               item-id="access-activity-gaming-search-history"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <br>
    <h2>Reels</h2> <!--Facebook reference-->
    <menu-item item-name="Videos"
               class="item"
               item-id="access-activity-reels-videos"
               @click="$router.push('ActivityLog')"
    ></menu-item>
    <menu-item v-show="this.seeMoreReels"
               class="item"
               v-for="item in activityReelsItems"
               :item-name="item.itemName"
               :item-id="item.itemId"
               @click="$router.push(item.itemChild)"
    ></menu-item>
    <br>
    <button id="access-activity-reels-button"
            class="content-button gray-button"
            @click="toggleVisibilityReels()">
      {{ itemWrapperStateReels }}</button>
    <br>
    <br>
    <h2>Interactive videos</h2>
    <menu-item item-name="Interactive videos"
               class="item"
               item-id="access-activity-interactive-videos"
               @click="$router.push('ActivityLog')"
    ></menu-item>
    <br>
    <h2>Payments</h2> <!--Facebook reference-->
    <menu-item item-name="Payment history"
               class="item"
               item-id="access-activity-payment-history"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <br>
    <h2>Your places</h2>
    <menu-item item-name="Places you've created"
               class="item"
               item-id="access-activity-places-created"
               @click="$router.push('ActivityLog')"
    ></menu-item>
    <br>
    <h2>Bug Bounty</h2>
    <menu-item item-name="Bug Bounty"
               class="item"
               item-id="access-activity-bug-bounty"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <br>
    <h2>Voting location and reminders</h2>
    <menu-item item-name="Location"
               class="item"
               item-id="access-activity-location-location"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <menu-item item-name="Voting reminders"
               class="item"
               item-id="access-activity-voting-reminders"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <br>
    <h2>Reviews</h2>
    <menu-item item-name="Reviews"
               class="item"
               item-id="access-activity-reviews"
               @click="$router.push('ActivityLog')"
    ></menu-item>
    <br>
    <h2>Shops questions and answers</h2>
    <menu-item item-name="Questions and answers"
               class="item"
               item-id="access-activity-shops-q-a"
               @click="$router.push('ActivityLog')"
    ></menu-item>
    <br>
    <h2>Community profiles</h2>
    <menu-item item-name="Your community profiles"
               class="item"
               item-id="access-activity-community-profiles"
               @click="$router.push('ActivityLog')"
    ></menu-item>
    <menu-item v-show="this.seeMoreCommunity"
               class="item"
               v-for="item in activityCommunityItems"
               :item-name="item.itemName"
               :item-id="item.itemId"
               @click="$router.push(item.itemChild)"
    ></menu-item>
    <br>
    <button id="access-activity-community-button"
            class="content-button gray-button"
            @click="toggleVisibilityCommunity()">
      {{ itemWrapperStateCommunity }}</button>
    <br>
    <br>
    <h2>Collaborations</h2>
    <menu-item item-name="Collaborations"
               class="item"
               item-id="access-activity-collaborations"
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