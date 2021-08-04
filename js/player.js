let player = {
	position: "down",
	life: true,
	coins: 0,
	x: 0,
	y: 0,
	size: "small",
	what: null,
	jump: true,
	img: new Image(),
	src: "Sprait/Player/player.png",
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
		player.img.src = player.src;
		switch(player.position) {
			case "left":
				drawImageRot(player.img,player.x,player.y,50,50,270);
			break;
			case "up":
			  drawImageRot(player.img,player.x,player.y,50,50,0);
			break;
			case "down":
				drawImageRot(player.img,player.x,player.y,50,50,180);
			break;
			case "right":
				drawImageRot(player.img,player.x,player.y,50,50,90);
			break;
		}
	},
}

function drawImageRot(img,x,y,width,height,deg){
	ctx.save()
	var rad = deg * Math.PI / 180;
	ctx.translate(x + width / 2, y + height / 2);
	ctx.rotate(rad);   
	ctx.drawImage(img,width / 2 * (-1),height / 2 * (-1),width,height);
	ctx.restore();
}
