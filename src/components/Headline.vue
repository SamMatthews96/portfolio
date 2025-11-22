<template>
    <div class="headline-container">
        <transition name="slide">
            <p :key="currentIndex" class="headline-text">
                {{ headlines[currentIndex] }}
            </p>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const headlines = ref([
    'Software Developer',
    'Hobbyist Game Developer',
    'Dark Theme Enjoyer'
]);

const currentIndex = ref(0);
let intervalId: number | null = null;

onMounted(() => {
    // Change headline every 4 seconds
    intervalId = window.setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % headlines.value.length;
    }, 4000);
});

onUnmounted(() => {
    if (intervalId !== null) {
        clearInterval(intervalId);
    }
});
</script>

<style scoped>
.headline-container {
    position: relative;
    height: 4em;
    overflow: hidden;
    margin: 1rem 0;
}

.headline-text {
    font-size: 1.5em;
    white-space: nowrap;
    position: absolute;
    width: 100%;
    left: 0;
}

/* Slide out animation - current text moves right */
.slide-leave-active {
    transition: transform 0.6s ease-in-out, opacity 0.4s ease-in-out;
}

.slide-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

/* Slide in animation - new text comes from left */
.slide-enter-active {
    transition: transform 0.6s ease-in-out, opacity 0.4s ease-in-out;
}

.slide-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}

.slide-enter-to {
    transform: translateX(0);
    opacity: 1;
}
</style>