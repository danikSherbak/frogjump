import { jump } from './jump';
import { player } from './player';

document.addEventListener('keydown', function(event) {
  if (jump.local) return;

  switch(event.code) {
    case "KeyA":
      player.position = "left";
      break;
    case "KeyD":
      player.position = "right";
      break;
    case "KeyW":
      player.position = "up";
      break;
    case "KeyS":
      player.position = "down";
      break;
  }

  if (event.keyCode == 32) jump.jump();
});
