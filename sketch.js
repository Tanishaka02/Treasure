var bgImg;
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;



function preload() {
    //load the images here
    bgImg=loadImage("add image/garden.png");
    catImg1=loadAnimation("images/cat1.png");
    mouseImg1=loadAnimation("image/mouse1");
    catImg2=loadAnimation("image/cat2.png", "image/cat3.png");
    mouseImg2=loadAnimation("image/mouse2.png","image/mouse3.png");
    catImg3=loadAnimation("image/cat4.png");
    mouseImg3=loadAnimation("image/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.addAnimation("catSleeping",catImg1);
    cat.scale = 0.2;

    mouse=createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouseImg1);
    mouse.scale=0.15;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    
    if(cat.x - mouse.x<(cat.width - mouse.width)/2){
      cat.velocity.X=0
      cat.addAnimation("catLastImage",catImg3);
      cat.x=300;
      cat.changeAnimation("catLastImage");
      mouse.addAnimation("mouseLastImage",mouseImg3);
      mouse.scale=0.5;
      mouse.changeAnimation("mouseLastImage");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.frameDelay=25;
    mouse.changeAnimation("mouseTeasing");
  }
if(keyCode === LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
}


}
