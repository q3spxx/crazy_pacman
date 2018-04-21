import data from './data.js';
import Ajax from './ajax.js';
import View from './view.js';
import Scenes from './scenes.js';

class Game {
  constructor () {
    this.element = document.getElementById("canvas");
    this.isWorking = false;
    this.fps = 1;
    this.lastFrame = new Date().getTime();
    this.ajax = new Ajax();
    this.view = new View(this.element.getContext('2d'));
    this.scenes = new Scenes();
    this.mobile = false;
    this.size = {
      width: 672,
      height: 672
    }
  }
  init () {
    this.resize();
    window.addEventListener("resize", () => {this.resize()});
    data.init();
    this.scenes.changeScene('gameplay');
  }
  start () {
    this.isWorking = true;
    window.requestAnimationFrame(this.gameloop.bind(this));
  }
  stop () {
    this.isWorking = false;
  }
  gameloop () {
    if (!this.isWorking) return;
    let time = new Date().getTime();
    if (time - this.lastFrame < 1000 / this.fps) {
      setTimeout(function () {
          window.requestAnimationFrame(this.gameloop.bind(this));
      }.bind(this), 5);
      return;
    };
    console.log(222);
    this.lastFrame = time;
    window.requestAnimationFrame(this.gameloop.bind(this));
  }
  resize () {
    if (window.innerWidth < 672) {
      this.size.width = 336;
      this.size.height = 336;
      this.mobile = true;
    } else {
      this.size.width = 672;
      this.size.height = 672;
      this.mobile = false;
    };
    this.view.setViewport(this.size);
    this.canvasResize();
  }
  canvasResize () {
    this.element.width = this.size.width;
    this.element.height = this.size.height;
  }
}
export default new Game();
