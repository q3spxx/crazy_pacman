import Entity from './entity.js';
import Manager from './manager.js';

export default class Entities extends Manager {
  constructor () {
    super();
    this.entities = [];
  }
  createEntity () {
    let entity = new Entity();
    this.entities.push(entity);
    return entity;
  }
}
