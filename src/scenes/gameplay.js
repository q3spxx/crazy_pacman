import Scene from './scene.js';
import Player from '../objects/player.js';

export default class Gameplay extends Scene {
  constructor () {
    super("gameplay");
  }
  init () {
    this.addObject("player", new Player(0, 0));
  }
}
