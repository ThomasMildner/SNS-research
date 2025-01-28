<script>
import menuTitle from "../../components-menu-props/menuTitle.vue";
import menuItem from "../../components-menu-props/menuItem.vue";

export default {
  name: "continueDeleteAccount",
  components: {
    menuTitle,
    menuItem
  },
  methods:{
  },
  data: function () {
    return {
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title></menu-title>
  <div class="frame-inner">
    <h2>Permanently delete account</h2>
    <p>Once the deletion process has begun, you won't be able to reactivate your account or retrieve any of the content or information you've added. Learn more about account deletion.</p>
    <br>
    <p><b>Before you delete your accounts</b></p>
    <hr>
    <div class="before-sections">
      <p><b>To keep messenger, deactivate instead.</b></p>
      <button class="path-node delete-button"
              @click="$router.push('MissingFeature')"
      >Deactivate Account</button>
    </div>
    <hr>
    <div class="before-sections">
      <p><b>Save posts in your archive</b></p>
      <button class="path-node delete-button"
              @click="$router.push('ActivityLog')"
      >Go to Activity Log</button>
    </div>
    <hr>
    <div class="before-sections">
      <p><b>Download your information</b></p>
      <button class="path-node delete-button"
              @click="$router.push('MissingFeature')"
      >Download Info</button>
    </div>
    <hr>
    <div class="before-sections">
      <p><b>Transfer your information</b></p>
      <button class="path-node delete-button"
              @click="$router.push('MissingFeature')"
      >Transfer Info</button>
    </div>
  </div>
  <br>
  <div class="frame-outer">
    <br>
    <button id="t1" class="path-node content-button goal-node">DeleteAccount</button>
    <br>
    <br>
    <button class="path-node content-button gray-button">Cancel</button>
  </div>
</div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}

.frame-outer{
  background: #e3e3e3;
  padding-bottom: 2vh;
  padding-top: 1vh;
}

.before-sections{
  width: 90%;
  margin: 0 auto;
  padding-top: 2vw;
  padding-bottom: 2vw;
}

.delete-button {
  background: white;
  height: 4vh;
  width: max-content;
  font-size: 2.2rem;
  border: solid 2px #282828;
  border-radius: 5px;
  padding: 1rem;
}

.content-button {
  width: 95%;
  background: #3C8BFF;
  left: 2.5%;
}

.content-button:active {
  background: #0c56c9;
}

.gray-button{
  background: #f9f9ff;
  color: #282828;
  border: 1px solid #939393;
}

.gray-button:active{
  background: #939393;
}

</style>