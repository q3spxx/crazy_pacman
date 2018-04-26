import Scene from './scene.js';
import Player from '../objects/player.js';
import Map from '../objects/map.js';

export default class Gameplay extends Scene {
  constructor () {
    super("gameplay");
  }
  init () {
    this.addObject("map", new Map());
    this.addObject("player", new Player(80, 48, 5, 10));
  }
}
