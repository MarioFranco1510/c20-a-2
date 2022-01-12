var bg;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;
var astronaut;

function preload(){
bgImg = loadImage("./image/iss.png");
sleep = loadAnimation("./image/sleep.png");
brush = loadAnimation("./image/brush.png");
gym = loadAnimation("./image/gym11.png","./image/gym12.png");
eat = loadAnimation("./image/eat1.png","./image/eat2.png");
drink = loadAnimation("./image/drink1.png","./image/drink2.png");
move = loadAnimation("./image/move.png","./image/move.png","./image/move1.png","./image/move1.png");  
}


function setup() {
  createCanvas(800,600);
  bg = createSprite(400, 200,);
bg.addImage("bg",bgImg);
bg.scale = 0.20;


astronaut = createSprite(500,200);
astronaut.addAnimation("sleep",sleep);
astronaut.scale = 0.10;


}



function draw() {
  background(255,255,255);  
 


  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brush",brush);
    astronaut.changeAnimation("brush");
    astronaut.y = 350;
    astronaut.x = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY =0;
    
    }
    
    
    
    if(keyDown("DOWN_ARROW")){
      astronaut.addAnimation("gym",gym);
      astronaut.changeAnimation("gym");
      astronaut.y = 370;
      astronaut.x = 400;
      astronaut.velocityX = 0;
      astronaut.velocityY =0;
      }
      
    
      if(keyDown("LEFT_ARROW")){
        astronaut.addAnimation("eat",eat);
        astronaut.changeAnimation("eat");
        astronaut.y = 360;
        astronaut.x = 200;
        astronaut.velocityX = 0;
        astronaut.velocityY =0;
        }
        
    
        if(keyDown("RIGHT_ARROW")){
          astronaut.addAnimation("drink",drink);
          astronaut.changeAnimation("drink");
          astronaut.y = 350;
          astronaut.x = 400;
          astronaut.velocityX = 0;
          astronaut.velocityY =0;
          }
    
          if(keyDown("m")){
            astronaut.addAnimation("move",move);
            astronaut.changeAnimation("move");
            astronaut.y = 350;
            astronaut.x = 400;
            astronaut.velocityX = 1;
            astronaut.velocityY =1;
            }
  
            edges= createEdgeSprites();
            astronaut.bounceOff(edges);


  drawSprites();
  textSize(30);
  fill(255);
  text("Instrucciones:",10,100);


  
  textSize(17);
  fill(255);
  text("Flecha hacía arriba: cepillarse",10,200);
  text("Flecha hacía abajo: ejercitarse",10,220);
  text("Flecha hacía la izquierda: comer",10,240);
  text("Flecha hacía la derecha: bañarse",10,260);
  text("tecla m: moverse",10,280);

}