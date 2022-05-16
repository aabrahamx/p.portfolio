<script setup>
  import IconLink from '@/components/IconLink/IconLink.vue';
</script>

<template>
  <section
    class="flex flex-col items-center justify-center w-full h-screen mb-20"
  >
    <div class="content">
      <h1 class="font-black text-7xl">
        Hi, I'm <span class="text-light-yellow">Abel</span>.
      </h1>
      <h2 class="mb-10 text-4xl font-light tracking-wide opacity-75 mt-7">
        Front-End Developer
      </h2>
      <IconLink
        title="GitHub"
        href="https://github.com/abelabrahamx"
        src="https://img.icons8.com/ios-glyphs/90/ffffff/github.png"
      />
      <IconLink
        title="CodePen"
        href="https://codepen.io/abelg939"
        src="https://img.icons8.com/ios-filled/100/ffffff/codepen.png"
      />
    </div>
  </section>
</template>

<style scoped>
  .content {
    animation: slide-in 1s linear;
  }

  @keyframes slide-in {
    from {
      top: 10%;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
</style>
