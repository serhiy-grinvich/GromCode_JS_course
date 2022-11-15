// let intervalID;
const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalID: '',
  startTimer() {
    this.intervalID = setInterval(() => {
      // if (this.secondsPassed === 60) {
      //   this.minsPassed += 1;
      //   this.secondsPassed = 0;
      // }
      // this.secondsPassed += 1;
      if (this.secondsPassed < 60) {
        this.secondsPassed += 1;
      } else {
        this.secondsPassed = 0;
        this.minsPassed += 1;
      }
      // console.log(
      //   this.secondsPassed < 10
      //     ? `${this.minsPassed}:0${this.secondsPassed}`
      //     : `${this.minsPassed}:${this.secondsPassed}`,
      // );
    }, 1000);
  },
  getTime() {
    return this.secondsPassed < 10
      ? `${this.minsPassed}:0${this.secondsPassed}`
      : `${this.minsPassed}:${this.secondsPassed}`;
  },
  stopTimer() {
    clearInterval(this.intervalID);
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};
// //algo
// create timer obj
// create memo-props for min & sec
// create   startTimer method
// - - - increase seconds after start
// - - - zeroing seconds after 60 , min ++
// create   getTime method
// - - - return time '1: 05'
// - - - add 0 in sec if sec<10
// create  stopTimer method
// - - - stop the timer clearInterval
// create  resetTime method
// - - - zeroing min & sec
