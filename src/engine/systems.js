import RenderProvider from '../systems/render-provider.js';
import data from './data.js';

function Systems () {
  //private properties
  var _renderProvider = new RenderProvider();
  //private methods
  var _handle = (system) => {
    let entities = data.getEntities().find(system.requirements);
    system.setEntities(entities);
    system.handle();
  };
  //pubclic methods
  this.handleStack = () => {
    _handle(_renderProvider);
  };
};

export default new Systems();
