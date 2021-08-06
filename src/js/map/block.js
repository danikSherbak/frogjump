import { ctx } from '../cnv';
import { objectImage } from '../image';
import { CELL_WIDTH, CELL_HEIGHT } from './constants';
import { player } from '../player';

export class Block {
	constructor(x, y, index) {
		this.x = x;
		this.y = y;
		this.x2 = this.x + CELL_WIDTH;
		this.y2 = this.y + CELL_HEIGHT;
		this.what = "block";
		this.index = index;
	}

	check() {
		if(player.jump) {

			if(player.x === this.x && player.y === this.y) player.life = false;
		}
	}

	draw() {
		ctx.drawImage(objectImage[1], this.x, this.y, CELL_WIDTH, CELL_HEIGHT);
	}
} 