import Gameplay from '../scenes/gameplay.js';

function Scenes () {
  //private properties
  var _scene = null;

  //pubclic methods
  this.changeScene = (name) => {
    switch (name) {
      case 'gameplay':
        _scene = new Gameplay();
      break;
    };
    _scene.init();
  }
};

export default new Scenes();
