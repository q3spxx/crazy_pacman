import Component from './component.js';

export default class Transform extends Component {
  constructor (position) {
    super("transform");
    this.x = position.x;
    this.y = position.y;
    this.width = position.width;
    this.height = position.height;
  }
};
