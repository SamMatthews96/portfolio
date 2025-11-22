<script setup lang="ts">

import SkillItem from './SkillItem.vue';
// defineProps<{ msg: string }>()

</script>

<template>
    <h2>Skills</h2>
    <div class="skills-list">
        <SkillItem name="HTML"/>
        <SkillItem name="CSS"/>
        <SkillItem name="JavaScript"/>
        <SkillItem name="C#"/>
        <SkillItem name="Python"/>
        <SkillItem name="SQL"/>
        <SkillItem name="TypeScript"/>
        <SkillItem name="PHP"/>
        <SkillItem name="Vue"/>
        <SkillItem name="React"/>
        <SkillItem name="AWS"/>
        <SkillItem name="REST APIs"/>
        <SkillItem name="Node"/>

    </div>
</template>

<style scoped lang="scss">
.skills-list {
    margin: auto;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    max-width: 700px;
}
</style>