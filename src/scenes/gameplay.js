import Scene from './scene.js';
import Pacman from './gameplay/objects/pacman.js';
import Map from './gameplay/objects/map.js';
import physics from '../engine/physics.js';
import ol from './gameplay/objects/objects-list.js';
import data from '../engine/data.js';

export default class Gameplay extends Scene {
  constructor () {
    super("gameplay");
  }
  init () {
    this.addObject("map", new Map());
    this.addObject("pacman", new Pacman(336, 496, 5, 10));
    physics.setBeginContactCallback(this.collision);
  }
  collision (contact) {
    let objectA = contact.GetFixtureA().GetBody().GetUserData();
    let objectB = contact.GetFixtureB().GetBody().GetUserData();

    if (objectA.name === ol.PACMAN || objectB.name === ol.PACMAN) {
      let pacman;
      let another;
      if (objectA.name === ol.PACMAN) {
        pacman = objectA;
        another = objectB;
      } else {
        pacman = objectB;
        another = objectA;
      };

      if (another.name === ol.APPLE) {
        physics.destroyBody(another.entity.getComponent('collider').body);
        another.remove();
      };
    };
  }
}
