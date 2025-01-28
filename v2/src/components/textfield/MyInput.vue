<template>
    <div class="text-field-wrapper">

        <div class="name-row">
            <label class="name-label" :class="{ 'invalid': !valid }">
                {{ name }}<em class="required-asterix">{{ required ? '*' : '' }}</em>
            </label>
            <PlusEmoji :if-condition="showEmoji && localValue.trim() == ''" class="plus-emoji" />
        </div>

        <input :name="name" class="text-field interact-node" :class="{ 'invalid': !valid }" :placeholder="`${name}...`"
            :required="required" :value="localValue" :type="inputType" :valid="valid" @input="handleInput"
            @focus="emit('inputFocus')" ref="target" :disabled="disabled">

        <label v-if="!valid" class="hint-label">{{ hint }}</label>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import PlusEmoji from '../PlusEmoji.vue';
import { useFocus } from '@vueuse/core';

const { name, inputType, disabled, valid, hint, required, startValue, showEmoji, initialFocus, modelValue } = defineProps({
    name: {
        type: String,
        default: "text"
    },
    inputType: {
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

const emit = defineEmits(['update:modelValue', 'valueUpdated', 'inputFocus']);

const target = ref()

if (initialFocus) {
    const { focused } = useFocus(target, { initialValue: true });
}

const localValue = ref(startValue.length > 0 ? startValue : modelValue);

const handleInput = (event: Event) => {
    let newValue = (event.target as HTMLInputElement).value;

    if (inputType === 'birthday') {
        const allowedCharactersRegex = /^[0-9]+$/;
        newValue = preventWrongInput(newValue, allowedCharactersRegex);

        // Insert dots for date format (e.g., DD.MM.YYYY)
        if (newValue.length > localValue.value.length && (newValue.length === 3 || newValue.length === 6)) {
            newValue = `${newValue.slice(0, -1)}.${newValue.slice(-1)}`;
        }

        // Maximum of 10 chars
        if (newValue.length > 10) {
            newValue = newValue.slice(0, -1);
        }
    }

    if (inputType === 'tel') {
        const allowedCharactersRegex = /^[0-9+#\s\*\-]+$/;
        newValue = preventWrongInput(newValue, allowedCharactersRegex);
    }

    localValue.value = newValue;
    (event.target as HTMLInputElement).value = newValue;
};

const preventWrongInput = (input: string, allowedCharactersRegex: RegExp): string => {
    const lastChar = input.charAt(input.length - 1);

    if (!allowedCharactersRegex.test(lastChar)) {
        // Remove the last character if it's not a digit
        return input.slice(0, -1);
    } else {
        return input
    }
}

// Watch for changes in localValue and emit the update event
watch(() => localValue.value, (newValue) => {
    emit('update:modelValue', newValue);
    emit('valueUpdated');
});
</script>

<style scoped>
@import url("./textfield_style.css");
</style>