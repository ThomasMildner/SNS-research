<template>
    <div class="vue-modal" v-show="open">
        <transition name="slide">
            <div class="vue-modal-inner">
                <div class="vue-modal-content">
                    <div class="close-button-box interact-node" @click="emit('close')">
                        <CloseSvg class="close-button-icon" />
                    </div>
                    <div class="comments-list scroll-style">
                        <div v-for="(comment, index) in comments" :key="index" class="comment-row">
                            <img class="comment-image"
                                :src="comment.image != '' ? imageMap.get(comment.image) : defaultImage" alt="Profile">
                            <div class="comment-text-column">
                                <label class="comment-name">{{ comment.name }}</label>
                                <p class="comment-text">{{ comment.text }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="add-comment-row">
                        <img class="add-comment-image"
                            :src="useUserStore().getUserData().profilePicture != '' ? imageMap.get(useUserStore().getUserData().profilePicture) : defaultImage"
                            alt="Profile">
                        <MyInput3 name="Add a comment" :show-name="false" v-model="newComment"
                            @click="!useUserStore().isProfileValid() ? appstate.profilePopupOpen = true : null" />
                        <MyButton class="send-button" size="small" @click="onSend">
                            Send
                        </MyButton>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import CloseSvg from '@/components/svgs/CloseSvg.vue';
import useUserStore from '@/stores/user_store';
import MyButton from './MyButton.vue';
import { imageMap, defaultImage } from '@/stores/image_store';
import { onMounted, ref, watch } from 'vue';
import { appstate } from '@/stores/appstate_store';
import MyInput3 from './textfield/MyInput3.vue';
import useStudyDataStore from '@/stores/studydata_store';

const { open } = defineProps({
    open: {
        type: Boolean,
        default: false,
    }
});

const emit = defineEmits(['close', 'updateNumberOfComments']);

const comments = ref([
    { name: 'Bob Smith', image: '', text: 'I learned a lot from this video. Thanks for sharing!' },
    { name: 'Eva Rodriguez', image: 'dog_image', text: 'Interesting perspective. Would love to see more videos like this.' },
    { name: 'Charlie Brown', image: '', text: 'The production quality is top-notch! Keep up the good work.' },
    { name: 'Alice Davis', image: 'fish_image', text: 'This scenerey is so beautiful. Well done!' },
]);

const newComment = ref(appstate.comment);

// Emit the number of comments when the component is mounted
onMounted(() => {
    emit('updateNumberOfComments', comments.value.length);
});

// Watch for changes in the comments array and emit the updated number of comments
watch(comments, (newComments) => {
    emit('updateNumberOfComments', comments.value.length);
}, { deep: true });

const onSend = () => {
    appstate.comment = newComment.value;

    if (newComment.value.trim() == '') {
        return;
    } else if (useUserStore().isProfileValid()) {
        addComment();
    } else {
        appstate.profilePopupOpen = true;
    }
}

const addComment = () => {
    const userData = useUserStore().getUserData();
    comments.value.push({ name: userData.firstName + ' ' + userData.lastName, image: userData.profilePicture, text: newComment.value })
    newComment.value = '';
    useStudyDataStore().finishCurrentTask();
}
</script>

<style scoped>
*,
::before,
::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.slot {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.vue-modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

.vue-modal-inner {
    width: 100%;
    height: 50%;
    display: flex;
    box-sizing: border-box;
    border-radius: 0.5rem 0.5rem 0rem 0rem;
    border: var(--secondary-color) 0.15rem solid;
    border-bottom: none;
    overflow: hidden;
}

.vue-modal-content {
    position: relative;
    background-color: var(--bg-color);
    background-clip: padding-box;
    padding: 2rem 1rem 0.5rem 1.25rem;
    flex: 1;
    display: grid;
    grid-template-rows: auto 0rem 3.5rem;
    z-index: 3;
}

.close-button-box {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.close-button-box:hover {
    cursor: pointer;
}

.close-button-icon {
    width: 0.75rem;
    height: 0.75rem;
}

.comments-list {
    grid-row: 1;
    display: flex;
    width: 95%;
    flex-direction: column;
}

.comment-row {
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5rem;
}

.comment-image {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    margin-right: 0.5rem;
}

.comment-text-column {
    display: flex;
    flex-direction: column;
}

.comment-name {
    font-size: 0.75rem;
    color: var(--secondary-color);
    margin-bottom: 0.25rem;
}

.comment-text {
    font-size: 0.75rem;
    line-height: 0.75rem;
}

.add-comment-row {
    grid-row: 3;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 0.1rem;
    border-radius: 1rem;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.add-comment-image {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    margin-right: 0.5rem;
}

.send-button {
    width: 5rem;
    margin-left: 1rem;
}
</style>