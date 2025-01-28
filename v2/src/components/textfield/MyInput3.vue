<template>
    <div class="text-field-wrapper">

        <div v-if="showName" class="name-row">
            <label class="name-label small bold">{{ name }}</label>
        </div>

        <input :name="name" class="text-field interact-node" :placeholder="`${name}...`" :value="localValue"
            :type="inputType" @input="handleInput" :disabled="disabled">
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const { name, showName, inputType, disabled, startValue, modelValue } = defineProps({
    name: {
        type: String,
        default: "text"
    },
    showName: {
        type: Boolean,
        default: true
    },
    inputType: {
        type: String,
        default: "text"
    },
    disabled: {
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

input {
    padding: 0.25rem 0.1rem !important;
    border: none !important;
    border-bottom: 0.075rem var(--secondary-color) solid !important;
    border-radius: 0 !important;
}
</style>