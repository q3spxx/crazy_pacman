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

  var _drawImage = (task) => {
    _ctx.drawImage(
      _images[task.imageId].image,
      task.src.x,
      task.src.y,
      task.src.width,
      task.src.height,
      task.loc.x,
      task.loc.y,
      task.loc.width * _scale,
      task.loc.height * _scale,
    );
  };

  var _fillText = (task) => {
    _ctx.fillStyle = task.color;
    _ctx.font = task.font;
    _ctx.textBaseline = "top";
    _ctx.fillText(task.text, task.loc.x, task.loc.y);
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
      return a.layer > b.layer ? 1 : -1;
    });
    forRender.forEach((task) => {
      switch (task.type) {
        case "image":
          _drawImage(task);
        break;
        case "text":
          _fillText(task);
        break;
        default: return;
      };
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
