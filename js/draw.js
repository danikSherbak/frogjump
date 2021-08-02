function left(){player.position = "left";}function right(){player.position = "right";}function up(){player.position = "up";}function down(){player.position = "down";}
//<button onclick="left()">left</button><button onclick="right()">right</button><button onclick="up()">up</button><button onclick="down()">down</button><button onclick="jump.jump()">jump</button>
function back() {
	menu.id.level.style.display = 'none';
	menu.id.main.style.display = 'block';
}

function draw(){
	if(!player.life) {
    menu.id.gameOver.style.display = 'block';
    jump.local = false;
			player.jump = false;
			}
	localStorageReturn();
	ctx.clearRect(0,0,canvas.width,canvas.height);
	level.check();
	menu.draw(); 
	
	fun_dom.check();
}
setInterval(draw,25);

