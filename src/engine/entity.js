export default class Entity {
  constructor () {
    this.components = [];
  }
  addComponent (component) {
    this.components.push(component);
  }
  checkComponent (name) {
    for (let component of this.components) {
      if (component.name === name) return true;
    }
    return false;
  }
  getComponent (name) {
    for (let component of this.components) {
      if (component.name === name) return component;
    }
  }
}
