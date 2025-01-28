<template>
  <button :class="{
    neutral: buttonStyle === 'neutral',
    highlight: buttonStyle === 'highlight',
    subtle: buttonStyle === 'subtle',
    big: size === 'big',
    small: size === 'small'
  }" class="interact-node" :disabled="disabled">
    <slot>
    </slot>
  </button>
</template>

<script setup lang="ts">

enum ButtonStyle {
  neutral = "neutral",
  highlight = "highlight",
  subtle = "subtle"
}

const { buttonStyle, disabled } = defineProps({
  buttonStyle: {
    type: String,
    default: ButtonStyle.neutral
  },
  size: {
    type: String,
    default: "big"
  },
  disabled: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.big {
  font-size: 1.25rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
}

.small {
  font-size: 1rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
}

.neutral {
  color: white;
  background-color: var(--primary-color);
}

.big.neutral {
  border: 0.1rem solid var(--primary-color);
}

.small.neutral {
  border: 0.05rem solid var(--primary-color);
}

.highlight {
  border: 0.1rem solid #d07234ff;
  color: var(--bg-color);
  background: linear-gradient(to right, #ffaf41ff, #d07234ff 10%, #eda231 30%, #dc8a0c 59.34%, #fee11b 81.58%, #fdd21f 90.82%, #e3a02c 100%);
}

.small.highlight {
  border: 0.05rem solid var(--secondary-highlight);
}

.subtle {
  color: var(--secondary-color);
  background-color: var(--bg-color);
}

.big.subtle {
  border: 0.1rem solid var(--secondary-color);
}

.small.subtle {
  border: none;
}

/*
.neutral:hover {
  background: #3065d6;
}

.highlight:hover {
  background: linear-gradient(to left, #ffaf41ff, #d07234ff 10%, #eda231 30%, #dc8a0c 59.34%, #fee11b 81.58%, #fdd21f 90.82%, #e3a02c 100%);
}

.subtle:hover {
  background: #f4f1f1;
}*/

button:disabled,
button[disabled] {
  border: 0.1rem solid #b0b0b0 !important;
  background-color: #cccccc !important;
  color: #949494 !important;
  cursor: default;
}
</style>