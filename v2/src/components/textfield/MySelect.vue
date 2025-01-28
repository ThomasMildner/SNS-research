<template>
    <div class="text-field-wrapper">

        <div class="name-row">
            <label class="name-label" :class="{ 'invalid': !valid }">
                {{ name }}<em class="required-asterix">{{ required ? '*' : '' }}</em>
            </label>
            <PlusEmoji :if-condition="showEmoji && localValue.trim() == ''" class="plus-emoji" />
        </div>

        <select :name="name" class="text-field interact-node" :class="{ 'invalid': !valid }" :disabled="disabled"
            :value="localValue" :valid="valid" @input="handleInput" @focus="emit('inputFocus')" :required="required">
            <option value="">Please choose an option...</option>
            <option v-for="option in options">{{ option }}</option>
        </select>

        <label v-if="!valid" class="hint-label">{{ hint }}</label>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PlusEmoji from '../PlusEmoji.vue';
import { useFocus } from '@vueuse/core';

const { name, disabled, valid, hint, required, options, startValue, showEmoji, initialFocus, modelValue } = defineProps({
    name: {
        type: String,
        default: "text"
    },
    disabled: {
        type: Boolean,
        default: false
    },
    valid: {
        type: Boolean,
        default: true
    },
    hint: {
        type: String,
        default: ""
    },
    required: {
        type: Boolean,
        default: false
    },
    startValue: {
        type: String,
        default: ""
    },
    options: {
        type: Array,
        default: []
    },
    showEmoji: {
        type: Boolean,
        default: false
    },
    initialFocus: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: String,
        default: null,
    },
});

const emit = defineEmits(['update:modelValue', 'inputFocus']);

const target = ref()

if (initialFocus) {
    const { focused } = useFocus(target, { initialValue: true });
}

const localValue = ref(startValue.length > 0 ? startValue : modelValue);

const handleInput = (event: Event) => {
    localValue.value = (event.target as HTMLInputElement).value;
    emit('update:modelValue', localValue.value);
};
</script>

<style scoped>
@import url("./textfield_style.css");
</style>