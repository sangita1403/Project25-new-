
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var engine, world;
var paper,dustbin1,dustbin2,dustbin3;
function preload()
{
	dustbinImage=loadImage("dustbin.png")
}

function setup() {
	 createCanvas(1600, 500);
	 engine = Engine.create();
   world = engine.world;
	 ground=new Ground(600,490,2000,20)
	 paper=new Paper (1500,480,38)
	 dustbin1 = new Dustbin(480,375,20,210)
   dustbin2 = new Dustbin(270,375,20,210)
   dustbin3 = new Dustbin(375,470,190,20)

	Engine.run(engine)
}


function draw() {
  rectMode(CENTER);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  background(225);
  image(dustbinImage,275,200,200,280)
  paper.display();
  ground.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:-85,y:-85})
	 }
   }

