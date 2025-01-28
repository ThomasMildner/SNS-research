<script>
import menuTitle  from '../../components-menu-props/menuTitle.vue'
import menuItem  from '../../components-menu-props/menuItem.vue'

export default {
  name: "privacyCentreCollection",
  components: {
    menuTitle,
    menuItem,
  },
  data: function () {
    return{
      header: 'Privacy Centre'
    }
  }
}
</script>

<template>
  <div class="menu-frame-wrapper">
    <div id="privacy-centre-collection-menu-button"
         class="privacy-centre-menu path-node"
         @click="$router.push('PrivacyCentreMenu')"
    ></div>
    <menu-title ></menu-title>
    <div class="frame-inner">
      <p>Collection</p>
      <h1>What we collect, and what you can do</h1> <!--Facebook reference-->
      <br>
      <button class="content-button path-node"
              id="privacy-centre-security-review-button"
              @click="$router.push('AccessInformation')"
      >Review Your Information</button>
      <br>
      <br>
      <br>
      <menu-item class="item"
                 id="privacy-centre-collection-we-collect"
                 item-name="Learn about information that we collect"
                 @click="$router.push('InformationCollected')"
      ></menu-item>
      <menu-item class="item"
                 id="privacy-centre-collection-listening-to-conversations"
                 item-name="Are we listening to your conversations?"
                 @click="$router.push('ListeningToConversations')"
      ></menu-item>
      <menu-item class="item"
                 id="privacy-centre-collection-delete-info"
                 item-name="How can you delete your information?"
                 @click="$router.push('MissingFeature')"
      ></menu-item>

      <h2>Learn more in the Privacy Policy</h2>
      <menu-item class="item"
                 id="privacy-centre-collection-privacy-policy-collect"
                 item-name="What information do we collect?"
                 @click="$router.push('PrivacyPolicy')"
      ></menu-item>
      <menu-item class="item"
                 id="privacy-centre-collection-privacy-policy-information"
                 item-name="How can you manage your information"
                 @click="$router.push('PrivacyPolicy')"
      ></menu-item>

      <h2>More resources</h2>
      <menu-item class="item"
                 id="privacy-centre-collection-use"
                 item-name="Learn how we use your information"
                 @click="$router.push('PrivacyCentreUse')"
      ></menu-item>
      <menu-item class="item"
                 id="privacy-centre-collection-ads"
                 item-name="You have options to manage the ads you see"
                 @click="$router.push('PrivacyCentreAds')"
      ></menu-item>
    </div>
  </div>
</template>


<style scoped>
.menu-frame-wrapper {
  background: #f9f9ff;
}

h1{
  font-size: 4rem;
}

.content-button{
  width: 100%;
  border-radius: 1rem;
  background: #3C8BFF;
}

.content-button:active{
  background: #0c56c9;
}

.privacy-centre-menu {
  position: absolute;
  float: right;
  background: #000000;
  border-radius: 4rem;
  right: 4vw;
  top: 5vw;
  width: 3rem;
  height: 0.3rem;
}

.privacy-centre-menu::after {
  content: '';
  position: absolute;
  background: #000000;
  border-radius: 4rem;
  top: 2vw;
  width: 3rem;
  height: 0.3rem;
}

.privacy-centre-menu::before {
  content: '';
  position: absolute;
  background: #000000;
  border-radius: 4rem;
  top: 4vw;
  width: 3rem;
  height: 0.3rem;
}

.frame-inner {
  width: 95%;
  margin: 0 auto;
}

.item {
  background: #ffffff;
  border-radius: 1rem;
  filter: drop-shadow(0 0 1rem #e3e3e3);
  height: min-content;
  margin-bottom: 2vw;
}

</style>