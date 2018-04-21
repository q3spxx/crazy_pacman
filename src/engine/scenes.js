import Gameplay from '../scenes/gameplay.js';

export default class Scenes {
  constructor () {
    this.scene = null;
  }
  changeScene (name) {
    switch (name) {
      case 'gameplay':
        this.scene = new Gameplay();
      break;
      default:
    }
  }
}
