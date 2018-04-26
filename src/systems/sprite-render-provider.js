import System from './system.js';
import view from '../engine/view.js';

export default class SpriteRenderProvider extends System {
  constructor () {
    super(["transform", "sprite"]);
  }
  handle () {
    this.entities.forEach((entity) => {
      let sprite = entity.getComponent('sprite');
      let transform = entity.getComponent('transform');

      let task = {
        type: "image",
        imageId: sprite.imageId,
        layer: sprite.layer,
        src: {
          x: sprite.currentSpriteSheet.frames[sprite.currentFrame].x,
          y: sprite.currentSpriteSheet.frames[sprite.currentFrame].y,
          width: sprite.currentSpriteSheet.frames[sprite.currentFrame].width,
          height: sprite.currentSpriteSheet.frames[sprite.currentFrame].height
        },
        loc: {
          x: transform.x - transform.width / 2,
          y: transform.y - transform.height / 2,
          width: transform.width,
          height: transform.height
        }
      };
      view.addTask(task);
    });

    this.clear();
  }
};
