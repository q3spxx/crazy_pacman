import ajax from './ajax.js';
import requests from './requests.js';
import view from './view.js';

function Resourses () {
  //private properties
  var _loading = false;
  var _loaded = false;
  var _images = [];
  var _counter = 0;
  var _count = 0;

  //privat methods
  var _checkLoadComplete = () => {
    if (_count === _counter) {
      _loading = false;
      _loaded = true;
      console.log("Image loaded");

      view.setImages(_images);
    }
  };

  //pubclic methods
  this.getLoaded = () => {
    return _loaded;
  };
  this.load = () => {
    _loading = true;
    ajax.send(requests.GET_RESOURSES).then((response) => {
      _count += response.images.length;
      for (let i = 0; i < response.images.length; i++) {
        let image = new Image();
        image.onload =  function () {
          _counter++;
          _checkLoadComplete();
        }.bind(this);
        image.src = "resourses/images/" + response.images[i].name;
        _images.push({
          image: image,
          rowSize: response.images[i].rowSize,
          id: response.images[i].id
        });
      };
    });
  };
};

export default Resourses;
