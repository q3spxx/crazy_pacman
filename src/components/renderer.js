import Component from './component.js';

export default class Renderer extends Component {
  counstructor (size, scale, imageId, spriteId) {
    this.width = size.width;
    this.height = size.height;
    this.scale = scale;
    this.imageId = imageId;
    this.spriteId = spriteId;
  }
};
