import Entity from './entity.js';

function Entities () {
  //private properties
  var _entities = [];

  //pubclic methods
  this.createEntity = () => {
    let entity = new Entity();
    _entities.push(entity);
    return entity;
  };

  this.find = (requirements) => {
    return _entities.filter((entity) => {
      for (let requirement of requirements) {
        if (!entity.checkComponent(requirement)) return false;
      };
      return true;
    });
  };
  this.removeEntity = (entity) => {
    let index = _entities.indexOf(entity);
    if (index === -1) return;
    _entities.splice(index, 1);
  };
};

export default Entities;
