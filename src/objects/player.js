import GameObject from './game-object.js';
import data from '../engine/data.js';
import Position from '../components/position.js';
import Sprite from '../components/sprite.js';

export default class Player extends GameObject {
  constructor (x, y) {
    super(data.entities.createEntity());
    this.entity.addComponent(new Position({x: x, y: y, width: 32, height: 32, scale: 1}));
    this.entity.addComponent(new Sprite({x: 0, y: 0, width: 32, height: 32}, 0, 0, 0));
  }
}
