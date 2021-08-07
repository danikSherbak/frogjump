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

export const level = {
	number: 0,
	array: [],
	
	check() {
    for(let i = 0; i < this.array.length; i++) {
    	this.array[i].checkMap();
    }
  }
}

export class Level {
	constructor(size, array, index, name) {
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

		this.buttonID.className = "levelButton";

		this.buttonID.style.background = this.complete ? "green" : "grey";
	}
}

level.array[0] = new Level("small", [
  1,'1','1','1','1','1','1','1','1','1',1,
  1,':','#','#','0','#','<','#','#','*',1,
  1,'#','#','#','#','#','#','#','#','#',1,
  1,'#','#','#','#','#','`','#','`','#',1,
  1,'0','#','#','0','#','#','0','#','$',1,
  1,'#','#','#','#','#','>','#','#','#',1,
  1,'#','#','#','#','#','#','$','#','#',1,
  1,'0','#','#','*','<','#','#','>','#',1,
  1,'#','#','#','#','#','#','#','#',';',1,
  1,'*','<','#','#','#','#','0','<','#',1,
  1,'1','1','1','1','1','1','1','1','1',1
], 0, "1");

level.array[1] = new Level("small", [
  1, "1", "1", "1", "1", "1", "1", "1", "1", 1,
  1, ":", "#", "$", "^", "#", "0", "#", "$", 1, 
  1, "#", "#", "#", "#", "#", "#", "#", "#", 1, 
  1, "0", "#", "#", "#", "#", "0", "^", "*", 1, 
  1, "^", "#", "#", "#", "#", "#", "#", ";", 1, 
  1, "#", "#", "#", "#", "#", "#", "#", "#", 1, 
  1, "*", "^", "0", "#", "#", "0", "^", "*", 1, 
  1, "#", "#", "#", "#", "#", "#", "#", "#", 1, 
  1, "$", "#", "0", "#", "#", "0", "#", "$", 1, 
  1, "1", "1", "1", "1", "1", "1", "1", "1", 1
], 1, "2");

level.array[2] = new Level("small", [
  1,'1','1','1','1','1','1','1','1',1,
  1,':','#','#','0','0','#','#','*',1,
  1,'#','#','#','#','#','#','#','#',1,
  1,'#','#','#','`','`','#','#','#',1,
  1,'0','#','<','$','$','<','#','0',1,
  1,'0','#','#','0','0','<','#','0',1,
  1,'^','#','#','#','^','#','#','#',1,
  1,'#','#','#','#','#','#','#','#',1,
  1,'*','#','#','0','<','#','#',';',1,
  1,'1','1','1','1','1','1','1','1',1
], 2, "3");

level.array[3] = new Level("big", [
  1,'1','1','1','1','1','1','1','1','1','1','1','1',1,
  1,':','#','#','0','#','#','#','#','0','<','#','*',1,
  1,'#','#','#','#','#','#','#','#','#','#','#','#',1,
  1,'#','#','#','#','#','#','#','#','#','#','#','#',1,
  1,'0','#','#','0','<','#','#','>','0','#','#','0',1,
  1,'#','#','#','#','#','`','`','#','^','#','#','#',1,
  1,'0','0','<','#','>','$','$','<','#','#','#','#',1,
  1,'^','0','#','#','#','$','$','<','#','#','#','#',1,
  1,'#','#','#','#','#','^','^','#','#','#','#','#',1,
  1,'0','#','#','0','#','#','#','>','0','#','#','0',1,      
  1,'#','#','#','^','#','#','#','#','#','#','#','`',1,
  1,'#','#','#','#','#','#','#','#','#','#','#',';',1,
  1,'*','#','#','0','<','#','#','>','0','#','#','*',1,
  1,'1','1','1','1','1','1','1','1','1','1','1','1',1
], 3, "4");

level.array[4] = new Level("big", [
  1,'1','1','1','1','1','1','1','1','1','1','1','1',1,
  1,':','#','#','#','#','0','<','#','#','#','#',';',1,
  1,'#','#','#','#','#','#','#','#','#','#','#','#',1,
  1,'#','#','#','#','#','#','#','#','#','#','#','#',1,
  1,'0','#','#','#','#','#','#','#','#','#','#','0',1,
  1,'#','#','#','#','#','#','#','#','#','#','`','#',1,
  1,'#','#','#','#','>','$','#','#','#','#','*','#',1,
  1,'#','#','#','#','#','^','#','#','#','#','#','#',1,
  1,'0','#','#','#','#','0','#','#','#','#','#','$',1,
  1,'^','#','#','#','#','#','#','#','#','#','#','#',1,
  1,'#','#','#','#','#','#','#','#','#','#','#','#',1,
  1,'#','#','#','#','#','#','#','`','#','#','#','#',1,
  1,'#','#','#','#','#','*','#','0','#','#','#','0',1,
  1,'1','1','1','1','1','1','1','1','1','1','1','1',1
], 4, "5");


level.array[5] = new Level("big", [
  1,'1','1','1','1','1','1','1','1','1','1','1','1',1,
  1,':','0','0','0','<','`','`','`','`','`','>','*',1,
  1,'^','^','>','0','<','>','0','<','`','`','>','0',1,
  1,'`','`','>','0','<','>','0','<','>','0','0','0',1,
  1,'>','0','0','0','0','0','0','0','0','0','<','^',1,
  1,'>','0','<','0','<','>','0','<','>','0','<','`',1,
  1,'*','0','<','0','<','>','0','<','>','0','<','`',1,
  1,'^','^','>','0','<','>','0','<','>','0','<','`',1,
  1,'>','0','0','0','<','`','$','`','>','0','<','`',1,
  1,'>','0','<','0','<','`','`','`','`','0','`','`',1,
  1,'>','0','<','0','0','$','<','0','0','0','0',';',1,
  1,'*','0','<','^','^','^','^','^','>','0','`','`',1,
  1,'^','^','^','^','^','^','^','^','>','0','0','$',1,
  1,'1','1','1','1','1','1','1','1','1','1','1','1',1
], 5, "6");

level.array[6] = new Level("bigger", [
  1,'1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1',1,
  1,':','#','#','#','0','#','#','#','0','<','0','<','0','<','>','*',1,
  1,'#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',1,
  1,'#','#','#','#','#','#','#','#','#','#','#','>','0','#','#','0',1,
  1,'#','#','#','#','#','#','#','#','#','#','#','#','^','#','#','^',1,
  1,'0','#','#','#','0','#','#','#','0','#','0','<','#','#','#','#',1,
  1,'#','#','#','#','#','#','#','#','^','#','`','#','#','#','#','`',1,
  1,'#','#','#','>','0','#','#','#','#','#','0','#','#','#','#','0',1,
  1,'#','#','#','#','#','`','#','#','#','#','^','#','#','#','#','#',1,
  1,'0','#','#','#','#','$','<','#','#','#','#','#','#','#','#','#',1,
  1,'^','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#',1,
  1,'#','`','#','#','#','#','#','#','#','#','`','#','#','#','#','#',1,
  1,'>','0','#','#','0','<','#','#','#','>','$','#','#','#','#','0',1,
  1,'#','#','#','#','^','#','#','#','#','#','^','#','#','#','#','#',1,
  1,'#','#','#','#','`','#','#','#','#','#','#','#','#','#','#','#',1,
  1,'>','0','#','#','0','<','#','#','#','#','#','#','#','#','#','#',1,
  1,'#','^','#','#','*','#','#','#','#','#','#','#','#','#','#',';',1,
  1,'1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1',1
], 6, "7");

level.array[0].level = true;
