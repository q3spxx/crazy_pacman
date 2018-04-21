class View {
  constructor () {
    this.images = [];
    this.tasks = []
    this.elem = null;
    this.viewport = {
      width: 0,
      height: 0
    }
  }
  setImages (images) {
    this.images = images;
  }
  setViewport (size) {
    this.viewport = {
      width: size.width,
      height: size.height
    }
  }
  setElem (elem) {
    this.elem = elem;
  }
  addTask (task) {
    this.tasks.push(task);
  }
  clear () {
    this.elem.fillStyle = "black";
    this.elem.fillRect(0, 0, this.viewport.width, this.viewport.height);
  }
  render () {
    this.clear();
    let forRender = this.tasks.sort((a, b) => {
      return a.layer > b.layer ? -1 : 1;
    });
    forRender.forEach((task) => {
      this.elem.drawImage(
        this.images[task.imageId].image,
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
    this.tasks = [];
  }
};

export default new View();
