export default class Game {
  constructor () {
    this.interval = null;
    this.fps = 30;
  }
  start () {
    return
    this.interval = setInterval(() => {
      console.log(222);
    }, 1000 / this.fps);
  }
  stop () {
    clearInterval(this.interval);
  }
}
