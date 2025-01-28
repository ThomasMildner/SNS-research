<template>
    <div id="edit-profile-view" class="bottom-buttons-page left-right-padding">

        <div class="top-wrapper scroll-style top-bottom-padding">
            <div class="header-row">
                <h2 class="title">Edit profile</h2>
            </div>

            <div class="profile-picture-wrapper">
                <ProfilePictureBox :user-data="modelUserData" class="profile-picture-box" :edit-mode="true" />
            </div>

            <div class="input-wrapper">
                <!-- First Name -->
                <MyInput :show-emoji="appstate.darkPatterns" name="First name" :required="true"
                    v-model="modelUserData.firstName" :valid="firstNameValid" hint="First name can't be empty"
                    @input-focus="firstNameValid = true" />

                <!-- Last Name -->
                <MyInput :show-emoji="appstate.darkPatterns" name="Last name" :required="true"
                    v-model="modelUserData.lastName" :valid="lastNameValid" hint="Last name can't be empty"
                    @input-focus="lastNameValid = true" />

                <!-- Birthday -->
                <MyInput :show-emoji="appstate.darkPatterns" name="Birthday(DD.MM.YYYY)" :required="true"
                    input-type="birthday" v-model="modelUserData.birthday" :valid="birthdayValid"
                    hint="Please use the right format (DD.MM.YYYY)" @input-focus="birthdayValid = true" />

                <!-- Description -->
                <MyTextarea :show-emoji="appstate.darkPatterns" name="Description" v-model="modelUserData.description"
                    :initial-focus="appstate.innitialFocus == 'description'" />

                <!-- Gender (required in Dark Patterns Version) -->
                <MySelect :show-emoji="appstate.darkPatterns" name="Gender" :required="appstate.darkPatterns"
                    :options="Object.values(Gender)" v-model="modelUserData.gender" :valid="genderValid"
                    hint="Please pick a gender" @input-focus="genderValid = true"
                    :class="{ 'dark-pattern': appstate.darkPatterns }" />

                <!-- Phone number (required in Dark Patterns Version) -->
                <MyInput :show-emoji="appstate.darkPatterns" name="Phone number" :required="appstate.darkPatterns"
                    input-type="tel" v-model="modelUserData.phone" :valid="appstate.darkPatterns ? phoneValid : true"
                    hint="Please enter a valid phone number" @input-focus="phoneValid = true"
                    :class="{ 'dark-pattern': appstate.darkPatterns }" />

                <!-- City -->
                <MyInput :show-emoji="appstate.darkPatterns" name="City"
                    :initial-focus="appstate.innitialFocus == 'city'" v-model="modelUserData.city" />

                <!-- Job Title -->
                <MyInput :show-emoji="appstate.darkPatterns" name="Job title"
                    :initial-focus="appstate.innitialFocus == 'job'" v-model="modelUserData.jobTitle" />

                <Checkbox v-model="personalDataChecked">Allow tracking of personal data</Checkbox>
            </div>
        </div>

        <div class="bottom-buttons-wrapper" :class="{ 'dark-pattern': appstate.darkPatterns }">
            <MyButton class="b-button" @click="onCheck()">Save
            </MyButton>
            <!-- Dark Patterns change the style to subtle-->
            <MyButton class="b-button" :button-style="appstate.darkPatterns ? 'subtle' : 'neutral'"
                @click="cancelPopupOpen = true">Cancel
            </MyButton>
        </div>
    </div>


    <Popup popupId="select-picture" :open="appstate.imagePopupOpen" @close="onImageSelectClose()">
        <template v-slot:content>
            <p>Select a picture from your gallery:</p>
            <div class="picture-row">
                <img v-for="imageKey in imageMap.keys()" class="select-image interact-node"
                    :class="{ 'selected': selectedPictureKey == imageKey }" :src="imageMap.get(imageKey)"
                    alt="profile-image" @click="selectedPictureKey = imageKey">
            </div>
        </template>

        <template v-slot:buttons>
            <MyButton size="small" :button-style="appstate.darkPatterns ? 'subtle' : 'neutral'"
                @click="onImageSelectDelete()">Delete</MyButton>
            <MyButton size="small" @click="onImageSelectSave()">Save</MyButton>
        </template>
    </Popup>

    <Popup popupId="leave-without-saving" :class="{ 'dark-pattern': appstate.darkPatterns }" :open="cancelPopupOpen"
        @close="cancelPopupOpen = false">

        <template v-slot:content>
            <div class="leave-content-wrapper">
                <!-- Only in Dark Pattern Version -->
                <h3 v-if="appstate.darkPatterns" class="leave-title">Leave page?</h3>
                <!-- Only in Dark Pattern Version -->
                <EmojiSvg v-if="appstate.darkPatterns" :percentage="0" class="emoji-svg" />
                <p> Do you really want to leave without saving? </p>
            </div>
        </template>

        <template v-slot:buttons>
            <!-- Style change in Dark Pattern Version -->
            <MyButton size="small" :button-style="appstate.darkPatterns ? 'subtle' : 'neutral'"
                @click="router.push('/profile')">Confirm
            </MyButton>
            <MyButton size="small" @click="cancelPopupOpen = false">
                Cancel
            </MyButton>
        </template>
    </Popup>


    <!-- Dark Pattern Version Only -->
    <Popup popupId="profile-incomplete" class="dark-pattern" :open="leavePagePopupOpen"
        @close="leavePagePopupOpen = false">

        <template v-slot:content>
            <div class="leave-content-wrapper">
                <h3 class="leave-title">Finish profile</h3>
                <EmojiSvg :percentage="calcUserDataPercentage(modelUserData)" class="emoji-svg" />
                <p> Your profile is only <span class="leave-percent">{{ calcUserDataPercentage(modelUserData) }}%</span>
                    complete. By completing your profile you will connect with other people and get more friends. </p>
            </div>
        </template>

        <template v-slot:buttons>
            <MyButton size="small" button-style="subtle" @click="onSave()">Save
            </MyButton>
            <MyButton size="small" @click="leavePagePopupOpen = false">Complete profile</MyButton>
        </template>
    </Popup>
