const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullname: ''
      lastName: ''
    };
  },

  watch: {
      // name(value) {
      //   if (value === ''){
      //     this.fullname = '';
      //   }else{
      //     this.fullname = value + ' ' + 'Hossain';
      //   }
        
      // }
  },

  computed: {
    fullname() {
      console.log('Running again.....');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
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
