const objectImage = [new Image(), new Image(), new Image(), new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image(),new Image()];
objectImage[0].src = "Sprait/Object/кувшинка.png";
objectImage[1].src = "Sprait/Object/болота.png";
objectImage[2].src = "Sprait/Object/Star.png";
objectImage[3].src = "Sprait/Object/Coins.png";
objectImage[4].src = "Sprait/Object/grange.png";
objectImage[5].src = "Sprait/Object/Thorn/Up.png";
objectImage[6].src = "Sprait/Object/Thorn/Down.png";
objectImage[7].src = "Sprait/Object/Thorn/Left.png";
objectImage[8].src = "Sprait/Object/Thorn/Right.png";

const  canvas  = document.getElementById("CANVAS");
const  ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 1000;    
    