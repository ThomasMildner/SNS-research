<template>
    <div class="emoji-container">

        <Transition name="fade">

            <!-- Depressed -->
            <svg v-if="percentage < 25" class="emoji-svg" key="depressed" width="113" height="113" viewBox="0 0 113 113"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="56.5" cy="56.5" r="56.5" fill="#F44336" />
                <path d="M105.467 56.5C105.467 83.5435 83.5435 105.467 56.5 105.467" stroke="#D32F2F" stroke-width="5"
                    stroke-linecap="round" />
                <path d="M7.53333 56.5C7.53333 29.4565 29.4565 7.53333 56.5 7.53333" stroke="#E57373" stroke-width="5"
                    stroke-linecap="round" />
                <path
                    d="M56.5112 56.9999C45.1893 56.9999 36.0112 68.6405 36.0112 82.9999C36.0112 97.3593 48.3896 79.4999 56.5112 79.4999C64.6328 79.4999 77.0112 97.3593 77.0112 82.9999C77.0112 68.6405 67.833 56.9999 56.5112 56.9999Z"
                    fill="#880E4F" />
                <path d="M36.0112 54C36.0112 50.6863 32.2056 48 27.5112 48C22.8167 48 19.0112 50.6863 19.0112 54"
                    stroke="#880E4F" stroke-width="3" stroke-linecap="round" />
                <path d="M94.0112 54C94.0112 50.6863 90.2056 48 85.5112 48C80.8167 48 77.0112 50.6863 77.0112 54"
                    stroke="#880E4F" stroke-width="3" stroke-linecap="round" />
                <path d="M19 43.363L32.5946 37.0238" stroke="#880E4F" stroke-width="2" stroke-linecap="round" />
                <path d="M80 37.0238L93.5946 43.3631" stroke="#880E4F" stroke-width="2" stroke-linecap="round" />
            </svg>

            <!-- Sad -->
            <svg v-else-if="percentage < 50" class="emoji-svg" key="sad" width="113" height="113" viewBox="0 0 113 113"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="56.5" cy="56.5" r="56.5" fill="#FF9100" />
                <path d="M105.467 56.5C105.467 83.5435 83.5435 105.467 56.5 105.467" stroke="#EF6C00" stroke-width="5"
                    stroke-linecap="round" />
                <path d="M7.53333 56.5C7.53333 29.4565 29.4565 7.53333 56.5 7.53333" stroke="#FFA726" stroke-width="5"
                    stroke-linecap="round" />
                <path d="M42 80.9999C47 59 66 59 71 81" stroke="#BF360C" stroke-width="3" stroke-linecap="round" />
                <circle cx="27" cy="52" r="5" fill="#BF360C" />
                <circle cx="85" cy="53" r="5" fill="#BF360C" />
                <path d="M17.3384 47.8677L31.4338 42.7374" stroke="#BF360C" stroke-width="2" stroke-linecap="round" />
                <path d="M80.3384 43.7373L94.4338 48.8676" stroke="#BF360C" stroke-width="2" stroke-linecap="round" />
            </svg>

            <!-- Neutral -->
            <svg v-else-if="percentage < 75" class="emoji-svg" key="neutral" width="113" height="113" viewBox="0 0 113 113"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="56.5" cy="56.5" r="56.5" fill="#FDD835" />
                <path d="M105.467 56.5C105.467 83.5435 83.5435 105.467 56.5 105.467" stroke="#F9A825" stroke-width="5"
                    stroke-linecap="round" />
                <path d="M7.53333 56.5C7.53333 29.4565 29.4565 7.53333 56.5 7.53333" stroke="#FFEE58" stroke-width="5"
                    stroke-linecap="round" />
                <path d="M39 74H74" stroke="#E65100" stroke-width="3" stroke-linecap="round" />
                <circle cx="27" cy="52" r="5" fill="#E65100" />
                <circle cx="85" cy="53" r="5" fill="#E65100" />
                <path d="M20 37H35" stroke="#E65100" stroke-width="2" stroke-linecap="round" />
                <path d="M78 37H93" stroke="#E65100" stroke-width="2" stroke-linecap="round" />
            </svg>

            <!-- Content -->
            <svg v-else-if="percentage < 100" class="emoji-svg" key="content" width="113" height="113" viewBox="0 0 113 113"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="56.5" cy="56.5" r="56.5" fill="#CDDC39" />
                <path d="M105.467 56.5C105.467 83.5435 83.5435 105.467 56.5 105.467" stroke="#AFB42B" stroke-width="5"
                    stroke-linecap="round" />
                <path d="M7.53333 56.5C7.53333 29.4565 29.4565 7.53333 56.5 7.53333" stroke="#DCE775" stroke-width="5"
                    stroke-linecap="round" />
                <path d="M37 69.5C52 75 61 75 76 69.5" stroke="#33691E" stroke-width="3" stroke-linecap="round" />
                <circle cx="27" cy="52" r="5" fill="#33691E" />
                <circle cx="85" cy="53" r="5" fill="#33691E" />
                <path d="M17 41.4298C22 38.825 25 37.8251 31.7721 38.8251" stroke="#33691E" stroke-width="2"
                    stroke-linecap="round" />
                <path d="M94.7721 42.0346C89.7721 39.4298 86.7721 38.4298 80 39.4298" stroke="#33691E" stroke-width="2"
                    stroke-linecap="round" />
            </svg>

            <!-- Happy -->
            <svg v-else class="emoji-svg" width="113" key="happy" height="113" viewBox="0 0 113 113" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="56.5" cy="56.5" r="56.5" fill="#43A047" />
                <path d="M105.467 56.5C105.467 83.5435 83.5435 105.467 56.5 105.467" stroke="#388E3C" stroke-width="5"
                    stroke-linecap="round" />
                <path d="M7.53333 56.5C7.53333 29.4565 29.4565 7.53333 56.5 7.53333" stroke="#81C784" stroke-width="5"
                    stroke-linecap="round" />
                <path
                    d="M56.5 83C67.4397 83 76.3781 75.4759 76.9689 65.9998C77.0033 65.4486 76.5523 65 76 65H37C36.4477 65 35.9967 65.4486 36.0311 65.9998C36.6219 75.4759 45.5602 83 56.5 83Z"
                    fill="#004D40" />
                <path d="M36 54C36 50.6863 32.1944 48 27.5 48C22.8056 48 19 50.6863 19 54" stroke="#004D40" stroke-width="3"
                    stroke-linecap="round" />
                <path d="M94 54C94 50.6863 90.1944 48 85.5 48C80.8056 48 77 50.6863 77 54" stroke="#004D40" stroke-width="3"
                    stroke-linecap="round" />
                <path d="M19.5321 34.9544C23.7938 29.9986 28.2928 29.4931 34.3042 32.3497" stroke="#004D40" stroke-width="2"
                    stroke-linecap="round" />
                <path d="M94.7833 34.5592C90.5216 29.6033 86.0225 29.0978 80.0112 31.9544" stroke="#004D40" stroke-width="2"
                    stroke-linecap="round" />
            </svg>

        </Transition>
    </div>
</template>

<script setup lang="ts">

const { percentage } = defineProps({
    percentage: {
        type: Number,
        default: 0
    }
});
</script>

<style scoped>
.emoji-container {
    height: 100%;
    width: 100%;
    display: grid;
    justify-items: center;
    border-radius: 100vh;
}

.emoji-svg {
    grid-row: 1;
    grid-column: 1;
    height: 100%;
    width: auto;
    box-sizing: content-box;
    border-radius: 100vh;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>