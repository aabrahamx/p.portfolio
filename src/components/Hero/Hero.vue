<script setup>
  import IconLink from '@/components/IconLink/IconLink.vue';
</script>

<template>
  <section
    class="flex flex-col items-center justify-center w-full h-screen mb-20"
  >
    <div class="content">
      <h1 class="text-5xl font-black sm:text-7xl">
        Hi, I'm <span class="text-light-yellow">Abel</span>.
      </h1>
      <p
        class="mb-10 tracking-wider sm:text-lg w-80 sm:w-96 mt-7 font-extralight"
      >
        Hello there, I am a freelance front-end developer based out of Kansas City. I enjoy working on vue.js or react.js based projects. Feel free to contact me.
      </p>
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
