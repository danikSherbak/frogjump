import { player } from './player';
import { menu } from './menu';
import { shop } from './shop';
import { ctx, canvas } from './cnv';
import { fun_dom } from './fun_dom';
import { localStorageReturn } from './local';

function back() {
	menu.id.level.style.display = 'none';
	menu.id.main.style.display = 'block';
}

function draw() {
	localStorageReturn();
	ctx.clearRect(0,0,canvas.width,canvas.height);
	menu.draw(); 
	player.gameOverCheck();
	level.check();
	fun_dom.check();
	shop.check();
}

setInterval(draw,25);
