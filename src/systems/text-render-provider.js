import System from './system.js';
import view from '../engine/view.js';

export default class TextRenderProvider extends System {
  constructor () {
    super(["position", "text"]);
  }
  handle () {
    this.entities.forEach((entity) => {
      let position = entity.getComponent('position');
      let text = entity.getComponent('text');

      let task = {
        type: "text",
        text: text.text,
        color: text.color,
        font: `${text.style} ${text.fontSize}px sans-serif`,
        loc: {
          x: position.x,
          y: position.y,
        },
        layer: text.layer
      };
      view.addTask(task);
    });

    this.clear();
  }
};
