<template>
  <div class="wrapper">
    <a
      title="Github"
      href="https://github.com/michael-salmas" 
      target="_blank"
    >
      <GithubIcon />
    </a>
    
    <a 
      title="LinkedIn" 
      href="https://www.linkedin.com/in/michael-salmas/" 
      target="_blank"
    >
      <LinkedInIcon />
    </a>
    
    <a 
      title="Resume"
    >
      <ResumeIcon />
    </a>
    
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

a:hover{
    cursor: pointer;
}

</style>