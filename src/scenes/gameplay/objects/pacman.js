import Unit from './unit.js';
import events from '../../../engine/events.js';
import el from '../../../engine/events-list.js';
import Collider from '../../../components/collider.js';
import ol from './objects-list.js';

export default class Pacman extends Unit {
  constructor (x, y, speed, layer) {
    super(
      {x: x, y: y, width: 32, height: 32},
      {
        currentSpriteSheet: "LEFT",
        spriteSheets: [
          {name: "LEFT", frameCount: 2, spriteSheet: {x: 0, y: 0, width: 32, height: 32}},
          {name: "UP", frameCount: 2, spriteSheet: {x: 0, y: 32, width: 32, height: 32}},
          {name: "RIGHT", frameCount: 2, spriteSheet: {x: 0, y: 64, width: 32, height: 32}},
          {name: "DOWN", frameCount: 2, spriteSheet: {x: 0, y: 96, width: 32, height: 32}}
        ]
      }, {fps: 4}, speed, 0, 0, layer);
    this.name = ol.PACMAN;
    this.entity.addComponent(new Collider({x: x, y: y, width: 32, height: 32}, "dynamic", "circle", this));
    events.subscribe(el.controls.LEFT, this.moving.bind(this));
    events.subscribe(el.controls.RIGHT, this.moving.bind(this));
    events.subscribe(el.controls.UP, this.moving.bind(this));
    events.subscribe(el.controls.DOWN, this.moving.bind(this));
  }
  moving (action) {
    let velocity = this.entity.getComponent('velocity');
    let sprite = this.entity.getComponent('sprite');
    let collider = this.entity.getComponent('collider');
    collider.body.SetAwake(true);
    switch (action) {
      case el.controls.LEFT:
        velocity.vec = {x: -1, y: 0};
        sprite.setSpriteSheet("LEFT");
        collider.body.SetAngle(180 / (180 / Math.PI));
      break;
      case el.controls.UP:
      velocity.vec = {x: 0, y: -1};
      sprite.setSpriteSheet("UP");
      collider.body.SetAngle(270 / (180 / Math.PI));
      break;
      case el.controls.RIGHT:
        velocity.vec = {x: 1, y: 0};
        sprite.setSpriteSheet("RIGHT");
        collider.body.SetAngle(0 / (180 / Math.PI));
      break;
      case el.controls.DOWN:
        velocity.vec = {x: 0, y: 1};
        sprite.setSpriteSheet("DOWN");
        collider.body.SetAngle(90 / (180 / Math.PI));
      break;
    };
  }
}
