import Resourses from './resourses.js';
import Entities from './entities.js';

class Data {
  constructor () {
    this.resourses = new Resourses();
    this.entities = new Entities();
  }
  init () {
    this.resourses.load();
  }
}

export default new Data();
