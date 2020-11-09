var bullet, wall;
var speed,thickness, weight;



function setup() {
  createCanvas(1600,400);

  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)

  bullet = createSprite(50,200,90,15)
  bullet.shapeColor = "brown"
  wall = createSprite(1300,200,thickness,height/2);

  bullet.velocityX = speed;


}

function draw() {
  background(255,255,255);  
  




if(bulletcollision(bullet,wall)){

  bullet.velocityX = 0;
  var damage = 0.5*weight *speed *speed/(thickness *thickness *thickness)
    
    
    
  
  if(damage > 10){
  
    wall.shapeColor = color(255,0,0)
  }
  
  if(damage < 10){
  
    wall.shapeColor = color(0,255,0)
  }
  
}

  
  
  
  drawSprites();

}

function bulletcollision(b1,w1){

  bulletRightEdge = b1.x + b1.width;
  wallLeftEdge = w1.x

  if(bulletRightEdge>=wallLeftEdge){
return true;

  }
  return false;
}