const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  
  methods: {
    addPlus() {
       this.counter = this.counter + 1;
    },
    addMinus() {
       this.counter = this.counter -1;
    }
  }

});

app.mount('#events');
