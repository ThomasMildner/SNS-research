<script>
import * as navigation from '/js/bottomNavigation.js'
import * as deadEnd from '/js/deadEnd.js'
import * as showTask from '/js/showTask.js'

export default {
  name: "profile.vue",
  methods: {
      switchToMenu() {
        navigation.navProfile.classList.remove('active')
        navigation.showHeader(false)
        navigation.navProfile.src =  navigation.buttons[2].inactiveSrc
        navigation.menuContainer.style.display = 'block'
        navigation.profileContent.style.display = 'none'
        if(showTask.getStateIndex() >= 2) {
          showTask.abortButton.style.visibility = 'visible'
        }
        this.$router.push('/ProfileSettings')
      },
      showDeadEnd(){
        const content = document.querySelector('#wrapper')
        deadEnd.addDeadEnd(content)
      }
  },
  data: function(){
    return{
      profileName: 'Your Profile',
      profileImg: navigation.getProfileImg(),
    }
  }
}
</script>

<template>
  <div class="profile-wrapper">
    <div class="profile-header">
        <h2>{{ profileName }}</h2>
    </div>
    <div class="profile-img-container">
        <img class="profile-img" :src=profileImg>
    </div>
    <div class="profile-nav">
      <button id="profile-edit-profile-button" @click="showDeadEnd" class="content-button profile-button path-node">Edit Profile</button>
      <button id="profile-to-profile-settings-button" @click=switchToMenu() class="content-button profile-button path-node">…</button>
    </div>
  </div>
</template>n

<style scoped>
.profile-wrapper{
  width: 95%;
  height: 100%;
  margin: 0 auto;
}

.profile-header h2{
  font-size: 4em;
  font-weight: 600;
  text-transform: none;
}

.profile-img-container{
  width: 60vw;
  height: 60vw;
  background: #f9f9ff;
  border-radius: 20px;
  border: solid 8px #95c3de;
  margin: 0 auto;
  display: grid;
  align-content: center;
  justify-content: center;
}

.profile-img {
  height: 80%;
}

.profile-nav {
  padding-top: 2vw;
  width: 60vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 2vw;
}

.profile-button{
  width: auto;
  background: #e0e0e0;
  color: #282828;
}

.profile-button:active {
  background: #939393;
}

</style>