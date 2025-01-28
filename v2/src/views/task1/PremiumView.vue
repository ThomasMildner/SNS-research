<template>
    <div id="premium-view" class="left-right-padding scroll-style">
        <!--<div class="arrow-icon-box" @click="router.push('/entry')">
            <ArrowSvg class="arrow-icon" />
        </div>-->
        <div class="header-wrapper">
            <div class="centered-svg">
                <CrownSvg />
            </div>
            <h3>Go Premium</h3>

            <!-- Dark Pattern Version -->
            <p v-if="appstate.darkPatterns" class="description dark-pattern">Get premium now with our limited time
                offer! Unlock all
                features and maximize your social
                life!</p>
            <!-- Non Dark Pattern Version -->
            <p v-else class="description">You can get premium for additional benefits. Premium removes ads, offers
                unlimited
                posting
                and
                commenting, and allows you to download videos and photos as an option.
            </p>


            <!-- Dark Pattern Version only -->
            <div v-if="appstate.darkPatterns" class="feature-list dark-pattern">
                <div v-for="(feature, index) in features" :key="index" class="feature">
                    <CheckedSvg class="checked-icon" name="checked" />
                    <div class="feature-label">{{ feature }}</div>
                </div>
            </div>

        </div>



        <div class="offer-box">

            <!-- Dark Pattern Version only -->
            <div v-if="appstate.darkPatterns" class="best-value-box dark-pattern">
                <label>Best value!</label>
            </div>

            <div class="offer-row">
                <div class="offer-left offer interact-node" @click="onOffer(PremiumStatus.Monthly)">
                    <div class="offer-header">
                        <label class="offer-title">MONTHLY PLAN</label>
                    </div>
                    <div class="offer-main1">
                        <label class="offer-price">2.99€</label>
                    </div>
                    <div class="offer-main2">
                    </div>
                    <div class="offer-footer">
                    </div>
                </div>
                <!-- Changes style in Dark Pattern Version -->
                <div class=" offer-right offer interact-node"
                    :class="{ 'dp-offer dark-pattern': appstate.darkPatterns }"
                    @click="onOffer(PremiumStatus.Annually)">
                    <div class="offer-header">
                        <label class="offer-title">ANNUAL PLAN</label>
                    </div>
                    <div class="offer-main1">
                        <label class="offer-now">NOW</label>
                        <label class="offer-price">30.50€</label>
                    </div>
                    <div class="offer-main2">
                        <label class="offer-before">Before</label>
                        <label class="offer-discount">35.88€</label>
                    </div>
                    <div class="offer-footer">
                        <div class="offer-note">
                            <label>15% off!</label>
                        </div>
                        <!-- Dark Pattern Version only -->
                        <div v-if="appstate.darkPatterns" class="offer-note dark-pattern">
                            <label>Limited time offer</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!-- Dark Pattern Version -->
        <div v-if="appstate.darkPatterns" class="bottom-wrapper bottom-label-wrapper dark-pattern">
            <label class="go-back-text interact-node" @click="router.push('/entry')">Go back</label>
            <label class="continue-without-premium interact-node" @click="router.push('/sign-up')">Continue without
                premium</label>
        </div>

        <!-- Non Dark Pattern Version -->
        <div v-else class="bottom-wrapper bottom-buttons-wrapper">
            <MyButton class="b-button" @click="router.push('/sign-up')">Continue without premium
            </MyButton>
            <MyButton class="b-button" @click="router.push('/entry')">Go back</MyButton>
        </div>

    </div>
</template>

<script setup lang="ts">
import CrownSvg from '@/components/svgs/CrownSvg.vue';
import CheckedSvg from '@/components/svgs/CheckedSvg.vue';
import router from '@/router';
import { PremiumStatus } from '@/interface';
import { appstate } from '@/stores/appstate_store';
import MyButton from '@/components/MyButton.vue';
import ArrowSvg from '@/components/svgs/ArrowSvg.vue';
import { onMounted, ref, type Ref } from 'vue';
import { generateIds } from '@/functions';

