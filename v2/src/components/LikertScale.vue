<template>
    <div class="likert-scale-wrapper" :class="{ 'bottom-line': bottomLine }" ref="likertScaleWrapper">
        <label class="likert-scale-question">
            <slot>
            </slot>
        </label>
        <ul class="likert-scale-item-list">
            <li class="likert-scale-item" v-for="(text, index) in textArray" :key="index">
                <label class="likert-scale-text">{{ text }}</label>
                <input class="likert-scale-radio interact-node" type="radio" :name="name" :value="index"
                    v-model="localValue">
                <label class="likert-scale-number">{{ index + 1 }}</label>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, type Ref } from 'vue';

const { name, size, start, end, values, bottomLine, modelValue } = defineProps({
    name: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        default: 7
    },
    start: {
        type: String,
        default: "Not at all"
    },
    end: {
        type: String,
        default: "Extremely"
    },
    values: {
        type: Array as () => string[],
        default: []
    },
    bottomLine: {
        type: Boolean,
        default: false,
    },
    modelValue: {
        type: Number,
        default: -1
    },
});

const emit = defineEmits(['update:modelValue', 'valueUpdated']);

const localValue = ref(modelValue);

const likertScaleWrapper: Ref<HTMLElement | null> = ref(null);

const textArray: Ref<string[]> = ref(new Array<string>(size));

if (values.length > 0) {
    textArray.value = values;
} else {
    textArray.value.fill("");
    textArray.value[0] = start;
    textArray.value[size - 1] = end;
}

const setCSSVar = (node: HTMLElement | null, key: string, val: string | number) =>
    node?.style.setProperty(key, val + "");

onMounted(() => {
    const numberOfValues = textArray.value.length;
    setCSSVar(likertScaleWrapper.value, "--item-size", `${100 / numberOfValues}%`);
    setCSSVar(likertScaleWrapper.value, "--radio-size", `${1}rem`);
    setCSSVar(likertScaleWrapper.value, "--line-width", `${0.2}rem`);
})

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
.likert-scale-wrapper {
    display: block;
    width: 100%;
    margin-top: 4.5rem;
    padding-bottom: 5rem;
}

.bottom-line {
    border-bottom: solid 0.15rem #dadada;
}

.likert-scale-question {
    display: block;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    padding: 0;
    margin-bottom: 1rem;
}

.likert-scale-text {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    text-align: center;
    top: 0;
    font-size: 0.65rem;
    line-height: 0.75rem;
    height: 1.5rem;
    color: var(--dark-color);
    font-weight: 600;
}

.likert-scale-item-list {
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
}

.likert-scale-item-list:last-of-type {
    border-bottom: 0;
}

.likert-scale-item-list:before {
    content: '';
    position: relative;
    display: block;
    background-color: #dadada;
    top: calc(1.5rem + (var(--line-width) / 2) + var(--radio-size));
    left: calc(var(--item-size) / 2);
    height: var(--line-width);
    width: calc(100% - var(--item-size));
}

.likert-scale-item {
    display: inline-block;
    width: var(--item-size);
    text-align: center;
    vertical-align: bottom;
}

.likert-scale-radio {
    display: block;
    position: relative;
    width: var(--radio-size);
    height: var(--radio-size);
    top: calc(var(--radio-size) / 2);
    left: 50%;
    margin-left: calc(var(--radio-size) / -2);
    border-width: 0.15rem;
}

.likert-scale-number {
    display: block;
    position: relative;
    text-align: center;
    top: 0.75rem;
    font-size: 0.75rem;
    color: var(--subtle-color);
}
</style>