const playerImage = [new Image(), new Image(), new Image(), new Image()];
playerImage[0].src = "Sprait/Player/player.png";
playerImage[1].src = "Sprait/Player/player2.png";
playerImage[2].src = "Sprait/Player/player3.png";
playerImage[3].src = "Sprait/Player/player4.png";

const objectImage = [new Image(), new Image(), new Image(), new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()];
objectImage[0].src = "Sprait/Object/кувшинка.png";
objectImage[1].src = "Sprait/Object/болота.png";
objectImage[2].src = "Sprait/Object/Star.png";
objectImage[3].src = "Sprait/Object/Coins.png";
objectImage[4].src = "Sprait/Object/StarNull.png";
objectImage[5].src = "Sprait/Object/grange.png";
objectImage[6].src = "Sprait/Object/Thorn/Up.png";
objectImage[7].src = "Sprait/Object/Thorn/Down.png";
objectImage[8].src = "Sprait/Object/Thorn/Left.png";
objectImage[9].src = "Sprait/Object/Thorn/Right.png";
objectImage[10].src = "Sprait/Object/хз.png";

const  canvas  = document.getElementById("CANVAS");
   const  ctx = canvas.getContext("2d");
    canvas.width = 1000;
    canvas.height = 1000;
    
    const cellWidth = 50;
const cellHeight = 50;
    
    class Lend {
	constructor(x,y,index) {
		this.x = x;
		this.y = y;
		this.x2 = this.x + cellWidth;
		this.y2 = this.y + cellHeight;
		this.what = "lend";
		this.index = index;
	}
	check() {
    }
	draw() {
		ctx.drawImage(objectImage[1],this.x,this.y,cellWidth,cellHeight);
       ctx.drawImage(objectImage[0],this.x,this.y,cellWidth,cellHeight);
    }
}

class Grunge {
	constructor(x,y,index) {
		this.x = x;
		this.y = y;
		this.x2 = this.x + cellWidth;
		this.y2 = this.y + cellHeight;
		this.what = "grunge";
		this.index = index;
	}
	check() {
		if(this.x > player.x && this.y === player.y) {
		if(numberX >= this.x) numberX = player.x + (this.x - player.x2);
		}
		if(this.x < player.x && this.y === player.y) {
		if(numberXminus <= this.x2) numberXminus = player.x - (player.x - this.x2);
		}
		if(this.y > player.y && this.x === player.x) {
		if(numberY >= this.y) numberY = player.y + (this.y - player.y2);
		}
		if(this.y < player.y && this.x === player.x) {
		if(numberYminus <= this.y2) numberYminus = player.y - (player.y - this.y2);
		}
    }
	draw() {
       ctx.drawImage(objectImage[5],this.x,this.y,cellWidth,cellHeight);
    }
}

class Block {
	constructor(x,y,index) {
		this.x = x;
		this.y = y;
		this.x2 = this.x + cellWidth;
		this.y2 = this.y + cellHeight;
		this.what = "block";
		this.index = index;
	}
	check() {
		if(player.jump) if(player.x === this.x && player.y === this.y) player.life = false;
    }
	draw() {
       ctx.drawImage(objectImage[1],this.x,this.y,cellWidth,cellHeight);
    }
}

class Coins {
	constructor(x,y,index) {
		this.x = x;
		this.y = y;
		this.what = "coins";
		this.x2 = this.x + cellWidth;
		this.y2 = this.y + cellHeight;
		this.life = true;
		this.index = index;
	}
	check() {
		if(this.life) {
          if(player.x === this.x && player.y === this.y) { 
          	if(player.what === "level") {
    	level.array[level.number].array[this.index] = '0';
    //level.array[level.number].read();
	} else {
		createMap.array[createMap.number].array[this.index] = '0';
		//createMap.array[createMap.number].read();
	}
       player.coins++;
       this.life = false;
       }
    }
    }
	draw() {
		ctx.drawImage(objectImage[1],this.x,this.y,cellWidth,cellHeight);
       ctx.drawImage(objectImage[0],this.x,this.y,cellWidth,cellHeight);
		if(this.life) ctx.drawImage(objectImage[3],this.x +12,this.y +10,30,30);
    }
}
class Star {
	constructor(x,y,index,level,what) {
		this.x = x;
		this.y = y;
		this.x2 = this.x + cellWidth;
		this.y2 = this.y + cellHeight;
		this.what = "star";
		this.life = true;
		this.index = index;
		this.level = level;
		this.what = what;
	}
	check() {
          if(this.life) {
          if(player.x === this.x && player.y === this.y) { 
          	if(player.what === "level") {
    	level.array[level.number].array[this.index] = '0';
    //level.array[level.number].read();
	} else {
		createMap.array[createMap.number].array[this.index] = '0';
		//createMap.array[createMap.number].read();
	}
       player.coins += 2;
       this.life = false;
       }
    }
    }
	draw() {
		ctx.drawImage(objectImage[1],this.x,this.y,cellWidth,cellHeight);
       ctx.drawImage(objectImage[0],this.x,this.y,cellWidth,cellHeight);
		if(this.life) {
       ctx.drawImage(objectImage[2],this.x + 12,this.y + 10,30,30);
       }
    }
}

class Start {
	constructor(x,y,index) {
		this.x = x;
		this.y = y;
		this.x2 = this.x + cellWidth;
		this.y2 = this.y + cellHeight;
		this.what = "start";
		this.index = index;
		this.a = true;
	}
	check() {
		if(this.a) {
		player.x = this.x;
		player.y = this.y;
		this.a = false;
		}
    }
	draw() {
		ctx.drawImage(objectImage[1],this.x,this.y,cellWidth,cellHeight);
       ctx.drawImage(objectImage[0],this.x,this.y,cellWidth,cellHeight);
    }
}

class Finish {
	constructor(x,y,index,level) {
		this.x = x;
		this.y = y;
		this.x2 = this.x + cellWidth;
		this.y2 = this.y + cellHeight;
		this.what = "finish";
		this.index = index;
		this.a = true;
		this.level = level;
	}
	check() {
		if(player.x === this.x && player.y === this.y) {
		if(this.a) {
         level.array[this.level].complete = true;
         level.array[this.level].save = level.array[this.level].map;
         level.array[level.number].starSave = level.array[level.number].star;
         this.a = false;
       } 
    }
    }
    
	draw() {
		ctx.drawImage(objectImage[1],this.x,this.y,cellWidth,cellHeight);
       ctx.drawImage(objectImage[0],this.x,this.y,cellWidth,cellHeight);
       ctx.beginPath();
       ctx.fillStyle = "black";
       ctx.fillRect(this.x + 20, this.y,30,10);
    }
}

class Thorn {
	constructor(x,y,index,position) {
		this.x = x;
		this.y = y;
		this.what = "thorn";
		this.position = position;
		this.index = index;
	}
	check() {
		this.x2 = this.x + cellWidth;
		this.y2 = this.y + cellHeight;
    if(player.x === this.x && player.y === this.y) player.life = false;
    }
	draw() {
		ctx.drawImage(objectImage[1],this.x,this.y,cellWidth,cellHeight);
		switch(this.position) {
			case "up":
       ctx.drawImage(objectImage[6],this.x,this.y,cellWidth,cellHeight);
    break;
    case "down":
       ctx.drawImage(objectImage[7],this.x,this.y,cellWidth,cellHeight);
    break;
    case "left":
       ctx.drawImage(objectImage[9],this.x,this.y,cellWidth,cellHeight);
    break;
    case "right":
       ctx.drawImage(objectImage[8],this.x,this.y,cellWidth,cellHeight);
    break;
    }
  
    }
}
    
    