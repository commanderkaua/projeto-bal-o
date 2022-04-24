var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, scene, sceneImage;
var balloon, blue_balloon, green_balloon, pink_balloon;

function preload(){
arrow = loadImage("arrow0.png");
scene = loadImage("background0.png");
bow = loadImage("bow0.png");   
  
}



function setup() {
  createCanvas(400, 400);
  
  scene = createSprite(0,0,400,400);
  scene.scale = 2.5
  scene.addImage("fundo", sceneImage)
  arrow = createSprite(350,220,50,10);
  arrow.addImage("flecha",arrowImage);
  arrow.scale = 0.5;
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  ground.addImage("fundo",groundImage);
}

function draw() {
 background(0);
  // mover o chão
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //mover o arco
  bow.y = World.mouseY
  
   // soltar a flecha quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
  }
  
  //mude o valor do balão aleatório para 4
  
  if (World.frameCount % 100 == 0) {
   switch(Math.round(random(1,4))){
    case 1: 
    baloon.addImage(red_balloonImage);
    baloon.scale = 0.1;
    break;
    case 2:
      baloon.addImage(blue_balloonImage);
      baloon.scale = 0.1;
    break;
    case 3:
      baloon.addImage(green_balloonImage);
      baloon.scale = 0.1;
    break;
    case 4:
      baloon.addImage(pink_balloonImage);
      baloon.scale = 0.1;
    break;
    
  }}
  
  drawSprites();
  createArrow();
  redBalloon();
  blueBalloon();
  greenBalloon();
  pinkBalloon();
}


// criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  blue_balloon = createSprite(0,Math.round(random(200,300)),10,10); 
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.velocityY = 3;
  blue_balloon.scale = 0.1;
  blue_balloon.lifetime = 150;
}

function greenBalloon() {
  green_balloon = createSprite(0,Math.round(random(150,300)),10,10); 
  green_balloon.addImage(green_balloonImage);
  green_balloon.velocityY = 3;
  green_balloon.scale = 0.1;
  green_balloon.lifetime = 150;
}

function pinkBalloon() {
  pink_balloon = createSprite(0,Math.round(random(100,300)),10,10); 
  pink_balloon.addImage(pink_balloonImage);
  pink_balloon.velocityY = 3;
  pink_balloon.scale = 0.1;
  pink_balloon.lifetime = 150;
}

