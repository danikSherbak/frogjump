import { player } from '../player';
import { ctx } from '../cnv';
import { objectImage } from '../image';
import { CELL_WIDTH, CELL_HEIGHT } from './constants';

export class Thorn {
	constructor(x, y, index, position) {
		this.x = x;
		this.y = y;
		this.what = "thorn";
		this.position = position;
		this.index = index;
	}

	check() {
		this.x2 = this.x + CELL_WIDTH;
		this.y2 = this.y + CELL_HEIGHT;

    if (player.x === this.x && player.y === this.y) {
      player.life = false;
    }
  }

	draw() {
		ctx.drawImage(objectImage[1], this.x, this.y, CELL_WIDTH, CELL_HEIGHT);

		switch(this.position) {
      case "up":
        ctx.drawImage(objectImage[5], this.x, this.y, CELL_WIDTH, CELL_HEIGHT);
        break;
      case "down":
        ctx.drawImage(objectImage[6], this.x, this.y, CELL_WIDTH, CELL_HEIGHT);
        break;
      case "left":
        ctx.drawImage(objectImage[8], this.x, this.y, CELL_WIDTH, CELL_HEIGHT);
        break;
      case "right":
        ctx.drawImage(objectImage[7], this.x, this.y, CELL_WIDTH, CELL_HEIGHT);
        break;
  	}
  }
} 
