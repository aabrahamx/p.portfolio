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
    class="text-sm font-bold border icon-link bg-white/5 border-white/40"
    :href="props.href"
  >
    <img class="icon" :alt="props.title + 'icon'" :src="props.src" />
    <span class="title">{{ props.title }}</span>
  </a>
</template>

<style scoped>
  .icon-link {
    display: inline-flex;
    margin-right: 2rem;
    width: 10rem;
    height: 3rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    transition: all 0.3s linear;
    cursor: pointer;
  }

  .icon-link:hover {
    opacity: 1;
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
