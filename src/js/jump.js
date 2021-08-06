import { player } from './player';
import { ctx } from './cnv';

export let numberX = 0,
 numberY = 0,
 numberXminus = 0,
 numberYminus = 0;

export const jump = {
	x: 0,
	y: 200,
	y2: 150,
	local: false,
	number: null,
	position: true,
	draw () {
		this.x2 = this.x + 100;
		ctx.beginPath();
		ctx.fillStyle = "red";
		ctx.fillRect(this.x,this.y,100,100);
		ctx.beginPath();
		ctx.fillStyle = "orange";
		ctx.fillRect(this.x,this.y + 100,100,100);
		ctx.beginPath();
		ctx.fillStyle = "yellow";
		ctx.fillRect(this.x,this.y + 200,100,100);
		ctx.beginPath();
		ctx.fillStyle = "green";
		ctx.fillRect(this.x,this.y + 300,100,100);
		ctx.beginPath();
		ctx.fillStyle = "blue";
		ctx.fillRect(this.x,this.y + 400,100,100);
		ctx.beginPath();
		ctx.lineWidth = 5; 
		ctx.moveTo(this.x, this.y2);
		ctx.lineTo(this.x2, this.y2);
		ctx.stroke();

		if (player.jump) {

			if (this.position) this.y2 += 10;
			else this.y2 -= 10;

			if (this.y2 === this.y) this.position = true;

			if (this.y2 === this.y + 500) this.position = false;

			if (this.y2 >= this.y && this.y2 <= this.y + 100) this.number = 5
			;
			if (this.y2 >= this.y + 100 && this.y2 <= this.y + 200) this.number = 4;

			if (this.y2 >= this.y + 200 && this.y2 <= this.y + 300) this.number = 3;

			if (this.y2 >= this.y + 300 && this.y2 <= this.y + 400) this.number = 2;

			if (this.y2 >= this.y + 400 && this.y2 <= this.y + 500) this.number = 1;
		}

		if (this.local) {

		switch(player.position) {
			case "left":
				if(player.x > numberXminus) player.x -= 10;
				else {
					this.local = false;
					player.jump = true;
				}
				break;
			case "up":
				if(player.y > numberYminus) player.y -= 10;
				else {
					this.local = false;
					player.jump = true;
				}
				break;
			case "down":
				if(player.y < numberY) player.y += 10;
				else {
					this.local = false;
					player.jump = true;
				}
				break;
			case "right":
				if(player.x < numberX) player.x += 10;
				else {
					this.local = false;
					player.jump = true;
				}
				break;
		}
	}
},
	
	jump() {
		if(player.jump) {
			this.local = true; 
			numberX = player.x + (this.number * 50);
			numberY = player.y  + (this.number * 50);
			numberXminus = player.x - (this.number * 50);
			numberYminus = player.y - (this.number * 50);
			player.jump = false;
		}
	}
}