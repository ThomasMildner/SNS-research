<template>
    <svg v-if="name === 'warning'" width="50" height="50" viewBox="0 0 50 50" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g :opacity="opacity">
            <circle cx="25" cy="25" r="25" :fill="subtleColor" />
            <path
                d="M21.5359 6C23.0755 3.33333 26.9245 3.33333 28.4641 6L43.1865 31.5C44.7261 34.1667 42.8016 37.5 39.7224 37.5H10.2776C7.19837 37.5 5.27387 34.1667 6.81347 31.5L21.5359 6Z"
                :fill="warningYellow" />
            <path
                d="M22.2361 12.9907C22.1088 11.3785 23.3828 10 25 10V10C26.6172 10 27.8912 11.3785 27.7639 12.9907L26.6181 27.5047C26.5514 28.3489 25.8469 29 25 29V29C24.1531 29 23.4486 28.3489 23.3819 27.5047L22.2361 12.9907Z"
                fill="black" />
            <circle cx="25" cy="32" r="2" fill="black" />
        </g>
    </svg>

    <svg v-else-if="name === 'question'" width="50" height="50" viewBox="0 0 50 50" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g :opacity="opacity">
            <circle cx="25" cy="25" r="25" :fill="subtleColor" />
            <rect x="21" y="37" width="8" height="8" rx="2" fill="#D9D9D9" />
            <path
                d="M25 32C25 23 34.5883 27.4895 34.7632 18.2201C34.7632 12.6177 31.0177 10 25.3188 10C19.6199 10 15 13.3977 15 19"
                stroke="#D9D9D9" stroke-width="8" />
            <path d="M11 19H19V19C19 20.1046 18.1046 21 17 21H15H13C11.8954 21 11 20.1046 11 19V19Z" fill="#D9D9D9" />
            <path d="M21 32H29V32C29 33.1046 28.1046 34 27 34H25H23C21.8954 34 21 33.1046 21 32V32Z" fill="#D9D9D9" />
        </g>
    </svg>

    <svg v-else-if="name === 'hammer'" width="50" height="50" viewBox="0 0 50 50" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g :opacity="opacity">
            <circle cx="25" cy="25" r="25" :fill="subtleColor" />
            <rect x="21" y="19" width="5" height="25" rx="1" :fill="lightBlue" />
            <path
                d="M40.9017 14.4226C39.6245 13.0353 37.4467 10.9482 35.2548 10.125C32.5511 9.10962 28.2548 9.00376 28.0927 9.0001L28.0802 9H20.544C20.1273 9 19.7896 9.33579 19.7896 9.75V10.4956C19.7896 10.9122 19.4496 11.25 19.033 11.25C18.6188 11.25 18.2808 10.9142 18.2808 10.5C18.2808 9.67157 17.6053 9 16.772 9H14.5088C13.6755 9 13 9.67157 13 10.5V16.5C13 17.3284 13.6755 18 14.5088 18H16.772C17.6053 18 18.2808 17.3284 18.2808 16.5C18.2808 16.0858 18.6188 15.75 19.033 15.75C19.4496 15.75 19.7896 16.0878 19.7896 16.5044V17.25C19.7896 17.6642 20.1273 18 20.544 18L26.5792 18C26.8567 18 27.1924 17.4876 27.3336 17.25C27.7998 16.4656 28.0259 15.2314 29.2196 14.4226C31.7483 12.7092 38.0826 14.0104 40.4527 15.0107C40.827 15.1686 41.1762 14.7207 40.9017 14.4226Z"
                :fill="lightBlue" />
        </g>
    </svg>
</template>

<script setup lang="ts">
import { subtleColor, lightBlue, warningYellow } from "@/assets/global_colors"

const { name, opacity } = defineProps({
    name: {
        type: String,
        required: true
    },
    opacity: {
        type: Number,
        default: 0.6
    }
});
</script>