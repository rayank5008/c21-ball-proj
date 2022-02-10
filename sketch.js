
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world

function preload()
{
	
}

function setup() {
	createCanvas(10000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ball = new Ball(100,600,20);

 ground= new Ground(400,700,800,20)

 leftSide= new Dustbin(560,620,20,120)
 bottom = new Dustbin(620,670,100,20)
 rightSide= new Dustbin(660,620,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine)

  ball.display()
  ground.display()
  leftSide.display()
  bottom.display()
  rightSide.display()
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:20, y:-20})
	}
}


