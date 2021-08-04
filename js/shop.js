let shop = {
  number: 0,
  array: [],
  id: document.getElementById("imageShop"),
  check() {
    //this.id.src = this.array[this.number].src;

    for (let i = 0; i < this.array.length; i++) {
      this.array[i].check();
    }

  }
}

class Skin {
  constructor(src, price, index) {
    this.src = src;
    this.price = price;
    this.index = index;
  }
  check() {
    if(shop.number === this.index) {
      player.src = this.src;
      shop.id.src = this.src;
    }
  }
}

shop.array[0] = new Skin("Sprait/Player/player.png", 0,0);
shop.array[1] = new Skin("Sprait/Player/player2.png", 0,1);
shop.array[2] = new Skin("Sprait/Player/player.png", 0,2);