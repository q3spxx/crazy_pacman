import Resourses from './resourses.js';
import Entities from './entities.js';

function Data () {
  //private properties
  var resourses = new Resourses();
  var entities = new Entities();

  //pubclic methods
  this.getResourses = () => {
    return resourses;
  };
  this.getEntities = () => {
    return entities;
  };

  this.init = () => {
    resourses.load();
  }
};

export default new Data();
