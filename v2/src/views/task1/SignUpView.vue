<template>
    <div :id="'sign-up-view-' + (appstate.premiumStatus == PremiumStatus.Basic ? 'basic' : 'premium')"
        class="left-right-padding bottom-buttons-page">

        <div class="top-wrapper scroll-style top-bottom-padding">
            <div class="title-wrapper">
                <h1 class="title">Sign up</h1>

                <label v-if="appstate.premiumStatus == 'Basic'" class="version">Basic version</label>
                <label v-else class="version">Premium version</label>

                <p v-if="appstate.premiumStatus == 'Basic'" class="description">
                    You can sign up for free now or look at the premium options to get additional benefits.
                </p>
            </div>
            <div class="input-wrapper">
                <MyInput2 class="b-input" name="Email" input-type="email" v-model="email" :valid="emailValid"
                    :required="true" hint="Please enter a valid email adress" @input-focus="emailValid = true" />
                <MyInput2 class="b-input" name="Password" input-type="password" v-model="password"
                    :valid="passwordValid" :required="true" hint="Password must have at least 5 symbols"
                    @input-focus="passwordValid = true" />
                <MyInput2 class="b-input" name="Confirm password" input-type="password" v-model="passwordRepeat"
                    :valid="passwordsEqual" :required="true" hint="Passwords must be equal"
                    @input-focus="passwordsEqual = true" />
            </div>

            <div class="checkbox-wrapper">
                <Checkbox class="checkbox" v-model="termsChecked" :valid="termsValid" @value-updated="termsValid = true"
                    :required="true">
                    I agree to the terms and conditions
                </Checkbox>
                <!-- Non Dark Pattern Version only -->
                <Checkbox v-if="!appstate.darkPatterns" class="checkbox" v-model="updatesChecked">
                    By signing up with your email you consent to receiving updates from our selected partners
                </Checkbox>
                <!-- Non Dark Pattern Version only -->
                <Checkbox v-if="!appstate.darkPatterns" class="checkbox" v-model="contactsChecked">
                    Upload contacts from phone
                </Checkbox>
            </div>

            <!-- Dark Pattern Version only -->
            <div v-if="appstate.darkPatterns" class="details-wrapper dark-pattern">
                <SeeMore>
                    <Checkbox class="checkbox" v-model="updatesChecked">
                        By signing up with your email you consent to receiving updates from our selected partners
                    </Checkbox>
                    <Checkbox class="checkbox" v-model="contactsChecked">
                        Upload contacts from phone
                    </Checkbox>
                </SeeMore>
            </div>

        </div>


        <!-- Dark Pattern Version --------------------------------------------------------------------------------->
        <div v-if="appstate.darkPatterns && appstate.premiumStatus == 'Basic'"
            class="bottom-buttons-wrapper dark-pattern">
            <MyButton class="b-button" @click="onSeePremiumOptions()">See premium options</MyButton>
            <MyButton class="b-button" button-style="subtle" @click="onConfirm">Sign up to basic version
            </MyButton>
            <MyButton class="b-button" button-style="subtle" @click="router.push('/entry')">Go back
            </MyButton>
        </div>

        <!-- Non Dark Pattern Version ------------------------------------------------------------------------------>
        <div v-else-if="!appstate.darkPatterns && appstate.premiumStatus == 'Basic'" class="bottom-buttons-wrapper">
            <MyButton class="b-button" @click="onConfirm">Sign up to basic version
            </MyButton>
            <MyButton class="b-button" @click="onSeePremiumOptions()">See premium options</MyButton>
            <MyButton class="b-button" @click="router.push('/entry')">Go back
            </MyButton>
        </div>

        <div v-else-if="appstate.premiumStatus != 'Basic'" class="bottom-buttons-wrapper">
            <MyButton class="b-button" @click="onConfirm">Sign up to premium</MyButton>
            <!-- Subtle in Dark Pattern Version -->
            <MyButton class="b-button" :class="{ 'dark-pattern': appstate.darkPatterns }"
                :button-style="appstate.darkPatterns ? 'subtle' : 'neutral'" @click="onCancel">Go
                back
            </MyButton>
        </div>

    </div>

    <!-- Dark Pattern Version only -->
    <Popup popupId="continue-without-premium-2" class="dark-pattern" :open="popupOpen" @close="popupOpen = false">
        <template v-slot:content>
            <p>
                You sure you want to continue without premium?
            </p>
        </template>

        <template v-slot:buttons>
            <MyButton size="small" button-style="subtle" @click="onContinue()">Continue</MyButton>
            <MyButton size="small" @click="onSeePremiumOptions()">See options</MyButton>
        </template>
    </Popup>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import router from '@/router';
