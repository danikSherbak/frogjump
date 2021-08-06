import { player } from './player';

export const shop = {
  number: 0,
  array: [],
  id: document.getElementById("imageShop"),

  check() {
    for (let i = 0; i < this.array.length; i++) {
      this.array[i].check();
    }
    
    this.id.addEventListener('click', (event) => {
      this.array[this.number].buy();
    });
  }
}

class Skin {
  constructor(src, price, index) {
    this.src = src;
    this.price = price;
    this.index = index;
    this.bought = false;
  }

  check() {
    if (shop.number === this.index) {
      if (this.bought) player.src = this.src;

      shop.id.src = this.src;
    }
  }

  buy() {
    if(player.coins >= this.price) {
      this.bought = true;
      player.coins -= this.price;
    }
  }
}

shop.array[0] = new Skin("Sprait/Player/player.png", 0,0);
shop.array[1] = new Skin("Sprait/Player/player2.png", 0,1);
shop.array[2] = new Skin("Sprait/Player/player.png", 0,2);