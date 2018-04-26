import Component from './component.js';

export default class Sprite extends Component {
  constructor (sprite, imageId, layer) {
    super("sprite");
    this.currentFrame = 0;
    this.currentSpriteSheet = {};
    this.spriteSheets = {};
    sprite.spriteSheets.forEach((sheet) => {
      let x = sheet.x;
      let spriteSheets = [];
      for (let i = 0; i < sheet.frameCount; i++) {
        spriteSheets.push({
          x: sheet.spriteSheet.x + sheet.spriteSheet.width * i,
          y: sheet.spriteSheet.y,
          width: sheet.spriteSheet.width,
          height: sheet.spriteSheet.height
        });
      };
      this.spriteSheets[sheet.name] = {frameCount: sheet.frameCount, frames: spriteSheets};
    });
    this.setSpriteSheet(sprite.currentSpriteSheet);
    this.imageId = imageId;
    this.layer = layer;
  }

  setSpriteSheet (name) {
    if (!this.spriteSheets[name]) return;
    this.currentSpriteSheet = this.spriteSheets[name];
  }

  changeFrame (frame) {
    this.currentFrame = frame;
  }
};
