import ajax from './ajax.js';
import requests from './requests.js';
import view from './view.js';

export default class Resourses {
  constructor () {
    this.loading = false;
    this.loaded = false;
    this.images = [];
    this.counter = 0;
    this.count = 0;
  }
  load () {
    this.loading = true;
    ajax.send(requests.GET_RESOURSES).then((response) => {
      this.count += response.images.length;
      for (let i = 0; i < response.images.length; i++) {
        let image = new Image();
        image.onload =  function () {
          this.counter++;
          this.checkLoadComplete();
        }.bind(this);
        image.src = "resourses/images/" + response.images[i].name;
        this.images.push({
          image: image,
          rowSize: response.images[i].rowSize,
          id: response.images[i].id
        });
      };
    });
  }
  checkLoadComplete () {
    if (this.count === this.counter) {
      this.loading = false;
      this.loaded = true;
      console.log("Image loaded");

      view.setImages(this.images);
    }
  }
}
