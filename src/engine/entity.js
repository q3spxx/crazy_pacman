function Entity () {
  var _components = [];

  this.addComponent = (component) => {
    _components.push(component);
  };

  this.checkComponent = (name) => {
    for (let component of _components) {
      if (component.name === name) return true;
    }
    return false;
  };

  this.getComponent = (name) => {
    for (let component of _components) {
      if (component.name === name) return component;
    }
  }
};

export default Entity;
