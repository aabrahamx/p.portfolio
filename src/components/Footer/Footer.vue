<script setup>
  const date = new Date();
  const currentYear = date.getFullYear();
</script>

<template>
  <footer
    class="w-full p-4 text-sm font-bold text-center bg-rich-black text-floral-white/30"
  >
    <p class="copyright">&copy {{ currentYear }} Abel Abraham</p>
  </footer>
</template>

<style scoped></style>
