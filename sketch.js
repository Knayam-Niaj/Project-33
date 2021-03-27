const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var gameState = "set";
var mainGS = "play"

var score = 0;
var scoreState = "no";
var attempts = 0;

var poles1 = []
var poles2 = []
var poles3 = []
var poles4 = []
var poles5 = []

var disk;


var goal1, goal2, goal3, goal4, goal5, goal6, goal7, goal8, goal9;

var ground, ground2;

var line;
var lines = []

function setup() {
  createCanvas(900,800);
  engine = Engine.create();
  world = engine.world;

  disk = new Disk(450, 50);  
  
 // disk = new Disk(350, 600)

  poleMake();
  goalMake();

  ground = new Ground(450, 790, 900, 20);
  ground2 = new Ground(450, 70, 900, 1);

  for(var x = 0; x<10; x++){
    lines.push(new Line(x*100, 700, 1, 150))
  }
}

function draw() {
  background("black");  

  textSize(30);
  text("SCORE: " + score, 10, 50);
  
  text("ATTEMPTS: " + attempts, 700, 50)

  goalShow();

  disk.display();

  poleShow();  

  ground.display();

  if(mainGS === "play"){

    if(attempts === 5){
      mainGS = "end";
    }

    for(var x = 0; x<10; x++){
      lines[x].display();
    }
  
    if(gameState === "set"){
     disk.body.position.x = mouseX;
     fill("white");
     text("move mouse to control disk, click to drop", 155, 50);
    }
  
    if(mouseDown()){
      ground2.remove();
      gameState = "fall";
    }
  
    if(gameState === "down"){
      fill("white");
      text("press space to reset", 250, 40);
    }
  
    scores();
  
    reset();
  } else {
    push();
      textSize(100);
      text("GAME OVER", 150, 400);
    pop();
  }
  
  

  push();
    fill("black");
    text("100", 425, 710);

    text("50", 335, 710);
    text("50", 535, 710);

    text("25", 235, 710);
    text("25", 635, 710);

    text("10", 135, 710);
    text("10", 735, 710);

    text("5", 35, 710);
    text("5", 835, 710);
  pop();

  
  Engine.update(engine);
}


function reset(){
  if(gameState === "down"){
    if(keyWentUp("space")){
      Matter.Body.setPosition(disk.body, {x: 450, y: 50})
      attempts = attempts+1;
      
      ground2.add();
      gameState = "set";
      scoreState = "no";
    }
  }
}


function scores(){
  
  if(scoreState === "no"){
    //100
    if(disk.body.position.x <= 500 && disk.body.position.x >= 400 && disk.body.position.y > 620){
      score = score + 100;
      scoreState = "yes";
      gameState = "down";
    }


    //50
    if(disk.body.position.x <= 400 && disk.body.position.x >= 300 && disk.body.position.y > 620){
      score = score + 50;
      scoreState = "yes";
      gameState = "down";
    }

    if(disk.body.position.x <= 600 && disk.body.position.x >= 500 && disk.body.position.y > 620){
      score = score + 50;
      scoreState = "yes";
      gameState = "down";
    }


    //25
    if(disk.body.position.x <= 300 && disk.body.position.x >= 200 && disk.body.position.y > 620){
      score = score + 25;
      scoreState = "yes";
      gameState = "down";
    }

    if(disk.body.position.x <= 700 && disk.body.position.x >= 600 && disk.body.position.y > 620){
      score = score + 25;
      scoreState = "yes";
      gameState = "down";
    }


    //10
    if(disk.body.position.x <= 200 && disk.body.position.x >= 100 && disk.body.position.y > 620){
      score = score + 10;
      scoreState = "yes";
      gameState = "down";
    }

    if(disk.body.position.x <= 800 && disk.body.position.x >= 700 && disk.body.position.y > 620){
      score = score + 10;
      scoreState = "yes";
      gameState = "down";
    }


    //5
    if(disk.body.position.x <= 100 && disk.body.position.x >= 0 && disk.body.position.y > 620){
      score = score + 5;
      scoreState = "yes";
      gameState = "down";
    }


    if(disk.body.position.x <= 900 && disk.body.position.x >= 800 && disk.body.position.y > 620){
      score = score + 5;
      scoreState = "yes";
      gameState = "down";
    }

  }
}
  


function goalMake(){
  //100
  goal1 = new Goal(450, 750, 100, 250);

  //50
  goal2 = new Goal(350, 750, 100, 250);
  goal3 = new Goal(550, 750, 100, 250);

  //25
  goal4 = new Goal(250, 750, 100, 250);
  goal5 = new Goal(650, 750, 100, 250);

  //10
  goal6 = new Goal(150, 750, 100, 250);
  goal7 = new Goal(750, 750, 100, 250);

  //5
  goal8 = new Goal(50, 750, 100, 250);
  goal9 = new Goal(850, 750, 100, 250);
}

function goalShow(){
  fill("yellow");
  goal1.display();

  fill("blue");
  goal2.display();
  goal3.display();

  fill("orange");
  goal4.display();
  goal5.display();

  fill("green");
  goal6.display();
  goal7.display();

  fill("teal");
  goal8.display();
  goal9.display();
}

function poleMake(){
  for(var i = 0; i<9; i++){
    poles1.push(new Pole(i*100+55, 500));
  }

  for(var j = 0; j<9; j++){
    poles2.push(new Pole(j*100+20, 400));
  }

  for(var q = 0; q<9; q++){
    poles3.push(new Pole(q*100+55, 300));
  }

  for(var w = 0; w<9; w++){
    poles4.push(new Pole(w*100+20, 200));
  }

  for(var e = 0; e<9; e++){
    poles5.push(new Pole(e*100+55, 100));
  }
}


function poleShow(){
  //bottom
  for(var i = 0; i<9; i++){
    poles1[i].display();
  }

  for(var j = 0; j<9; j++){
    poles2[j].display();
  }

  for(var q = 0; q<9; q++){
    poles3[q].display();
  }

  for(var w = 0; w<9; w++){
    poles4[w].display();
  }

  for(var e = 0; e<9; e++){
    poles5[e].display();
  }
}