var cat, catI, catA, catA2
var mouse, mouseI, mouseA, mouseA2;
var bg
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    catI = loadAnimation("images/cat1.png");
    catA = loadAnimation("images/cat2.png", "images/cat3.png");
    catA2 = loadAnimation("images/cat4.png");

    mouseI = loadAnimation("images/mouse1.png");
    mouseA = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseA2 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(900, 600,20,20);
    cat. addAnimation("catSleep",catI);
    cat. scale = 0.15;

    mouse = createSprite(100, 600, 20,20);
    mouse. addAnimation("mouse1",mouseA2);
    mouse. scale = 0.15;
    
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catA2);
        cat.x =200;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouseI);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");

    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
     
    cat. velocityX = -5;
    cat. addAnimation("catRuning", catA);
    cat. changeAnimation("catRuning");

    mouse.addAnimation("mouseS",mouseA);
    mouse.changeAnimation("mouseS");
  }

}
