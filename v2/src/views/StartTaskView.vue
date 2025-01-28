<template>
    <div :id="'start-' + currentTask + '-view'" class="left-right-padding bottom-buttons-page">
        <div class="text-view scroll-style top-bottom-padding">
            <h1 class="title">{{ currentTaskTitle }}</h1>
            <div class="description-box">
                <p class="description">
                    <em>{{ taskDescriptions[currentTask] }}</em>
                    <br><br>
                    During the task you will find two icons at the top corners of your screen:
                    <br><br>
                    <HeaderSvg name="question" class="text-svg-icon" :opacity="1" />: Reminder for the task.
                    <br><br>
                    <HeaderSvg name="warning" class="text-svg-icon" :opacity="1" />: Options if you get stuck or don't
                    want to continue.
                    <br><br>
                    Once the task is finished, please fill out the <em>questionnaire</em> that will be presented
                    to you.
                    <br><br>
                    Press <em>Start {{ currentTaskTitle }}</em> to begin.
                </p>
            </div>
            <Checkbox v-model="isReady" :required="true">I understand what I have to do and I'm ready to start
            </Checkbox>
        </div>
        <div class="bottom-buttons-wrapper">
            <MyButton :disabled="!isReady" @click="onStartTask">Start {{ currentTaskTitle }}</MyButton>
        </div>
    </div>
</template>


<script setup lang="ts">
import MyButton from '@/components/MyButton.vue';
import HeaderSvg from '@/components/svgs/HeaderSvg.vue';
import useStudyDataStore from '@/stores/studydata_store';
import Checkbox from '@/components/Checkbox.vue';
import router from '@/router';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const currentTask = computed(() => useRoute().params.task.toString()).value;
const currentTaskTitle = currentTask.charAt(0).toUpperCase() + currentTask.slice(1).replace(/[^0-9](?=[0-9])/g, `$& `);

const taskDescriptions = {
    task1: "Your first task is to create an account and sign up for the social media app.",
    task2: "Your second task is to leave a nice comment on a video."
} as { [task: string]: string }

const taskPaths = {
    task1: "/entry",
    task2: "/home"
} as { [task: string]: string }

const isReady = ref(false);

const onStartTask = () => {
    router.push(taskPaths[currentTask]);
    useStudyDataStore().startCurrentTask();
}
</script>

<style scoped>
.text-view {
    display: flex;
    flex-direction: column;
}

.title {
    width: 100%;
    text-align: left;
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.description-box {
    box-sizing: border-box;
    border-radius: 1rem;
    border: 0.15rem solid var(--secondary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    margin-bottom: 1rem;
}

.description {
    margin: 0;
    text-align: left;
}

.text-svg-icon {
    height: 1rem;
    width: auto;
    margin-bottom: -0.15rem;
    margin-right: 0.2rem;
}
</style>