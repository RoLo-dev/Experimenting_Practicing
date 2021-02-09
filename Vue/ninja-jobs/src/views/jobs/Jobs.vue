<template>
  <div>
      <h1>Jobs</h1>
      <div v-for="job in jobs" :key="job.id">
          <router-link :to="{ name: 'jobDetails', params: { id: job.id }}">
              <h3>{{ job.title }}</h3>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                { title: "Ninja UX Designer", id: 1, details: "lorem" },
                { title: "Ninja Web Developer", id: 2, details: "lorem" },
                { title: "Ninja Web Designer", id: 3, details: "lorem" }
            ]
        }
    }
}
</script>

<style>

</style>