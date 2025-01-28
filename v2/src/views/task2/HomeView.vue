<template>
  <div id="home-view" class="no-padding">
    <div class="post-container">
      <!-- Video starts -->
      <div class="post-video-container">
        <video autoplay muted playsinline loop class="post-video interact-node" @click="toggleVideo($event)"
          @playing="onPlay" @pause="videoPlaying = false">
          <source src="@/assets/videos/video1.mp4" type="video/mp4">
        </video>
        <div class="shorts-page-box">
          <label class="shorts-page-title inactive" @click="appstate.constructionPopupOpen = true">Friends</label>
          <label class="shorts-page-title active">|</label>
          <label class="shorts-page-title active">For you</label>
        </div>
        <!-- Video sidebar-->
        <div class="video-sidebar">
          <div class="video-sidebar-button interact-node" @click="appstate.constructionPopupOpen = true">
            <img class="video-profile-image" :src="defaultImage">
          </div>
          <div class="video-sidebar-button interact-node" @click="appstate.constructionPopupOpen = true">
            <VideoSvg class="video-icon" name="like" />
            <label>Like</label>
          </div>
          <div class="video-sidebar-button interact-node" @click="commentsOpen = true">
            <VideoSvg class="video-icon interact-node" name="comment" />
            <label>Comment</label>
          </div>
          <div class="video-sidebar-button interact-node" @click="appstate.constructionPopupOpen = true">
            <VideoSvg class="video-icon" name="share" />
            <label>Share</label>
          </div>
          <div class="video-sidebar-button interact-node"
            @click="appstate.premiumStatus == PremiumStatus.Basic ? premiumPopupOpen = true : appstate.constructionPopupOpen = true">
            <div v-if="appstate.premiumStatus == PremiumStatus.Basic" class="video-grid">
              <VideoSvg class="download-icon" name="download" />
              <CrownSvg class="download-crown-svg" :simplified="true" />
            </div>
            <VideoSvg v-else class="video-icon" name="download" />
            <label>Download</label>
          </div>

          <div class="video-sidebar-button">
            <div class="vinyl-disk" :class="{ 'playing': videoPlaying }">
              <img class="vinyl-image" :src="defaultImage">
            </div>
          </div>
        </div>
      </div>
      <!-- Video ends -->

      <div class="post-description">
        <label class="post-name">By Alex Turner</label>
        <p>Watch birds glide against a beautiful ocean sunset, painting the sky in a serene dance of colors.</p>
        <div class="music-row">
          <VideoSvg name="music" class="music-icon" />
          <label class="music-label">Original Sound</label>
        </div>
      </div>

      <CommentBox :open="commentsOpen" @close="commentsOpen = false"
        @updateNumberOfComments="handleUpdateNumberOfComments" />
    </div>
  </div>

  <Popup popupId="premiun-access" :open="premiumPopupOpen" @close="premiumPopupOpen = false">
    <template v-slot:content>
      <div class="popup-centered-svg">
        <CrownSvg class="popup-crown-svg" />
      </div>
      <p class="premium-popup-text"> You need premium to access that feature.</p>
    </template>

    <template v-slot:buttons>
      <MyButton size="small" @click="premiumPopupOpen = false">Close
      </MyButton>
    </template>
  </Popup>


  <!-- Dark Pattern Version Only -->
  <Popup popupId="personal-data" class="dark-pattern" :open="personalPopupOpen" @close="onPersonalDataClose()">

    <template v-slot:content>
      <p> This app wants to use your personal data to provide a more relevant and personalized experience. </p>
    </template>

    <template v-slot:buttons>
      <MyButton size="small" button-style="subtle" @click="onPersonalDataClose()">Deny
      </MyButton>
      <MyButton size="small" @click="onPersonalDataAllow()">Allow</MyButton>
    </template>
  </Popup>

  <Popup popupId="setup-profile" :open="appstate.profilePopupOpen" @close="appstate.profilePopupOpen = false">

    <template v-slot:content>
      <p class="setup-profile-text">To post a <em>comment</em>, please choose a <em>name</em> in the <em>Edit
          profile</em> section. Once you've finished setting up your profile, you will unlock this <em>feature</em>.
        Would you like to do that now?</p>
    </template>

    <template v-slot:buttons>
      <!-- Subtle in Dark Patterns version -->
      <MyButton :class="{ 'dark-pattern': appstate.darkPatterns }" size="small"
        :button-style="appstate.darkPatterns ? 'subtle' : 'neutral'" @click="appstate.profilePopupOpen = false">Close
      </MyButton>
      <MyButton size="small" @click="onSetupProfile">Setup profile
      </MyButton>
    </template>
  </Popup>
