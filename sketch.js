var box 
function setup() {
  createCanvas(400,400);
  box =createSprite(100,100,10,10)

}

function draw() 
{
  background(30);
if (keyDown("left")){
  box.x =box.x -2
}

if (keyDown("right")){
  box.x =box.x +2
}

if (keyDown("down")){
  box.y =box.y +2
}

if (keyDown("up")){
  box.y =box.y -2
}
 drawSprites();
}




