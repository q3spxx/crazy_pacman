import data from '../engine/data.js';
import Transform from '../components/transform.js';

export default class GameObject {
  constructor (position) {
    this.entity = data.getEntities().createEntity();
    this.entity.addComponent(new Transform(position));
  }
}
