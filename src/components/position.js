import Component from './component.js';

export default class Position extends Component {
  constructor (pos) {
    super();
    this.x = pos.x;
    this.y = pos.y;
  }
};
