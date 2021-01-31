<template>
  <div>
      <p>Reaction time: {{ score }}ms</p>
      <p>{{ rank }}</p>
      <PopUp :score="score" />
  </div>
</template>

<script>
import PopUp from './PopUp.vue'

export default {
    props: ["score"],
    components: { PopUp },
    data() {
        return {
            rank: null,
            showResults: false
        }
    },
    mounted() {
        if(this.score < 280) {
            this.rank = "Speedy fingers";
        } else if(this.score < 420) {
            this.rank = "Rapid reflexes";
        } else {
            this.rank = "Snail pace ..."
        }
    },
}
</script>

<style>

</style>