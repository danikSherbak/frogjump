document.addEventListener('keydown', function(event) {
if(jump.local) return;
if(event.code == "KeyA")player.position = "left";
if(event.code == "KeyD")player.position = "right";
if(event.code == "KeyW")player.position = "up";
if(event.code == "KeyS")player.position = "down";
if(event.keyCode == 32) jump.jump();

 });