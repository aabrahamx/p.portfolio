<script setup>
document.query
</script>

<template>
    <div class="wrapper">
        <div class="stacks circle-cont">
            <div id="react">
                <div class="circle react"></div>
                <p>React</p>
            </div>
            <div id="vue">
                <div class="circle vue"></div>
                <p>Vue</p>
            </div>
            <div id="js">
                <div class="circle js"></div>
                <p>JS</p>
            </div>
            <div id="ts">
                <div class="circle ts"></div>
                <p>TS</p>
            </div>
            <div id="html">
                <div class="circle html"></div>
                <p>HTML5</p>
            </div>
            <div id="css">
                <div class="circle css"></div>
                <p>CSS</p>
            </div>
            <div id="sass">
                <div class="circle sass"></div>
                <p>SASS</p>
            </div>
            <div id="design-proto">
                <div class="circle design-proto"></div>
                <p>Design Prototype</p>
            </div>
        </div>
        <div class="project-cont">
            <div class="project">
                <div id="pomodoro">
                    <div class="project-img">
                        <div class="img"></div>
                    </div>
                    <div class="project-detail">
                        <h3>Pomodoro Timer</h3>
                        <P>A simple pomodoro timer to help build and maintain good productivity habits. Currently working on adding trending functionality</P>
                        <div>
                            <a href="https://pomodoro.aabraham.dev" target="_blank">site</a>
                            <a
                                href="https://github.com/abelabrahamx/pomodoro"
                                target="_blank"
                            >repository</a>
                        </div>
                        <div class="circle-cont">
                            <div class="vue circle"></div>
                            <div class="js circle"></div>
                            <div class="html circle"></div>
                            <div class="css-sass circle"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="project">
                <div id="calculator">
                    <div class="project-detail">
                        <h3>Calculator</h3>
                        <p>A simple calculator built using React</p>
                        <div>
                            <a href="https://calculator.aabraham.dev" target="_blank">site</a>
                            <a
                                href="https://github.com/abelabrahamx/calculator"
                                target="_blank"
                            >repository</a>
                        </div>
                        <div class="circle-cont">
                            <div class="react circle"></div>
                            <div class="js circle"></div>
                            <div class="html circle"></div>
                        </div>
                    </div>
                    <div class="project-img">
                        <div class="img"></div>
                    </div>
                </div>
            </div>
            <div class="project">
                <div id="nch">
                    <div class="project-img">
                        <div class="img"></div>
                    </div>
                    <div class="project-detail">
                        <h3>NCH Landing Page</h3>
                        <p>A design and layout refresher for NCH software company's landing page.</p>
                        <div>
                            <a href="https://nch.aabraham.dev" target="_blank">site</a>
                            <a
                                href="https://github.com/abelabrahamx/nch-software"
                                target="_blank"
                            >repository</a>
                        </div>
                        <div class="circle-cont">
                            <div class="css-sass circle"></div>
                            <div class="design-proto circle"></div>
                        </div>
                    </div>
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
    width: 100%;
    max-width: 800px;
    height: 90%;
    margin: .5rem;
    padding: 1rem;
    background-color: #e96901; 
    /*box-shadow: -10px 0px 0px 0px #0c1b35;*/
}
.stacks {
    width: 100%;
    padding: 1rem;
    margin-bottom: 1.5rem;
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: whitesmoke;
    border-bottom: 1px solid black;
}
.stacks > div {
    margin: 0rem 1rem;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    font-weight: bold;
}
.circle-cont {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.circle {
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 50%;
}

.project-cont {
    height: 85%;
    overflow-y: scroll;
}

.project {
    width: 94%;
    max-width: 600px;
    height: 225px;
    border: 1px solid black;
    margin: 1rem auto;
    background-color: #fe7203;
}
.project > div {
    background-color: #fe7203;
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
    overflow: hidden;
    display: flex;
}

.project > div:hover {
    transform: translate(10px, 10px);
    border: 1px solid black;
}

.project-img {
    width: 40%;
    height: 100%;
}
.project-detail {
    width: 60%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#pomodoro .project-img .img {
    background-image: url(../assets/img/pomodoro.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
}
#calculator .project-img .img {
    background-image: url(../assets/img/calculator.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
}
#nch .project-img .img {
    background-image: url(../assets/img/nch1.png);
    background-size: 100%;
    background-position: top;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    background-color: white;
}

a {
    color: #ffd603;
    text-decoration: underline;
    margin: 0 1rem;
}
h3 {
    font-weight: bold;
}
</style>
