const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullname() {
      console.log('Running again.....');
      if (this.name === '') {
        return this.name;
      }
      return this.name + ' ' + 'Hossain';
    }
  },
  methods: {
    outputFullname() {
      console.log('Running again.....');
      if (this.name === '') {
        return this.name;
      }
      return this.name + ' ' + 'Hossain';
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