import MyButton from '@/components/MyButton.vue';
import Checkbox from '@/components/Checkbox.vue';
import SeeMore from '@/components/SeeMore.vue';
import Popup from '@/components/Popup.vue';
import useUserStore from '@/stores/user_store';
import { PremiumStatus } from '@/interface';
import { appstate } from '@/stores/appstate_store';
import MyInput2 from '@/components/textfield/MyInput2.vue';
import useStudyDataStore from '@/stores/studydata_store';
import { generateIds } from '@/functions';

const popupOpen = ref(false);

const email: Ref<string> = ref(useUserStore().getEmail());
const password: Ref<string> = ref("");
const passwordRepeat: Ref<string> = ref("");

const termsChecked: Ref<boolean> = ref(false);

// Default true in the Dark Pattern Version
const updatesChecked: Ref<boolean> = ref(appstate.darkPatterns ? true : false);
const contactsChecked: Ref<boolean> = ref(appstate.darkPatterns ? true : false);

const emailValid: Ref<boolean> = ref(true);
const passwordValid: Ref<boolean> = ref(true);
const passwordsEqual: Ref<boolean> = ref(true);
const termsValid: Ref<boolean> = ref(true);

const updateEmailValid = () => {
    emailValid.value = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
}

const updatePasswordValid = () => {
    passwordValid.value = password.value.length >= 5;
}

const updatePasswordsEqual = () => {
    passwordsEqual.value = password.value === passwordRepeat.value;
}

const updateTermsValid = () => {
    termsValid.value = termsChecked.value;
}

const onSeePremiumOptions = () => {
    useUserStore().setEmail(email.value);
    router.push('/premium');
}

const onConfirm = () => {
    updateEmailValid();
    updatePasswordValid();
    updatePasswordsEqual();
    updateTermsValid();
    if (emailValid.value && passwordValid.value && passwordsEqual.value && termsValid.value) {
        // Open Popup only in the Dark Pattern Version
        if (appstate.darkPatterns && appstate.premiumStatus == "Basic") {
            popupOpen.value = true;
        } else {
            onContinue();
        }
    }
}

const onContinue = () => {
    useUserStore().setEmail(email.value);
    useUserStore().setUpdatesChecked(updatesChecked.value);
    useUserStore().setContactsChecked(contactsChecked.value);
    useUserStore().setPremiumStatus(appstate.premiumStatus);
    useStudyDataStore().finishCurrentTask();
}

const onCancel = () => {
    appstate.premiumStatus = PremiumStatus.Basic;
    router.push('/entry');
}

onMounted(() => {
    generateIds('sign-up-view-' + (appstate.premiumStatus == PremiumStatus.Basic ? 'basic' : 'premium'));
})
</script>

<style scoped>
.title-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.title {
    margin-bottom: 0.5rem;
}

.version {
    font-weight: 300;
    color: var(--subtle-color);
    margin-bottom: 0.5rem;
}

.description {
    margin: 0;
}

.input-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

.b-input {
    margin-bottom: 1rem;
}

.details-wrapper {
    width: 100%;
    display: inline-block;
    align-content: start;
    grid-template-columns: auto;
    margin-bottom: 1rem;
}

.checkbox-wrapper {
    width: 100%;
    display: inline-block;
    margin-bottom: 0.5rem;
}

.checkbox {
    margin-bottom: 1rem;
}
</style>