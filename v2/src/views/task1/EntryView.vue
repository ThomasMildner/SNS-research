<template>
  <div id="entry-view" class="left-right-padding scroll-style">

    <div class="earth-wrapper">
      <EarthSvg class="icon" />
    </div>
    <div class="description-wrapper">
      <p class="description">
        <em>Connection</em> is key! Sign up and <em>connect</em> with people all over the world!
      </p>
    </div>

    <!-- Dark Pattern Version -->
    <div v-if="appstate.darkPatterns" class="bottom-buttons-wrapper dark-pattern">
      <MyButton class="b-button" button-style="highlight" @click="router.push('/premium')">Get started
      </MyButton>
      <MyButton class="b-button" button-style="subtle" @click="popupOpen = true">Try out basic version</MyButton>
      <MyButton class="b-button" @click="router.push('/sign-in')">Sign in</MyButton>
    </div>

    <!-- Non Dark Pattern Version -->
    <div v-else class="bottom-buttons-wrapper">
      <MyButton class="b-button" @click="router.push('/premium')"> Sign up to premium</MyButton>
      <MyButton class="b-button" @click="router.push('/sign-up')">Sign up to basic version</MyButton>
      <MyButton class="b-button" @click="router.push('/sign-in')">Sign in</MyButton>
    </div>

  </div>

  <!-- Dark Pattern Version Only -->
  <Popup popupId="continue-without-premium-1" class="dark-pattern" :open="popupOpen" @close="popupOpen = false">
    <template v-slot:content>
      <p> With the premium version you get access to a lot more features. You sure that you want to continue? </p>
    </template>

    <template v-slot:buttons>
      <MyButton size="small" button-style="subtle" @click="router.push('/sign-up')">Continue
      </MyButton>
      <MyButton size="small" @click="router.push('/premium')">See options</MyButton>
    </template>
  </Popup>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import router from '@/router';
import { appstate } from '@/stores/appstate_store';
import MyButton from '@/components/MyButton.vue';
import Popup from '@/components/Popup.vue';
import EarthSvg from '@/components/svgs/EarthSvg.vue';
import { generateIds } from '@/functions'

const popupOpen = ref(false);

onMounted(() => {
  generateIds('entry-view');
});
</script>

<style scoped>
#entry-view {
  display: grid;
  grid-template-columns: auto;
  box-sizing: content-box;
  width: 100%;
}

.earth-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
}

.icon {
  max-width: 70%;
  height: auto;
}

.description-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.description {
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  line-height: 2rem;
}

.description em {
  font-weight: 500;
  color: var(--secondary-color);
}

.bottom-buttons-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 0.75rem;
}
</style>