import Component from './component.js';

export default class Position extends Component {
  constructor (pos) {
    super("position");
    this.x = pos.x;
    this.y = pos.y;
    this.width = pos.width,
    this.height = pos.height,
    this.scale = pos.scale
  }
};
