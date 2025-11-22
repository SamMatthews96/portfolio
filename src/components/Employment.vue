<template>
    <div class="timeline-container">
        <div class="timeline-line"></div>
        <div class="timeline-years">
            <div v-for="year in years" :key="year" class="timeline-year" :style="{ left: getYearPosition(year) + '%' }">
                <div class="year-marker"></div>
                <span class="year-label">{{ year }}</span>
            </div>
        </div>
        <div class="timeline-items">
            <div 
                v-for="(item, index) in props.items" 
                :key="index" 
                class="timeline-item"
                :style="getItemStyle(item)"
            >
                <span class="item-name">{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface TimelineItem {
    name: string;
    startDate: { year: number; month: number };
    endDate: { year: number; month: number };
}

interface Props {
    items?: TimelineItem[];
}

const props = withDefaults(defineProps<Props>(), {
    items: () => []
});

const startYear = 2019;
const now = new Date();
const startDate = new Date(startYear, 0, 1);
const totalDays = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
const endYear = now.getFullYear();
const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

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

const getItemStyle = (item: TimelineItem) => {
    const left = getDatePosition(item.startDate);
    const right = 100 - getDatePosition(item.endDate);
    return {
        left: `${left}%`,
        right: `${right}%`
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

}

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
}

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

.year-marker:hover {
    transform: scale(1.3);
    box-shadow: 0 0 12px rgba(206, 236, 207, 0.8);
}

.year-label {
    font-size: 0.875rem;
    color: rgba(206, 236, 207, 0.7);
    font-weight: 500;
    white-space: nowrap;
}

.timeline-items {
    position: relative;
    width: 100%;
    margin-top: 3rem;
}

.timeline-item {
    position: absolute;
    top: 0;
    height: 32px;
    background: rgba(206, 236, 207, 0.15);
    border: 1px solid rgba(206, 236, 207, 0.3);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.75rem;
    transition: background 0.2s ease, border-color 0.2s ease;
}

.timeline-item:hover {
    background: rgba(206, 236, 207, 0.25);
    border-color: rgba(206, 236, 207, 0.5);
}

.item-name {
    font-size: 0.875rem;
    color: rgba(206, 236, 207, 0.87);
    font-weight: 500;
    white-space: nowrap;
}

@media (max-width: 768px) {
    .timeline-container {
        padding: 1.5rem 0.5rem;
    }

    .year-label {
        font-size: 0.75rem;
    }

    .year-marker {
        width: 10px;
        height: 10px;
    }

    .timeline-item {
        height: 28px;
        padding: 0 0.5rem;
    }

    .item-name {
        font-size: 0.75rem;
    }
}
</style>