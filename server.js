const http = require("http");
const fs = require('fs');

const server = http.createServer((request, response) => {
  let file;
  let fileName = request.url;
  if (fileName === "/") fileName = "/index.html";
  try {
    file = fs.readFileSync(__dirname + fileName);
    if (fileName.search(/.html/i) != -1) {
      response.setHeader('Content-type', 'text/html');
    } else if (fileName.search(/.css/i) != -1) {
      response.setHeader('Content-type', 'text/css');
    } else if (fileName.search(/.js/i) != -1) {
      response.setHeader('Content-type', 'text/javascript');
    } else {
      throw new Error("File" + fileName + "is not accessible!");
    };
    response.end(file);
  } catch (e) {
    console.log(e);
    response.statusCode = 404;
    response.end();
  };
});

server.listen(8000);
