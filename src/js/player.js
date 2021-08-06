import { player } from './player';
import { menu } from './menu';
import { ctx } from './cnv';
import { jump } from './jump';

export const player = {
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
		this.jump = true;
		jump.y2 = 210; 
		this.check();
		this.life = true;
	},

	check() {
		switch(this.size) {
			case "small":
				this.x = 350;
		    this.y = 200;
				break;
			case "big":
				this.x = 250;
		    this.y = 100;
				break;
			case "bigger":
				this.x = 150;
				this.y = 50;
				break;
		}
	},

	gameOverCheck() {
		if (this.life) return;

			menu.id.gameOver.style.display = 'block';
			jump.local = false;
			this.jump = false;
	},

	draw() {
		this.x2 = this.x + 50;
		this.y2 = this.y + 50;
		this.img.src = this.src;

		switch(this.position) {
			case "left":
				drawImageRot(this.img,this.x,this.y,50,50,270);
				break;
			case "up":
			  drawImageRot(this.img,this.x,this.y,50,50,0);
				break;
			case "down":
				drawImageRot(this.img,this.x,this.y,50,50,180);
				break;
			case "right":
				drawImageRot(this.img,this.x,this.y,50,50,90);
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
