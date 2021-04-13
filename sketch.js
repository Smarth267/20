var bgImg;
var cat , mouse;
var cat1, cat2, cat3;
var mouse1,mouse2,mouse3;
function preload() {
    //load the images here
    bgImg = loadImage ("images/garden.png");
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png","images/cat3.png");
    cat3 = loadAnimation("images/cat4.png");
    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    cat =createSprite(800,600,20,20);
    cat.scale=0.25;
    cat.addAnimation("cat1",cat1);
    mouse=createSprite(200,600,20,20);
    mouse.scale=0.25;
    mouse.addAnimation("mouse1",mouse1)
    mouse.setCollider("rectangle",0,0,1000,1000);
    

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.addAnimation("cat3",cat3);
      cat.changeAnimation("cat3",cat3)
        cat.velocityX=0;
        mouse.addAnimation("mouse3",mouse3)
        mouse.changeAnimation("mouse3",mouse3);

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){
mouse.addAnimation("mouse2",mouse2)
mouse.changeAnimation("mouse2");
mouse.frameDelay = 25;
cat.addAnimation("cat2",cat2)
    cat.changeAnimation("cat2");
    cat.velocityX=-5;

  }
 

  }
