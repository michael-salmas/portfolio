<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    :width="props.size" 
    :height="props.size" 
    viewBox="0 0 24 24"
    :color="props.color"
  >
    <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/>
  </svg>

</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  size?: number|string;
  color?: string;
}>(), {
  color: 'black',
  size: 24,
});
</script>