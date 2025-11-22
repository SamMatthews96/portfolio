<template>
    <div class="timeline-container">
        <div class="timeline-line"></div>
        <div class="timeline-years">
            <div v-for="year in years" :key="year" class="timeline-year" :style="{ left: getYearPosition(year) + '%' }">
                <div class="year-marker"></div>
                <span class="year-label">{{ year }}</span>
            </div>
        </div>
    </div>

    <div v-for="(lane) in lanes" class="timeline-lane">
        <TimelineItem v-for="item in lane" :item="item" :style="getItemStyle(item)"></TimelineItem>
    </div>

</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import TimelineItem from './TimelineItem.vue';
import { type Activity } from '../types';
import timelineItems from '../data/timelineItems.json'

const lanes: Ref<Array<Array<Activity>>> = ref([]);

onMounted(() => {
    timelineItems.forEach(item => {
        let currentLaneNumber = 0;

        while (true) {
            const isOverlap = lanes.value[currentLaneNumber]?.some(laneItem =>
                doRangesOverlap(item, laneItem)
            )
            if (isOverlap) {
                currentLaneNumber++;
            } else {
                if (lanes.value[currentLaneNumber]) {
                    lanes.value[currentLaneNumber]?.push(item)
                } else {
                    lanes.value[currentLaneNumber] = [item]
                }
                break;
            }
        }
    })
});

const startYear = 2019;
const now = new Date();
const startDate = new Date(startYear, 0, 1);
const totalDays = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
const currentYear = now.getFullYear();
const currentMonth = now.getMonth();
const currentDate = { year: currentYear, month: currentMonth }

const years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);

const getYearPosition = (year: number): number => {
    const yearStartDate = new Date(year, 0, 1);
    const daysFromStart = Math.floor((yearStartDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    return (daysFromStart / totalDays) * 100;
};

const getDatePosition = (date: { year: number; month: number }): number => {
    const dateObj = new Date(date.year, date.month - 1, 1);
    const daysFromStart = Math.floor((dateObj.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    return (daysFromStart / totalDays) * 100;
};

const dateToTimestamp = (date: { year: number; month: number }): number => {
    return new Date(date.year, date.month - 1, 1).getTime();
};

const doRangesOverlap = (item1: Activity, item2: Activity): boolean => {
    const start1 = dateToTimestamp(item1.startDate);
    const end1 = dateToTimestamp(item1?.endDate ?? currentDate);
    const start2 = dateToTimestamp(item2.startDate);
    const end2 = dateToTimestamp(item2?.endDate ?? currentDate);

    return start1 <= end2 && start2 <= end1;
};

const getItemStyle = (item: Activity) => {
    const left = getDatePosition(item.startDate);
    const right = 100 - getDatePosition(item?.endDate ?? currentDate);
    return {
        left: `${left}%`,
        right: `${right}%`,
    };
};
</script>

<style scoped lang="scss">
.timeline-container {
    position: relative;
    width: 100%;
    margin-top: 3rem;
    padding: 2rem 0;
    min-height: 60px;


    .timeline-line {
        position: absolute;
        top: 40px;
        left: 0;
        width: 100%;
        height: 2px;
        background: rgba(206, 236, 207, 0.4);
    }

    .timeline-years {
        position: relative;
        width: 100%;

        .timeline-year {
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            transform: translateX(-50%);
        }

        .year-marker {
            width: 2px;
            height: 18px;
            background-color: rgba(206, 236, 207, 0.87);
            margin-bottom: 0.5rem;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .year-label {
            font-size: 0.875rem;
            color: rgba(206, 236, 207, 0.7);
            font-weight: 500;
            white-space: nowrap;
        }
    }
}

.timeline-lane {
    position: relative;
    width: 100%;
    min-height: 40px;
}
</style>