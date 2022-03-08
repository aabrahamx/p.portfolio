<script>

</script>

<template>
  <div class="wrapper">
    <div>
      <div class="selfie">

      </div>
      <div class="about-me">
        <p>
          Hello, Abel here. I am a freelance front-end developer based out of KS. Currently providing design and custom functionality services to small businesses using CMS to maintain and grow their business. I am a dedicated developer who enjoys learning new languages and frameworks.    Although I want to specialize in the front-end, I am taking a back-end course path to help me understand the processes needed in the backend.  In my free time, I like to watch football(soccer), go out for some walks in nature and photography. 
        </p>
      </div>
      <div class="stacks">
        <h3>Technologies</h3>
        <p>
          <span>HTML5</span>
          <span>CSS</span>
          <span>Sass</span>
          <span>JavaScript ES6+</span>
          <span></span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  * {
    color: #0c1b35;
  }
  .wrapper {
    height: 100%;
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .wrapper > div {
    max-width: 600px;
    padding: 1rem;
    background-color: #e96901;
  }
  .selfie {
    height: 120px;
    width: 120px;
    margin: 1rem auto;
    border-radius: 50%;
    background-color: antiquewhite;
  }
  .about-me {
    margin: 1rem auto;
  }
  .stacks {
    margin: 1rem auto;
  }
</style>