<template>
    <div id="end-view" class="full-padding">
        <div class="text-view scroll-style top-bottom-padding">
            <h1 class="title">Congratulations!</h1>
            <p> You finished both tasks. Thank you for taking the time. You can now enter your code on your desktop and
                finish
                the study.
                <br><br>
                Your code is:
                <em class="code-text">{{ code }}</em>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import useStudyDataStore from '@/stores/studydata_store';
import { ref } from 'vue';

const code = ref(useStudyDataStore().isAdhd() ? "MZXG" : "JTDV");
</script>

<style scoped>
#end-view {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.text-view {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 4rem;
}

.title {
    font-size: 2.5rem;
}

.code-text {
    color: var(--secondary-color);
}
</style>