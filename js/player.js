let player = {
	position: "down",
	life: true,
	coins: 0,
	x: 0,
	y: 0,
	create: false,
	size: "small",
	what: null,
	jump: true,
	restart() {
		jump.local = false;
        player.jump = true;
		jump.y2 = 210; 
		player.check();
		player.life = true;
	},
	check() {
		switch(player.size) {
			case "small":
			player.x = 350;
		    player.y = 200;
		break;
		case "big":
			player.x = 250;
		    player.y = 100;
		break;
		case "bigger":
			player.x = 150;
		    player.y = 50;
		break;
		}

	},
	gameOverCheck() {
		if(player.life) return;
			menu.id.gameOver.style.display = 'block';
			jump.local = false;
			player.jump = false;
	},
	draw() {
		player.x2 = player.x + 50;
		player.y2 = player.y + 50;
		switch(player.position) {
			case "left":
			ctx.drawImage(playerImage[3],player.x,player.y,50,50);
			break;
			case "up":
			ctx.drawImage(playerImage[0],player.x,player.y,50,50);
			break;
			case "down":
			ctx.drawImage(playerImage[1],player.x,player.y,50,50);
			break;
			case "right":
			ctx.drawImage(playerImage[2],player.x,player.y,50,50);
			break;
		}
	},
}