</template>

<script setup lang="ts">
import VideoSvg from '@/components/svgs/VideoSvg.vue';
import CommentBox from '@/components/CommentBox.vue'
import Popup from '@/components/Popup.vue';
import MyButton from '@/components/MyButton.vue';
import { appstate } from '@/stores/appstate_store';
import { defaultImage } from '@/stores/image_store';
import { onMounted, ref, type Ref } from 'vue';
import CrownSvg from '@/components/svgs/CrownSvg.vue';
import { PremiumStatus } from '@/interface';
import useUserStore from '@/stores/user_store';
import router from '@/router';
import { generateIds } from '@/functions';

const commentsOpen = ref(false);
const numberOfComments = ref(0);
const videoPlaying = ref(false);

const premiumPopupOpen = ref(false);
const personalPopupOpen = ref(false);

const onPlay = () => {
  videoPlaying.value = true;
  if (appstate.darkPatterns && !appstate.personalDataAsked) {
    setTimeout(() => {
      personalPopupOpen.value = true;
    }, 1000);
  }
}

const toggleVideo = (event: MouseEvent) => {
  const videoElement = event.target as HTMLVideoElement;
  if (videoElement.paused) {
    videoElement.play();
  } else {
    videoElement.pause();
  }
}

const handleUpdateNumberOfComments = (newNumber: number) => {
  numberOfComments.value = newNumber;
}

const onPersonalDataAllow = () => {
  useUserStore().setPersonalDataChecked(true);
  appstate.personalDataAsked = true;
  personalPopupOpen.value = false;
}

const onPersonalDataClose = () => {
  appstate.personalDataAsked = true;
  personalPopupOpen.value = false;
}

const onSetupProfile = () => {
  router.push('/edit-profile');
  appstate.profilePopupOpen = false;
}

onMounted(() => {
  generateIds("home-view");
});
</script>

<style scoped>
#home-view {
  width: 100%;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.post-container {
  position: relative;
  flex: 1;
  /* Take up the available height */
  background-color: black;
  width: 100%;
  height: 100%;
  /*
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    */
}

.post-container::-webkit-scrollbar {
  display: none;
}

.post-video-container {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: black;
}

.post-video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.shorts-page-box {
  position: absolute;
  top: 1rem;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.shorts-page-title {
  color: white;
  font-weight: 400;
  font-size: 1.25rem;
  text-align: center;
  cursor: pointer;
}

.shorts-page-title.active {
  opacity: 90%;
}

.shorts-page-title.inactive {
  opacity: 50%;
}

.video-sidebar {
  position: absolute;
  bottom: 1rem;
  right: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.video-sidebar-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  cursor: pointer;
  opacity: 90%;
}

.video-profile-image {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 1rem;
  border: var(--bg-color) 0.15rem solid;
}

.video-icon {
  width: 2.25rem;
  height: auto;
  margin-bottom: 0.25rem;
}

.video-grid {
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 0.25rem 1rem 1.5rem;
  margin-bottom: 0.25rem;
}

.download-icon {
  grid-row: 1;
  grid-column: 2 / span 2;
  width: 2.25rem;
  height: auto;
}

.download-crown-svg {
  grid-row: 1;
  grid-column: 1 / span 2;
  width: 1rem;
  height: auto;
  z-index: 1;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

.vinyl-disk {
  width: 3rem;
  height: 3rem;
  background: radial-gradient(circle at center, #565656, #000);
  /* Radial gradient background */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: var(--bg-color) 0.05rem solid;
}

.vinyl-disk.playing {
  transform-origin: center center;
  animation: spin 4s linear infinite;
}

.vinyl-image {
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
}

.video-sidebar-button label {
  text-align: center;
  font-weight: 400;
  font-size: 0.75rem;
  color: var(--bg-color);
}

.post-description {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  width: 73%;
  display: flex;
  flex-direction: column;
}

.post-name {
  color: white;
  margin-bottom: 0.5rem;
}


.post-description p {
  color: white;
  font-size: 1rem;
  margin: 0;
  margin-bottom: 1rem;
}

.music-row {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}

.music-icon {
  height: 1rem;
  width: auto;
  margin-right: 0.5rem;
}

.music-label {
  color: white;
}

.popup-centered-svg {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.premium-popup-text {
  margin-top: 0.25rem;
  text-align: center;
}
</style>