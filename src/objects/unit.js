import GameObject from './game-object.js';
import Sprite from '../components/sprite.js';
import Animation from '../components/animation.js';
import Velocity from '../components/velocity.js';
import Collider from '../components/collider.js';

export default class Unit extends GameObject {
  constructor (position, sprites, animation, speed, imageId, layer) {
    super(position);
    this.entity.addComponent(new Velocity(speed));
    this.entity.addComponent(new Sprite(sprites, imageId, layer));
    this.entity.addComponent(new Animation(animation));
    this.entity.addComponent(new Collider(position, "dynamic", "circle"));
  }
}
