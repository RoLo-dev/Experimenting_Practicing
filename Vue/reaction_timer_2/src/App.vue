<template>
  <div>
    <h1>Click Reaction Timer</h1>
    <button id="play-btn" :disabled="isPlaying">PLAY</button>
    <GreenBlock />
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
</style>
