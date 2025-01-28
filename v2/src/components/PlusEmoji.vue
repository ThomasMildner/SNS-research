<template>
  <transition name="slide-fade">
    <div v-if="ifCondition" class="emoji-wrapper">
      <span class="plus-symbol">+</span>
      <EmojiSvg class="plus-emoji-icon" :percentage="100"></EmojiSvg>
    </div>
  </transition>
</template>
  
<script setup lang="ts">
import EmojiSvg from './svgs/EmojiSvg.vue';

const { ifCondition } = defineProps({
  ifCondition: {
    type: Boolean,
    default: false
  }
});
</script>
  
<style scoped>
.emoji-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 0.15rem;
}

.plus-emoji-icon {
  height: 1.25rem;
  width: 1.25rem;
}

.plus-symbol {
  font-size: 1rem;
  color: var(--secondary-color);
}

@keyframes fadeToTop {
  0% {
    margin-bottom: 0;
    opacity: 100%;
  }

  100% {
    margin-bottom: 5rem;
    opacity: 0;
  }
}

.slide-fade-leave-active {
  animation-name: fadeToTop;
  animation-duration: 1s;
  animation-timing-function: ease-out;
}

.slide-fade-leave-to {
  opacity: 0;
}
</style>
  