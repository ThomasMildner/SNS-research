<template>
    <div class="construction-wrapper scroll-style full-padding">
        <h3 class="construction-title">Sorry, this feature is under construction.</h3>
        <ExcavatorSvg class="excavator-svg" name="excavator" />
    </div>
</template>


<script setup lang="ts">
import ExcavatorSvg from '@/components/svgs/ExcavatorSvg.vue';
</script>

<style scoped>
.construction-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    row-gap: 1rem;
}

.construction-title {
    color: var(--primary-color);
}

.excavator-svg {
    display: flex;
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
}
</style>