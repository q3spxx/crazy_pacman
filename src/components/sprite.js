import Component from './component.js';

export default class Sprite extends Component {
  constructor (x, y, width, height, imageId, rowId, layer) {
    super("sprite");
    this.x = x,
    this.y = y,
    this.width = width;
    this.height = height;
    this.imageId = imageId;
    this.rowId = rowId;
    this.layer = layer;
  }
};
