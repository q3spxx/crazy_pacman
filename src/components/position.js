import Component from './component.js';

export default class Position extends Component {
  constructor (x, y, width, height) {
    super("position");
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
};
