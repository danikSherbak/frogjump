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
       ctx.drawImage(objectImage[4],this.x,this.y,cellWidth,cellHeight);
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
     	level.array[level.number].array[this.index] = '0';
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
     	level.array[level.number].array[this.index] = '0';
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
		if(player.x === this.x && player.y === this.y) level.array[this.level].complete = true; 
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
       ctx.drawImage(objectImage[5],this.x,this.y,cellWidth,cellHeight);
    break;
    case "down":
       ctx.drawImage(objectImage[6],this.x,this.y,cellWidth,cellHeight);
    break;
    case "left":
       ctx.drawImage(objectImage[8],this.x,this.y,cellWidth,cellHeight);
    break;
    case "right":
       ctx.drawImage(objectImage[7],this.x,this.y,cellWidth,cellHeight);
    break;
  	}
  }
} 

let level = {
    number: 0,
    array: [],
    back() {
    	menu.id.level.style.display = 'block';
     	menu.id.canvas.style.display = 'none';
    },
    check() {
    for(let i = 0; i < level.array.length; i++) {
    	level.array[i].checkMap();
    }
  },
}

class Level {
	constructor(size,array, index, name) {
		this.size = size;
		this.array = array;
		this.name = name;
		this.level = false;
	    this.map = [];
		this.quantity = 0;
		this.width = true;
		this.index = index;
		this.complete = false;
		this.star = 0;
		this.a = true;
		this.save = [];
		this.starSave = 0;
		this.read();
		this.idName = '_' +this.name +this.index +'Level' +'_';
		this.create();
	}
	create() {
		this.button = document.createElement("button");
    this.button.innerHTML = this.name;
    this.button.id = this.idName;
    this.button.className = 'back';
menu.id.levelNumber.appendChild(this.button);
this.buttonID = document.getElementById(this.idName);
 }
	read() {
		switch(this.size) {
			case "small":
			this.x = 300;
		    this.y = 150;
		    this.start = 300;
		break;
		case "big":
			this.x = 200;
		    this.y = 50;
		    this.start = 200;
		break;
		case "bigger":
			this.x = 100;
		    this.y = 0;
		    this.start = 100;
		break;
		} 
		
		for(let i = 0; i < this.array.length; i++) {

	this.cell = this.array[i];
	
	switch(this.cell) {
		case '0':
		this.map[this.quantity] = new Lend(this.x,this.y,this.quantity);
		this.quantity++;
		break;
		case '^':
		this.map[this.quantity] = new Thorn(this.x,this.y,this.quantity,"up");
		this.quantity++;
		break;
		case '*':
		this.map[this.quantity] = new Star(this.x,this.y,this.quantity,this.index,"level");
		this.quantity++;
		break;
		case '>':
		this.map[this.quantity] = new Thorn(this.x,this.y,this.quantity,"left");
		this.quantity++;
		break;
		case '$':
		this.map[this.quantity] = new Coins(this.x,this.y,this.quantity);
		this.quantity++;
		break;
		case '<':
		this.map[this.quantity] = new Thorn(this.x,this.y,this.quantity,"right");
		this.quantity++;
		break;
		case '`':
		this.map[this.quantity] = new Thorn(this.x,this.y,this.quantity,"down");
		this.quantity++;
		break;
		case ':':
		this.map[this.quantity] = new Start(this.x,this.y,this.quantity);
		this.quantity++;
		break;
		case ';':
		this.map[this.quantity] = new Finish(this.x,this.y,this.quantity,this.index);
		this.quantity++;
		break;
		case 1:
		this.map[this.quantity] = new Grunge(this.x,this.y,this.quantity);
		this.quantity++;
		if(this.width) this.width = false; 
		else this.width = true; 
		break;
		case '1':
		this.width = false; 
		this.map[this.quantity] = new Grunge(this.x,this.y,this.quantity);
		this.quantity++;
		break;
		case '#':
		this.map[this.quantity] = new Block(this.x,this.y,this.quantity);
		this.quantity++;
		break;
	}
		this.x += cellWidth;
	if(this.width) {
		this.y += cellHeight;
		this.x = this.start;
	}
}
	}
	draw() {
		for(let i = 0; i < this.map.length; i++) {
			this.map[i].check();
			this.map[i].draw();
		}
	}
	checkMap() {
   	this.buttonID.addEventListener('click', (event) => {
   level.number = this.index;
    menu.what = "levelDraw";
    player.what = "level";
    player.size = this.size;
    
    menu.id.level.style.display = 'none';
    menu.id.canvas.style.display = 'block';
    
    player.check();
});

if(this.complete) this.buttonID.style.background = "green";
else this.buttonID.style.background = "grey";
	}
}
