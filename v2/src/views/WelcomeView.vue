<template>
    <div id="welcome-view" class="left-right-padding bottom-buttons-page">
        <div class="text-view scroll-style top-bottom-padding">
            <h1 class="title">Welcome</h1>
            <div class="description-box">
                <p class="description">
                    Thank you for particpating in this study on social media interaction. Please make sure to have
                    your <em>character sheet</em> open on your desktop device while doing the study.
                    <br><br>
                    <em>Please don't leave the app while doing the study.</em>
                    <br><br>
                    For the study's purposes, we kindly request access to your location data. This
                    information will be compared to the demographic survey and promptly deleted thereafter. Please
                    activate your <em>GPS</em> before pressing <em>Continue</em> and after pressing it, grant access in
                    the additional popup (please note that the popup may not appear on all browsers, but you can still
                    proceed with the study regardless).
                    <br><br>
                    Please <em>don't use the back button</em> in your browser or on your smartphone. Instead, please
                    use the available buttons inside the app for navigation. Other methods of navigating to the previous
                    page are blocked by the application.
                    <br><br>
                    Once you click on <em>Continue</em>, data collection will begin. If you decide to end the
                    study now, you can simply close the tab. We completely understand.
                </p>
            </div>
            <Checkbox v-model="isReady" :required="true">I have read the information and I want to proceed
            </Checkbox>
        </div>
        <div class="bottom-buttons-wrapper">
            <MyButton :disabled="!isReady" @click="onContinue()">Continue</MyButton>
        </div>
    </div>
</template>


<script setup lang="ts">
import MyButton from '@/components/MyButton.vue';
import Checkbox from '@/components/Checkbox.vue'
import useStudyDataStore from '@/stores/studydata_store';
import router from '@/router';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { convertData } from '@/functions';

const isReady = ref(false);

const adhdMap = new Map<string, boolean>([
    ["nf4bu1n4WI", true],
    ["r5aFxmhs2r", false]
]);

const adhdId = computed(() => useRoute().params.adhd.toString()).value;
const prolificId = computed(() => useRoute().params.prolific.toString()).value;

const onContinue = () => {
    useStudyDataStore().setProlificId(prolificId);
    useStudyDataStore().setupStudyGroup(adhdMap.get(adhdId)!);
    askForLocation();
    router.push('/start/task1');
}

const askForLocation = () => {
    try {
        window?.navigator?.geolocation?.getCurrentPosition(initPosition, () => console.log("Access to your location was denied"));
    } catch (error: any) {
        console.log("Geolocation Error: " + error.message);
    }
}

const initPosition = (position: GeolocationPosition) => {
    console.log("Location Success");
    if (position) {
        useStudyDataStore().setCoords(convertData<GeolocationCoordinates>(position.coords));
        console.log("Access to your location was granted");
    }
};

onMounted(() => {
    if (!adhdMap.has(adhdId)) {
        router.push('/');
    }
});
</script>

<style scoped>
.text-view {
    display: flex;
    flex-direction: column;
}

.title {
    font-size: 2.5rem;
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
    margin-bottom: 1.5rem;
}

.description {
    margin: 0;
    text-align: left;
}

.request {
    width: 100%;
    text-align: left;
    margin-bottom: 0.5rem;
}
</style>