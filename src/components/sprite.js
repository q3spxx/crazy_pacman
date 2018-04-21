import Component from './component.js';

export default class Sprite extends Component {
  constructor (size, scale, imageId, spriteId) {
    super();
    this.width = size.width;
    this.height = size.height;
    this.scale = scale;
    this.imageId = imageId;
    this.spriteId = spriteId;
  }
};
