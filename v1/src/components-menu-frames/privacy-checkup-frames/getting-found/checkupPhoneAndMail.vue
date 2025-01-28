<script>
import menuTitle from '../../../components-menu-props/menuTitle.vue'
import menuMultiRadioItem from '../../../components-menu-props/menuMultiRadioItem.vue'

export default {
  name: 'checkupPhoneAndMail',
  components: {
    menuTitle,
    menuMultiRadioItem,
  },
  methods: {
    togglePhone(){
      this.phoneActive = !this.phoneActive
    },
    toggleEmail(){
      this.emailActive = !this.emailActive
    },
  },
  data: function () {
    return {
      phoneActive: false,
      emailActive: false,
      header: 'Phone number and email address',
      buttonHeader: 'Options',
      phoneItemsName: 'phone',
      phoneItems: [
        {itemId: 'privacy-checkup-phone-everyone', itemName: 'Everyone'},
        {itemId: 'privacy-checkup-phone-friends-of-friends', itemName: 'Friends of friends'},
        {itemId: 'privacy-checkup-phone-friends', itemName: 'Friends'},
        {itemId: 'privacy-checkup-phone-only-me', itemName: 'Only me'},
      ],
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <p>Choose who can look you up by your phone number and email address.</p>
    <div class="info-section">
      <p>Phone number</p>
      <button class="content-button gray-button path-node"
              @click=togglePhone()
      >{{buttonHeader}}</button>
      <div class="limit-all-container"
           @click=togglePhone();
           v-bind:style='{"display" : (phoneActive? "block" : "none" )}'
      >
        <div class="limit-all-inner"
        @click=togglePhone()>
          <div class="limit-posts-header">
            <h2>Choose audience</h2>
            <div class="close-button path-node"
                 id="privacy-checkup-getting-found-email-button"
                 @click="togglePhone()"
            ></div>
          </div>
          <hr>
          <menu-multi-radio-item :radio-items="phoneItems"
                                 :radio-name="phoneItemsName"
          >
          </menu-multi-radio-item>
        </div>
      </div>
    </div>

    <div class="info-section">
      <p>Email address</p>
      <button class="content-button gray-button path-node"
              @click=toggleEmail()
      >{{buttonHeader}}</button>
      <div class="limit-all-container"
           @click=toggleEmail();
           v-bind:style='{"display" : (emailActive? "block" : "none" )}'
      >
        <div class="limit-all-inner"
             @click=toggleEmail()>
          <div class="limit-posts-header">
            <h2>Choose audience</h2>
            <div class="close-button path-node"
                 id="privacy-checkup-getting-found-email-button"
                 @click="toggleEmail()"
            ></div>
          </div>
          <hr>
          <menu-multi-radio-item :radio-items="phoneItems"
                                 :radio-name="phoneItemsName"
          >
          </menu-multi-radio-item>
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
              id="privacy-checkup-finding-phone-mail-next-button"
              @click="$router.push('CheckupSearchEngines')"
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
  align-content: center;
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
  height: 50%;
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