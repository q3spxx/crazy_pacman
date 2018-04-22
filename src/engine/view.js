function View () {
  //privat properties
  var _images = [];
  var _tasks = []
  var _elem = document.getElementById("canvas");
  var _ctx = _elem.getContext('2d');
  var _clearColor = "#000";
  var _scale = 1;
  var _viewport = {
    width: 0,
    height: 0
  };
  //privat methods
  var _clear = () => {
    _ctx.fillStyle = _clearColor;
    _ctx.fillRect(0, 0, _viewport.width, _viewport.height);
  };
  var _canvasResize = () => {
    _elem.width = _viewport.width;
    _elem.height = _viewport.height;
  };
  var _resize = () => {
    _viewport.width = 672 * _scale;
    _viewport.height = 672 * _scale;
    _canvasResize();
  };
  //public methods
  this.setScale = (scale) => {
    _scale = scale;
    _resize();
  };
  this.setClearColor = (color) => {
    _clearColor = color;
  };
  this.render = () => {
    _clear();
    let forRender = _tasks.sort((a, b) => {
      return a.layer > b.layer ? -1 : 1;
    });
    forRender.forEach((task) => {
      _ctx.drawImage(
        _images[task.imageId].image,
        task.loc.x,
        task.loc.y,
        task.loc.width,
        task.loc.height,
        task.src.x,
        task.src.y,
        task.src.width * _scale,
        task.src.height * _scale
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
