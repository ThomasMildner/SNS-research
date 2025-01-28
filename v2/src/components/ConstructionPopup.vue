<template>
    <Popup popupId="construction" :open="appstate.constructionPopupOpen"
        @close="appstate.constructionPopupOpen = false">
        <template v-slot:content>
            <ConstructionMessage />
        </template>

        <template v-slot:buttons>
            <MyButton size="small" @click="appstate.constructionPopupOpen = false">Ok</MyButton>
        </template>
    </Popup>
</template>

<script setup lang="ts">
import Popup from '@/components/Popup.vue';
import ConstructionMessage from './ConstructionMessage.vue';
import MyButton from './MyButton.vue';
import { appstate } from '@/stores/appstate_store'
</script>