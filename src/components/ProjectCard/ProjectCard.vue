<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    emoji: {
      type: String,
      required: true,
    },
    repo: {
      type: String,
      required: true,
    },
    site: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <div class="flex flex-col items-center justify-between px-4 py-5 card">
    <p class="text-3xl font-bold text-floral-white/50">{{ props.title }}</p>
    <p class="darp-shadow-lg text-7xl">{{ props.emoji }}</p>
    <div
      class="flex items-center justify-around w-full h-1/6 text-floral-white"
    >
      <a
        class="text-sm transition-all cursor-pointer text-dark-orange underline-offset-8 hover:underline"
        :href="props.repo"
        target="_blank"
        >Repository</a
      >
      <a
        class="text-sm transition-all cursor-pointer text-dark-orange underline-offset-8 hover:underline"
        :href="props.site"
        target="_blank"
        >Website</a
      >
    </div>
  </div>
</template>

<style scoped>
  .card {
    position: relative;
    height: 22.5rem;
    width: 20rem;
    margin: 3rem 2rem;
    border-radius: 0.25rem;
    background: rgba(255, 255, 255, 0.05);
  }
  .card:hover {
    background: rgba(255, 255, 255, 0.15);
  }
</style>
