<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal :header="header" :text="text" @close="toggleModal"/>
  </div>
  <button @click="toggleModal">open modal</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: "Working with Vue",
      header: "Sign up for the Giveaway",
      text: "Grab our swag that will only be available for a limited time only",
      showModal: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

