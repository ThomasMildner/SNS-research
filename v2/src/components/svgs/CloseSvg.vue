<template>
    <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 28 28">
        <path d="M3.5 25L24.5 3" :stroke="secondaryColor" stroke-width="5" stroke-linecap="round" />
        <path d="M3 3.5L25 24.5" :stroke="secondaryColor" stroke-width="5" stroke-linecap="round" />
    </svg>
</template>

<script setup lang="ts">
import { secondaryColor } from "@/assets/global_colors"
</script>