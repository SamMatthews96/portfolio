<template>
    <div class="timeline-item" :style="style" @mouseenter="isMouseover = true" @mouseleave="isMouseover = false">
        <span ref="timelineItem" :class="{ 'open': isOpen }" @click="isOpen = !isOpen">
            {{ item.name }} {{ isMouseover ? '(Show More)' : '' }}
        </span>
        
    </div>

</template>

<script setup lang="ts">
import { defineProps, type Ref, ref } from 'vue'
import type { Activity } from '../types'


const props = defineProps<{
    item: Activity,
    style: { left: string, right: string }
}>()

const timelineItem = ref()
const isOpen: Ref<boolean> = ref(false)
const isMouseover: Ref<boolean> = ref(false)

const item = props.item

const backgroundColor = ref("")
switch (item.type) {
    case 'Volunteer':
        backgroundColor.value = 'rgb(171, 70, 89)'
        break;
    case 'Employment':
        backgroundColor.value = 'rgb(70, 85, 171)'
        break;
    case 'Hobby':
        backgroundColor.value = 'rgb(87, 171, 70)'
        break;
    default:
        throw new Error(`[20251122.2002] Unsupported Type: ${item.type}`)
}


</script>

<style>
.timeline-item {
    position: absolute;
    height: 32px;
    background: v-bind(backgroundColor);
    border: 1px solid rgba(206, 236, 207, 0.3);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.75rem;
    transition: background 0.2s ease, border-color 0.2s ease, top 0.3s ease;
    color: white;
    cursor: pointer;

    &.open {
        transform: rotate(30deg);
    }
}
</style>