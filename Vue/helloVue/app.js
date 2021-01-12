const app = Vue.createApp({
    data() {
        return {
            title: "Hello Beautiful World!",
            author: "Rolando Lopantzi",
            age: 28
        }
    },
    // This method changes the properties from the component
    methods: {
        // changeTitle() {
        //     console.log("clicked me");
        //     this.title = "Hello World";
        // }
        changeTitle(title) {
            this.title = title;
        }
    }
});

app.mount("#app");