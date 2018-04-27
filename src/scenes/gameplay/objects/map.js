import Wall from './wall.js';
import Apple from './apple.js';

var map =
"swwwwwwwwwwwwwwwwwwws\n"+
"swaaaaaaaawaaaaaaaaws\n"+
"swawwawwwawawwwawwaws\n"+
"swsaaaaaaaaaaaaaaasws\n"+
"swawwawawwwwwawawwaws\n"+
"swaaaawaaawaaawaaaaws\n"+
"swwwwawwwawawwwawwwws\n"+
"sssswawssssssswawssss\n"+
"wwwwwawswwswwswawwwww\n"+
"sssssasswssswssasssss\n"+
"wwwwwawswwwwwswawwwww\n"+
"sssswawssssssswawssss\n"+
"swwwwawswwwwwswawwwws\n"+
"swaaaaaaaawaaaaaaaaws\n"+
"swawwawwwawawwwawwaws\n"+
"swaawaaaaasaaaaawaaws\n"+
"swwawawawwwwwawawawws\n"+
"swsaaawaaawaaawaaasws\n"+
"swawwwwwwawawwwwwwaws\n"+
"swaaaaaaaaaaaaaaaaaws\n"+
"swwwwwwwwwwwwwwwwwwws"

export default class Map {
  constructor () {
    this.map = [];
    let rows = map.split("\n");
    for (let y = 0; y < rows.length; y++) {
      this.map.push([]);
      let col = rows[y].split("");
      for (let x = 0; x < col.length; x++) {
        switch (col[x]) {
          case "s":
            // this.map[y].push( new MapObject(x * 32 + 16, y * 32 + 16, 128));
          break;
          case "w":
            this.map[y].push( new Wall({x: x * 32 + 16, y: y * 32 + 16, width: 32, height: 32}));
          break;
          case "a":
            this.map[y].push( new Apple({x: x * 32 + 16, y: y * 32 + 16, width: 32, height: 32}));
          break;
        };
      };
    };
    console.log(this.map);
  }
}
