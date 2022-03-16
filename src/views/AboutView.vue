<script>

</script>

<template>
  <div class="wrapper">
    <div>
      <div class="selfie">
        <div>

        </div>
      </div>
      <div class="about-me">
        <h3>About Me</h3>
        <p>
          Hello, Abel here. I am a freelance front-end developer based out of KS. Currently providing design and custom functionality services to small businesses using CMS to maintain and grow their business. I am a dedicated developer who enjoys learning new languages and frameworks. In my free time, I like to watch football(soccer), photography and a nice long walk in a park. 
        </p>
      </div>
      <div class="stacks">
        <h3>Technologies</h3>
        <div>
          <div class="html lan">HTML5</div>
          <div class="css lan ">CSS</div>
          <div class="sass lan">SASS</div>
          <div class="js lan">JavaScript ES6+</div>
          <div class="ts lan">TypeScript</div>
          <div class="vue lan">Vue</div>
          <div class="react lan">React</div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import '../assets/stacks-bg.css';
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
    padding: 1.25rem 3rem;
    background-color: #e96901;
  }
  .selfie {
    height: 120px;
    width: 120px;
    margin: 1rem auto;
    border-radius: 50%;
    background-color: #fe7203;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .selfie > div {
    height: 87.5%;
    width: 87.5%;
    border: 1px solid black;
    border-radius: 50%;
    background-image: url(../assets/img/myselfie.svg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: rotate(8deg);
  }
  .about-me {
    margin: 1rem auto;
  }
  .stacks {
    margin: 1rem auto;
    width: 100%;
  }
  .stacks h3 {
    font-weight: bold;
    margin-bottom: .5rem;
    margin-top: 1rem;
    border-bottom: 1px solid black;
    text-align: left;
  }
  .about-me h3 {
    border-bottom: 1px solid black;
    margin-bottom: .5rem;
    font-weight: bold;
    text-align: right;
  }
  .stacks > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .lan {
    margin: .25rem;
    padding: .15rem .5rem;
    border-radius: 1rem;
    font-size: .75rem;
    font-weight: bolder;
    background-color: whitesmoke;
  }
</style>