<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>

  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="20" height="20" />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/about">About Me</RouterLink>
      </nav>
    </div>
  </header>

  <div class="router-wrapper">
    <RouterView />
  </div>
  
  <footer> 
    <p>Copyright goes here</p>
  </footer>

  <div class="app-background"></div>

</template>

<style>
@import '@/assets/base.css';

html, body {
  text-align: center;
  font-family: "Outfit", sans-serif;
}
a {
  text-decoration: none;
  color: inherit;
}
* {
  outline: 0px solid red;
}
#app {
  margin: 0 auto;
  padding: 0rem;
  font-weight: normal;
}


/* -- custom styles -- */
/* -- header --  */
header {
  height: 6vh;
  width: 100%;
  padding: .5rem 2rem;
  background-color: #fe7203;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e96901;
}
header a {
  margin: 0 15px;
  color: inherit;
  cursor: pointer;
  text-decoration: none;
}
/* -- header end -- */

.router-wrapper {
  height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
footer {
  background-color: #fe7203;
  height: 6vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #e96901;
}

.app-background {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  background-image: url(@/assets/spots.svg);
  background-color: #fe7203;
  animation: svg-animation 10s linear 1s forwards;
}
@keyframes svg-animation {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.3);
  }
}


</style>
