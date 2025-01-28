<template>
  <div class="app-wrapper" :class="{ 'navbar-grid': appstate.navbar, 'invisible': isLandscape || !isMobile() }">

    <header v-if="appstate.intteruptButton" id="header-button-row" class="header-button-row">
      <div id="interrupt-button" class="icon-box interrupt-button" @click="interruptOpen = true">
        <HeaderSvg class="header-icon" name="warning" />
      </div>
      <div class="icon-box help-button" @click="helpOpen = true">
        <HeaderSvg class="header-icon" name="question" />
      </div>
      <!--<div class="icon-box developer-button" @click="developerOpen = true">
        <HeaderSvg class="header-icon" name="hammer" />
      </div>-->
    </header>

    <main id="router-view" class="router-view">
      <RouterView />
    </main>

    <footer class="navbar" v-if="appstate.navbar">
      <NavigationBar />
    </footer>

  </div>

  <Popup popupId="interrupt" :open="interruptOpen" @close="interruptOpen = false" :vertical="true">
    <template v-slot:content>
      <p>
        Something went wrong? Please try to reload the page before proceeding with any of the following actions.
      </p>
    </template>

    <template v-slot:buttons>
      <MyButton size="small" @click="onInterrupt('reset')">Reset Task</MyButton>
      <MyButton size="small" @click="onInterrupt('skip')">Skip Task</MyButton>
      <MyButton size="small" @click="onInterrupt('abort')">Abort Study</MyButton>
    </template>
  </Popup>

  <Popup popupId="interrupt-are-you-sure" :open="interruptAreYouSureOpen" @close="interruptAreYouSureOpen = false">

    <template v-slot:content>
      <p>
        Are you sure you want to interrupt the study?
      </p>
    </template>

    <template v-slot:buttons>
      <MyButton size="small" @click="onInterruptConfirm">Confirm</MyButton>
      <MyButton size="small" @click="onInterruptCancel">Cancel</MyButton>
    </template>
  </Popup>

  <Popup popupId="help" :open="helpOpen" @close="helpOpen = false">
    <template v-slot:content>
      <p>
        <em>{{ taskDescriptions[useStudyDataStore().currentTask()] }}</em>
      </p>
    </template>

    <template v-slot:buttons>
      <MyButton size="small" @click="helpOpen = false">Close</MyButton>
    </template>
  </Popup>

  <!--
  <Popup popupId="developer" :open="developerOpen" @close="developerOpen = false">

    <template v-slot:content>
      <p style="margin: 0.5rem 0;">
        Developer tools:
      </p>
      <Checkbox v-model="appstate.darkPatterns">Dark Patterns</Checkbox>
      <Checkbox v-model="appstate.personalDataAsked">Personal Data Asked</Checkbox>
      <MySelect name="Premium Status" style="margin-bottom: 1rem" v-model="appstate.premiumStatus"
        :options="Object.values(PremiumStatus)" />
    </template>

    <template v-slot:buttons>
      <MyButton size="small" @click="developerOpen = false">Close</MyButton>
      <MyButton size="small" @click="onReloadPage()">Reload page</MyButton>
    </template>
  </Popup>
-->

  <!-- This screen is shown on non mobile devices -->
  <div v-if="!isMobile()" class="invalid-page-wrapper">
    <p>
      This study is only eligible on mobile devices. Please use a suitable device to begin.
    </p>
  </div>

  <!-- This screen is shown when the phone is in landscape mode -->
  <div v-if="isLandscape && isMobile()" class="invalid-page-wrapper">
    <p>
      This study is only eligible in portrait orientation, but it seems that you are trying to do it in landscape
      mode. Please turn your device and reload the page.
    </p>
  </div>

  <ConstructionPopup />
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { appstate } from './stores/appstate_store';
import MyButton from './components/MyButton.vue';
import Popup from './components/Popup.vue';
import HeaderSvg from '@/components/svgs/HeaderSvg.vue';
import useStudyDataStore from './stores/studydata_store';
import NavigationBar from './components/NavigationBar.vue';
//import Checkbox from './components/Checkbox.vue';
import ConstructionPopup from './components/ConstructionPopup.vue';
//import MySelect from './components/textfield/MySelect.vue';
//import { PremiumStatus } from './interface';
import { useRoute } from 'vue-router';
import router from './router';

