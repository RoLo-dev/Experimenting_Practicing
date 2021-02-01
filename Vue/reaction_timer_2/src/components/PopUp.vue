<template>
  <div>
      <p>{{ message }}</p>
      <!-- <button @click="start">Try again</button> -->
  </div>
</template>

<script>
export default {
    props: ["score"],
    data() {
        return {
            message: null,
            isPlaying: false,
            delay: null,
            showResults: false,
        }
    },
    mounted() {
        if(this.score < 700) {
            this.message = "Dang! you're slow"
        } else {
            this.message = "Better luck next time"
        }
    }
}
</script>

<style>
    button {
        border: 0;
        color: #000;
        font-weight: bold;
        letter-spacing: 2px;
        padding: 10px 1.75rem;
        margin-top: 10px;
        margin-bottom: 1rem;
        border-radius: 5px;
        background-color: #ddd;
        cursor: pointer;
    }
</style>