<template>
  <h1>{{ title }}</h1>

  <teleport to=".modals" v-if="showModal">
    <Modal @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Sign up Giveaway</h1>
      <p>Grab our swag that will only be available for a limited time only</p>
    </Modal>
  </teleport>

  <teleport to=".modals" v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>Sign up to newsletter</h1>
      <p>For updates and promo codes</p>
    </Modal>
  </teleport>

  <button @click="toggleModal">open modal</button>
  <button @click="toggleModalTwo">modal two</button>
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
      showModal: false,
      showModalTwo: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

