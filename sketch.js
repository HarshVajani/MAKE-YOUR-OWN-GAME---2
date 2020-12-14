var police,police_Img;
var Rose,Rose_Img;
var key,key_Img;
var background,backgroundImg;
var gameState="serve";
var coin,coin_Img;

function preload(){
  backgroundImg=loadImage("Subway Background.jpg");
  Rose_Img=loadImage("Rose.jpg");
  coin_Img=loadImage("COIN.jpg");
  key_Img=loadImage("KEY.jpg");
}
function setup() {
  createCanvas(800,800);
var police=createSprite(400,750,30,30);
var Rose=createSprite(400,700,30,30);
//var coin=createSprite(10,150,20,20);
//var key=createSprite(400,300,20,20);
background = createSprite(0,0,600,600); 
background.addImage(backgroundImg); 
//background.x=background.width/2;
background.scale=2
Rose.addImage("Rose",Rose_Img);
}

function draw() {
  if(gameState==="serve"&& keyDown("space")){
    gameState="play";
  }
//background(255,255,255);  
if(gameState==="play"){
  //background.velocityX=-2;
  background.velocityY=-3;
  if (background.y < 0){ 
    background.y = background.height/2;
   }
   spawnCoins();
   spawnKeys();
}
  // moving ground background.velocityX = -3 
  drawSprites();

}
function spawnCoins(){
  if (frameCount % 60 === 0) { 
    coin = createSprite(10,750,40,10); 
    coin.y = Math.round(random(10,60));
    coin.addImage("coin",coin_Img);
      coin.scale = 0.5;
       coin.velocityY = -3; 
       //assign lifetime to the variable coin.lifetime = 134;
}
}

function spawnKeys(){
  if (frameCount % 60 === 0) { 
    key = createSprite(500,200,10,40); 
    key.y = Math.round(random(10,60));
    key.addImage("key",key_Img);
    key.scale = 0.5;
       key.velocityY= -3; 
       //assign lifetime to the variable key.lifetime = 134;
}
}