<script>
export default {
  name: 'goalItem',

  methods: {
    completeTask() {
      console.log("Checking if task is complete..")
      if (getTaskActive()) {
        taskActive = false;
        isTaskComplete = true;
        console.log('Task is active: ', taskActive, '; Task is complete: ', isTaskComplete)
      }
      //reset menu
    }
  }
}
</script>

<template>
  <div @click="completeTask" id="task-goal">
    <h3>Goal</h3>
    <img src="../../img/goal.png">
    <div class="confetti"></div>
  </div>
</template>

<style scoped>
#task-goal {
  width: 100%;
  height: 10vh;
  border-bottom: 2px solid #3C8BFF;
}

#task-goal h3 {
  font-family: Poppins;
  font-size: 18pt;
}

#task-goal img{
  height: 80%;
}
</style>