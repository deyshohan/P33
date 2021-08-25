const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies;

var bgIMG;
var character1, characterIMG;
var InvisGround; 
var SnowFall = [];
var engine,world;
var i = 0;

function preload() {
bgIMG = loadImage("snow1.jpg");
characterIMG = loadImage("spongebob.png");
}

function setup() {
  createCanvas(1200,800);
  engine = Matter.Engine.create(); 
  world = engine.world;  

  character1 = createSprite(600, 600, 50, 50);
  character1.addImage(characterIMG);
  character1.scale = 0.2

 InvisGround = createSprite(600,790,1200,10);
 InvisGround.visible = false;

  if(frameCount%150 === 0){
    for(i = 0; i < 30; i++){
        SnowFall.push(new Snow(random(10,1190),random(-300,0)));
    }
  }

}

function draw() {
  background(bgIMG);  

  Engine.update(engine);

  if(keyDown("Space")) {
    character1.velocityY = - 9;
  }
    character1.velocityY = character1.velocityY + 1;

    character1.collide(InvisGround)

    for(i = 0; i < 10; i++) {
      SnowFall[i].display();
      SnowFall[i].updateY();
    }
    

    
  drawSprites();

}