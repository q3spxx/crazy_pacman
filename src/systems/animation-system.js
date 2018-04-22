import System from './system.js';

export default class AnimationSystem extends System {
  constructor () {
    super(["sprite", "animation"]);
  }
  handle () {
    this.entities.forEach((entity) => {
      let sprite = entity.getComponent('sprite');
      let animation = entity.getComponent('animation');

      let time = new Date().getTime();
      if (time - animation.lastFrameTime < 1000 / animation.fps) return;

      animation.currentFrame++;
      if (animation.frameCount === animation.currentFrame) animation.currentFrame = 0;

      sprite.x = sprite.width * animation.currentFrame;
      animation.lastFrameTime = time;
    });

    this.clear();
  }
};
