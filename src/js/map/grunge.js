import { ctx } from '../cnv';
import { objectImage } from '../image';
import { CELL_WIDTH, CELL_HEIGHT } from './constants';
import { player } from '../player';
import { jumpNumbers } from '../jump';

export class Grunge {
	constructor(x, y, index) {
		this.x = x;
		this.y = y;
		this.x2 = this.x + CELL_WIDTH;
		this.y2 = this.y + CELL_HEIGHT;
		this.what = "grunge";
		this.index = index;
	}

	check() {
		if (this.x > player.x && this.y === player.y) {
			if (jumpNumbers.x >= this.x) jumpNumbers.x = player.x + (this.x - player.x2);
		}

		if (this.x < player.x && this.y === player.y) {
			if (jumpNumbers.xMinus <= this.x2) jumpNumbers.xMinus = player.x - (player.x - this.x2);
		}

		if (this.y > player.y && this.x === player.x) {
			if (jumpNumbers.y >= this.y) jumpNumbers.y = player.y + (this.y - player.y2);
		}

		if (this.y < player.y && this.x === player.x) {
			if (jumpNumbers.yMinus <= this.y2) jumpNumbers.yMinus = player.y - (player.y - this.y2);
		}
	}

	draw() {
		ctx.drawImage(objectImage[4], this.x, this.y, CELL_WIDTH, CELL_HEIGHT);
	}
}
