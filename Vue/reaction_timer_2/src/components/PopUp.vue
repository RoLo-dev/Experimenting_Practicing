<template>
  <div>
      <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
    props: ["score"],
    data() {
        return {
            message: null,
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

</style>