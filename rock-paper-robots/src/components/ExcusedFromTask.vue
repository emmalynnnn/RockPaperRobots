<template>
  <div>
    <h1>ROCK PAPER ROBOTS</h1>
    <h2>You win!</h2>
    <p>You've weaseled your way out of this one. Enjoy your 120 second break before you are due to begin your next task.</p>
    <img class="icon" :src="youUrl" alt="You">
  </div>
  <div class="d-grid col-6 gap-2 mx-auto">
    <a class="btn btn-danger btn-lg" type="button" href="/play">Next Round</a>
  </div>

</template>

<script>
/* eslint-disable */
export default {
  name: 'ExcusedFromTaskComponent',
  data() {
    return {
      youUrl: "",
    }
  },
  created() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(response => {
          let clientIp = response.ip;
          this.youUrl = `https://api.dicebear.com/6.x/` +
              `adventurer/svg?eyes=variant03&mouth=variant27&seed=${clientIp}`;
        });
  }
}
</script>
