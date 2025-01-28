<script>
import menuTitle  from '../../components-menu-props/menuTitle.vue'
import menuItem  from '../../components-menu-props/menuItem.vue'

export default {
  name: "deleteInformation",
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
      <h2>How can you delete your information?</h2>
      <div class="item-wrapper">
        <menu-item class="item"
                   id="delete-information-access-info"
                   item-name="Access your information"
                   @click="$router.push('AccessInformation')"
        ></menu-item>
        <menu-item class="item"
                   id="delete-information-activity-log"
                   item-name="Activity log"
                   @click="$router.push('ActivityLog')"
        ></menu-item>
        <menu-item class="item"
                   id="delete-information-delete-account"
                   item-name="Delete your account"
                   @click="$router.push('HelpCentre')"
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