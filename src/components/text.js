import Component from './component.js';

export default class Text extends Component {
  constructor (text, fontSize, style, color, layer) {
    super("text");
    this.text = text;
    this.style = style;
    this.color = color;
    this.fontSize = fontSize;
    this.layer = layer;
  }
};
