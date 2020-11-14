const app = Vue.createApp({
  data(){
    //must return an object!
    return {
      courseGoal: 'Finish the course and learn Vue!'
    }; 
  }
});

app.mount('#user-goal');