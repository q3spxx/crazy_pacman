import GameObject from './game-object.js';
import data from '../engine/data.js';
import Position from '../components/position.js';
import Sprite from '../components/sprite.js';

export default class Player extends GameObject {
  constructor (x, y) {
    super(data.entities.createEntity());
    this.entity.addComponent(new Position({x: x, y: y}));
    this.entity.addComponent(new Sprite({width: 32, height: 32}, 1, 0, 0));
  }
}
