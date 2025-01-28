<script>
import menuTitle from '../../components-menu-props/menuTitle.vue'
import menuMultiRadioItem from '../../components-menu-props/menuMultiRadioItem.vue'
export default {
  name: 'socialInteractions',
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
      audienceButton: 'Options',
      interactionsItemsName: 'interactions',
      interactionsItems: [
        {itemId: 'privacy-checkup-audience-friends', itemName: 'Friends'},
        {itemId: 'privacy-checkup-audience-only-me', itemName: 'Only me'},
      ],
    }
  }
}
</script>

<template>
  <div class="menu-frame-wrapper">
    <menu-title></menu-title>
    <div class="frame-inner">
      <h2>Who can see your social interactions alongside ads?</h2>
      <p>Social interactions are likes, follows, comments, shares app usage, check-ins, recommendations and events that you've joined. You can decide whether your friends can see your social interactions alongside ads.</p>  <!--Facebook reference-->
      <p>For example, if you ike a Page that's running an ad, we might let your friends know that you liked the Page when they see the ad.</p>
      <br>
      <br>
      <p>Social interactions are not shown alongside ads about social issues, elections or politics that have a label showing who paid for the ad.</p>
      <br>
      <p>If you're under 18, your social interactions are not shown alongside any ads. Changing who can see your social interactions will not have an effect until you're 18 years old.</p>
      <div class="info-section">
        <p>Who can see your social interactions alongside ads?</p>
        <menu-multi-radio-item :radio-items="interactionsItems"
                               :radio-name="interactionsItemsName"
        >
        </menu-multi-radio-item>
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
  padding-top: 2vh;
  border-bottom: solid 1px #939393;
}

.info-section p {
  font-weight: 600;
}
</style>