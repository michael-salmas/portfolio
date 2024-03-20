<template>
  <div class="page">
    <experience-card
      title="Software Developer"
      company="Chess.com"
      start-date="June 2021"
      description="Worked on the Chess.com website"
      tech-stack="Vue, Symfony, Twig, Type Script, SCSS, Playwright"
      logo="public/chesscom-logo.jpg"
      link="https://www.chess.com"
    />


  </div>
</template>

<script setup lang="ts">
import ExperienceCard from '@/components/experience/ExperienceCard.vue';
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  overflow-y: auto;
}
</style>