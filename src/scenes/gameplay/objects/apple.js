import MapObject from './map-object.js';
import Collider from '../../../components/collider.js';
import ol from './objects-list.js';

var sprite = {
  currentSpriteSheet: "DEFAULT",
  spriteSheets: [
    {name: "DEFAULT", frameCount: 1, spriteSheet: {x: 0, y: 192, width: 32, height: 32}}
  ]
};

export default class Apple extends MapObject {
  constructor (position) {
    super(position, sprite);
    this.name = ol.APPLE;
    this.entity.addComponent(new Collider({
      x: position.x,
      y: position.y,
      width: position.width / 2,
      height: position.height / 2
    }, "static", "circle", this));
  }
}
