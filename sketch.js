var path,boat,cash,diamonds,jwellery,sword;
var pathImg,boatImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("background.jpeg");
  boatImg = loadImage("ship-1.png");
  cashImg = loadImage("kisspng.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("coin.png");
  swordImg = loadImage("Pngtree.png");
  gover = loadImage("gameoverr.png");
}

function setup(){
  
  createCanvas(400,600);
// 
  
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//
boat = createSprite(70,480,20,20);
boat.addImage(boatImg);
boat.scale=0.15;
  

cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boat.x = World.mouseX;
  
  edges= createEdgeSprites();
  boat.collide(edges);
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boat)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boat)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(jwelleryG.isTouching(boat)) {
      jwelleryG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(swordGroup.isTouching(boat)) {
        gameState=END;
       
        
        cashG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        swordGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jwelleryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
        

          over = createSprite(180,280,20,20);
          over.addAnimation("gameover",gover);
          over.scale=0.15;

       
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("TESORO: "+ treasureCollection,10,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.03;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.04;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale= 0.03 ;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.05;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}
