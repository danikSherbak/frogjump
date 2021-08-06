import { player } from '../player';
import { menu } from '../menu';
import { CELL_WIDTH, CELL_HEIGHT } from './constants';
import { Lend } from './lend';
import { Block } from './block';
import { Finish } from './finish';
import { Grunge } from './grunge';
import { Star } from './star';
import { Start } from './start';
import { Thorn } from './thorn';
import { Coins } from './coins';

export const createMap = {
	quantity: 0,
	number: 0,
	array: [],
	check() {
		for(let i = 0; i < this.array.length; i++) {
			this.array[i].checkPlay();
		}
	},
	create() {
		let size_value;

		if (document.getElementById('r1').checked) {
			size_value = document.getElementById('r1').value;
		}	

		if (document.getElementById('r2').checked) {
			size_value = document.getElementById('r2').value;
		}

		if (document.getElementById('r3').checked) {
			size_value = document.getElementById('r3').value;
		}

		const text = document.getElementById('text').value;
		this.array[this.quantity] = new CreateMap(this.quantity,text,size_value);
		this.quantity++;
	},
}


export class CreateMap {
	constructor(index, name, size) {
		this.size = size;
		this.index = index;
		this.name = name;
		this.map = [];
		this.quantity = 0;
		this.width = true;
		this.rotate = 2;
		this.number = null;
		this.rotateArray = [6,7,8,9];
		this.finish = false;

		switch(this.size) {
			case "small":
				this.x = 300;
		    this.y = 150;
		    this.startX = 300;
		    this.startY = 150;
				this.mapX = 350;
				this.mapX2 = 750;
				this.mapY = 200;
				this.mapY2 = 600;
				this.array = [
					1,'1','1','1','1','1','1','1','1',1,
					1,':','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#',1,
					1,'1','1','1','1','1','1','1','1',1
				];
				break;
			case "big":
				this.x = 200;
				this.y = 50;
				this.mapX = 250;
				this.mapX2 = 850;
				this.mapY = 100;
				this.mapY2 = 700;
				this.startX = 200;
				this.startY = 50;
				this.array = [
					1,'1','1','1','1','1','1','1','1','1','1','1','1',1,
					1,':','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'1','1','1','1','1','1','1','1','1','1','1','1',1
				];
				break;
			case "bigger":
				this.x = 100;
				this.y = 0;
				this.mapX = 150;
				this.mapX2 = 950;
				this.mapY = 50;
				this.mapY2 = 850;
				this.startX = 100;
				this.startY = 0
				this.array = [
					1,'1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1',1,
					1,':','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',1,
					1,'1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1',1
				];
				break;
		} 

		this.read();
		this.create();
	}

	create() {
		this.idName = '_' +this.name +this.index +'_';
		this.button = document.createElement("button");
    this.button.innerHTML = this.name;
    this.button.id = this.idName;
    this.button.className = 'back';
		menu.id.levels.appendChild(this.button);
		this.buttonID = document.getElementById(this.idName);
		this.div = document.createElement('div');
		this.div.className = "creareMepLevelsDiv";
		this.div.id = this.idName +'div';
		document.body.append(this.div);
		this.divId = document.getElementById(this.idName +'div');
  	this.buttonBack = document.createElement("button");
    this.buttonBack.innerHTML = 'back';
    this.buttonBack.className = 'back';
    this.buttonBack.id = this.idName +'back';
		this.divId.appendChild(this.buttonBack);
		this.backId = document.getElementById(this.idName +'back');
  	this.buttonPlay = document.createElement("button");
    this.buttonPlay.innerHTML = 'play';
    this.buttonPlay.id = this.idName +'play';
		this.divId.appendChild(this.buttonPlay);
		this.playId = document.getElementById(this.idName +'play');
		this.buttonCreate = document.createElement("button");
    this.buttonCreate.innerHTML = 'create';
    this.buttonCreate.id = this.idName +'create';
		this.divId.appendChild(this.buttonCreate);
		this.createId = document.getElementById(this.idName +'create');
	}
	
	read() {
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
					this.width = !this.width;  
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
			this.x += CELL_WIDTH;

			if (this.width) {
				this.y += CELL_HEIGHT;
				this.x = this.start;
			}
		}
	}

	drawMap() {
		for(let i = 0; i < this.map.length; i++) {
			this.map[i].draw();
			this.map[i].check();
		}
	}

  checkPlay() {
  	this.buttonID.addEventListener('click', (event) => {
			menu.id.createMap.style.display = 'none';
			this.divId.style.display = 'block';
		});

		this.playId.addEventListener('click', (event) => {
			createMap.number = this.index;
			menu.what = "mapDraw";
			player.what = "map";
			player.size = this.size;	
			menu.id.createMap.style.display = 'none';
			menu.id.canvas.style.display = 'block';
			this.divId.style.display = 'none';
			player.check();
		});

		this.backId.addEventListener('click', (event) => {
			menu.id.createMap.style.display = 'block';
			this.divId.style.display = 'none';
		});
	}
}
