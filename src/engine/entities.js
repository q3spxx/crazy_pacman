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
};

export default Entities;
