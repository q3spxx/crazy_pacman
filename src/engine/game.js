import data from './data.js';
import input from './input.js';
import events from './events.js';
import view from './view.js';
import scenes from './scenes.js';
import systems from './systems.js';
import physics from './physics.js';
import el from './events-list.js';

function Game () {
  //private properties
  var _isWorking = false;
  var _fpsCounter = 0;
  var _lastFpsCounterUpdate = new Date().getTime();
  var _fpsLimit = 60;
  var _lastFrame = new Date().getTime();
  var _scale = 1;
  //private methods
  var _gameloop = () => {
    //toogle
    if (!_isWorking) return;
    //fps limiter
    let time = new Date().getTime();
    if (time - _lastFrame < 1000 / _fpsLimit) {
      setTimeout(function () {
        window.requestAnimationFrame(_gameloop.bind(this));
      }.bind(this), 0);
      return;
    };
    //loading
    if (!data.getResourses().getLoaded()) {
      window.requestAnimationFrame(_gameloop.bind(this));
      return;
    };
    //gameloop body
    systems.handleStack();
    physics.update();
    view.render();
    // return
    //fps counter
    _fpsCounter++;
    if (time - _lastFpsCounterUpdate > 1000) {
      document.getElementById("fps").innerText = "Fps: " + _fpsCounter;
      _fpsCounter = 0;
      _lastFpsCounterUpdate = time;
    };
    //next frame
    _lastFrame = time;
    window.requestAnimationFrame(_gameloop.bind(this));
  };

  var _resize = () => {
    window.innerWidth < 672 ? _scale = .5 : _scale = 1;
    view.setScale(_scale);
  };
  //pubclic methods
  this.init = () => {
    data.init();
    _resize();
    window.addEventListener("resize", function () {_resize()}.bind(this));
    input.init();
    events.subscribe(el.controls.PAUSE, this.pause.bind(this));
    physics.init(_fpsLimit);
    scenes.changeScene('gameplay');
  };
  this.start = () => {
    if (_isWorking) return false;
    _isWorking = true;
    window.requestAnimationFrame(_gameloop.bind(this));
  };
  this.pause = () => {
    if (_isWorking) {
      _isWorking = false;
    } else {
      _isWorking = true;
      window.requestAnimationFrame(_gameloop.bind(this));
    };
  };
  this.getScale = () => {
    return _scale;
  };
}
export default new Game();
