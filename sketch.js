var boy, boyImg;
var girl ;
var bg ;

var gameState = "WAIT";



function preload()
{
 bg = loadImage("image/space.png");
boyImg = loadImage("image/boy.png");
 
}

function setup()
{
  createCanvas(1550,700);

  boy = createSprite(59,81,10,10);
  boy.addImage(boyImg);
boy.scale = 0.2;


 girl = createSprite(59,300,10,10);
girl.scale = 0.2;
//girl.setAnimation("kidportrait_15_1");


}

function draw() {
  
 

if(gameState === "WAIT")
{
  background("white");
  console.log("I'm in WAIT")

  //textColor("Black");
  textSize(20);
  text("A game about space and space crafts. In this game, you are travelling in space in a space craft and as you move further you see different objects in the universe like the meteoroids surrounding you. They are going to hit your space craft and your job is to avoid them hitting your space craft. If any of them hit the space craft it will crash and the player will die. As you go further and further, the levels will be challenging and if you succeed in the levels you will unlock different useful gadgets and earn more and more points.", 50,50);
 

  if (keyDown(UP_ARROW))
  {
    gameState = "PLAY";
  }
  
}
else if(gameState === "PLAY")
{
background(bg);
boy.visible = false;
console.log("I'm in PLAY");
} 
else
{
  console.log("game over")
}
 
 
 
 drawSprites(); 
}
