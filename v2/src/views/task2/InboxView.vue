<template>
    <div id="inbox-view">
        <ConstructionMessage />
    </div>
</template>


<script setup lang="ts">
import ConstructionMessage from '@/components/ConstructionMessage.vue';
import { generateIds } from '@/functions';
import { onMounted, ref, type Ref } from 'vue';

onMounted(() => {
    generateIds("inbox-view");
})
</script>

<style scoped>
#inbox-view {
    display: flex;
    width: 100%;
}
</style>