const features = [
    "Have fun in an ad-free experience",
    "Unlimited posts and comments",
    "Download option for videos and photos",
]

const onOffer = (status: PremiumStatus) => {
    appstate.premiumStatus = status;
    router.push('/payment');
}

onMounted(() => {
    generateIds('premium-view');
})
</script>

<style scoped>
#premium-view {
    width: 100%;
    display: grid;
    grid-template-rows: min-content auto min-content;
    grid-template-columns: 100%;
}

.arrow-icon-box {
    position: absolute;
    left: 1rem;
    top: 1rem;
    cursor: pointer;
}

.arrow-icon {
    width: 1rem;
    height: auto;
}

.header-wrapper {
    margin-top: 1rem;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.centered-svg {
    display: flex;
    justify-content: center;
}

h3 {
    text-align: center;
    color: var(--subtle-color);
}

p {
    margin: 0;
    font-weight: 400;
    text-align: center;
    color: var(--subtle-color);
}

.feature-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1.75rem;
    margin-top: 7.5%;
}

.feature {
    grid-column: 2;
    width: 100%;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
}


.feature-label {
    color: var(--subtle-color);
    margin-left: 0.5rem;
}

.checked-icon {
    width: 1.75rem;
    height: auto;
}

.offer-box {
    grid-row: 2;
    grid-column: 1;
    width: 100%;
    height: 80%;
    max-height: 26rem;
    margin: auto 0;
    justify-self: center;
    display: grid;
    grid-template-rows: 0.75rem 0.75rem auto;
    grid-template-columns: 100%;
}

.best-value-box {
    grid-row: 1 / span 2;
    grid-column: 1;
    justify-self: end;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--dark-color);
    z-index: 2;
    border-radius: 0.25rem;
}

.best-value-box label {
    font-size: 0.75rem;
    color: var(--bg-color);
    margin: 0 1rem;
}

.offer-row {
    display: grid;
    grid-column: 1;
    grid-row: 2 / span 2;
    grid-template-columns: 48.5% 3% 48.5%;
    width: 100%;
    z-index: 1;
}

.offer {
    height: auto;
    justify-self: stretch;
    display: grid;
    cursor: pointer;
    grid-template-rows: 20% 38% 22% 20%;
    border-radius: 1.25rem;
    padding: 1rem;
    box-shadow: 0.15rem 0.15rem 0.15rem 0.15rem rgba(0, 0, 0, 0.2);
    background: var(--secondary-color);
}

.offer-header {
    width: 90%;
}

.offer label {
    color: var(--bg-color);
    cursor: pointer;
}

.offer-left {
    grid-column: 1;
}

.offer-right {
    grid-column: 3;
}

/** Dark Patterns */
.offer.dp-offer {
    background: linear-gradient(40deg, #ffa743ff 0%, #ffbe58 10%, #dc8700 45%, #ffe600 80%, #fdaf32 100%) !important;
}

.offer-title {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-weight: 700;
}

/** Dark Patterns */
.dp-offer .offer-title {
    color: #5f3600ff !important;
}


.offer-main1 {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: end;
}

.offer-main1 label {
    font-weight: 700;
}

.offer-now {
    font-size: 1.5rem;
}

.offer-price {
    font-size: 2rem;
}


.offer-main2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding-top: 0.25rem;
}

.offer-main2 label {
    font-weight: 500;
    font-size: 1rem;
}

/** Dark Patterns */
.dp-offer .offer-main2 label {
    color: #5f3600ff !important;
}

.offer-discount {
    text-decoration: line-through;
}


.offer-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 0.25rem;
}

.offer-note {
    width: 100%;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
    border-radius: 0.25rem;
}

.offer-note label {
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.bottom-wrapper {
    grid-row: 3;
    margin-top: 2rem;
}

.bottom-label-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: end;
    row-gap: 0.75rem;
    margin-bottom: 1rem;
}

.bottom-label-wrapper label {
    text-decoration: underline;
    text-decoration-color: var(--secondary-color);
    color: var(--secondary-color);
    cursor: pointer;
}
</style>