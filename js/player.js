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
	createMap: {
		cell: 0,
		what: ['0','#','*','$',':',';','^','`','<','>'],
		image: [objectImage[0],objectImage[1],objectImage[3],objectImage[2],objectImage[0],objectImage[0],objectImage[6],objectImage[7],objectImage[8],objectImage[9]],
		number: 6,
		x: 0,
		y: 0,
		draw() {
			ctx.drawImage(player.createMap.image[player.createMap.number],player.createMap.x,player.createMap.y,50,50);
		},
		
		create() {
			for(let i = 0; i < createMap.array[createMap.number].map.length; i++) {
			const cell = createMap.array[createMap.number].map[i];
			//alert(cell.x);
			if(player.createMap.x === cell.x && player.createMap.y === cell.y) player.createMap.cell = cell.index;
		 }
			createMap.array[createMap.number].enter(player.createMap.cell,player.createMap.what[player.createMap.number]);
			createMap.array[createMap.number].restart();
		},
		rotate() {
			player.createMap.number = createMap.array[createMap.number].rotateFun();
		}
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