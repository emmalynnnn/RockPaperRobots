<template>
  <div>
    <h1>ROCK PAPER ROBOTS</h1>

    <div class="row">
      <div class="column">
        <h2>Robot</h2>
        <p>Wins: {{roboWins}}</p>
        <img class="icon" :src="robotUrl" alt="Robot">
        <p>"Let's play 2 out of three."</p>

        <img v-if="roboChoice === 1" class="choice" src="../assets/rock.webp" alt="Rock">
        <img v-else-if="roboChoice === 2" class="choice" src="../assets/paper.jpg" alt="Paper">
        <img v-else-if="roboChoice === 3" class="choice" src="../assets/scissors.png" alt="Scissors">
      </div>

      <div class="column">
        <h2>You</h2>
        <p>Wins: {{yourWins}}</p>
        <img class="icon" :src="youUrl" alt="You">
        <p>"Bring it on!"</p>

        <div v-if="timeToPlay" class="form-check">
          <input class="form-check-input" type="radio" name="choice" value="Rock" v-model="yourChoice">
          <label class="form-check-label" for="flexRadioDefault1">Rock</label><br>

          <input class="form-check-input" type="radio" name="choice" value="Paper" v-model="yourChoice">
          <label class="form-check-label" for="flexRadioDefault1">Paper</label><br>

          <input class="form-check-input" type="radio" name="choice" value="Scissors" v-model="yourChoice">
          <label class="form-check-label" for="flexRadioDefault1">Scissors</label><br><br>

          <p v-if="error">You must make a choice.</p>

          <p class="btn btn-secondary btn-md play" @click="getInput">Play</p>
        </div>

        <img v-if="yourChoice === 'Rock'" class="choice" src="../assets/rock.webp" alt="Rock">
        <img v-else-if="yourChoice === 'Paper'" class="choice" src="../assets/paper.jpg" alt="Paper">
        <img v-else-if="yourChoice === 'Scissors'" class="choice" src="../assets/scissors.png" alt="Scissors">
      </div>
    </div>

    <h2 v-if="result">{{result}}</h2>

  </div>


</template>

<script>
/* eslint-disable */
export default {
  name: 'PlayComponent',
  data() {
    return {
      yourChoice: "",
      roboChoice: "",
      timeToPlay: true,
      error: "",
      result: "",
      yourWins: 0,
      roboWins: 0,
      robotUrl: "",
      youUrl: "",
    }
  },
  created() {
    let date = Date.now();
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(response => {
          let clientIp = response.ip;
          //this.youUrl = `https://robohash.org/${clientIp}yy5?set=set5`;
          this.youUrl = `https://api.dicebear.com/6.x/adventurer/svg?seed=${clientIp}`;
          this.robotUrl = `https://robohash.org/${date}`;
        });
  },
  methods: {
    getInput() {
      if (this.yourChoice === "") {
        this.error = "true";
        return;
      }
      this.timeToPlay = false;
      this.roboChoice = Math.floor(Math.random() * 3) + 1;

      if (this.roboChoice === 1) {
        if (this.yourChoice === "Rock") {
          this.tie();
        } else if (this.yourChoice === "Paper") {
          this.youWin();
        } else {
          this.robotWins();
        }
      } else if (this.roboChoice === 2) {
        if (this.yourChoice === "Rock") {
          this.robotWins();
        } else if (this.yourChoice === "Paper") {
          this.tie();
        } else {
          this.youWin();
        }
      } else {
        if (this.yourChoice === "Rock") {
          this.youWin();
        } else if (this.yourChoice === "Paper") {
          this.robotWins();
        } else {
          this.tie();
        }
      }
    },
    async tie() {
      this.result = "Tie!";
      await this.delay(1750);
      this.reset();
    },
    async youWin() {
      this.result = "You win!";
      this.yourWins++;
      if (this.yourWins >= 2) {
        this.excusedFromTask();
      } else {
        await this.delay(1750);
        this.reset();
      }
    },
    async robotWins() {
      this.result = "You lose :(";
      this.roboWins++;
      if (this.roboWins >= 2) {
        this.doTask();
      } else {
        await this.delay(1750);
        this.reset();
      }
    },
    delay(time) {
      return new Promise(resolve => setTimeout(resolve, time));
    },
    excusedFromTask() {
      console.log("Excused");
      this.$router.push({ path: '/excused' })
    },
    doTask() {
      console.log("do task");
      this.$router.push({ path: '/do-task' })
    },
    reset() {
      this.roboChoice = "";
      this.yourChoice = "";
      this.timeToPlay = true;
      this.result = "";
      this.error = false;
    },
  },
}
</script>
