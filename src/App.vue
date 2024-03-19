<template>
  <div class="full-page">
    <div class="sidebar-wrapper">
      <SideBarTop/>
      
      <nav class="links">
        <RouterLink to="/">About</RouterLink>
        <RouterLink to="/experience">Experience</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
      </nav>
      
      <SideBarBottom/>
    </div>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SideBarTop from '@/components/sidebar/SideBarTop.vue'
import SideBarBottom from '@/components/sidebar/SideBarBottom.vue'
</script>

<style scoped lang="scss">


.links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  padding: 0 3rem;
  :hover {
      background-color: #d0d0d0;
    }


  a {
    text-align: center;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: #f0f0f0;
    text-decoration: none;
    color: #000;
    transition: background-color 0.3s;
  }
  
}

.full-page {
  display: flex;
  flex-direction: row;
}

.sidebar-wrapper {
  background-color: var();
}
</style>../components/sidebar/SideBarTop.vue/components/sidebar/SideBarBottom.vue
