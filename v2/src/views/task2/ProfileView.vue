<template>
    <div id="profile-view" class="full-padding">

        <div class="top-wrapper">
            <div class="settings-box interact-node" @click="appstate.constructionPopupOpen = true">
                <SettingsSvg class="settings-icon" />
            </div>

            <!-- Profile View ------------------------------------------------------------------------------------------->
            <div class="view-wrapper">

                <!-- Profile Picture (Changes margin in Dark Patterns Version) -->
                <ProfilePictureBox :user-data="useUserStore().getUserData()" class="profile-picture-box" />

                <!-- Name Label -->
                <label
                    v-if="useUserStore().getUserData().firstName != '' || useUserStore().getUserData().lastName != ''"
                    class="profile-name-text">{{ useUserStore().getUserData().firstName }}
                    {{ useUserStore().getUserData().lastName }}</label>
                <label v-else class="profile-name-text">Unnamed User</label>

                <!-- Description -->
                <p v-if="useUserStore().getUserData().description.trim() != ''" class="profile-description-text">
                    {{ useUserStore().getUserData().description }}
                </p>
                <p v-else class="profile-description-text">Edit your profile to add a description</p>

                <!-- Edit Profile Button -->
                <div class="edit-profile-button-box">
                    <MyButton class="edit-profile-button" size="small" @click="router.push('/edit-profile')">Edit
                        profile
                    </MyButton>
                </div>
            </div>
        </div>

        <!-- Tasks View (Dark Pattern Version only) --------------------------------------------------------------------->
        <div v-if="appstate.darkPatterns && numberTasksDone() < 3" class="tasks-wrapper dark-pattern">

            <!-- Title and Progress-->
            <h4 class="tasks-title">
                Complete your profile&nbsp;&nbsp;&nbsp;&nbsp;<em>{{ numberTasksDone() }}/3</em>
            </h4>

            <div class="task-row">

                <!-- Picture Task -->
                <div class="task-box picture-task">
                    <div class="task-icon-container">
                        <TaskSvg class="task-icon" name="camera" />
                    </div>
                    <div class="task-text-container">
                        <p class="task-text">Add a picture</p>
                    </div>
                    <div class="task-button-container">
                        <MyButton v-if="!task1Done()" class="task-button" size="small" @click="onAddPicture()">Add
                        </MyButton>
                        <em v-else class="added-text">Added</em>
                    </div>
                </div>

                <!-- Description Task -->
                <div class="task-box description-task">
                    <div class="task-icon-container">
                        <TaskSvg class="task-icon" name="description" />
                    </div>
                    <div class="task-text-container">
                        <p class="task-text">Add a description</p>
                    </div>
                    <div class="task-button-container">
                        <MyButton v-if="!task2Done()" class="task-button" size="small" @click="onAddDescription()">Add
                        </MyButton>
                        <em v-else class="added-text">Added</em>
                    </div>
                </div>

                <!-- Details Task -->
                <div class="task-box details-task">
                    <div class="task-icon-container">
                        <TaskSvg class="task-icon" name="work" />
                    </div>
                    <div class="task-text-container">
                        <p class="task-text">Add more details</p>
                    </div>
                    <div class="task-button-container">
                        <MyButton v-if="!task3Done()" class="task-button" size="small" @click="onAddDetails()">Add
                        </MyButton>
                        <em v-else class="added-text">Added</em>
                    </div>
                </div>

            </div>
        </div>

        <!-- Postss View ---------------------------------------------------------------------------------------------->
        <div class="post-wrapper">
            <h2 class="posts-title">Posts</h2>
            <div class="post-container">
                <EmptySvg class="empty-icon" />
                <p class="no-posts-text">
                    No posts yet
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import MyButton from '@/components/MyButton.vue';
import TaskSvg from '@/components/svgs/TaskSvg.vue';
import EmptySvg from '@/components/svgs/EmptySvg.vue';
import SettingsSvg from '@/components/svgs/SettingsSvg.vue'
import ProfilePictureBox from '@/components/ProfilePictureBox.vue';
import router from '@/router';
import { appstate } from '@/stores/appstate_store';
import useUserStore from '@/stores/user_store';
import { onMounted, ref } from 'vue';
import { generateIds } from '@/functions';

