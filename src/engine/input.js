import events from './events.js';
import eventsList from './events-list.js';

function Touch (x = 0, y = 0, width = 0, height = 0) {
  this.x = typeof x === "number" ? x : 0;
  this.y = typeof y === "number" ? y : 0;
  this.width = typeof width === "number" ? width : 0;
  this.height = typeof height === "number" ? height : 0;
};

function KeyBinding () {
  //private properties
  var _controls = [];

  for (let event in eventsList) {
    _controls.push({
      keyCode: 0,
      touch: new Touch(),
      event: event
    });
  };
  //private methods
  var _findControlByEvent = (event) => {
    for (let control of _controls) {
      if (event === control.event) return control;
    };
    return false;
  };

  var _findControlByKeyCode = (keyCode) => {
    for (let control of _controls) {
      if (keyCode === control.keyCode) return control;
    };
    return false;
  };

  var _findControlByTouch = (touch) => {
    for (let control of _controls) {
      if (
        touch.x > control.touch.x &&
        touch.y > control.touch.y &&
        touch.x < control.touch.x + control.touch.width &&
        touch.y < control.touch.y + control.touch.height
      ) return control;
    };
    return false;
  };
  //public methods
  this.bind = (keyCode, event) => {
    let control = _findControlByEvent(event);
    if (!control) return false;
    switch (typeof keyCode) {
      case "number":
        control.keyCode = keyCode;
      break;
      case 'object':
        if (!(keyCode instanceof Touch)) return false;
        control.touch = keyCode;
      break;
      default:
      return false;
    };
    return true;
  };
  this.getEvent = (keyCode) => {
    let control;
    switch (typeof keyCode) {
      case "number":
        control = _findControlByKeyCode(keyCode)
      break;
      case "object":
        control = _findControlByTouch(keyCode)
      break;
    };
    if (control) return control.event;
    return false;
  };
};

const kb = new KeyBinding();

kb.bind(37, eventsList.LEFT);
kb.bind(38, eventsList.UP);
kb.bind(39, eventsList.RIGHT);
kb.bind(40, eventsList.DOWN);
kb.bind(new Touch(0, 0, 100, 100), eventsList.DOWN);

function init () {
  document.addEventListener("keyup", function (e) {
    let event = kb.getEvent(e.keyCode)
    console.log(event);
    if (event) events.emit(event);
  });
  document.getElementById("canvas").addEventListener("click", function (e) {
    let event = kb.getEvent({x: e.x, y: e.y})
    console.log(event);
    if (event) events.emit(event);
  });
};


module.exports = {
  init: init,
  bind: kb.bind,
  Touch: Touch
};
