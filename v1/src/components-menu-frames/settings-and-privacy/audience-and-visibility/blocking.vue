<script>
import menuTitle from "../../../components-menu-props/menuTitle.vue";
import menuItem from "../../../components-menu-props/menuItem.vue";
export default {
  name: "blocking",
  components: {
    menuTitle,
    menuItem
  },
  data: function () {
    return {
      header: 'Blocking'
    }
  }
}
</script>

<template>
<div class="menu-frame-wrapper">
  <menu-title :header-title="header"></menu-title>
  <div class="frame-inner">
    <h2>Blocked people</h2>
    <p>Once you've blocked someone, that person can no longer see things you post on your Timeline, tag you, invite you to events or groups, start a conversation with you, or add you as a friend.</p>
    <hr>
    <span class="blocked-list-link" @click="$router.push('MissingFeature')">
      <div class="blocked-list-add"></div>
      <p>Add to blocked list</p>
    </span>
    <hr>
    <div class="blocked-list-container">
      <p>You haven't blocked anyone yet.</p>
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

.blocked-list-link{
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr;
  background: none;
  color: #3C8BFF;
}

.blocked-list-link p{
  align-self: center;
  font-size: 2.6rem;
}

.blocked-list-link p:active{
  color: #0c56c9;
}

.blocked-list-add{
  height: 10vw;
  width: 10vw;
  border-radius: 5vh;
  background: #d3e4ff;
  align-self: center;
}

.blocked-list-add::before, .blocked-list-add::after{
  height: 6vw;
  margin-top: 2vw;
  left: 7.2vw;
  position: absolute;
  content: " ";
  width: 6px;
  background: #3C8BFF;
}

.blocked-list-add::after{
  transform: rotate(90deg);
}

.blocked-list-add:active{
  background: #9ac3ff;
}

.blocked-list-container {
  height: 30vh;
  width: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
}

.blocked-list-container p{
  color: #939393;
}
</style>