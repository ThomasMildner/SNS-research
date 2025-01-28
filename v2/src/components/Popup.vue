<template>
    <div :id="containerId" class="vue-modal" v-show="open" ref="mainContainer">
        <transition name="slide">
            <div class="vue-modal-inner">
                <div class="vue-modal-content">
                    <div class="close-button-box interact-node" @click="emit('close')">
                        <CloseSvg class="close-button-icon" />
                    </div>
                    <slot name="content" class="content" />
                    <div class="popup-button-container" :class="{ 'horizontal': !vertical, 'vertical': vertical }">
                        <slot name="buttons" />
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import CloseSvg from '@/components/svgs/CloseSvg.vue';
import { generateIds } from '@/functions';
import { onMounted, ref, type Ref } from 'vue';


const { popupId, open, vertical } = defineProps({
    popupId: {
        type: String,
        required: true
    },
    open: {
        type: Boolean,
        default: false,
    },
    vertical: {
        type: Boolean,
        default: false,
    }
});

const emit = defineEmits(['close']);

const containerId = ref(popupId + '-popup')

onMounted(() => {
    generateIds(containerId.value);
})
</script>

<style scoped>
*,
::before,
::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.slot {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.vue-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.vue-modal-inner {
    width: 87.5%;
    margin: auto;
    border-radius: 1rem;
    overflow: hidden;
}

.vue-modal-content {
    position: relative;
    background-color: var(--bg-color);
    background-clip: padding-box;
    padding: 1rem 1rem 1rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 3;
}

.close-button-box {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.close-button-box:hover {
    cursor: pointer;
}

.close-button-icon {
    width: 0.75rem;
    height: 0.75rem;
}

.popup-button-container {
    display: flex;
    gap: 0.5rem;
}

.popup-button-container.horizontal {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}


.popup-button-container.vertical {
    flex-direction: column;
}
</style>