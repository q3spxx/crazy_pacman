import MapObject from './map-object.js';
import Collider from '../../../components/collider.js';
import ol from './objects-list.js';

var sprite = {
  currentSpriteSheet: "DEFAULT",
  spriteSheets: [
    {name: "DEFAULT", frameCount: 1, spriteSheet: {x: 0, y: 160, width: 32, height: 32}}
  ]
};

export default class Wall extends MapObject {
  constructor (position) {
    super(position, sprite);
    this.name = ol.WALL;
    this.entity.addComponent(new Collider(position, "static", "polygon", this));
  }
}
