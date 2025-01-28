<script>
import menuTitle from '../../components-menu-props/menuTitle.vue'
import menuMultiRadioItem from '../../components-menu-props/menuMultiRadioItem.vue'

export default {
  name: "extendedPrivacySettings",
  components: {
    menuTitle,
    menuMultiRadioItem,
  },
  props: {
    title: {
      type: String,
    }
  },
  methods: {
    toggleVisibility() {
      if (this.isVisible) {
        this.isVisible = false;
        this.rotate()
      } else {
        this.isVisible = true;
        this.rotate()
      }
    },
    rotate() {
      this.deg += 180
    }
  },
  data: function() {
    return {
      deg: 0,
      isVisible: false,

      radioName: 'extPrivacyRadio',
      radioItems: [
        {itemId: 'ext-privacy-settings-bullet-notification-everyone', itemName: 'Public'},
        {itemId: 'ext-privacy-settings-bullet-notification-friends-of-friends', itemName: 'Friends'},
        {itemId: 'ext-privacy-settings-bullet-notification-friends', itemName: 'Friends except...'},

      ],
      ddRadioItems: [
        {itemId: 'ext-privacy-settings-bullet-notification-only-me', itemName: 'Specific friends'},
        {itemId: 'ext-privacy-settings-bullet-notification-selected-friends', itemName: 'Only me'},
      ]
    }
  }
}
</script>

<template>
  <div class="menu-frame-wrapper">
    <menu-title :headerTitle=title></menu-title>
    <div class="frame-inner">
      <menu-multi-radio-item :radio-items=radioItems
                             :radio-name=radioName
      >
      </menu-multi-radio-item>
      <div
          @click="toggleVisibility()"
          style="text-decoration: none; color: inherit;"
          class="drop-down-head menu-item path-node">
        <h3>More</h3>
        <img
            src="../../../img/item-arrow.png"
            class="transition"
            v-bind:style="{transform: `rotate(${deg}deg)`}">
      </div>
      <menu-multi-radio-item class="drop-down-menu-item"
                             v-show="this.isVisible"
                             :radio-items="this.ddRadioItems"
                             :radio-name="radioName"
      >
      </menu-multi-radio-item>
    </div>
  </div>
</template>

<style scoped>
.frame-inner {
  width: 95%;
  margin: 0 auto;
}

.menu-item {
  display: grid;
  grid-template-columns: 5fr 1fr;
  width: 100%;
  height: 5vh;
}
.menu-item:hover {
  background: #f9f9ff;
}
.menu-item img {
  height: 3em;
  float: right;
  margin: 0 auto;
  rotate: 90deg;
  align-self: center;
}

.menu-item h3 {
  padding-left: 3vw;
  font-family: Poppins;
  font-weight: 400;
  font-size: 2.3em;
  line-height: 1.2em;
  color: #001a2f;
  align-self: center;
}

.drop-down-menu-item{
  border-radius: 3vw;
}

.transition {
  transition: transform 0.2s ease-out;
}
</style>