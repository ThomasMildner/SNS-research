<template>
    <svg v-if="name === 'home'" width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M17 23.3866V31C17 31.5523 16.5523 32 16 32H13C10.2386 32 8 29.7614 8 27V18.7C8 18.1477 7.55228 17.7 7 17.7H3.91524C2.0019 17.7 1.18079 15.2715 2.70155 14.1104L17.4196 2.87306C19.2457 1.4789 21.7868 1.50849 23.5798 2.94479L37.5546 14.1391C39.0296 15.3206 38.1941 17.7 36.3042 17.7H33.0098C32.4537 17.7 32.0044 18.1537 32.0098 18.7097L32.0899 26.9514C32.1169 29.7317 29.8705 32 27.0901 32H25C24.4477 32 24 31.5523 24 31V23.3866C24 23.1378 23.9123 22.8914 23.7176 22.7364C22.667 21.9 20.9841 21.9 20.5278 21.9C20.0713 21.9 18.3415 21.9 17.2828 22.737C17.0877 22.8913 17 23.1378 17 23.3866Z"
            :fill="active ? secondaryColor : bgColor" :stroke="active ? bgColor : secondaryColor"
            :stroke-width="active ? 1 : 2.5" />
    </svg>

    <svg v-else-if="name === 'friends'" width="35" height="35" viewBox="0 -2 35 35" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M23.4269 23.4185C21.0459 23.7321 18.3595 23.2021 15.705 20.7844C17.0489 18.8976 19.7069 17.7996 22.5971 17.791C25.5231 17.7823 28.164 18.8897 29.4358 20.7672C27.8987 21.9716 25.7642 23.1106 23.4269 23.4185ZM27.1292 8C27.1292 10.4853 25.1145 12.5 22.6292 12.5C20.1439 12.5 18.1292 10.4853 18.1292 8C18.1292 5.51472 20.1439 3.5 22.6292 3.5C25.1145 3.5 27.1292 5.51472 27.1292 8Z"
            :fill="active ? secondaryColor : bgColor" :stroke="active ? bgColor : secondaryColor"
            :stroke-width="active ? 1 : 2.5" />
        <path
            d="M13.2562 29.3651C9.79578 29.8711 5.85912 29.0542 2.02027 25.2206C3.88402 22.1213 7.80528 20.4095 11.9667 20.4C16.1484 20.3906 20.0445 22.0996 21.842 25.178C21.8498 25.1914 21.8578 25.2048 21.866 25.2181C19.7742 27.0349 16.6887 28.8632 13.2562 29.3651ZM17.5 8.5C17.5 12.6516 14.7783 15.5 12 15.5C9.22174 15.5 6.50001 12.6516 6.50001 8.5C6.50001 4.34841 9.22174 1.5 12 1.5C14.7783 1.5 17.5 4.34841 17.5 8.5Z"
            :fill="active ? secondaryColor : bgColor" :stroke="active ? bgColor : secondaryColor"
            :stroke-width="active ? 1 : 2.5" />
    </svg>

    <svg v-else-if="name == 'plus'" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4 2V22" :stroke="secondaryColor" stroke-width="3" stroke-linecap="round" />
        <path d="M2 12.4H22" :stroke="secondaryColor" stroke-width="3" stroke-linecap="round" />
    </svg>

    <svg v-else-if="name === 'inbox'" width="36" height="38" viewBox="0 0 36 38" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M31.032 24.0498C33.2185 31.8286 27.2442 33.2529 23.7306 32.9356C22.1752 34.1297 18.9204 37.3868 14.6541 35.3396C10.3878 33.2923 11.7853 29.2269 13.0074 27.9474C13.0074 27.9474 10.9594 27.0526 4.81521 23.9211C-1.32896 20.7895 3.73227 13.9986 9.06517 12.975C10.8655 12.6294 14.662 4.16656 23.7306 5.63716C24.175 3.3062 26.1304 0.691494 30.3967 2.73873C34.6631 4.78597 32.1744 6.76856 30.3967 8.27164C35.7472 11.9484 34.2277 17.2575 31.6731 20.6989C30.9623 21.6565 30.7093 22.9018 31.032 24.0498Z"
            :fill="active ? secondaryColor : bgColor" />
        <path
            d="M23.7306 32.9356C27.2442 33.2529 33.2185 31.8286 31.032 24.0498C30.7093 22.9018 30.9623 21.6565 31.6731 20.6989C34.2277 17.2575 35.7472 11.9484 30.3967 8.27164M23.7306 32.9356L13.0074 27.9474M23.7306 32.9356C22.1752 34.1297 18.9204 37.3868 14.6541 35.3396C10.3878 33.2923 11.7853 29.2269 13.0074 27.9474M23.7306 5.63716C24.9636 5.83711 26.2941 6.22069 27.7303 6.83328C28.7644 7.27436 29.6478 7.75701 30.3967 8.27164M23.7306 5.63716C14.662 4.16656 10.8655 12.6294 9.06517 12.975C3.73227 13.9986 -1.32896 20.7895 4.81521 23.9211C10.9594 27.0526 13.0074 27.9474 13.0074 27.9474M23.7306 5.63716C24.175 3.3062 26.1304 0.691494 30.3967 2.73873C34.6631 4.78597 32.1744 6.76856 30.3967 8.27164"
            :stroke="active ? bgColor : secondaryColor" :stroke-width="active ? 1 : 2.5" />
    </svg>

    <svg v-else-if="name === 'profile'" width="42" height="42" viewBox="0 0 42 42" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
            d="M7.06967 33.9209C10.5396 37.6601 15.4965 40 21 40C26.4646 40 31.3903 37.6931 34.8565 34C27.5243 26.0265 14.0892 26.0001 7.06967 33.9209Z"
            :fill="active ? secondaryColor : bgColor" />
        <path
            d="M7 34C7.02315 33.9735 7.04638 33.9472 7.06967 33.9209M34.8565 34C38.0463 30.6014 40 26.0288 40 21C40 10.5066 31.4934 2 21 2C10.5066 2 2 10.5066 2 21C2 25.9899 3.92358 30.5306 7.06967 33.9209M34.8565 34C31.3903 37.6931 26.4646 40 21 40C15.4965 40 10.5396 37.6601 7.06967 33.9209M34.8565 34C27.5243 26.0265 14.0892 26.0001 7.06967 33.9209"
            :stroke="active ? bgColor : secondaryColor" :stroke-width="active ? 1 : 2.5" />
        <path
            d="M26.5 17C26.5 20.6825 23.724 23.5 20.5 23.5C17.276 23.5 14.5 20.6825 14.5 17C14.5 13.3175 17.276 10.5 20.5 10.5C23.724 10.5 26.5 13.3175 26.5 17Z"
            :fill="active ? secondaryColor : bgColor" :stroke="active ? bgColor : secondaryColor"
            :stroke-width="active ? 1 : 2.5" />
    </svg>

    <svg v-else-if="name === 'menu'" xmlns="http://www.w3.org/2000/svg" width="36" height="26" viewBox="0 0 36 26"
        fill="none">
        <path d="M2 2H34" :stroke="secondaryColor" stroke-width="2" stroke-linecap="round" />
        <path d="M2 12.5217H34" :stroke="secondaryColor" stroke-width="2" stroke-linecap="round" />
        <path d="M2 24H34" :stroke="secondaryColor" stroke-width="2" stroke-linecap="round" />
    </svg>
</template>

<script setup lang="ts">
import { bgColor, secondaryColor } from "@/assets/global_colors"

const { name, active } = defineProps({
    name: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: false
    }
});
</script>