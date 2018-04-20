import data from './data.js';
import Ajax from './ajax.js';

class Game {
  constructor () {
    this.interval = null;
    this.fps = 30;
    this.ajax = new Ajax();
    this.mobile = false;
    this.viewport = {
      width: 672,
      height: 672
    }
  }
  init () {
    this.setViewport();
    window.addEventListener("resize", () => {this.setViewport()});
    data.init();
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
  setViewport () {
    if (window.innerWidth < 672) {
      this.viewport.width = 336;
      this.viewport.height = 336;
      this.mobile = true;
    } else {
      this.viewport.width = 672;
      this.viewport.height = 672;
      this.mobile = false;
    };
    this.canvasResize();
  }
  canvasResize () {
    let canvas = document.getElementById("canvas");
    canvas.width = this.viewport.width;
    canvas.height = this.viewport.height;
  }
}
export default new Game();
