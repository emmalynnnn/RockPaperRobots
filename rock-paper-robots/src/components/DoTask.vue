<template>
  <div>
    <h1>ROCK PAPER ROBOTS</h1>
    <h2>You lose!</h2>
    <p>You must perform the following task to continue:</p>
    <h2 v-if="task">{{task}}</h2>
    <h2 v-else>Loading, please wait...</h2>
    <img class="icon" :src="youUrl" alt="You">
  </div>
  <br>
  <div class="d-grid col-6 gap-2 mx-auto">
    <a class="btn btn-danger btn-lg" type="button" href="/play">I've completed the task.</a>
  </div>

</template>

<script>
/* eslint-disable */
export default {
  name: 'DoTaskComponent',
  data() {
    return {
      task: "",
      youUrl: "",
    }
  },
  created() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(response => {
          let clientIp = response.ip;
          this.youUrl = `https://api.dicebear.com/6.x/` +
          `adventurer/svg?eyes=variant15&mouth=variant14&seed=${clientIp}`;
        });
    fetch("http://www.boredapi.com/api/activity/")
        .then(r => r.json())
        .then(json => {
          console.log(json);
          this.task = json.activity;
        });
  }
}
</script>
