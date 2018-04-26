import GameObject from './game-object.js';
import Sprite from '../components/sprite.js';

export default class MapObject extends GameObject {
  constructor (position, sprite) {
    super(position)
    this.entity.addComponent(new Sprite(sprite, 0, 0));
  }
}
