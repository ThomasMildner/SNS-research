<script>
import menuTitle from '../../components-menu-props/menuTitle.vue';
import menuItem from '../../components-menu-props/menuItem.vue';
export default {
  name: "offAppActivity",
  components:{
    menuTitle,
    menuItem
  },
  methods: {
    toggleClearHistory(){
      this.showClearHistory = !this.showClearHistory
    },
    toggleOptions(){
      this.showMoreOptions = !this.showMoreOptions
    },
  },
  data: function(){
    return {
      header: 'Off-app activity',
      showClearHistory: false,
      showMoreOptions: false,
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <!-- Facebook reference -->
    <p>Off-app activity includes information that business and organisers share with us about your interactions with them, such as visiting their apps or besites.</p>
    <!-- Facebook reference -->
    <h2>Recent activity</h2>
    <menu-item class="item"
               item-id="off-app-activity-what-is"
               item-name="What is off-App activity"
               @click="$router.push('MissingFeature')"
    ></menu-item>
    <br>
    <h2>Activity controls</h2>
    <menu-item item-name="Select activity to disconnect"
               item-id="off-app-activity-select-disconnect"
               @click="$router.push('MissingFeature')"
               class="menu-item"
    ></menu-item>
    <menu-item item-name="Clear History"
               item-id="off-app-activity-clear-history"
               @click="toggleClearHistory()"
               class="menu-item"
    ></menu-item>
    <menu-item item-name="Disconnect future activity"
               item-id="off-app-activity-disconnect-future"
               @click="$router.push('ManageFutureActivity')"
               class="menu-item"
    ></menu-item>
    <menu-item item-name="More options"
               item-id="off-app-activity-more-options"
               @click="toggleOptions()"
               class="menu-item"
    ></menu-item>


    <div class="clear-history-drawer-container"
         @click=toggleClearHistory()
         v-bind:style='{"display" : (showClearHistory? "block" : "none" )}'
    >
      <div class="clear-history-drawer-inner"
           @click=toggleClearHistory()>
        <h2>Clear History</h2>
        <hr>
        <p>Clear your off-app activity from your account?</p>
        <div class="clear-history-drawer-buttons">
          <div></div>
          <button class="content-button path-node limit-button"
                  @click=toggleClearHistory()
          >Clear History</button>
          <button class="content-button gray-button path-node limit-button"
                  @click=toggleClearHistory()
          >Cancel</button>
        </div>
      </div>
    </div>


    <div class="more-options-drawer-container"
         @click=toggleOptions()
         v-bind:style='{"display" : (showMoreOptions? "block" : "none" )}'
    >
      <div class="more-options-drawer-inner"
           @click=toggleOptions()>
        <h2>More options</h2>
        <hr>
        <menu-item class="menu-item"
                   item-name="Access your information"
                   item-id="off-app-activity-access-info"
                   @click="$router.push('AccessInformation')"
        ></menu-item>
        <menu-item class="menu-item"
                   item-name="Download your information"
                   item-id="off-app-activity-download-info"
                   @click="$router.push('MissingFeature')"
        ></menu-item>
        <menu-item class="menu-item"
                   item-name="Help"
                   item-id="off-app-activity-help"
                   @click="$router.push('MissingFeature')"
        ></menu-item>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}

.menu-item{
  height: min-content;
}

.item {
  min-height: 15rem;
  height: min-content;
  border-bottom: 1px solid #bcbcd2;
  width: 90%;
  margin: 0 auto;
  border-radius: 20px;
  background: #fff;
  filter: drop-shadow(0 0 1rem #e3e3e3);
}


.gray-button{
  position: relative;
  float: right;
  width: 80%;
  background: #e0e0e0;
  color: #282828;
}

.gray-button:active {
  background: #939393;
}

.clear-history-drawer-container {
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,0.2);
  z-index: 2;
}

.clear-history-drawer-inner{
  position: absolute;
  width: 100%;
  height: 70%;
  background: #ffffff;
  bottom: 0;
  border-radius: 40px;
  z-index: 3;
}

.clear-history-drawer-inner h2{
  padding-top: 4%;
  text-align: center;
}

.clear-history-drawer-inner p{
  padding-left: 2vw;
}


.clear-history-drawer-buttons{
  height: 40vh;
  display: grid;
  grid-template-rows: 3fr 1fr 1fr;
}

.more-options-drawer-container {
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,0.2);
  z-index: 2;
}

.more-options-drawer-inner{
  position: absolute;
  width: 100%;
  height: 40%;
  background: #ffffff;
  bottom: 0;
  border-radius: 40px;
  z-index: 3;
}

.more-options-drawer-inner h2{
  padding-top: 4%;
  text-align: center;
}

.more-options-drawer-inner p{
  padding-left: 2vw;
}

.limit-button{
  width: 90%;
  margin-left: 5%;
  float: left;
}

</style>