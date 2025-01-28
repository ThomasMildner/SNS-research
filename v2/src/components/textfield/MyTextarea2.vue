<template>
    <div class="text-field-wrapper">

        <textarea :name="name" class="text-field interact-node" :class="{ 'invalid': !valid }" maxlength="1000"
            :value="localValue" :valid="valid" @input="handleInput" @focus="emit('inputFocus')" :required="required"
            wrap="hard" :placeholder="placeholder" :disabled="disabled">
        </textarea>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const { name, placeholder, disabled, valid, required, modelValue } = defineProps({
    name: {
        type: String,
        default: "text"
    },
    placeholder: {
        type: String,
        default: ""
    },
    disabled: {
        type: Boolean,
        default: false
    },
    valid: {
        type: Boolean,
        default: true
    },
    required: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: String,
        default: null,
    },
});

const emit = defineEmits(['update:modelValue', 'inputFocus']);

const localValue = ref(modelValue);

const handleInput = (event: Event) => {
    localValue.value = (event.target as HTMLInputElement).value;
    emit('update:modelValue', localValue.value);
};
</script>

<style scoped>
@import url("./textfield_style.css");

textarea {
    padding: 0.75rem 0.25rem;
    border: 0.075rem var(--secondary-color) solid;
    border-radius: 0.25rem;
    height: 8rem;
}
</style>