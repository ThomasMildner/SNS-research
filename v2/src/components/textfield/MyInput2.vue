<template>
    <div class="text-field-wrapper">

        <div class="name-row">
            <label class="name-label small" :class="{ 'invalid': !valid }">
                {{ name }}<em class="required-asterix">{{ required ? '*' : '' }}</em>
            </label>
        </div>

        <input :name="name" class="text-field interact-node" :class="{ 'invalid': !valid }" :placeholder="`${name}...`"
            :required="required" :value="localValue" :type="inputType" :valid="valid" @input="handleInput"
            @focus="emit('inputFocus')" :disabled="disabled" ref="inputRef">

        <label v-if="!valid" class="hint-label">{{ hint }}</label>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const { name, inputType, disabled, valid, hint, required, startValue, modelValue } = defineProps({
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
    modelValue: {
        type: String,
        default: null,
    },
});

const emit = defineEmits(['update:modelValue', 'inputFocus']);

const localValue = ref(startValue.length > 0 ? startValue : modelValue);

const handleInput = (event: Event) => {
    localValue.value = (event.target as HTMLInputElement).value;
    emit('update:modelValue', localValue.value);
};
</script>

<style scoped>
@import url("./textfield_style.css");
</style>