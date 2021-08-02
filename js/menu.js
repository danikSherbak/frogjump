let menu = {
	what: "main",
	id: {
		main: document.getElementById("main"),
        level: document.getElementById("level"),
        levelNumber: document.getElementById("levelNumber"),
        canvas: document.getElementById("cnv"),
        gameOver: document.getElementById("gameOver"),
	},
	score() {
		ctx.beginPath();
	    ctx.fillStyle = "orange";
	    ctx.fillRect(0,100,100,100);
	    ctx.font = "50px serif";
	ctx.fillStyle = "black";
    ctx.fillText(player.coins, 40, 150);
	},
   draw() {
   	switch(menu.what) {
      case "levelDraw":
      level.array[level.number].draw();
      level.array[level.number].checkMap();
	  player.draw();
	  jump.draw();
      menu.score();
      break;
   }
   }
}



