import Component from './component.js';

export default class Animation extends Component {
  constructor (animation) {
    super("animation");
    this.fps = animation.fps;
    this.lastFrameTime = new Date().getTime();
  }
};
