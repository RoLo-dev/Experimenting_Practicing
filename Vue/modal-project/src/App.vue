<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Sign up Giveaway</h1>
      <p>Grab our swag that will only be available for a limited time only</p>
    </Modal>
  </div>
  <button @click="toggleModal">open modal</button>
  <button @click="toggleModalTwo">modal two</button>
</template>

<script>
import Modal from './components/Modal.vue'
import ModalTwo from './components/ModalTwo.vue'

export default {
  name: 'App',
  components: {
    Modal,
    ModalTwo
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

