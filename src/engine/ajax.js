class Ajax {
  constructor () {
    this.xhr = new XMLHttpRequest();
  }
  send (request) {
    return new Promise((resolve, reject) => {
      this.xhr.open("GET", request, true);
      this.xhr.send();
      this.xhr.onreadystatechange = () => {

        if (this.xhr.readyState != 4) return;

        if (this.xhr.status != 200) {
          reject(this.xhr.statusText);
        } else {
          resolve(JSON.parse(this.xhr.responseText));
        };
      };
    });
  }
}
export default new Ajax();
