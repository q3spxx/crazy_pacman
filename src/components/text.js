import Component from './component.js';

export default class Text extends Component {
  constructor (text, font, fontSize, layer) {
    super("text");
    this.text = text;
    this.font = font;
    this.fintSize = fontSize;
    this.layer = layer;
  }
};
