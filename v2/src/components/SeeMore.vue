<template>
    <details>
        <summary class="interact-node"></summary>
        <slot></slot>
    </details>
</template>

<script setup lang="ts">
</script>

<style scoped>
details {
    display: block;
    font-size: 1rem;
}

details>summary {
    list-style-type: none;
    color: var(--primary-color);
    cursor: pointer;
    outline: none;
}

details[open]>summary::before {
    content: "Less info ▼";
}

details>summary::before {
    content: "More info ▲";
}

details[open]>summary {
    margin-bottom: 1rem;
}

details summary::-webkit-details-marker {
    display: none;
}
</style>