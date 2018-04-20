import Resourses from './resourses.js';

class Data {
  constructor () {
    this.resourses = new Resourses();
  }
  init () {
    this.resourses.load();
  }
}

export default new Data();
