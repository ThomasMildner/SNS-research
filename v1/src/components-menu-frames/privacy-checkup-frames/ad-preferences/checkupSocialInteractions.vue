<script>
import menuTitle from '../../../components-menu-props/menuTitle.vue'
import menuMultiRadioItem from '../../../components-menu-props/menuMultiRadioItem.vue'
export default {
  name: 'checkupSocialInteractions',
  components: {
    menuTitle,
    menuMultiRadioItem,
  },
  methods: {
    toggleLimitPosts(){
      this.showLimitPosts = !this.showLimitPosts
    },
  },
  data: function () {
    return {
      showLimitPosts: false,
      header: 'Social Interactions',
      audienceButton: 'Options',
      interactionsItemsName: 'interactions',
      interactionsItems: [
        {itemId: 'privacy-checkup-audience-friends', itemName: 'Your friends'},
        {itemId: 'privacy-checkup-audience-only-me', itemName: 'Only me'},
      ],
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <p>Social interactions are likes, follows, comments, shares app usage, check-ins, recommendations and events that you've joined. You can decide whether your friends can see your social interactions alongside ads.</p>  <!--Facebook reference-->
    <br>
    <p>For example, if you ike a Page that's running an ad, we might let your friends know that you liked the Page when they see the ad.</p>
    <div class="info-section">
      <p>Who can see your social interactions alongside ads?</p>
      <button class="content-button gray-button path-node"
              @click=toggleLimitPosts()
      >{{audienceButton}}</button>
      <div class="limit-all-container"
           @click=toggleLimitPosts();
           v-bind:style='{"display" : (showLimitPosts? "block" : "none" )}'
      >
        <div class="limit-all-inner"
        @click=toggleLimitPosts()>
          <div class="limit-posts-header">
            <h2>Choose audience</h2>
            <div class="close-button path-node"
                 @click="toggleLimitPosts()"
            ></div>
          </div>
          <hr>
          <menu-multi-radio-item :radio-items="interactionsItems"
                                 :radio-name="interactionsItemsName"
          >
          </menu-multi-radio-item>
        </div>
      </div>
    </div>
    <div class="bottom-nav">
      <div class="bottom-nav-progress">
        <div class="bottom-nav-progress-circ"></div>
        <div class="bottom-nav-progress-circ"></div>
        <div class="bottom-nav-progress-circ active"></div>
      </div>
      <button id="privacy-checkup-ad-preferences-social-interactions-next-button"
              class="content-button path-node"
              @click="$router.push('CheckupAdsEnd')"
      >Next</button>
    </div>
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

.info-section{
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 10vh;
  border-bottom: solid 1px #939393;
}

.bottom-nav{
  top: 10vh;
  border-top: solid 1px #939393;
  position: relative;
  width: 98%;
  height: 10vh;
  margin: 0 auto;
  display: grid;
  z-index: 1;
  grid-template-columns: 1fr 3fr;
}

.bottom-nav-progress {
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-self: center;
}

.bottom-nav-progress-circ {
  height: 2rem;
  width: 2rem;
  border-radius: 3rem;
  background: #e3e3e3;
}

.active{
  background: #3C8BFF;
}

.content-button {
  width: 40%;
  justify-self: end;
  align-self: center;
  background: #3C8BFF;
  color: #ffffff;
}

.content-button:active{
  background: #0c56c9;
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

.limit-all-container {
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,0.2);
  z-index: 2;
}

.limit-all-inner{
  position: absolute;
  width: 100%;
  height: 40%;
  background: #ffffff;
  bottom: 0;
  border-radius: 40px;
  z-index: 3;
}

.limit-all-inner h2{
  padding-top: 4%;
  text-align: center;
}

.limit-posts-header {
  display: grid;
  grid-template-columns: 4fr 1fr;
}

.close-button{
  position: relative;
  opacity: 1;
  float: right;
  right: 10vw;
  bottom: 2vw;
  align-self: center;
  justify-self: end;
}

.close-button::before, .close-button::after {
  content: ' ';
  position: absolute;
  height: 6vw;
  width: 6px;
  background-color: #011c44;
}

.close-button::before{
  transform: rotate(45deg);
}

.close-button::after{
  transform: rotate(-45deg);
}
</style>