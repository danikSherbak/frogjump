import { ctx } from '../cnv';
import { objectImage } from '../image';
import { CELL_WIDTH, CELL_HEIGHT } from './constants';

export class Lend {
	constructor(x, y, index) {
		this.x = x;
		this.y = y;
		this.x2 = this.x + CELL_WIDTH;
		this.y2 = this.y + CELL_HEIGHT;
		this.what = "lend";
		this.index = index;
	}

	check() {}

	draw() {
		ctx.drawImage(objectImage[1], this.x, this.y, CELL_WIDTH, CELL_HEIGHT);
		ctx.drawImage(objectImage[0], this.x, this.y, CELL_WIDTH, CELL_HEIGHT);
	}
}
