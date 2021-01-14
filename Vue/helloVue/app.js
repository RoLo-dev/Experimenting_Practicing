const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: "Hello Beautiful World!",
            author: "Rolando Lopantzi",
            age: 28
        }
    },
    // This method changes the properties from the component
    methods: {
        changeTitle() {
            console.log("clicked me");
            this.title = "Hello World";
        },
        // In this example you use a parameter to pass in a value to change the current one
        // changeTitle(title) {
        //     this.title = title;
        // }
        toggleBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent() {
            console.log("event");
        }
    }
});

app.mount("#app");