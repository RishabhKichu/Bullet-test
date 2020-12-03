var bullet, wall;

var speed, thickness, damage;

function setup() {
  createCanvas(1600, 400);
  speed = random(223, 321);
  thickness = random(22, 83);
  weight = random(30, 52);

  bullet = createSprite(50, 200, 30, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = rgb(80, 80, 80);
}

function draw() {
  background(0);

  if (bullet.x - wall.x > bullet.width / 2 + wall.width / 2) {
    bullet.velocityX = 0;
    var a = thickness * thickness * thickness;
    damage = (0.5 * weight * speed * speed) / a;
    console.log(damage);
  }
  if (damage > 10) {
    wall.shapeColor = "red";
  } else if (damage < 10) {
    wall.shapeColor = "green";
  }

  drawSprites();
}
