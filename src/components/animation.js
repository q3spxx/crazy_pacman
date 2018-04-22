import Component from './component.js';

export default class Animation extends Component {
  constructor (frameCount, fps) {
    super("animation");
    this.frameCount = frameCount;
    this.currentFrame = 0;
    this.fps = fps;
    this.lastFrameTime = new Date().getTime();
  }
};
