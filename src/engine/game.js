import data from './data.js';
import view from './view.js';
import scenes from './scenes.js';
import systems from './systems.js';

function Game () {
  //private properties
  var _isWorking = false;
  var _fpsCounter = 0;
  var _lastFpsCounterUpdate = new Date().getTime();
  var _fpsLimit = 30;
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
    _resize();
    window.addEventListener("resize", function () {_resize()}.bind(this));
    data.init();
    scenes.changeScene('gameplay');
  };
  this.start = () => {
    if (_isWorking) return false;
    _isWorking = true;
    window.requestAnimationFrame(_gameloop.bind(this));
  };
  this.stop = () => {
    _isWorking = false;
  };
}
export default new Game();
