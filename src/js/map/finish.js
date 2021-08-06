import { ctx } from '../cnv';
import { objectImage } from '../image';
import { CELL_WIDTH, CELL_HEIGHT } from './constants';
import { player } from '../player';
import { level } from './map';

export class Finish {
	constructor(x, y, index, level) {
		this.x = x;
		this.y = y;
		this.x2 = this.x + CELL_WIDTH;
		this.y2 = this.y + CELL_HEIGHT;
		this.what = "finish";
		this.index = index;
		this.a = true;
		this.level = level;
	}

	check() {
		if(player.x === this.x && player.y === this.y) level.array[this.level].complete = true; 
	}  

	draw() {
		ctx.drawImage(objectImage[1], this.x, this.y, CELL_WIDTH, CELL_HEIGHT);
		ctx.drawImage(objectImage[0], this.x, this.y, CELL_WIDTH, CELL_HEIGHT);
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.fillRect(this.x + 20, this.y, 30, 10);
	}
}
