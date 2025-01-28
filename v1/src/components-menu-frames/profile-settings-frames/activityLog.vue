<script>
import menuTitle from '../../components-menu-props/menuTitle.vue'
import menuItem from '../../components-menu-props/menuItem.vue'
import menuDropDown from '../../components-menu-props/menuDropDown.vue'
import menuSideScroller from '../../components-menu-props/menuItemHorizontalList.vue';

export default {
  name: "activityLog",
  components: {
    menuSideScroller,
    menuItem,
    menuDropDown,
    menuTitle,
  },
  data: function(){
    return {
      header: 'Activity Log',
      scrollerOneItems: [
        {itemId:'activity-log-archive', itemName: 'Archive', itemChild: 'Archive'},
        {itemId:'activity-log-recycle-bin', itemName: 'Recycle Bin', itemChild: 'RecyclingBin'},
      ],
      scrollerTwoItems: [
        {itemId:'activity-log-public-posts', itemName: 'Public Posts', itemChild: 'MissingFeature'},
        {itemId:'activity-log-public-tags', itemName: 'Public Tags', itemChild: 'MissingFeature'},
        {itemId:'activity-log-story-activity', itemName: 'Story Activity', itemChild: 'MissingFeature'},
        {itemId:'activity-log-page-likes', itemName: 'Page Likes', itemChild: 'MissingFeature'},
        {itemId:'activity-log-following', itemName: 'Following', itemChild: 'MissingFeature'},
        {itemId:'activity-log-added-friends', itemName: 'Added friends', itemChild: 'MissingFeature'},
        {itemId:'activity-log-videos-searched', itemName: 'Videos searched', itemChild: 'MissingFeature'},
        {itemId:'activity-log-videos-watched', itemName: 'Videos watched', itemChild: 'MissingFeature'},
        {itemId:'activity-log-search-history', itemName: 'Search history', itemChild: 'MissingFeature'},
        {itemId:'activity-log-group-searched', itemName: 'Group searched', itemChild: 'MissingFeature'},
        {itemId:'activity-log-your-comments', itemName: 'Your comments', itemChild: 'MissingFeature'},
        {itemId:'activity-log-likes-and-reactions', itemName: 'Likes and reactions', itemChild: 'MissingFeature'},
        {itemId:'activity-log-group-posts', itemName: 'Group posts', itemChild: 'MissingFeature'},
      ],

      yourPostsTitle: 'Your posts',
      yourPostsId: 'activity-log-your-posts-dd',
      yourPostsDDItems: [
        {itemId:'activity-log-text-updates-etc', itemName: 'Text updates, check-ins, notes and more', itemChild: 'MissingFeature'},
        {itemId:'activity-log-photos-and-videos', itemName: 'Photos and videos', itemChild: 'MissingFeature'},
        {itemId:'activity-log-posts-from-other-apps', itemName: 'Posts from other apps', itemChild: 'MissingFeature'},
      ],
      managePostsButton: {itemId: 'activity-log-manage-your-posts-button', itemName: 'Manage Your Posts', itemChild: 'MissingFeature'},

      manageTagsTitle: "Activities you're tagged in",
      manageTagsId: 'activity-log-manage-tags',
      manageTagsItems: [
        {itemId:'activity-log-posts-and-comments-tagged-in', itemName: "Posts and comments you're tagged in", itemChild: 'MissingFeature'},
        {itemId:'activity-log-photos-tagged-in', itemName: "Photos you're tagged in", itemChild: 'MissingFeature'},
      ],
      manageTagsButton: {itemId: 'activity-log-manage-your-tags-button', itemName: 'Manage Your Tags', itemChild: 'MissingFeature'},

      manageInteractionsTitle: 'Interactions',
      manageInteractionsId: 'activity-log-manage-interactions',
      manageInteractionsItems: [
        {itemId:'activity-log-interactions-comments', itemName: "Comments", itemChild: 'MissingFeature'},
        {itemId:'activity-log-interactions-likes-and-reactions', itemName: "Likes and reactions", itemChild: 'MissingFeature'},
        {itemId:'activity-log-interactions-others-posts-on-your-timeline', itemName: "Others' posts on your timeline", itemChild: 'MissingFeature'},
        {itemId:'activity-log-interactions-your-posts-on-others-timeline', itemName: "Your posts on others' timeline", itemChild: 'MissingFeature'},
        {itemId:'activity-log-interactions-interactive-videos', itemName: "Interactive videos", itemChild: 'MissingFeature'},
        {itemId:'activity-log-interactions-polls-you-created', itemName: "Polls you created", itemChild: 'MissingFeature'},
        {itemId:'activity-log-interactions-poll-voted', itemName: "Poll voted", itemChild: 'MissingFeature'},
        {itemId:'activity-log-interactions-saved', itemName: "Saved", itemChild: 'MissingFeature'},
        {itemId:'activity-log-interactions-pokes', itemName: "Pokes", itemChild: 'MissingFeature'},
        {itemId:'activity-log-interactions-reviews', itemName: "Reviews", itemChild: 'MissingFeature'},
        {itemId:'activity-log-interactions-products', itemName: "Products", itemChild: 'MissingFeature'},
        {itemId:'activity-log-interactions-questions-and-answers', itemName: "Questions & answers", itemChild: 'MissingFeature'},
        {itemId:'activity-log-interactions-marketplace-ratings-given', itemName: "Marketplace ratings you're given", itemChild: 'MissingFeature'},
        {itemId:'activity-log-interactions-seller-responses-given', itemName: "Seller responses you've given", itemChild: ''},
        {itemId:'activity-log-interactions-contact-info-saved', itemName: "Contact info saved from forms that you've submitted", itemChild: 'MissingFeature'},
      ],
      manageInteractionsButton: {itemId: 'activity-log-manage-interactions-button', itemName: 'Manage Interactions', itemChild: 'MissingFeature'},

      viewGCERTitle: 'Groups, communities, events and reels',
      viewGCERId: 'activity-log-groups-communities-events-reels',
      viewGCERItems: [
        {itemId:'activity-log-groups-communities-events-reels-group-membership-activity', itemName: "Group membership activity", itemChild: 'MissingFeature'},
        {itemId:'activity-log-groups-communities-events-reels-group-posts-and-comments', itemName: "Group posts and comments", itemChild: 'MissingFeature'},
        {itemId:'activity-log-groups-communities-events-reels-group-reactions', itemName: "Group reactions", itemChild: 'MissingFeature'},
        {itemId:'activity-log-groups-communities-events-reels-events-created', itemName: "Events you've created", itemChild: 'MissingFeature'},
        {itemId:'activity-log-groups-communities-events-reels-event-invitations-received', itemName: "Event invitations you've received", itemChild: 'MissingFeature'},
        {itemId:'activity-log-groups-communities-events-reels-your-event-responses', itemName: "Your event responses", itemChild: 'MissingFeature'},
        {itemId:'activity-log-groups-communities-events-reels-reels', itemName: "Reels", itemChild: 'MissingFeature'},
        {itemId:'activity-log-groups-communities-events-reels-audio-saved', itemName: "Reels audio you've saved", itemChild: 'MissingFeature'},
        {itemId:'activity-log-groups-communities-events-reels-fsc-peoples-choice', itemName: "FSC People's Choice", itemChild: 'MissingFeature'},
        {itemId:'activity-log-groups-communities-events-reels-reels-effects-saved', itemName: "Reels effects that you've saved", itemChild: 'MissingFeature'},
        {itemId:'activity-log-groups-communities-events-reels-anonymous-posts-written', itemName: "Anonymous posts you've written", itemChild: 'MissingFeature'},
        {itemId:'activity-log-groups-communities-events-reels-community-comments', itemName: "Community comments", itemChild: 'MissingFeature'},
        {itemId:'activity-log-groups-communities-events-reels-custom-email-address-for-community-mails', itemName: "Custom email address for community emails", itemChild: 'MissingFeature'},
        {itemId:'activity-log-groups-communities-events-reels-community-posts', itemName: "Community posts", itemChild: 'MissingFeature'},
        {itemId:'activity-log-groups-communities-events-reels-community-reactions', itemName: "Community reactions", itemChild: 'MissingFeature'},
        {itemId:'activity-log-groups-communities-events-reels-community-awards', itemName: "Community awards", itemChild: 'MissingFeature'},
        {itemId:'activity-log-groups-communities-events-reels-admin-actions', itemName: "Admin actions", itemChild: 'MissingFeature'},
        {itemId:'activity-log-groups-communities-events-reels-group-feedback-from-admins', itemName: "Group feedback from admins", itemChild: 'MissingFeature'},
        {itemId:'activity-log-groups-communities-events-reels-group-posts-about-groups-recommended', itemName: "Group posts from groups you've recommended", itemChild: 'MissingFeature'},
        {itemId:'activity-log-groups-communities-events-reels-group-warnings', itemName: "Group warnings", itemChild: 'MissingFeature'},
        {itemId:'activity-log-groups-communities-events-reels-group-awards', itemName: "Group awards", itemChild: 'MissingFeature'},
        {itemId:'activity-log-groups-communities-events-reels-events-hidden', itemName: "Events you've hidden", itemChild: 'MissingFeature'},
        {itemId:'activity-log-groups-communities-events-reels-prayer', itemName: "Prayer", itemChild: 'MissingFeature'},
      ],
      viewGCERButton: {itemId: 'activity-log-manage-interactions-button', itemName: 'View groups, communities, events and reels', itemChild: 'MissingFeature'},

      profileInfoTitle: 'Profile information',
      profileInfoId: 'activity-log-profile-info',
      profileInfoItems: [
        {itemId:'activity-log-profile-info-profile', itemName: "Profile", itemChild: 'MissingFeature'},
        {itemId:'activity-log-profile-info-relationships', itemName: "Relationships", itemChild: 'MissingFeature'},
        {itemId:'activity-log-profile-info-hobbies-added', itemName: "Hobbies you've added", itemChild: 'MissingFeature'},
        {itemId:'activity-log-profile-info-films-and-tv', itemName: "Films and TV", itemChild: 'MissingFeature'},
        {itemId:'activity-log-profile-info-songs-listened-to', itemName: "Songs you've listened to", itemChild: 'MissingFeature'},
        {itemId:'activity-log-profile-info-books', itemName: "Books", itemChild: 'MissingFeature'},
        {itemId:'activity-log-profile-info-games', itemName: "Games", itemChild: 'MissingFeature'},
        {itemId:'activity-log-profile-info-articles-read', itemName: "Articles you've read", itemChild: 'MissingFeature'},
        {itemId:'activity-log-profile-info-member-profiles', itemName: "Member profiles", itemChild: 'MissingFeature'},
      ],
      profileInfoButton: {itemId: 'activity-log-profile-info-button', itemName: 'View Profile Information', itemChild: 'MissingFeature'},

      connectionsTitle: 'Connections',
      connectionsId: 'activity-log-connections',
      connectionsItems: [
        {itemId:'activity-log-connections-added-friends', itemName: "Added friends", itemChild: 'MissingFeature'},
        {itemId:'activity-log-connections-removed-friends', itemName: "Removed friends", itemChild: 'MissingFeature'},
        {itemId:'activity-log-connections-friend-requests-received', itemName: "Friend requests received", itemChild: 'MissingFeature'},
        {itemId:'activity-log-connections-connected', itemName: "Connected", itemChild: 'MissingFeature'},
        {itemId:'activity-log-connections-followers', itemName: "Followers", itemChild: 'MissingFeature'},
        {itemId:'activity-log-connections-pages-pages-lies-and-interests', itemName: "Pages, Page likes and interests", itemChild: 'MissingFeature'},
        {itemId:'activity-log-connections-sent-friend-requests', itemName: "Sent friend requests", itemChild: 'MissingFeature'},
        {itemId:'activity-log-connections-blocked', itemName: "Blocked", itemChild: 'MissingFeature'},
      ],
      connectionsButton: {itemId: 'activity-log-connections-button', itemName: 'View Connections', itemChild: 'MissingFeature'},

      loggedActionsTitle: 'Logged Actions and other activity',
      loggedActionsId: 'activity-log-logged-actions',
      loggedActionsItems: [
        {itemId:'activity-log-logged-actions-search-history', itemName: "Search history", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-videos-watched', itemName: "Videos you've watched", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-videos-searched-for', itemName: "Videos you've searched for", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-hidden-from-profile', itemName: "Hidden from profile", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-hidden-active-sessions', itemName: "Active sessions", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-logins-and-logouts', itemName: "Logins and logouts", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-groups-searched-for', itemName: "Groups you've searched for", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-recognised-devices', itemName: "Recognised devices", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-voice-interactions', itemName: "Voice interactions", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-your-places', itemName: "Your places", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-products-wanted', itemName: "Products you wanted", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-tournament-matches', itemName: "Your tournament matches", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-created-tournaments', itemName: "Created tournaments", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-voice-search', itemName: "Voice search", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-followed-info-centres', itemName: "Followed info centres", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-fantasy-games-picks-selected', itemName: "Fantasy games picks you selected", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-news-articles-opened', itemName: "News articles you've opened", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-collection-activity', itemName: "Collection activity", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-crisis-response', itemName: "Crisis Response", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-effects-searched', itemName: "Effects that you've searched for", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-digital-collectibles', itemName: "Digital collectibles", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-social-media-editor', itemName: "Social Media Editor", itemChild: 'MissingFeature'}, // This is called 'Facebook Editor' in Facebook's app
        {itemId:'activity-log-logged-actions-reminders-to-donate', itemName: "Reminders to donate", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-fundraisers-you-help-mange', itemName: "Fundraisers you help manage", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-fundraiser-matches-created', itemName: "Fundraiser matches you've created", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-gaming-app-searches', itemName: "Gaming app searches", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-live-videos-watched', itemName: "Live videos you've watched", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-marketplace-listings', itemName: "Marketplace listings", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-news-searched-for', itemName: "News you've searched for", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-other-records', itemName: "Other records", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-shortcuts', itemName: "Your shortcuts", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-privacy-checkup-interactions', itemName: "Privacy Checkup interactions", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-privacy-checkup-reminders', itemName: "Privacy Checkup reminders", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-visual-search', itemName: "Visual search", itemChild: 'MissingFeature'},
        {itemId:'activity-log-logged-actions-videos-on-watch', itemName: "Videos on Watch that you've chosen to see more or less of", itemChild: 'MissingFeature'}, // This is referring to Facebook's Watch in the app
      ],
      loggedActionsButton: {itemId: 'activity-log-logged-actions-button', itemName: 'View Logged Actions', itemChild: 'MissingFeature'},

      activityHistoryButton: {itemId: 'activity-log-activity-history-button', itemName: 'View Activity History', itemChild: 'MissingFeature'},
    }
  }
}
</script>

<template>
  <div class="menu-frame-wrapper">
    <div class="follow-settings-content">
      <menuTitle :header-title="header"></menuTitle>
      <menuSideScroller :scroll-items="scrollerOneItems"></menuSideScroller>
      <menuSideScroller :scroll-items="scrollerTwoItems"></menuSideScroller>
      <br><br>

      <menuDropDown :drop-down-id="yourPostsId"
                    :drop-down-name="yourPostsTitle"
                    :drop-down-items="yourPostsDDItems">
      </menuDropDown>
      <button :id="managePostsButton.itemId"
              class="content-button path-node"
              @click="$router.push({name:'Archive and Recycling Bin', params: {title: 'Manage Posts'}})"
      >
        {{managePostsButton.itemName}}
      </button>
      <br><br>

      <menuDropDown :drop-down-id="manageTagsId"
                    :drop-down-name="manageTagsTitle"
                    :drop-down-items="manageTagsItems">
      </menuDropDown>
      <button :id="manageTagsButton.itemId"
              class="content-button path-node"
              @click="$router.push({name:'Archive and Recycling Bin', params: {title: 'Manage Tags'}})"
      >
        {{manageTagsButton.itemName}}
      </button>
      <br><br>

      <menuDropDown :drop-down-id="manageInteractionsId"
                    :drop-down-name="manageInteractionsTitle"
                    :drop-down-items="manageInteractionsItems">
      </menuDropDown>
      <button :id="manageInteractionsButton.itemId"
              class="content-button path-node"
              @click="$router.push({name:'Archive and Recycling Bin', params: {title: 'Manage Interactions'}})"
      >
        {{manageInteractionsButton.itemName}}
      </button>
      <br><br>

      <menuDropDown :drop-down-id="viewGCERId"
                    :drop-down-name="viewGCERTitle"
                    :drop-down-items="viewGCERItems">
      </menuDropDown>
      <button :id="viewGCERButton.itemId"
              class="content-button path-node"
              @click="$router.push({name:'Archive and Recycling Bin', params: {title: 'Groups, communities, events and reels'}})"
      >
        {{viewGCERButton.itemName}}
      </button>
      <br><br>

      <menuDropDown :drop-down-id="profileInfoId"
                    :drop-down-name="profileInfoTitle"
                    :drop-down-items="profileInfoItems">
      </menuDropDown>
      <button :id="profileInfoButton.itemId"
              class="content-button path-node"
              @click="$router.push({name:'Archive and Recycling Bin', params: {title: 'Profile Info'}})"
      >
        {{profileInfoButton.itemName}}
      </button>
      <br><br>

      <menuDropDown :drop-down-id="connectionsId"
                    :drop-down-name="connectionsTitle"
                    :drop-down-items="connectionsItems">
      </menuDropDown>
      <button :id="connectionsButton.itemId"
              class="content-button path-node"
              @click="$router.push({name:'Archive and Recycling Bin', params: {title: 'Connections'}})"
      >
        {{connectionsButton.itemName}}
      </button>
      <br><br>

      <menuDropDown :drop-down-id="loggedActionsId"
                    :drop-down-name="loggedActionsTitle"
                    :drop-down-items="loggedActionsItems">
      </menuDropDown>
      <button :id="loggedActionsButton.itemId"
              class="content-button path-node"
              @click="$router.push({name:'Archive and Recycling Bin', params: {title: 'Logged Actions'}})"
      >
        {{loggedActionsButton.itemName}}
      </button>
      <br><br>
      <hr style="border: solid 10px #e0e0e0;">
      <br><br>
      <button class="content-button path-node"
              :id="activityHistoryButton.itemId"
              @click="$router.push({name:'Archive and Recycling Bin', params: {title: 'Activity History'}})"
      >
        {{activityHistoryButton.itemName}}
      </button>
      <br><br>
      <br><br>
    </div>

  </div>
</template>

<style scoped>
.menu-frame-wrapper{
  font-family: Poppins;
}

p{
  font-size: 1.2em;
}

.content-button {
  font-family: Poppins;
  min-height: 5vh;
  height: fit-content;
  padding-top: 3px;
  padding-bottom: 3px;
  color: #282828;
  background: #e0e0e0;
  width: 94%;
  margin-left: 3%;
  font-size: 2.4em;
  font-weight: 400;
  line-height: 1.2em;
}

.content-button:active {
  background: #939393;
}
</style>