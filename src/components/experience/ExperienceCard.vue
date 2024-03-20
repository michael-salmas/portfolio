<template>
  <div class="card">
    
    <img :src="props.logo" :alt="props.company" />
    <div>
      <h3>{{ props.title }}</h3>
      <a :href="props.link" target="_blank">
        <div>{{ props.company }}
          <LinkIcon v-if="props.link"/>
        </div>
      </a>
      <div class="date">{{ props.startDate }} - {{ props.endDate || "Present" }}</div>
      <div class="description">{{ props.description }}</div>
      <div 
        v-if="props.techStack" 
        class="tech-stack"
      >
        Tech Stack: {{ props.techStack }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LinkIcon from '@/components/icons/LinkIcon.vue'

const props = defineProps<{
  title: string,
  company: string,
  startDate: string,
  endDate?: string,
  description: string,
  techStack?: string,
  logo: string,
  link?: string,
}>()
</script>

<style lang="scss" scoped>

h3 {
  margin: 0;
}

.card {
  display: flex;
  border-radius: 1rem;
  padding: 2rem;
  gap: 2rem;
  background-color: #fff;
  width: 60%;
  margin: 4rem 0;
}

.date {
  margin: 0.5rem 0;
  font-style: italic;
}

.description {
  margin: 1rem 0;
}

.tech-stack {
  margin: 0.5rem 0;
}

img {
  justify-content: start;
  align-items: start;
  width: 100px;
  height: 100px;
  border-radius: 0.5rem;
}

a {
  text-decoration: none;
  color: black;
}

a > div {
  display: flex;
  align-items: center;
  font-size: 1.333rem;
  gap: 0.5rem;

  :first-child {
    padding-bottom: .15rem;
  }
}

</style>