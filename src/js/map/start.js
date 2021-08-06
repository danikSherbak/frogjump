import { ctx } from '../cnv';
import { objectImage } from '../image';
import { CELL_WIDTH, CELL_HEIGHT } from './constants';
import { player } from '../player';

export class Start {
	constructor(x, y, index) {
		this.x = x;
		this.y = y;
		this.x2 = this.x + CELL_WIDTH;
		this.y2 = this.y + CELL_HEIGHT;
		this.what = "start";
		this.index = index;
		this.a = true;
	}

	check() {
		if (this.a) {
			player.x = this.x;
			player.y = this.y;
			this.a = false;
		}
	}

	draw() {
		ctx.drawImage(objectImage[1], this.x, this.y, CELL_WIDTH, CELL_HEIGHT);
		ctx.drawImage(objectImage[0], this.x, this.y, CELL_WIDTH, CELL_HEIGHT);
	}
}
