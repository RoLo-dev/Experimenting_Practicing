<template>
  <div>
    <h1>Click Reaction Timer</h1>
    <button @click="start" id="play-btn" :disabled="isPlaying">PLAY</button>
    <GreenBlock v-if="isPlaying" :delay="delay" @end="endGame" />
    <SpeedResults id="resultText" v-if="showResults" :score="score" />
  </div>
</template>

<script>
import GreenBlock from './components/GreenBlock.vue'
import SpeedResults from './components/SpeedResults.vue'

export default {
  name: 'App',
  components: { GreenBlock, SpeedResults },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 18px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#play-btn {
  border: 0;
  color: #000;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 10px 1.75rem;
  margin-top: 10px;
  border-radius: 5px;
  background-color: #ddd;
}
#resultText {
  margin-top: 2rem;
}
</style>
