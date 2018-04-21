import System from './system.js';
import view from '../engine/view.js';

export default class RenderProvider extends System {
  constructor () {
    super(["position", "sprite"]);
  }
  handle () {
    this.entities.forEach((entity) => {
      let position = entity.getComponent('position');
      let sprite = entity.getComponent('sprite');

      let task = {
        imageId: sprite.imageId,
        loc: {
          x: position.x,
          y: position.y,
          width: position.width,
          height: position.height
        },
        src: {
          x: sprite.x,
          y: sprite.y * sprite.rowId,
          width: sprite.width,
          height: sprite.height
        }
      };
      view.addTask(task);
    });

    this.clear();
  }
};