</template>

<script setup lang="ts">
import Popup from '@/components/Popup.vue';
import Checkbox from '@/components/Checkbox.vue';
import MyInput from '@/components/textfield/MyInput.vue';
import MyTextarea from '@/components/textfield/MyTextarea.vue';
import MySelect from '@/components/textfield/MySelect.vue';
import MyButton from '@/components/MyButton.vue';
import ProfilePictureBox from '@/components/ProfilePictureBox.vue';
import EmojiSvg from '@/components/svgs/EmojiSvg.vue';
import { Gender } from '@/interface';
import { appstate } from '@/stores/appstate_store';
import { imageMap } from '@/stores/image_store'
import useUserStore from '@/stores/user_store';
import { calcUserDataPercentage, generateIds } from '@/functions'
import { onMounted, ref, type Ref } from 'vue';
import router from '@/router';

const leavePagePopupOpen = ref(false);
const cancelPopupOpen = ref(false);

const modelUserData = ref({ ...useUserStore().getUserData() });
const personalDataChecked = ref(useUserStore().getPersonalDataChecked());

const firstNameValid = ref(true);
const lastNameValid = ref(true);
const genderValid = ref(true);
const birthdayValid = ref(true);
const phoneValid = ref(true);

const onCheck = () => {
    Object.keys(modelUserData.value).forEach((key: string) => {
        modelUserData.value[key] = modelUserData.value[key].trim();
    });

    firstNameValid.value = modelUserData.value.firstName.length > 0;
    lastNameValid.value = modelUserData.value.lastName.length > 0;
    // Gender only needs to be filled out in dark Patterns Version
    genderValid.value = !appstate.darkPatterns || modelUserData.value.gender != '';
    checkBirthday();
    checkPhone();

    // Don't leave the page if the profile isn't valid
    if (!firstNameValid.value || !lastNameValid.value || !genderValid.value || !birthdayValid.value || !phoneValid.value) {
        return;
    }

    // Open the Leave Page in the dark Pattern Version
    if (appstate.darkPatterns && calcUserDataPercentage(modelUserData.value) < 100) {
        leavePagePopupOpen.value = true;
    } else {
        onSave();
    }
}

const checkBirthday = () => {
    const birthday = modelUserData.value.birthday;
    // Regular expression for the format dd/mm/yyyy
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
    birthdayValid.value = dateRegex.test(birthday);
}

const checkPhone = () => {
    const phoneNumber = modelUserData.value.phone;

    // Phone number isn't required in Non Dark Patterns Version
    if (!appstate.darkPatterns && phoneNumber.length == 0) {
        phoneValid.value = true;
        return;
    }

    // Regular expression for multiple phone number formats
    const phoneRegex = /^(?:(?:\+|00)([1-9]\d{0,2}))?([-.\s]?)((?:\(\d{1,4}\)|\d{1,4})([-.\s]?)\d{1,12})$/;
    phoneValid.value = phoneRegex.test(phoneNumber);
}

const onSave = () => {
    useUserStore().setUserData(modelUserData.value);
    useUserStore().setPersonalDataChecked(personalDataChecked.value);
    router.push('/profile')
}

const selectedPictureKey = ref(modelUserData.value.profilePicture);

const onImageSelectClose = () => {
    appstate.imagePopupOpen = false;
    selectedPictureKey.value = modelUserData.value.profilePicture;
}

const onImageSelectDelete = () => {
    selectedPictureKey.value = '';
    modelUserData.value.profilePicture = '';
    appstate.imagePopupOpen = false;
}

const onImageSelectSave = () => {
    modelUserData.value.profilePicture = selectedPictureKey.value;
    appstate.imagePopupOpen = false;
}

onMounted(() => {
    appstate.innitialFocus = '';
    generateIds('edit-profile-view');
})
</script>

<style scoped>
.header-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
}

.title {
    color: var(--secondary-color);
}

.profile-picture-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0;
}

.profile-picture-box {
    width: 50vw;
    height: 50vw;
}

.input-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 1.25rem;
    margin-bottom: 1rem;
}

.leave-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.leave-title {
    color: var(--primary-color);
    margin: 0 0 0.75rem 0;
}

.leave-percent {
    color: var(--secondary-color);
    font-weight: 500;
}

.emoji-svg {
    width: auto;
    height: 12vh;
}


/* Picture popup */
.picture-row {
    width: 100%;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 1fr;
}

.select-image {
    grid-row: 1;
    box-sizing: border-box;
    justify-self: center;
    align-self: center;
    margin-bottom: 1rem;
    width: 25vw;
}

.select-image:hover {
    cursor: pointer;
}

.select-image.selected {
    border: solid 0.25rem var(--secondary-color);
    -webkit-box-shadow: 0px 0px 0.25rem 0.1rem rgba(98, 139, 253, 0.9);
    -moz-box-shadow: 0px 0px 0.25rem 0.1rem rgba(98, 139, 253, 0.9);
    box-shadow: 0px 0px 0.25rem 0.1rem rgba(98, 139, 253, 0.9);

}
</style>