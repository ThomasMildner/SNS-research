<script>
import menuTitle from "../../components-menu-props/menuTitle.vue";

export default {
  name: "deleteAccount",
  components: {
    menuTitle
  },
  methods:{
    toggleStatus(option = String) {
      this.selectedOption = option
    },
    setRoute(path = String) {
      this.buttonRoute = path
    },
  },
  data: function () {
    return {
      selectedOption: 'Deactivation',
      buttonRoute: 'MissingFeature'
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title></menu-title>
  <div class="frame-inner">
    <h2>Deactivating or deleting your account</h2>
    <p>If you want to take a break from this app, you can deactivate your account. If you want to permanently delete your account, let us know.</p>
    <br>
    <form>
      <div class="options-wrapper">
        <div class="options-inner">
          <input type="radio"
                 name="accountDeletion"
                 class="path-node"
                 checked="checked"
                 @click="toggleStatus('Deactivation'); setRoute('MissingFeature')"
          >
          <label>
            <p><b>Deactivate account</b></p>
            <p>Deactivating your account is temporary.</p>
          </label>
        </div>
        <div class="options-inner">
          <input type="radio"
                 name="accountDeletion"
                 class="path-node"
                 @click="toggleStatus('Deletion'); setRoute('BeforeDeleteAccount')"
          >
          <label>
            <p><b>Delete account</b></p>
            <p>Deleting your account is permanent.</p>
          </label>
        </div>
      </div>
    </form>
  </div>
  <br>
  <div class="frame-outer">
    <br>
    <button class="content-button path-node"
            id="delete-account-continue-button"
            @click="$router.push(buttonRoute)"
    >Continue to Account {{selectedOption}}</button>
    <br>
    <br>
    <button class="content-button gray-button path-node"
            id="delete-account-cancel-button"
    >Cancel</button>
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
  padding-bottom: 10vh;
  padding-top: 1vh;
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

.options-wrapper{
  width: 100%;
  height: 30vh;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2vh;
}
.options-inner {
  width: 100%;
  height: 100%;
  align-content: center;
  border: solid 1px #939393;
  display: grid;
  grid-template-columns: 1fr 3fr;
}

label{
  padding-left: 2.5%;
  font-size: 2.4em;
  padding-right: 2vw;
}

input{
  appearance: none;
  align-self: center;
}

input[type='radio'] {
  position: relative;
  display: inline-block;
  width: 3.5rem;
  height: 3.5rem;
  margin: 0 auto;
  border-radius: 3rem;
  background: none;
}

input[type='radio']::after{
  content: '';
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-radius: 3rem;
  border: solid 6px #fff;
  background: #fff;
  z-index: 1;
}

input[type='radio']::before{
  position: absolute;
  content: '';
  right: .375rem;
  bottom: .375rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 3rem;
  background: #939393;
}

input[type='radio']:checked{
  width: 3.5rem;
  height: 3.5rem;
  border: none;
}

input[type='radio']:checked::after{
  content: '';
  position: absolute;
  width: 2rem;
  height: 2rem;
  border: solid 6px #fff;
  background: #3C8BFF;
  z-index: 1;
}

input[type='radio']:checked::before{
  position: absolute;
  content: '';
  right: .375rem;
  bottom: .375rem;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 3rem;
  background: #3C8BFF;
}
</style>