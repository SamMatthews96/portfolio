<template>
    <div class="timeline-container">
        <div class="timeline-line"></div>
        <div class="timeline-years">
            <div 
                v-for="year in years" 
                :key="year" 
                class="timeline-year"
                :style="{ left: getYearPosition(year) + '%' }"
            >
                <div class="year-marker"></div>
                <span class="year-label">{{ year }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const startYear = 2019;
const endYear = 2025;
const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

const getYearPosition = (year: number): number => {
    return ((year - startYear) / (endYear - startYear)) * 100;
};
</script>

<style scoped lang="scss">
.timeline-container {
    position: relative;
    width: 100%;
    margin-top: 3rem;
    padding: 2rem 0;
    min-height: 120px;
}

.timeline-line {
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
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
    box-shadow: 0 0 8px rgba(206, 236, 207, 0.5);
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
}
</style>