import { player } from './player';
import { menu } from './menu';
import { shop } from './shop';
import { level } from './map';
import { jump } from './jump';
import { ctx, canvas } from './cnv';
import { fun_dom } from './fun_dom';
import { localStorageReturn } from './local';

function draw() {
	localStorageReturn();
	ctx.clearRect(0,0,canvas.width,canvas.height);
	level.array[level.number].draw();
	level.array[level.number].checkMap();
	player.draw();
	jump.draw();
	menu.score(); 
	player.gameOverCheck();
	level.check();
	fun_dom.check();
	shop.check();
}

setInterval(draw,25);
