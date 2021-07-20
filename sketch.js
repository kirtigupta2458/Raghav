
var gameState=1
var score=0
var lives=3
var wall1, wall2, wall3,wall4, wall5, wall6, wall7, wall8, wall9, wall10

function preload(){
t1=loadAnimation("tank1.png");
t2=loadAnimation("tank2.png");
t1a=loadAnimation("flippedtank1.png")
t2a=loadAnimation("flippedtank2.png")
bg=loadImage("maze.png");

}
function setup(){
    createCanvas(displayWidth-50, displayHeight-200);
   
    tank1= createSprite(100,200,30,30);
    tank2= createSprite(300,200,30,30);
    wall1=createSprite(650,35,displayWidth-60,20)
    wall2=createSprite(650,540,displayWidth-60,20)
    wall3=createSprite(30,350,20,500)
    wall4=createSprite(105,95,190,20)
    wall5=createSprite(100,130,20,100)
    
    wall1.bounceOff(tank1);


    tank1.addAnimation("tank1",t1);
    tank1.addAnimation("tank1a",t1a)
    tank1.scale=0.08
    tank2.addAnimation("tank2",t2);
    tank2.addAnimation("tank2a",t2a)
    tank2.scale=0.15
    
}
function draw(){
   if(gameState===1){ 
    background(0)

    background("black")

    textSize(60)
    stroke("white")
    fill("white")
    textAlign(CENTER)
    text("JUNGLE MAZE GAME",750,160)
    textSize(30)
    fill("yellow")
    text("RULES FOR PLAYING THE GAME ",750,270)
    text("1. Use the arrow keys to move the hunter",750,350)
    text("2. Press space key to shoot",750,400)
    text("3. There are secret doors to collect the treasure",750,450)
    text("4. Player can hit the spiders but not the anvils",750,500)
    text("5. Kill all the spiders and collect all treasures to win the game",750,550)
    text("6. Yellow line is the finish line",750,600)

    fill("BLUE")
    text("PRESS ENTER TO START THE GAME",750,670)

    

    if(keyDown("enter")){
      gameState = 2
    }



   }


   if(gameState===2){
    background(bg); 
    drawSprites();
  
    textSize(25)
    stroke("white")
    fill("white")
    textAlign(CENTER)
    text("Lives = "+lives,80,660)
    text("Scores = "+scores,1420,660)


   
   }

   if(gameState===3){

    textSize(70)
    stroke("green")
    fill("green")
    textAlign(CENTER)
    text("YOU WON",750,400)



   }

   if(gameState===4){

    textSize(70)
    stroke("red")
    fill("red")
    textAlign(CENTER)
    text(" GAME OVER",750,400)
   }
   
}
    
function bullets(){
    bullet = createSprite(hunter.x,hunter.y-5,10,10)
    bullet.addAnimation("bullets",bullet1Img)
    bullet.scale = 0.05
    bullet.velocityX = 10
    bulletsGroup.add(bullet)
  }
