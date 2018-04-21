import data from './data.js';
import view from './view.js';
import Scenes from './scenes.js';
import Systems from './systems.js';

class Game {
  constructor () {
    this.element = document.getElementById("canvas");
    this.isWorking = false;
    this.fpsCounter = 0;
    this.lastFpsCounterUpdate = new Date().getTime();
    this.fps = 30;
    this.lastFrame = new Date().getTime();
    this.scenes = new Scenes();
    this.systems = new Systems();
    this.mobile = false;
    this.size = {
      width: 672,
      height: 672
    }
  }
  init () {
    view.setElem(this.element.getContext('2d'));
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
    //toogle
    if (!this.isWorking) return;
    //fps limiter
    let time = new Date().getTime();
    if (time - this.lastFrame < 1000 / this.fps) {
      setTimeout(function () {
          window.requestAnimationFrame(this.gameloop.bind(this));
      }.bind(this), 0);
      return;
    };
    //loading
    if (!data.resourses.loaded) {
      window.requestAnimationFrame(this.gameloop.bind(this));
      return;
    }
    //gameloop body
    this.systems.handleStack();
    view.render();

    //fps counter
    this.fpsCounter++;
    if (time - this.lastFpsCounterUpdate > 1000) {
      document.getElementById("fps").innerText = "Fps: " + this.fpsCounter;
      this.fpsCounter = 0;
      this.lastFpsCounterUpdate = time;
    };
    //next frame
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
    view.setViewport(this.size);
    this.canvasResize();
  }
  canvasResize () {
    this.element.width = this.size.width;
    this.element.height = this.size.height;
  }
}
export default new Game();
