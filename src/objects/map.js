import Wall from './wall.js';

var map =
"swwwwwwwwwwwwwwwwwwws\n"+
"swsssssssswssssssssws\n"+
"swswwswwwswswwwswwsws\n"+
"swsssssssssssssssssws\n"+
"swswwswswwwwwswswwsws\n"+
"swsssswssswssswssssws\n"+
"swwwwswwwswswwwswwwws\n"+
"sssswswssssssswswssss\n"+
"wwwwwswswwswwswswwwww\n"+
"sssssssswssswssssssss\n"+
"wwwwwswswwwwwswswwwww\n"+
"sssswswssssssswswssss\n"+
"swwwwswswwwwwswswwwws\n"+
"swsssssssswssssssssws\n"+
"swswwswwwswswwwswwsws\n"+
"swsswssssssssssswssws\n"+
"swwswswswwwwwswswswws\n"+
"swsssswssswssswssssws\n"+
"swswwwwwwswswwwwwwsws\n"+
"swsssssssssssssssssws\n"+
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
        };
      };
    };
    console.log(this.map);
  }
}
