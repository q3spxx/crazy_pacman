export default class View {
  constructor (canvas) {
    this.images = [];
    this.tasks = []
    this.canvas = canvas;
    this.viewport = {
      width: 0,
      height: 0
    }
  }
  setViewport (size) {
    this.viewport = {
      width: size.width,
      height: size.height
    }
  }
  addTask (task) {
    this.tasks.push(task);
  }
  render () {
    let forRender = this.tasks.sort((a, b) => {
      return a.layer > b.layer ? -1 : 1;
    });
    forRender.forEach((task) => {
      this.canvas.drawImage(
        this.images[task.imgId].element,
        task.loc.x,
        task.loc.y,
        task.loc.width,
        task.loc.height,
        task.src.x,
        task.src.y,
        task.src.width,
        task.src.height
      );
    });
  }
};
