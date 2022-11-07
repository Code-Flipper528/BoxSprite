var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
//LEFT_ARROW- UP_ARROW- DOWN_ARROW+
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x + 5;
  }

  drawSprites();
}




