const app = Vue.createApp({
    data() {
        return {
            url: 'http://www.rolandolopantzi.com',
            showBooks: true,
            title: "Hello Beautiful World!",
            author: "Rolando Lopantzi",
            age: 28,
            books: [
                { title: "Harry Potter", author: "JK Rowling", img: "assets/1.jpg"},
                { title: "Mathias", author: "Brian Jacques", img: "assets/2.jpg" },
                { title: "The Outsider", author: "Stephen King", img: "assets/3.jpg"}
            ]
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