import Component from './component.js';
import physics from '../engine/physics.js';

export default class Collider extends Component {
  constructor (position, type, shape) {
    super("collider");
    this.body = physics.createBody(position, type, shape);

  }
};
