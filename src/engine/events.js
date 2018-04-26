import eventsList from './events-list.js';

function Events () {
  var _subscribers = [];

  this.emit = (event) => {
    console.log(event);
    for (let subscriber of _subscribers) {
      if (subscriber.event === event) subscriber.callback(event);
    };
  };
  this.subscribe = (event, callback) => {
    _subscribers.push({
      event: event,
      callback: callback
    });
  };
  this.unscribe = (event, callback) => {
    for (let i = 0; i < _subscribers.length; i++) {
      if (event === _subscribers[i].event &&
        _subscribers[i].callback.prototype === callback.prototype) {
          _subscribers.splice(i, 1);
          return;
      }
    };
  };
};

export default new Events();
