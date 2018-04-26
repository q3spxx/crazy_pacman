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

      sprite.currentFrame++;
      if (sprite.currentSpriteSheet.frameCount === sprite.currentFrame) sprite.currentFrame = 0;

      sprite.changeFrame(sprite.currentFrame);
      animation.lastFrameTime = time;
    });

    this.clear();
  }
};
