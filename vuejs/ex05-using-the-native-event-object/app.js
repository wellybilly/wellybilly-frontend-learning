const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  watch: {
    //whenever property name changes, this method will be executed.
    name(oldValue, newValue) {},
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  computed: {
    fullName() {
      console.log("It's running only depended on the event firing.");
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'surname';
    },
  },
  methods: {
    outputFullname() {
      console.log(
        "It's running, any change on html for {{ method() }} binding a methond"
      );
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'surname';
    },
    resetInput() {
      this.name = '';
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
  },
});

app.mount('#events');
