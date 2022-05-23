<script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <a
    class="inline-flex items-center justify-center w-32 mr-8 text-xs font-bold border rounded cursor-pointer sm:text-sm h-11 sm:h-12 sm:w-40 icon-link bg-white/5 border-white/20 opacity-80 hover:opacity-100"
    :href="props.href"
  >
    <img class="icon" :alt="props.title + 'icon'" :src="props.src" />
    <span class="title">{{ props.title }}</span>
  </a>
</template>

<style scoped>
  .icon-link {
    transition: background 0.3s linear, opacity 0.3s linear;
  }

  .icon-link:hover {
    background: none;
  }

  .icon,
  .title {
    margin: 0.2rem;
  }

  .icon {
    width: 1.25rem;
  }
</style>
