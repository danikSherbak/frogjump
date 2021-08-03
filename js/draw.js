function left() { player.position = "left"; }
function right() { player.position = "right"; }
function up() { player.position = "up"; }
function down() { player.position = "down"; }

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
}

setInterval(draw,25);

