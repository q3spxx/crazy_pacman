import System from './system.js';

export default class PhysicsSystem extends System {
  constructor () {
    super(["position", "collider"]);
  }
  handle () {
    this.entities.forEach((entity) => {
      let position = entity.getComponent('position');
      let collider = entity.getComponent('collider');

      // position.x += collider.vec.x;
      // position.y += collider.vec.y;
    });

    this.clear();
  }
};
