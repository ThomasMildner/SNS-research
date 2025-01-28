<template>
    <div class="profile-picture-box" :class="{
        'ndp-style': !appstate.darkPatterns,
        'dp-style dark-pattern': appstate.darkPatterns,
        // Different colors only in Dark Patterns Version
        'profile-red': appstate.darkPatterns && percentage < 25,
        'profile-orange': appstate.darkPatterns && 25 <= percentage && percentage < 50,
        'profile-yellow': appstate.darkPatterns && 50 <= percentage && percentage < 75,
        'profile-lime': appstate.darkPatterns && 75 <= percentage && percentage < 100,
        'profile-green': appstate.darkPatterns && percentage >= 100
    }">

        <div class="profile-picture-image-box interact-node" :class="{ 'edit-mode': editMode }"
            @click="editMode ? appstate.imagePopupOpen = true : null">
            <img class="profile-picture-image"
                :src="userData.profilePicture != '' ? imageMap.get(userData.profilePicture) : defaultImage"
                alt="Profile" />
        </div>

        <div v-if="editMode" class="change-picture-box interact-node" @click="appstate.imagePopupOpen = true">
            <TaskSvg class="camera-icon" name="camera" :fill="bgColor" :stroke="secondaryColor" />
        </div>

        <!-- Only in Dark Patterns Version -->
        <PlusEmoji :if-condition="editMode && appstate.darkPatterns && userData.profilePicture.trim() == ''"
            class="plus-emoji dark-pattern" />

        <!-- Only in Dark Patterns Version -->
        <div v-if="appstate.darkPatterns" class="emoji-circle dark-pattern">
            <EmojiSvg v-bind:percentage="percentage" class="emoji-icon" />
        </div>

        <!-- Only in Dark Patterns Version -->
        <div v-if="appstate.darkPatterns" class="completion-box dark-pattern">
            <label class="completion-text">{{ percentage }}% complete</label>
        </div>
    </div>
</template>

<script setup lang="ts">
import EmojiSvg from "@/components/svgs/EmojiSvg.vue";
import { ref, watch } from "vue";
import { calcUserDataPercentage } from "@/functions";
import type { UserData } from "@/interface";
import { appstate } from "@/stores/appstate_store";
import TaskSvg from "./svgs/TaskSvg.vue";
import { bgColor, secondaryColor } from "@/assets/global_colors";
import PlusEmoji from "./PlusEmoji.vue";
import { defaultImage, imageMap } from "@/stores/image_store";

const { userData, editMode } = defineProps({
    userData: {
        type: Object as () => UserData,
        required: true
    },
    editMode: {
        type: Boolean,
        default: false
    }
});

const percentage = ref(calcUserDataPercentage(userData));
const oldPercentage = ref(percentage.value);

function animatePercentageChange(newPercentage: number) {
    if (oldPercentage.value == newPercentage) {
        return;
    }

    const animationLength = 500;
    const difference = Math.abs(newPercentage - oldPercentage.value);

    let intervalId: number;

    if (oldPercentage.value < newPercentage) {
        intervalId = setInterval(() => percentage.value < newPercentage ? percentage.value++ : null, animationLength / difference);
    } else if (oldPercentage.value > newPercentage) {
        intervalId = setInterval(() => percentage.value > newPercentage ? percentage.value-- : null, animationLength / difference);
    }

    setTimeout(() => {
        clearInterval(intervalId);
        percentage.value = newPercentage;
        oldPercentage.value = newPercentage;
    }, animationLength);
}

watch(userData, () => animatePercentageChange(calcUserDataPercentage(userData)), { deep: true });
</script>

<style scoped>
.profile-picture-box {
    padding-top: 0.5rem;
    display: grid;
    grid-template-rows: 5% 57.5% 12.5% 7.5% 7.5% 5% 5%;
    /** 15% is overload */
    grid-template-columns: 5% 15% 5% 12.5% 25% 12.5% 5% 15% 5% 15%;
    z-index: 0;
}

/** Dark Patterns Version only */
.profile-picture-box.dp-style {
    margin-bottom: 1rem;
}

.profile-picture-image {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 50%;
    outline-style: solid;
    outline-width: 0.6rem;
    outline-offset: -0.1rem;
    -webkit-transition: outline-color 0.5s linear;
    -ms-transition: outline-color 0.5s linear;
    transition: outline-color 0.5s linear;
}

.profile-picture-image-box {
    grid-row: 1 / span 5;
    grid-column: 2 / span 7;
}

.profile-picture-image-box.edit-mode:hover {
    cursor: pointer;
}

.change-picture-box {
    grid-row: 3 / span 2;
    grid-column: 7 / span 2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5% 10% 10% 10%;
    background-color: var(--secondary-color);
    border: 0.15rem solid var(--bg-color);
    border-radius: 100vh;
}

.change-picture-box:hover {
    cursor: pointer;
}

.plus-emoji {
    grid-row: 3 / span 2;
    grid-column: 9 / span 2;
}

.emoji-circle {
    grid-row: 4 / span 2;
    grid-column: 5;
    border-radius: 100vmax 100vmax 0 0;
    padding-top: 6%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

.completion-box {
    grid-row: 6 / span 2;
    grid-column: 4 / span 3;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

.completion-text {
    color: var(--dark-color);
    font-size: 0.75rem;
}

.emoji-circle,
.completion-box {
    -webkit-transition: background-color 0.5s linear;
    -ms-transition: background-color 0.5s linear;
    transition: background-color 0.5s linear;
}

/* Non Dark Patterns Style */
.ndp-style .profile-picture-image {
    outline-color: var(--secondary-color);
}

/* Profile Red */
.profile-red .profile-picture-image {
    outline-color: var(--profile-red);
}

.profile-red .emoji-circle,
.profile-red .completion-box {
    background-color: var(--profile-red);
}

/* Profile Orange */
.profile-orange .profile-picture-image {
    outline-color: var(--profile-orange);
}

.profile-orange .emoji-circle,
.profile-orange .completion-box {
    background-color: var(--profile-orange);


}

/* Profile Yellow */
.profile-yellow .profile-picture-image {
    outline-color: var(--profile-yellow);
}

.profile-yellow .emoji-circle,
.profile-yellow .completion-box {
    background-color: var(--profile-yellow);


}

/* Profile Lime */
.profile-lime .profile-picture-image {
    outline-color: var(--profile-lime);
}

.profile-lime .emoji-circle,
.profile-lime .completion-box {
    background-color: var(--profile-lime);
}

/* Profile Green */
.profile-green .profile-picture-image {
    outline-color: var(--profile-green);
}

.profile-green .emoji-circle,
.profile-green .completion-box {
    background-color: var(--profile-green);
}
</style>