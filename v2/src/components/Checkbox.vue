<template>
    <div class="checkbox">
        <input name="checkbox" type="checkbox" class="interact-node" :class="{ invalid: !valid }" v-model="localValue"
            :disabled="disabled" :required="required" ref="inputRef" />
        <label :class="{ invalid: !valid }" class="interact-node" @click="onLabelClick">
            <slot></slot><em v-if="required" class="required-asterix">*</em>
        </label>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, type Ref } from 'vue';

const { valid, required, modelValue, disabled } = defineProps({
    valid: {
        type: Boolean,
        default: true,
    },
    required: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['update:modelValue', 'valueUpdated']);

const localValue = ref(modelValue);

const inputRef: Ref<HTMLInputElement | null> = ref(null);

const onLabelClick = () => {
    const inputElement = inputRef.value;
    if (inputElement) {
        const newValue: boolean = !localValue.value;
        localValue.value = newValue;
        inputElement.checked = newValue;
    }
}

// Watch for changes in the parent's modelValue and update localValue accordingly
watch(() => modelValue, (newValue) => {
    localValue.value = newValue;
});

// Watch for changes in localValue and emit the update event
watch(() => localValue.value, (newValue) => {
    emit('update:modelValue', newValue);
    emit('valueUpdated');
});
</script>


<style scoped>
.checkbox {
    display: grid;
    grid-template-columns: 1.5rem auto;
    align-items: center;
}

label {
    color: var(--primary-color);
    font-size: 0.75rem;
    line-height: 125%;
    margin-left: 0.5rem;
    cursor: pointer;
}

input {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
}

input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--bg-color);
    border: 0.15rem solid var(--primary-color);
    border-radius: 0.25rem;
    margin: 0;
    display: grid;
    place-content: center;
    transition: 120ms background-color ease-in-out;
}

input[type="checkbox"]:disabled {
    cursor: default !important;
    border: 0.15rem solid var(--secondary-color) !important;
}

input[type="checkbox"]:disabled:checked {
    background-color: var(--secondary-color) !important;
}

input[type="checkbox"]::before {
    content: "";
    width: 1rem;
    height: 1rem;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1.5rem 1.5rem var(--bg-color);
    transform-origin: center;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}


input[type="checkbox"]:checked::before {
    transform: scale(1);
}

input[type="checkbox"]:checked {
    background-color: var(--primary-color);
}

input[type="checkbox"].invalid {
    border: 0.15rem #dc445d solid;
}

label.invalid {
    color: #dc445d;
}
</style>