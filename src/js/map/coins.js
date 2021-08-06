import { ctx } from '../cnv';
import { objectImage } from '../image';
import { CELL_WIDTH, CELL_HEIGHT } from './constants';
import { player } from '../player';
import { level } from './map';

export class Coins {
	constructor(x, y, index) {
		this.x = x;
		this.y = y;
		this.what = "coins";
		this.x2 = this.x + CELL_WIDTH;
		this.y2 = this.y + CELL_HEIGHT;
		this.life = true;
		this.index = index;
	}

	check() {
		if (this.life) return;

			if (player.x === this.x && player.y === this.y) { 
				level.array[level.number].array[this.index] = '0';
				player.coins++;
				this.life = false;
    	}
	}

	draw() {
		ctx.drawImage(objectImage[1], this.x, this.y, CELL_WIDTH, CELL_HEIGHT);
    ctx.drawImage(objectImage[0], this.x, this.y, CELL_WIDTH, CELL_HEIGHT);

		if (this.life) ctx.drawImage(objectImage[3], this.x + 12, this.y + 10, 30, 30);
	}
}
 