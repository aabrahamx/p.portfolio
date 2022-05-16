<script setup>
  import { RouterView } from 'vue-router';
  import Footer from '@/components/Footer/Footer.vue';
</script>

<template>
  <main class="p-6">
    <RouterView />
  </main>
  <Footer />
</template>

<style>
  @import './assets/styles/base.css';

  #app {
    width: 100%;
  }
</style>
