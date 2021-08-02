const fun_dom = {
  get_id: {
    level: document.getElementById("button_back"),
    restart: document.getElementById("button_restart"),
    backLevel: document.getElementById("button_back_gameOver"),
  },
  check() {
    this.get_id.level.addEventListener('click', (event) => {
      menu.id.level.style.display = 'block';
      menu.id.main.style.display = 'none';
      menu.what = 'level';
    });
    
    this.get_id.restart.addEventListener('click', (event) => {
      menu.id.gameOver.style.display = 'none';
	    player.restart ();
    });

    this.get_id.backLevel.addEventListener('click', (event) => {
      menu.id.gameOver.style.display = 'none';
    	menu.id.level.style.display = 'block';
	menu.id.canvas.style.display = 'none';
	player.restart ();
    });

  }
}