const interruptOpen = ref(false);
const interruptAreYouSureOpen = ref(false);
const interruptAction = ref('');

const helpOpen = ref(false);
const developerOpen = ref(false);

const isLandscape = ref(window.innerWidth > window.innerHeight);
const isMobile = () => {
  return true
  //return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|FairPhone|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent));
}

/*
const keyboardOut = ref(false);
var keyboardFocusTimer: number;
var keyboardOutTimer: number;
*/

// Setting up height with the top bar
const vh = ref(window.innerHeight * 0.01);
document.documentElement.style.setProperty('--vh', `${vh.value}px`);

/*
window.addEventListener('resize', () => {
  // Timer is needed for the keyboard to fire a focus event sometimes
  keyboardFocusTimer = setTimeout(onResize, 1000);
}); */

/*
function onResize() {
  if (!keyboardOut.value) {
    // Adjust Values only when keyboard isnt out
    isLandscape.value = window.innerWidth > window.innerHeight;
    vh.value = window.innerHeight * 0.01;
  }
  clearTimeout(keyboardFocusTimer);
}*/

/*
addEventListener('focusin', (event: Event) => {
  if (event.target instanceof HTMLElement && (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA')) {
    clearTimeout(keyboardOutTimer);
    keyboardOut.value = true;
  }
});

addEventListener('focusout', (event: Event) => {
  // Timer is needed for the keyboard to dissapear
  keyboardOutTimer = setTimeout(() => {
    keyboardOut.value = false;
    isLandscape.value = window.innerWidth > window.innerHeight;
    vh.value = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh.value}px`);
  }, 1000);
});
*/

/*
const onReloadPage = () => {
  developerOpen.value = false;
  location.reload();
}
*/

const onInterrupt = (newInterruptAction: string) => {
  interruptOpen.value = false;
  interruptAreYouSureOpen.value = true;
  interruptAction.value = newInterruptAction;
}

const onInterruptConfirm = () => {
  interruptAreYouSureOpen.value = false;
  if (interruptAction.value == "reset") {
    useStudyDataStore().handleResetTask();
  } else if (interruptAction.value == "skip") {
    useStudyDataStore().handleSkipTask();
  } else if (interruptAction.value == "abort") {
    useStudyDataStore().handleAbortStudy();
  }
  interruptAction.value = '';
}

const onInterruptCancel = () => {
  interruptAreYouSureOpen.value = false;
  interruptAction.value = '';
}

const taskDescriptions = {
  task1: "Your first task is to create an account and sign up for the social media app.",
  task2: "Your second task is to leave a nice comment on a video."
} as { [task: string]: string }

onMounted(() => {
  // Resize window on reload
  vh.value = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh.value}px`);

  if (!sessionStorage.getItem('first-time-reloaded')) {
    sessionStorage.setItem('first-time-reloaded', 'true');
    const routeName = computed(() => useRoute().name).value;
    if (routeName != "welcome" && routeName != "wrong-page") {
      router.push('/');
    }
    //The style works better after reloading
    location.reload();
  }
  useStudyDataStore().addPathNodeListeners();
})

onUnmounted(() => {
  useStudyDataStore().removePathNodeListeners();
});
</script>

<style scoped>
.app-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
}

.invisible {
  display: none !important;
}

.header-button-row {
  width: 100%;
  box-sizing: content-box;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: row;
}

.icon-box {
  margin-top: 0.1rem;
  width: 1.15rem;
  height: auto;
  cursor: pointer;
  z-index: 1;
}

.interrupt-button {
  margin-left: 0.2rem;
}

.help-button {
  margin-left: auto;
  margin-right: 0.2rem;
}

.developer-button {
  margin-left: auto;
  margin-right: 0.1rem;
}

.header-icon {
  width: 100%;
  height: 100%;
}


.navbar-grid {
  display: grid;
  grid-template-rows: auto min-content;
  grid-template-columns: 100%;
}

.router-view {
  display: flex;
  width: inherit;
  overflow: hidden;
  grid-column: 1;
  grid-row: 1;
}

.navbar {
  grid-column: 1;
  grid-row: 2;
}

.invalid-page-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: var(--secondary-color);
}

.invalid-page-wrapper p {
  color: var(--bg-color);
  margin: 1rem;
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 400;
}
</style>