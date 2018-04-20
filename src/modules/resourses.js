import game from './game.js';
import requests from './requests.js';

export default class Resourses {
  constructor () {
    this.loading = false;
    this.images = [];
  }
  load () {
    this.loading = true;
    game.ajax.send(requests.GET_RESOURSES).then((response) => {
      for (let i = 0; i < response.images.length; i++) {
        let image = new Image();
        image.src = "resourses/images/" + response.images[i].name;
        image.onload = () => {
          console.log("Image loaded");
        };
        this.images.push(image);
      };
      console.log(response);
    });
  }
}
