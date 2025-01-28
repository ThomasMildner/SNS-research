<template>
    <div class="footer-wrapper">
        <nav class="footer-nav">
            <div :id="'nav-col-' + icon.name" class="footer-nav-col" v-for="icon in iconsLeft" :key="icon.name"
                @click="router.push(icon.route)">
                <div class="footer-nav-icon-box interact-node" :id="'nav-box-' + icon.name">
                    <NavigationSvg class="footer-nav-icon" :name="icon.name" :id="'nav-icon-' + icon.name"
                        :active="currentRouteName === icon.name" />
                    <label class="footer-nav-label">{{ icon.name }}</label>
                </div>
            </div>
            <div id='nav-col-plus' class="footer-nav-col" @click="plusPopupOpen = true">
                <div class="footer-nav-icon-box interact-node" id="nav-box-plus"
                    @click="appstate.constructionPopupOpen = true">
                    <div class="plus-border" id="nav-icon-plus">
                        <NavigationSvg class="footer-plus-icon" name="plus" />
                    </div>
                </div>
            </div>
            <div :id="'nav-col-' + icon.name" class="footer-nav-col" v-for="icon in iconsRight" :key="icon.name"
                @click="router.push(icon.route)">
                <div class="footer-nav-icon-box interact-node" :id="'nav-box-' + icon.name">
                    <NavigationSvg class="footer-nav-icon" :name="icon.name" :id="'nav-icon-' + icon.name"
                        :active="currentRouteName === icon.name" />
                    <label class="footer-nav-label">{{ icon.name }}</label>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { appstate } from '@/stores/appstate_store';
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';
import NavigationSvg from '@/components/svgs/NavigationSvg.vue'

const currentRouteName = computed(() => useRoute().name);

const plusPopupOpen = ref(false);

const iconsLeft: { name: string, route: string }[] = [
    { name: "home", route: "/home" },
    { name: "friends", route: "/friends" },
];

const iconsRight: { name: string, route: string }[] = [
    { name: "inbox", route: "/inbox" },
    { name: "profile", route: "/profile" }
];

</script>

<style scoped>
.footer-wrapper {
    position: relative;
    box-sizing: border-box;
    height: 100%;
    width: 95%;
    margin: 0 auto;
    border-top: solid 0.5vw var(--secondary-color);
}

.footer-nav {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}

.footer-nav-col {
    display: grid;
    max-height: 100%;
    width: 100%;
    margin: 0 auto;
    cursor: pointer;
    margin: 1.5vw auto;
}

.footer-nav-icon-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.plus-border {
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    width: 16vw;
    height: 100%;
    border: 0.5vw var(--secondary-color) solid;
    border-radius: 8vw;
}

.footer-plus-icon {
    height: 6vw;
    width: 6vw;
}

.footer-nav-icon {
    height: 8vw;
    width: 8vw;
}

.footer-nav-label {
    margin-top: 0.5vw;
    font-size: 2.5vw;
    text-align: center;
    color: #3C8BFF;
    text-transform: capitalize;
    color: var(--secondary-color);
    cursor: pointer;
}
</style>