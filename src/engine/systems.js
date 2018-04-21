import Manager from './manager.js';
import RenderProvider from '../systems/render-provider.js';
import data from './data.js';

export default class Systems extends Manager {
  constructor () {
    super();
    this.renderProvider = new RenderProvider();
  }
  handleStack () {
    this.handle(this.renderProvider);
  }
  handle (system) {
    let entities = data.entities.find(system.requirements);
    system.setEntities(entities);
    system.handle();
  }
};
