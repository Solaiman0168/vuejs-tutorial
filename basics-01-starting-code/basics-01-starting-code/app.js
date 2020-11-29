const app = Vue.createApp ({
    el: '#user-goal',
    data () {
        return {
            courseGoalA: 'Finish the course and Learn Vue !',
            courseGoalB: 'Be a expert in Vue JS',
            vueLink: 'https://v3.vuejs.org/'
        };
    },

    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
               return this.courseGoalB;
            }
        }
    }

});

app.mount('#user-goal');