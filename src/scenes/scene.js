export default class Scene {
  constructor (name) {
    this.name = name;
    this.objects = {};
  }
  addObject (name, object) {
    this.objects[name] = object;
  }
}
