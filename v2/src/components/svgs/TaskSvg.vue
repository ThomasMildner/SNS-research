<template>
    <svg v-if="name == 'camera'" width="54" height="44" viewBox="0 0 54 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15.2353 12H6.16667C3.86548 12 2 13.8655 2 16.1667V37.8333C2 40.1345 3.86548 42 6.16667 42H47.8333C50.1345 42 52 40.1345 52 37.8333V16.1667C52 13.8655 50.1345 12 47.8333 12H38.7647M15.2353 12V6.16667C15.2353 3.86548 17.1008 2 19.402 2H34.598C36.8992 2 38.7647 3.86548 38.7647 6.16667V12M15.2353 12H38.7647"
            :stroke="stroke" stroke-width="3" :fill="fill" />
        <circle cx="27" cy="27" r="8.5" :stroke="stroke" stroke-width="3" :fill="fill" />
    </svg>


    <svg v-else-if="name == 'description'" width="48" height="50" viewBox="0 0 48 50" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="38.0599" height="48" rx="3" :stroke="stroke" stroke-width="2" />
        <path d="M6.16302 10.4167H32.8696" :stroke="stroke" stroke-width="2" stroke-linecap="round" />
        <path d="M6.16302 18.75H32.8696" :stroke="stroke" stroke-width="2" stroke-linecap="round" />
        <path d="M6.16302 27.0833H32.8696" :stroke="stroke" stroke-width="2" stroke-linecap="round" />
        <path d="M6.16302 35.4167H25.9031" :stroke="stroke" stroke-width="2" stroke-linecap="round" />
        <path
            d="M42.3106 7.81265C42.8042 6.82452 44.0001 6.43418 44.9816 6.9408L46.2227 7.5814C47.2043 8.08803 47.5998 9.29976 47.1062 10.2879L34.8435 34.8345C34.7586 35.0044 34.6274 35.146 34.4653 35.2427L31.7615 36.8551C31.1361 37.228 30.3341 36.8141 30.2614 36.0808L29.9469 32.9105C29.928 32.7204 29.9631 32.5291 30.048 32.3592L42.3106 7.81265Z"
            :fill="stroke" />
    </svg>

    <svg v-else-if="name == 'work'" width="50" height="46" viewBox="0 0 50 46" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect x="2.63635" y="18.6538" width="44.7273" height="25.8462" rx="5.5" :fill="fill" :stroke="stroke"
            stroke-width="3" />
        <path d="M33 8.125V5C33 3.34315 31.6569 2 30 2H20C18.3431 2 17 3.34315 17 5V8.125" :stroke="stroke"
            stroke-width="3" />
        <path
            d="M1.5 10.7692C1.5 9.38852 2.61929 8.26923 4 8.26923H46C47.3807 8.26923 48.5 9.38852 48.5 10.7692V22.0303C48.5 23.2908 47.5615 24.3542 46.3108 24.5109L25.3108 27.1417L25.4972 28.63L25.3108 27.1417C25.1044 27.1675 24.8956 27.1675 24.6892 27.1417L24.5028 28.63L24.6892 27.1417L3.68924 24.5109C2.43847 24.3542 1.5 23.2908 1.5 22.0303V10.7692Z"
            :fill="fill" :stroke="stroke" stroke-width="3" />
        <rect x="22.7273" y="22.9231" width="5.68182" height="8.07692" rx="2" :fill="fill" :stroke="stroke"
            stroke-width="2" />
    </svg>
</template>

<script setup lang="ts">
import { bgColor, lightColor } from "@/assets/global_colors"

const { name, stroke } = defineProps({
    name: {
        type: String,
        required: true
    },
    stroke: {
        type: String,
        default: lightColor
    },
    fill: {
        type: String,
        default: bgColor
    }
});
</script>