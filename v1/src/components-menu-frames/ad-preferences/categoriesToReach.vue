<script>
import menuTitle from '../../components-menu-props/menuTitle.vue'
import menuSlider from '../../components-menu-props/menuItemWithSlider.vue'
import menuItem from '../../components-menu-props/menuItem.vue'
export default {
  name: 'categoriesToReach',
  components: {
    menuTitle,
    menuSlider,
    menuItem
  },
  methods: {
    toggleLimitPosts(){
      this.showLimitPosts = !this.showLimitPosts
    },
  },
  data: function () {
    return {
      showLimitPosts: false,
      adsItems: [
        {itemId: 'ad-preferences-categories-employer', itemName: 'Employer'},
        {itemId: 'ad-preferences-categories-job', itemName: 'Job title'},
        {itemId: 'ad-preferences-categories-education', itemName: 'Education'},
        {itemId: 'ad-preferences-categories-relationship', itemName: 'Relationship Status'},
      ]
    }
  }
}
</script>

<template>
  <div class="menu-frame-wrapper">
    <menu-title></menu-title>
    <div class="frame-inner">
      <h2>Profile information and other categories used to reach you.</h2>
      <h3>Profile information</h3>
      <p>An advertiser can indicate that their ad should be shown to people who have certain information on their profile, such as a specific school or job title.</p>
      <p>You can choose whether this profile information can be used to show you ads in this way. This does not affect whether we can use this same profile information to add you to other categories or to otherwise help us personalise your ads. These settings don't change the information visible on your profile or who can use it.</p>
      <div class="alert-items-wrapper">
        <menuSlider class="alert-item"
                               v-for="item in adsItems"
                               :id="item.itemId"
                               :item-name="item.itemName"
        ></menuSlider>
        <br>
        <hr>
        <br>
        <h3>Other categories used to reach you</h3>
        <p>Advertisers can reach you based on other categories that we associate with you. We add you to these categories based on information that youÄve provided on this app and your activity. Your can decide to remove yourself from these specific categories.</p>
        <menu-item item-name="Other categories"
                   item-id="ad-preferences-categories-other"
                   @click="$router.push('MissingFeature')"
        ></menu-item>
        <br>
        <br>
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

.alert-item{
  padding-top: 2vh;
}
</style>