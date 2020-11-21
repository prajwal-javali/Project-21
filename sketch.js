var wall, wall, speed, weight;

function setup() {
  createCanvas(1000,200);
  speed = random(55, 90);
  weight = random(400, 1500);

  bullet = createSprite(20, 100, 30, 30);
  bullet.shapeColor = "white";

  wall = createSprite(800, 100, 30, 80);
  wall.shapeColor = "gray";

  bullet.velocityX = speed;
}

function draw() {
  background("black");
if (wall.x - bullet.x <= bullet.width/2 + wall.width/2) {
  bullet.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed / 22500;
  if (deformation > 180) {
    wall.shapeColor = "red";
  }
  if (deformation < 100) {
    wall.shapeColor = "green";
  }
}
  drawSprites();
}