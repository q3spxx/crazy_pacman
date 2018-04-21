export default class Entity {
  constructor () {
    this.components = [];
  }
  addComponent (component) {
    this.components.push(component);
  }
}
