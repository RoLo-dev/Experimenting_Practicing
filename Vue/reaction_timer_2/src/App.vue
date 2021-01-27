<template>
  <div>
    <h1>Click Reaction Timer</h1>
    <GreenBlock />
  </div>
</template>

<script>
import GreenBlock from './components/GreenBlock.vue'
import SpeedResults from './components/SpeedResults.vue'

export default {
  name: 'App',
  components: { GreenBlock, SpeedResults }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
