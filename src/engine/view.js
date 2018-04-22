function View () {
  var _images = [];
  var _tasks = []
  var _elem = null;
  var _viewport = {
    width: 0,
    height: 0
  };
  var _clear = () => {
    _elem.fillStyle = "black";
    _elem.fillRect(0, 0, _viewport.width, _viewport.height);
  };
  this.setElem = (elem) => {
    _elem = elem;
  };
  this.render = () => {
    _clear();
    let forRender = _tasks.sort((a, b) => {
      return a.layer > b.layer ? -1 : 1;
    });
    forRender.forEach((task) => {
      _elem.drawImage(
        _images[task.imageId].image,
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
    _tasks = [];
  };
  this.addTask = (task) => {
    _tasks.push(task);
  };
  this.setViewport = (size) => {
    _viewport = {
      width: size.width,
      height: size.height
    }
  };
  this.setImages = (images) => {
    _images = images;
  };
}

export default new View();
