function Ajax () {
  //private properties
  var xhr = new XMLHttpRequest();

  //pubclic methods
  this.send = (request) => {
    return new Promise((resolve, reject) => {
      xhr.open("GET", request, true);
      xhr.send();
      xhr.onreadystatechange = () => {

        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
          reject(xhr.statusText);
        } else {
          resolve(JSON.parse(xhr.responseText));
        };
      };
    });
  }

};

export default new Ajax();
