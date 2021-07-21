var box;


function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  
  

  
}

function draw() 
{
   background("white");

  if (keyIsDown(RIGHT_ARROW))  {
    
    background("purple");

  }

    if (keyIsDown(LEFT_ARROW))  {
  
    background("indigo");

    
  }
 
    if (keyIsDown(UP_ARROW))  {
   
      background("blue");

  }

  if (keyIsDown(DOWN_ARROW))  {
    
    background("green");

  }

  drawSprites();
}




