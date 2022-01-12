  
var towerImg, tower;
var doorImg, door, doorsGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  ghostImg = loadImage("ghost-standing.png");

}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  tower.scale = 10
  
  doorsGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.9 ;
  ghost.addImage("ghost", ghostImg);
}


function draw() {
  background(255);
 
  
  if (gameState === "play") {
    
    if(keyDown("LEFT_ARROW")){
        ghost.x = ghost.x - 3;
       // write a code to move left when left arrow is pressed
    }
    
    if(keyDown("RIGHT_ARROW")){
    ghost.x = ghost.x + 3;
    // write a code to move left when right arrow is pressed
    }
   
    if(keyDown("SPACE")){
    ghost.velocityY = -10;
    // write a code to move up when space arrow is pressed
    }
  
  
  if(tower.y > 400){
    tower.y = 300
  } 
      //write a condition for infinte scrolling tower

     ghost.velocityY = ghost.velocityY + 0.8;
      spawnDoors();

  
//write a code to make invisibleBlockGroup collide with ghost destroy the ghost and make gamestate to end.
     
    if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
      ghost.destroy()
      gameState = "end"
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = door.width;
    invisibleBlock.height = 1;
    //add the random function
    door.x = Math.round(random(120,400)); 
    invisibleBlock.x = door.x
    door.addImage(doorImg);
    
    door.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //change the depth of the ghost and door
    
     
ghost.depth = door.depth;
    ghost.depth =1;
    
    //assign lifetime for the  door, climber and invisible block

  door .lifetime = 500;
    invisibleBlock.lifetime = 800;
    //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are door, climber and invisible block
    
    doorsGroup.add(door);
    invisibleBlock.debug = false;
    invisibleBlockGroup.add(invisibleBlock);
  }
}

