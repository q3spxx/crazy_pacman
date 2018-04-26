import SpriteRenderProvider from '../systems/sprite-render-provider.js';
import TextRenderProvider from '../systems/text-render-provider.js';
import AnimationSystem from '../systems/animation-system.js';
import MovingSystem from '../systems/moving-system.js';
import data from './data.js';

function Systems () {
  //private properties
  var _spriteRenderProvider = new SpriteRenderProvider();
  var _textRenderProvider = new TextRenderProvider();
  var _animationSystem = new AnimationSystem();
  var _movingSystem = new MovingSystem();
  //private methods
  var _handle = (system) => {
    let entities = data.getEntities().find(system.requirements);
    system.setEntities(entities);
    system.handle();
  };
  //pubclic methods
  this.handleStack = () => {
    _handle(_movingSystem);
    _handle(_animationSystem);
    _handle(_spriteRenderProvider);
    _handle(_textRenderProvider);
  };
};

export default new Systems();
