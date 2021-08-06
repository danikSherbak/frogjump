import { player } from './player';
import { ctx } from './cnv';
import { level } from './map';
import { jump } from './jump';

export const menu = {
	what: "main",
	id: {
		main: document.getElementById("main"),
		level: document.getElementById("level"),
		levelNumber: document.getElementById("levelNumber"),
		canvas: document.getElementById("cnv"),
		gameOver: document.getElementById("gameOver"),
		shop: document.getElementById("shop"),
	},

	score() {
		ctx.beginPath();
		ctx.fillStyle = "orange";
		ctx.fillRect(0,100,100,100);
		ctx.font = "50px serif";
		ctx.fillStyle = "black";
    ctx.fillText(player.coins, 40, 150);
	},

	draw() {
		level.array[level.number].draw();
		level.array[level.number].checkMap();
		player.draw();
		jump.draw();
		this.score();
	}
}
