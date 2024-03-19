<template>
  <div class="wrapper">

    <GithubIcon />
    
    <LinkedInIcon />
    
    <ResumeIcon />
    
  </div>
</template>

<script setup lang="ts">
import GithubIcon from '@/components/icons/GithubIcon.vue';
import LinkedInIcon from '@/components/icons/LinkedInIcon.vue';
import ResumeIcon from '@/components/icons/ResumeIcon.vue';
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
}
</style>