const task1Done = (): boolean => {
    return useUserStore().getUserData().profilePicture.trim() != '';
}

const task2Done = (): boolean => {
    return useUserStore().getUserData().description.trim() != '';
}

const task3Done = (): boolean => {
    return useUserStore().getUserData().city.trim() != '' &&
        useUserStore().getUserData().jobTitle.trim() != '';
}

const numberTasksDone = (): number => {
    return [task1Done(), task2Done(), task3Done()].filter(task => task).length;
}

const onAddPicture = () => {
    router.push('/edit-profile');
    appstate.imagePopupOpen = true;
}

const onAddDescription = () => {
    appstate.innitialFocus = 'description';
    router.push('/edit-profile');
}

const onAddDetails = () => {
    if (useUserStore().getUserData().city.trim() == '') {
        appstate.innitialFocus = 'city';
    } else if (useUserStore().getUserData().jobTitle.trim() == '') {
        appstate.innitialFocus = 'job';
    }
    router.push('/edit-profile');
}

onMounted(() => {
    generateIds("profile-view");
})
</script>

<style scoped>
#profile-view {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.profile-view::-webkit-scrollbar {
    display: none;
}

/** Profile View *************************************************/

.top-wrapper {
    display: grid;
    grid-template-columns: 10% 80% 10%;
    grid-template-rows: 1fr;
    border-bottom: 0.01rem var(--light-color) solid;
    margin-bottom: 1rem;
}

.settings-box {
    grid-column: 3;
    grid-row: 1;
    width: 100%;
    height: fit-content;
}

.settings-box:hover {
    cursor: pointer;
}

.settings-icon {
    width: 100%;
    height: auto;
}

.view-wrapper {
    grid-column: 2;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.profile-picture-box {
    width: 50vw;
    height: 50vw;
}

.profile-name-text {
    grid-column: 2 / span 3;
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.profile-description-text {
    grid-column: 2 / span 3;
    color: var(--subtle-color);
    white-space: pre-wrap;
    font-size: 0.75rem;
    line-height: 0.8rem;
    margin: 0 0 0.75rem 0;
}

.edit-profile-button-box {
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 3;
    width: 50vw;
    margin-bottom: 1.5rem;
}

.edit-profile-button {
    width: 90%;
}

/** Tasks ***********************************************************/

.tasks-wrapper {
    border-bottom: 0.01rem var(--light-color) solid;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
}

.tasks-title {
    margin-top: 0;
    margin-bottom: 1rem;
}

.tasks-title em {
    font-weight: 400;
    color: var(--secondary-color);
}

.task-row {
    display: grid;
    grid-template-columns: 32% 2% 32% 2% 32%;
}

.task-box {
    display: grid;
    grid-template-columns: 2% 15.5% 65% 15.5% 2%;
    grid-template-rows: 20% 35% 5% 15% 2.5% 15% 5%;
    height: 11rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 0.25rem 0, rgba(0, 0, 0, 0.1) 0 0 0.05rem 0;
}

.task-icon-container {
    grid-column: 3;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}

.task-icon {
    width: 100%;
    height: 100%;
}

.task-text-container {
    grid-column: 2 / span 3;
    grid-row: 4;
    display: flex;
    justify-content: center;
    align-items: center;
}

.task-text {
    color: var(--subtle-color);
    font-size: 0.75rem;
    text-align: center;
    line-height: 125%;
}

.task-button-container {
    grid-column: 3;
    grid-row: 6;
    display: flex;
    justify-content: center;
    align-items: center;
}

.added-text {
    font-style: italic;
    font-weight: 500;
    color: var(--subtle-color);
}

.picture-task {
    grid-column: 1;
}

.description-task {
    grid-column: 3;
}

.details-task {
    grid-column: 5;
}

/** Posts ***********************************************************/

.post-wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
}

.post-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1.5rem 0;
}

.empty-icon {
    width: 4rem;
    height: 4rem;
}

.no-posts-text {
    color: var(--subtle-color);
    text-align: center;
    font-size: 1.25rem;
}
</style>