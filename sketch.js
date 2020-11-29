//Class-33: Plinko Game - II

//Create Namespaces
const {Engine, World, Bodies, Body} = Matter;

//Create variables
var myengine, myworld;

var gameState = "start";
var ground;
var particle;

//Creating arrays
var plinkos = [];
var divisions = [];

//Specify division height
var divisionHeight = 180;

var score = 0;
var turn = 0;

function setup() {
  createCanvas(400,500);
  
  myengine = Engine.create(); //Create physics engine
  myworld = myengine.world; //Create physics world from engine

  ground = new Ground(200,480,400,20);

  //console.log(width, height);

  //Creating multiple divisions at the bottom of the screen
  for (let d = 0; d <= width; d += 80) {
    divisions.push(new Division(d, height - divisionHeight/2, 10, divisionHeight));
  }

  //Creating plinkos - I
  for (var o = 45; o <= width - 50; o += 50) {
    plinkos.push(new Plinko(o, 50));
  }

  //Creating plinkos - II
  for (var p = 20; p <= width; p += 50) {
    plinkos.push(new Plinko(p, 100));
  }

  //Creating plinkos - III
  for (var q = 45; q <= width - 50; q += 50) {
    plinkos.push(new Plinko(q, 150));
  }

  //Creating plinkos - IV
  for (var r = 20; r <= width; r += 50) {
    plinkos.push(new Plinko(r, 200));
  }

  //Creating plinkos - V
  for (var s = 45; s <= width - 50; s += 50) {
    plinkos.push(new Plinko(s, 250));
  }

}

function draw() {
  background(221, 220, 250);  

  Engine.update(myengine); //Update to physics engine

  ground.display();

  //Display divisions, plinkos & particles
  for (let i = 0; i < divisions.length; i++) {
    divisions[i].display();
  }

  for (let j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  if(particle != null) {
    //Display Particles on the screen
    particle.display();

    //Check if the particles crosses the border line
    if(particle.body.position.y > 350){
  
      //Assign score based on the division
      if (particle.body.position.x < 160) {
        score += 500;
        particle = null;
      } else if (particle.body.position.x > 160 && particle.body.position.x < 320) {
        score += 400;
        particle = null;
      } else if (particle.body.position.x > 320 && particle.body.position.x < 360) {
        score += 100;
        particle = null;
      }

      //Move to end state
      if (turn === 5){
        gameState = "end";
      }

    }

  }

  //Display Score
  textSize(20);
  textFont("Trebuchet MS");
  text("Score : "+score, 20, 20);

  textSize(16);
  text("500", 25, 400);
  text("500", 110, 400);
  text("400", 185, 400);
  text("400", 270, 400);
  text("200", 350, 400);

  //Display line
  if (gameState === "play"){
    strokeWeight(3);
    stroke("green");
    line(20,300,380,300);
  }

  //Display info
  if (gameState === "end"){
    textSize(25);
    text("GAME OVER", 130, 310);
  }
  
}

//Create new particles when mouse pressed
function mousePressed() {
  console.log("Event Triggered!!");
  if(gameState === "start") {
    particle = new Particle(mouseX, 10, 15, 15);
    turn++;
  }
}