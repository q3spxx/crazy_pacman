import GameObject from './game-object.js';
import data from '../engine/data.js';
import Position from '../components/position.js';
import Sprite from '../components/sprite.js';
import Text from '../components/text.js';

export default class Player extends GameObject {
  constructor (x, y) {
    super(data.getEntities().createEntity());
    this.entity.addComponent(new Position(x, y, 32, 32));
    this.entity.addComponent(new Sprite(0, 0, 32, 32, 0, 0, 0));
    // this.entity.addComponent(new Text("Hello world", 30, "bold", "#fff", 1));
  }
}
