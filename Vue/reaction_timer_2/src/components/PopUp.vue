<template>
  <div>
      <p>{{ rank }}</p>
  </div>
</template>

<script>
export default {
    props: ["score"],
    data() {
        return {
            rank: null,
        }
    },
    mounted() {
        if(this.score >= 700) {
            this.rank = "Dang! you're slow"
        } else {
            this.rank = "Better luck next time"
        }
    }
}
</script>

<style>

</style>