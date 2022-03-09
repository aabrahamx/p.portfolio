<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <main class="wrapper">
    <div>
      <div class="card one">
        <div class="intro-card">
          <h1>
            Hey there, I'm
            <span id="name">Abel.</span>
          </h1>
          <h2 id="h2header">
            <!-- Animation holder -->
            <span id="F1">F</span>
            <span id="R1">R</span>
            <span id="O1">O</span>
            <span id="N1">N</span>
            <span id="T1">T</span>
            <span>-</span>
            <span id="E2">E</span>
            <span id="N2">N</span>
            <span id="D2">D</span>
            <br />
            <span id="D3">D</span>
            <span id="E3">E</span>
            <span id="V3">V</span>
            <span id="E32">E</span>
            <span id="L3">L</span>
            <span id="O3">O</span>
            <span id="P3">P</span>
            <span id="E33">E</span>
            <span id="R3">R</span>
            <!-- end -->
          </h2>
          <div class="links-wrapper">
            <a class="github" href="https://github.com/abelabrahamx">
              <div class="imgcont"></div>
              <p>GitHub</p>
            </a>
            <a class="email" href="mailto:abelabrahamx@gmail.com">
              <div class="imgcont"></div>
              <p>CodePen</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import "@/assets/scroll.css";
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper > div {
  height: 80%;
  width: 90%;
  max-width: 800px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  height: 80%;
  width: 100%;
  margin: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.intro-card {
  top: -20px;
  margin: 0 auto;
  width: 90vw;
  max-width: 800px;
  height: 25vw;
  min-width: 300px;
  min-height: 375px;
  max-width: 750px;
  max-height: 500px;
  color: black;
  border: 1px solid black;
  background-color: #e96901;
  /*box-shadow: -12.5px -12.5px #e96901;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: slideshadow 3s linear 1s forwards;
}
.intro-card h1,
.intro-card h2,
.intro-card .links-wrapper {
  margin: 10px auto;
}
.intro-card h2 {
  font-weight: 800;
}
.intro-card .links-wrapper {
  border-top: 2px solid black;
}
.intro-card .links-wrapper .github .imgcont {
  background: url(https://img.icons8.com/ios-filled/50/000000/github.png);
  background-size: contain;
}
.intro-card .links-wrapper .email .imgcont {
  background: url(https://img.icons8.com/ios-filled/50/000000/codepen.png);
  background-size: contain;
}
.intro-card .links-wrapper .github,
.intro-card .links-wrapper .email,
.intro-card .links-wrapper .linkedin {
  width: 75px;
  margin: 10px auto;
  padding: 10px 10px 5px 10px;
  display: inline-block;
  border-bottom: 3px solid transparent;
  transition: all 0.3s linear;
}
.intro-card .links-wrapper .github:hover,
.intro-card .links-wrapper .email:hover,
.intro-card .links-wrapper .email:hover,
.intro-card .links-wrapper .linkedin:hover {
  border-bottom: 3px solid black;
  background-color: #e96901;
  transform: translatey(-5px);
}
.intro-card .links-wrapper .github .imgcont,
.intro-card .links-wrapper .email .imgcont,
.intro-card .links-wrapper .linkedin .imgcont {
  height: 25px;
  width: 25px;
  margin: auto;
}
@media screen and (max-width: 550px) {
  .intro-card {
    padding: 5px;
  }
}

@keyframes slideshadow {
  from {
    box-shadow: 0 0 #0c1b35;
    top: -20px;
  }
  to {
    box-shadow: -13.5px -13.5px #0c1b35;
    top: 0;
  }
}
</style>