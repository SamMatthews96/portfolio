<script setup lang="ts">

import Skills from './components/Skills.vue'
import Links from './components/Links.vue';
import Headline from './components/Headline.vue';

</script>

<template>
  <h1>Sam Matthews</h1>
  <Headline />
  <!-- Personal Summary -->
  <p>
    Placeholder: With a passion for creating efficient and user-friendly applications, I've developed expertise in
    modern web technologies and software engineering practices.
    My experience spans full-stack development, where I've built responsive interfaces and robust backend systems.
    I'm committed to writing clean, maintainable code and continuously learning new technologies to stay at the
    forefront of software development.
  </p>


  <Skills />
  <h2>Experience</h2>
  <Links></Links>

</template>

<style scoped lang="scss">
h1 {
  font-size: 3.2em;
  line-height: 1.1;
}
</style>
