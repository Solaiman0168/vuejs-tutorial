const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  
  methods: {
    addPlus() {
      return this.counter++;
    },
    addMinus() {
      return this.counter--;
    }
  }

});

app.mount('#events');
