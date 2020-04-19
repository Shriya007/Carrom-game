var wall1;
var wall2;
var wal3;
var wall4;
var inner1;
var inner2;
var inner3;
var inner4;
var coin1;
var coin2;
var coin3;
var coin4;
var coin5;
var coin6;
var coin7;
var coin8;
 var coin9;
var trigger;


function setup() {
  createCanvas(400,400);


  wall1 = createSprite(200, 50, 250, 10);
  wall1.shapeColor = "white";
  wall2 = createSprite(200, 350, 250, 10);
  wall2.shapeColor = "white";
  wall3 = createSprite(350, 200, 10, 250);
  wall3.shapeColor = "white";
  wall4 = createSprite(50, 200, 10, 250);
  wall4.shapeColor = "white";
  
  inner1 = createSprite(200, 65, 250, 3);
  inner1.shapeColor = "white";
  inner2 = createSprite(200, 335, 250, 3);
  inner2.shapeColor = "white";
  inner3 = createSprite(335, 200, 3, 250);
  inner3.shapeColor = "white";
  inner4 = createSprite(65, 200, 3, 250);
  inner4.shapeColor = "white";
  
   coin = createSprite(200, 200, 10, 10);
   trigger = createSprite(200, 334, 20, 20);
  coin .scale = 0.45;
  trigger.scale = 0.7;



}

function draw() {
  background("white");
  if (keyDown(UP_ARROW)) {
    trigger.velocityX = 0;
    trigger.velocityY = -5;
  }
  if (keyDown(DOWN_ARROW)) {
    trigger.velocityX = 0;
    trigger.velocityY = 5;
  }
  if (keyDown(LEFT_ARROW)) {
    trigger.velocityX = -5;
    trigger.velocityY = 0;
  }
  if (keyDown(RIGHT_ARROW)) {
    trigger.velocityX = 5;
    trigger.velocityY = 0;
  }
  
  coin.bounceOff(wall1);
  coin.bounceOff(wall2);
  coin.bounceOff(wall3);
  coin.bounceOff(wall4);
  
  trigger.bounceOff(wall1);
  trigger.bounceOff(wall2);
  trigger.bounceOff(wall3);
  trigger.bounceOff(wall4);
  
  if (trigger.bounce(coin)) {
  
  if (keyDown(UP_ARROW)) {
    coin.velocityX = 0;
    coin.velocityY = -1;
  }
  if (keyDown(DOWN_ARROW)) {
    coin.velocityX = 0;
    coin.velocityY = 1;
  }
  if (keyDown(LEFT_ARROW)) {
  coin.velocityX = -1;
    coin.velocityY = 0;
  }
  if (keyDown(RIGHT_ARROW)) {
    coin.velocityX = 1;
    coin.velocityY = 0;
  }
  }
  if ((coin.x < 70 && coin.y < 70) || (coin.x > 332 && coin.y < 68) || 
        (coin.x < 69 && coin.y > 328) || (coin.x > 327 && coin.y > 330) ){
          text("YOU WIN!!!",162,200);
    }
    
    createEdgeSprites();
    if(trigger.bounce(edges)){
      trigger.x = 200;
      trigger.y = 334;
    }
    
  drawSprites();
}