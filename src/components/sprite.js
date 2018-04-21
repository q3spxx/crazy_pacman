import Component from './component.js';

export default class Sprite extends Component {
  constructor (size, imageId, rowId, layer) {
    super("sprite");
    this.x = size.x,
    this.y = size.y,
    this.width = size.width;
    this.height = size.height;
    this.imageId = imageId;
    this.rowId = rowId;
    this.layer = layer;
  }
};
