<template>
    <div id="sign-in-view" class="left-right-padding bottom-buttons-page">

        <div class="top-wrapper scroll-style top-bottom-padding">
            <h1>Sign in</h1>
            <p class="description">
                Enter your email and password to sign in or create a new account
            </p>

            <div class="input-wrapper">
                <MyInput2 class="b-input" name="Email" input-type="email" v-model="email" :required="true"
                    hint="Please enter a valid email adress" />
                <MyInput2 class="b-input" name="Password" input-type="password" v-model="password" :required="true"
                    hint="Password must have at least 5 symbols" />
            </div>
        </div>

        <!-- Dark Pattern Version -->
        <div v-if="appstate.darkPatterns" class="bottom-buttons-wrapper dark-pattern">
            <MyButton class="b-button" @click="dpPopupOpen = true">Sign in</MyButton>
            <MyButton class="b-button" :button-style="appstate.darkPatterns ? 'subtle' : 'neutral'"
                @click="router.push('/entry')">Go back
            </MyButton>
        </div>

        <!-- Non Dark Pattern Version -->
        <div v-if="!appstate.darkPatterns" class="bottom-buttons-wrapper">
            <MyButton class="b-button" @click="popupOpen = true">Sign in</MyButton>
            <MyButton class="b-button" @click="router.push('/entry')">Go back
            </MyButton>
        </div>
    </div>

    <!-- Non Dark Pattern Version -->
    <Popup popupId="no-account" :open="popupOpen" @close="popupOpen = false" :vertical="true">

        <template v-slot:content>
            <p> This acccount doesn't exist. Do you want to sign up?</p>
        </template>

        <template v-slot:buttons>
            <MyButton size="small" @click="onSignUp">Sign up
            </MyButton>
            <MyButton size="small" @click="onSeePremiumOptions">See premium options
            </MyButton>
            <MyButton size="small" @click="popupOpen = false">Cancel</MyButton>
        </template>
    </Popup>

    <!-- Dark Pattern Version -->
    <Popup popupId="no-account" class="dark-pattern" :open="dpPopupOpen" @close="dpPopupOpen = false">

        <template v-slot:content>
            <p> This acccount doesn't exist. Do you want to sign up?</p>
        </template>

        <template v-slot:buttons>
            <MyButton size="small" button-style="subtle" @click="dpPopupOpen = false">Cancel
            </MyButton>
            <MyButton size="small" @click="onSeePremiumOptions">Sign up
            </MyButton>
        </template>
    </Popup>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import router from '@/router';
import { appstate } from '@/stores/appstate_store';
import MyButton from '@/components/MyButton.vue';
import Popup from '@/components/Popup.vue';
import MyInput2 from '@/components/textfield/MyInput2.vue';
import { generateIds } from '@/functions';
import useUserStore from '@/stores/user_store';

const email: Ref<string> = ref("");
const password: Ref<string> = ref("");

const dpPopupOpen = ref(false);
const popupOpen = ref(false);

const onSignUp = () => {
    useUserStore().setEmail(email.value);
    router.push('/sign-up');
}

const onSeePremiumOptions = () => {
    useUserStore().setEmail(email.value);
    router.push('/premium');
}

onMounted(() => {
    generateIds("sign-in-view");
})
</script>

<style scoped>
.b-input {
    display: inline-block;
    margin-bottom: 1rem;
}

.input-wrapper {
    width: 100%;
    gap: 1rem;
}
</style>