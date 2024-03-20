<template>
  <div class="card">
    
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string,
}>()
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  border-radius: 1rem;
  padding: 2rem;
  gap: 2rem;
  background-color: #fff;
  max-height: 60%;
  width: 60%;
  margin: 4rem 0;
}


</style>