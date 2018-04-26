import Component from './component.js';

export default class Velocity extends Component {
  constructor (speed) {
    super("velocity");
    this.speed = speed;
    this.vec = {
      x: 0,
      y: 0
    }
  }
};
