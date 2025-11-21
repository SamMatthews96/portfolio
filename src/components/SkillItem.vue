<script setup lang="ts">

import { ref } from 'vue';

defineProps<{
    name: string,
}>()

const isOpen = ref<boolean>(false);


</script>

<template>
    <div
        :class="{
            'skill-item': true,
            'is-open': isOpen
        }"
        @click="isOpen = !isOpen"
    >
        <span class="skill-text">{{ name }}</span>
    </div>


</template>

<style scoped lang="scss">
.skill-item {
    border-radius: 8px;
    border: 2px solid green;
    padding: 0.6em 1.2em;
    margin: 4px;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    width: 80px;
    position: relative;
    overflow: hidden;
}

.skill-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: -120%;
    width: 120%;
    height: 100%;
    background: linear-gradient(115deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%);
    clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
    transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
}

.skill-item:hover::before {
    left: 0;
}

.skill-text {
    position: relative;
    z-index: 1;
}

</style>
