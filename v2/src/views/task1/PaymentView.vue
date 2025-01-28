<template>
    <div :id="'payment-view-' + appstate.premiumStatus.toLowerCase()" class="left-right-padding bottom-buttons-page">

        <div class="top-wrapper scroll-style top-bottom-padding">

            <div v-if="appstate.premiumStatus == 'Monthly'" class="subscription-box">
                <h2>Monthly Subscription</h2>
                <p>2.99€/month</p>
            </div>

            <!-- Changes style in the Dark Pattern Version -->
            <div v-else class="subscription-box" :class="{ 'annually-dp dark-pattern': appstate.darkPatterns }">
                <h2>Annual Subscription</h2>
                <p>30.50€/year</p>
            </div>


            <p class="explanation-text">
                Subscriptions will automatically renew and your credit card will be charged at the end of each period.
            </p>

            <div class="input-wrapper">
                <div class="one-input-row">
                    <MyInput3 name="Name" v-model="name" />
                </div>
                <div class="one-input-row">
                    <MyInput3 name="Card Number" start-value="*****************************" :disabled="true" />
                </div>
                <div class="two-input-row">
                    <div class="expiry-input-col">
                        <MyInput3 name="Expiry" start-value="01/1999" :disabled="true" />
                    </div>
                    <div class="ccv-input-col">
                        <MyInput3 name="CVV" start-value="123" :disabled="true" />
                    </div>
                </div>
            </div>

        </div>

        <div class="bottom-buttons-wrapper">
            <MyButton class="my-button" :disabled="name === ''" @click="router.push('/sign-up')">Proceed</MyButton>
            <MyButton class="my-button" @click="onOptions">See other options</MyButton>
            <!-- Subtle in Dark Pattern version -->
            <MyButton class="my-button" :class="{ 'dark-pattern': appstate.darkPatterns }"
                :button-style="appstate.darkPatterns ? 'subtle' : 'neutral'" @click="onCancel">Cancel</MyButton>
        </div>

    </div>
</template>

<script setup lang="ts">
import MyButton from "@/components/MyButton.vue";
import { onMounted, ref, type Ref } from 'vue';
import router from "@/router";
import { appstate } from "@/stores/appstate_store";
import { PremiumStatus } from "@/interface";
import MyInput3 from "@/components/textfield/MyInput3.vue";
import { generateIds } from "@/functions";

const name: Ref<string> = ref('');

const onOptions = () => {
    appstate.premiumStatus = PremiumStatus.Basic;
    router.push('/premium');
}

const onCancel = () => {
    appstate.premiumStatus = PremiumStatus.Basic;
    router.push('/entry');
}

onMounted(() => {
    generateIds("payment-view-" + appstate.premiumStatus.toLowerCase());
})
</script>

<style scoped>
.subscription-box {
    border-radius: 0.25rem;
    padding: 2rem 1rem;
    height: min-content;
    margin-bottom: 0.5rem;
}

.subscription-box {
    border: 0.1rem solid var(--primary-color);
    background-color: var(--secondary-color);
}

.subscription-box h2,
.subscription-box p {
    color: white;
}

/** Dark Patterns ***************************************/
.subscription-box.annually-dp {
    border: 0.1rem solid #d07234ff !important;
    background: linear-gradient(to top, #ffaf41ff, #eda231 10%, #dc8a0c 30%, #fee11b 81.58%, #fdd21f 90.82%, #e3a02c 100%) !important;

}

.subscription-box.annually-dp h2 {
    color: #5f3600ff !important;
}

/*********************************************************/

.explanation-text {
    margin-bottom: 2rem;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    height: fit-content;
}

.input-wrapper {
    display: flex;
    flex-direction: column;
}

.one-input-row {
    margin-bottom: 2rem;
}

.two-input-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.expiry-input-col {
    min-width: 5rem;
    max-width: 50%;
}

.ccv-input-col {
    width: 2.25rem;
}
</style>