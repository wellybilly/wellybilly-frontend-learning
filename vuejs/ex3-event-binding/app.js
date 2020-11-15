const app = Vue.createApp({
  data() {
    //must return an object!
    return {
      counter: 10,
      name: "",
    };
  },
  methods: {
    SubmitForm() {
      alert("Submitted!");
    },
    setName(event, surname) {
      this.name = event.target.value + " " + surname;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
