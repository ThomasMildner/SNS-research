<script>
import menuTitle  from '../../components-menu-props/menuTitle.vue'
import menuItem  from '../../components-menu-props/menuItem.vue'

export default {
  name: "sellingInfoToAdvertisers",
  components: {
    menuTitle,
    menuItem,
  },
}
</script>

<template>
  <div class="menu-frame-wrapper">
    <menu-title ></menu-title>
    <div class="frame-inner">
      <h2>Does this app sell your information to advertisers?</h2>
      <div class="item-wrapper">
        <menu-item class="item"
                   id="selling-info-off-app-activity"
                   item-name="Review your off-app activity"
                   @click="$router.push('OffAppActivity')"
        ></menu-item>
        <menu-item class="item"
                   id="selling-info-access-info"
                   item-name="Access your information"
                   @click="$router.push('AccessInformation')"
        ></menu-item>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu-frame-wrapper {
}

h1{
  font-size: 4rem;
}

.frame-inner {
  width: 95%;
  margin: 0 auto;
}

.item-wrapper{
  width: 100%;
  height: min-content;
  filter: drop-shadow(0 0 1rem #e3e3e3);
  border-radius: 1rem;
  background: #ffffff;
}
.item-wrapper p {
  text-transform: uppercase;
  color: #bcbcd2;
  filter: none;
  padding-left: 2vw;
  font-size: 2rem;
}

.item {
  height: min-content;
  border-top: solid 1px #bcbcd2;
}

</style>