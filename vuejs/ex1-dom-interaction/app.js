const app = Vue.createApp({
  data(){
    //must return an object!
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink: 'https://vuejs.org/'
    }; 
  }
});

app.mount('#user-goal');