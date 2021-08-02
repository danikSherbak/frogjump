let numberX = 0;
	let numberY = 0;
	let numberXminus = 0;
	
let numberYminus = 0;

let jump = {
	x: 0,
	y: 200,
	y2: 150,
	local: false,
	number: null,
	position: true,
	draw () {
		jump.x2 = jump.x + 100;
		ctx.beginPath();
		ctx.fillStyle = "red";
		ctx.fillRect(jump.x,jump.y,100,100);
		ctx.beginPath();
		ctx.fillStyle = "orange";
		ctx.fillRect(jump.x,jump.y + 100,100,100);
		ctx.beginPath();
		ctx.fillStyle = "yellow";
		ctx.fillRect(jump.x,jump.y + 200,100,100);
		ctx.beginPath();
        ctx.fillStyle = "green";
		ctx.fillRect(jump.x,jump.y + 300,100,100);
		ctx.beginPath();
        ctx.fillStyle = "blue";
		ctx.fillRect(jump.x,jump.y + 400,100,100);
		
		  ctx.beginPath();
ctx.lineWidth = 5; 
ctx.moveTo(jump.x, jump.y2);
ctx.lineTo(jump.x2, jump.y2);
ctx.stroke();

if(player.jump) {
if(jump.position) jump.y2 += 10;
else jump.y2 -= 10;

if (jump.y2 === jump.y) jump.position = true;
if (jump.y2 === jump.y + 500) jump.position = false;

if (jump.y2 >= jump.y && jump.y2 <= jump.y + 100) jump.number = 5;
if (jump.y2 >= jump.y + 100 && jump.y2 <= jump.y + 200) jump.number = 4;

if (jump.y2 >= jump.y + 200 && jump.y2 <= jump.y + 300) jump.number = 3;
if (jump.y2 >= jump.y + 300 && jump.y2 <= jump.y + 400) jump.number = 2;

if (jump.y2 >= jump.y + 400 && jump.y2 <= jump.y + 500) jump.number = 1;
}

if(jump.local) {
		switch(player.position) {
			case "left":
			if(player.x > numberXminus) player.x -= 10;
			else {
             jump.local = false;
             player.jump = true;
             }
			break;
			case "up":
			if(player.y > numberYminus) player.y -= 10;
			else {
             jump.local = false;
             player.jump = true;
             }
			break;
			case "down":
			if(player.y < numberY) player.y += 10;
			else {
             jump.local = false;
             player.jump = true;
             }
			break;
			case "right":
			if(player.x < numberX) player.x += 10;
			else {
             jump.local = false;
             player.jump = true;
             }
			break;
		//}
		}
		}
	},
	
	jump() {
		if(player.jump) {
		jump.local = true; 
   numberX = player.x + (jump.number * 50);
	numberY = player.y  + (jump.number * 50);
	numberXminus = player.x - (jump.number * 50);
	numberYminus = player.y - (jump.number * 50);
	player.jump = false;
	}
	
	}
}