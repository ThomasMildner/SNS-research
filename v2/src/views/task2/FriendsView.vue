<template>
    <div id="friends-view">
        <ConstructionMessage />
    </div>
</template>


<script setup lang="ts">
import ConstructionMessage from '@/components/ConstructionMessage.vue';
import { generateIds } from '@/functions';
import { onMounted } from 'vue';

onMounted(() => {
    generateIds("friends-view");
});
</script>

<style scoped>
#friends-view {
    display: flex;
    width: 100%;
}
</style>