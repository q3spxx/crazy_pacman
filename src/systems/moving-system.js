import System from './system.js';
import Box2D from 'box2dweb';

var b2Vec2 = Box2D.Common.Math.b2Vec2;

export default class MovingSystem extends System {
  constructor () {
    super(["transform", "collider", "velocity"]);
  }
  handle () {
    this.entities.forEach((entity) => {
      let collider = entity.getComponent('collider');
      let velocity = entity.getComponent('velocity');
      let transform = entity.getComponent('transform');

      let position = collider.body.GetPosition();
      // collider.body.ApplyForce( new b2Vec2(
      //   (velocity.vec.x * velocity.speed),
      //   (velocity.vec.y * velocity.speed)
      // ), collider.body.GetWorldCenter());
      collider.body.SetLinearVelocity(new b2Vec2(
          (velocity.vec.x * velocity.speed),
          (velocity.vec.y * velocity.speed)
      ));
      // collider.body.SetPosition( new b2Vec2(
      //   position.x + (velocity.vec.x * velocity.speed) / 30,
      //   position.y + (velocity.vec.y * velocity.speed) / 30
      // ));

      position = collider.body.GetPosition();

      transform.x = position.x * 30;
      transform.y = position.y * 30;
    });

    this.clear();
  }
};
