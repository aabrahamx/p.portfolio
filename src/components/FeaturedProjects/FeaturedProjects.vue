<script setup>
  import ProjectCard from '../ProjectCard/ProjectCard.vue';
</script>

<template>
  <section class="w-11/12 m-auto">
    <h3 class="text-4xl text-floral-white">Featured Projects</h3>
    <hr
      class="bg-light-yellow w-4/5 lg:w-3/5 h-1.5 rounded mt-4 border-none mb-10"
    />
    <div class="flex flex-wrap items-center justify-center w-full">
      <ProjectCard
        title="Pomodoro Timer"
        emoji="⏰"
        repo="https://github.com/abelabrahamx/pomodoro"
        site="https://pomodoro.aabraham.dev"
      />
      <ProjectCard
        title="Productivo"
        emoji="✔️"
        repo="https://github.com/abelabrahamx/productivo"
        site="https://productivo.aabraham.dev"
      />
      <ProjectCard
        title="Calculator"
        emoji="🧮"
        repo="https://github.com/abelabrahamx/calculator"
        site="https://calculator.aabraham.dev"
      />
    </div>
  </section>
</template>

<style scoped></style>
