var car,wall
var speed,weight

function setup() {
  createCanvas(1600,400);
 speed=random(223,321);
  weight = random(30,52);
  thickness = random(22,83)
  
  car = createSprite(50, 200, 100, 50);
  wall = createSprite(1500, 200,thickness, height/2);
car.velocityX = speed;
 

}

function draw() {
  background("black");  

  if(wall.x - car.x < car.width/2 + wall.width/2){

     car.velocityX = 0;

     var deformation = 0.5*weight*speed*speed/22500

     if(deformation > 180){
       car.shapeColor = "red";

     }

     if(deformation < 100){
      car.shapeColor = "green";

    }

    if(deformation < 180 && deformation > 100){
      car.shapeColor = "yellow";

    }
      console.log(deformation);
 }
  car.depth=wall.depth+1
  drawSprites();
}
