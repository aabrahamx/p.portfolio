<script setup>
import { RouterLink } from 'vue-router';

const progress = () => {
  const amountScrolled = document.body.scrollTop || document.documentElement.scrollTop;
  const contentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (amountScrolled / contentHeight) * 100;
  document.getElementById("myBar").style.width = `${scrollPercentage}%`;
}

window.onscroll = progress;

</script>

<template>

  <header class="h-[5.5vh] w-full fixed top-0 left-0 z-10 text-floral-white bg-rich-black">
    <div class="scrollbar-container">
      <div class="scrollbar" id="myBar"></div>
    </div>
    <nav class="h-full flex items-center justify-center">
      <RouterLink class="nav-link" to="/">Home</RouterLink>
      <RouterLink class="nav-link" to="/project">Project</RouterLink>
      <RouterLink class="nav-link" to="/about">Contact</RouterLink>
    </nav>
  </header>

</template>

<style scoped>


.nav-link {
  margin: 0 1.5rem;
  color: var(--font-sec-color);
}

.nav-link::after,
.nav-link::before {
  content: '';
  display: block;
  margin: 0 auto;
  height: .15rem;
  border-radius: .75rem;
}

.nav-link:hover::after {
  background: var(--rich-black-100);
  animation: border-slide .2s ease-out;
}

/* active current nav route */
.nav-link.active::before {
  background: var(--rich-black-100);
  width: 15%;
}

@keyframes border-slide {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}



.scrollbar-container {
  width: 100%;
  backdrop-filter: blur(100px);
}

.scrollbar {
  height: .315rem;
  width: 0%;
  border-top-right-radius: .25rem;
  border-bottom-right-radius: .25rem;
}

.scrollbar {
  background: #1a2765;
  background: linear-gradient(0deg, #1a2765 0%, #ac1b1d 50%, #fc9d31 100%);
  background: -moz-linear-gradient(0deg, #1a2765 0%, #ac1b1d 50%, #fc9d31 100%);
  background: -webkit-linear-gradient(0deg, #1a2765 0%, #ac1b1d 50%, #fc9d31 100%);
  filter: progid: DXImageTransform.Microsoft.gradient(startColorstr="#1A2766", endColorstr="#AE1B1E", GradientType=1);
}
</style>