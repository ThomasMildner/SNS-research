<script>
import menuTitle from '../../../components-menu-props/menuTitle.vue'
import menuDropDownRadioItem from '../../../components-menu-props/menuDropDownRadioItem.vue';
export default {
  name: 'checkupPostsAndStories',
  components: {
    menuTitle,
    menuDropDownRadioItem,
  },
  methods: {
    toggleLimitPosts(){
      this.showLimitPosts = !this.showLimitPosts
    },
  },
  data: function () {
    return {
      header: 'Posts and stories',
      showLimitPosts: false,
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <p>You decide who you want to see your posts and stories.</p>
    <br>
    <div class="info-section">
      <h2>Future posts</h2>
      <button class="content-button gray-button path-node goal-node"
              id="t5"
              @click="$router.push({name:'Extended Privacy Settings', params: {title: 'Future posts'}})"
      >Options</button>
    </div>
    <div class="info-section">
      <h2>Stories</h2>
      <button class="content-button gray-button path-node"
              @click="$router.push({name:'Extended Privacy Settings', params: {title: 'Story privacy'}})"
      >Options</button>
    </div>
    <div class="info-section">
      <h2>Limit past posts</h2>
      <button class="content-button gray-button path-node"
              @click=toggleLimitPosts()
      >Limit</button>
      <div class="limit-all-container"
           @click=toggleLimitPosts()
           v-bind:style='{"display" : (showLimitPosts? "block" : "none" )}'
      >
        <div class="limit-all-inner"
             @click=toggleLimitPosts()>
          <h2>Limit all?</h2>
          <hr>
          <button class="content-button gray-button path-node limit-button"
                  @click=toggleLimitPosts()
          >Limit</button>
        </div>
      </div>
    </div>
    <div class="bottom-nav">
      <div class="bottom-nav-progress">
        <div class="bottom-nav-progress-circ"></div>
        <div class="bottom-nav-progress-circ active"></div>
        <div class="bottom-nav-progress-circ"></div>
      </div>
      <button class="content-button path-node"
              id="privacy-checkup-sharing-posts-and-stories-next-button"
              @click="$router.push('CheckupBlocking')"
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

.limit-button{
  width: 90%;
  margin-top: 10%;
  margin-left: 5%;
  float: left;
}

</style>