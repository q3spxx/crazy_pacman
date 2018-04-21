export default class System {
  constructor (requirements) {
      this.requirements = requirements;
      this.entities = [];
  }
  setEntities (entities) {
    this.entities = entities;
  }
  clear () {
    this.entities = [];
  }
}
