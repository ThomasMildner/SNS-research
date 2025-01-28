<script>
import menuTitle from '../../../components-menu-props/menuTitle.vue'
import menuDropDownRadioItem from '../../../components-menu-props/menuDropDownRadioItem.vue';
export default {
  name: 'profileInformation',
  components: {
    menuTitle,
    menuDropDownRadioItem,
  },
  data: function () {
    return {
      isActive: false,
      header: 'Profile Information',
      optionsTitle: 'Options',
      emailItems: [
        {itemId: 'privacy-checkup-profile-info-email-public', itemName: 'Public'},
        {itemId: 'privacy-checkup-profile-info-email-friends', itemName: 'Friends'},
        {itemId: 'privacy-checkup-profile-info-email-only-me', itemName: 'Only me'},
      ],
      dateOfBirthItems: [
        {itemId: 'privacy-checkup-profile-info-birthday-public', itemName: 'Public'},
        {itemId: 'privacy-checkup-profile-info-birthday-friends-of-friends', itemName: 'Friends of friends'},
        {itemId: 'privacy-checkup-profile-info-birthday-friends', itemName: 'Friends'},
        {itemId: 'privacy-checkup-profile-info-birthday-only-me', itemName: 'Only me'},
      ],
      friendsAndFollowingItems: [
        {itemId: 'privacy-checkup-profile-info-friends-and-following-public', itemName: 'Public'},
        {itemId: 'privacy-checkup-profile-info-friends-and-following-friends', itemName: 'Friends'},
        {itemId: 'privacy-checkup-profile-info-friends-and-following-friends-except', itemName: 'Friends except...'},
        {itemId: 'privacy-checkup-profile-info-friends-and-following-specific-friends', itemName: 'Specific friends'},
        {itemId: 'privacy-checkup-profile-info-friends-and-following-only-me', itemName: 'Only me'},
      ],
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <p>Please review this info and decide who you're comfortable with seeing it. Your profile may have more than is listed here.</p>
    <br>
    <div class="info-section">
      <h2>Email address</h2>
      <menu-drop-down-radio-item :radio-items='emailItems'
                                 :drop-down-title='optionsTitle'
                                 radio-name='email'>
      </menu-drop-down-radio-item>
      <hr>
    </div>
    <div class="info-section">
      <h2>Your birthday</h2>
      <menu-drop-down-radio-item :radio-items='dateOfBirthItems'
                                 :drop-down-title='optionsTitle'
                                 radio-name='email'>
      </menu-drop-down-radio-item>
      <hr>
    </div>
    <div class="info-section">
      <h2>Friends and Following</h2>
      <menu-drop-down-radio-item :radio-items='friendsAndFollowingItems'
                                 :drop-down-title='optionsTitle'
                                 radio-name='email'>
      </menu-drop-down-radio-item>
      <hr>
    </div>
    <div class="bottom-nav">
      <div class="bottom-nav-progress">
        <div class="bottom-nav-progress-circ active"></div>
        <div class="bottom-nav-progress-circ"></div>
        <div class="bottom-nav-progress-circ"></div>
      </div>
      <button @click="$router.push('CheckupPostAndStories')"
              id="privacy-checkup-sharing-profile-information-next-button"
              class="content-button path-node">Next</button>
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

.bottom-nav{
  top: 8vh;
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

</style>