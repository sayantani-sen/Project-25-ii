const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var boxSide1, boxSide2, boxSide3;
var ground;

// function preload()
// {
	
// }

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ball = new Ball(100,680,35,35);

	boxSide1 = new Dustbin(700,660,10,60);
	boxSide2 = new Dustbin(660,660,10,60);
	boxSide3 = new Dustbin(655,685,80,10);

	ground = new Ground(400,695,800,10);

	Engine.run(engine);
  
}


function draw() {
  background(220);

  ball.display();

  boxSide1.display();
  boxSide2.display();
  boxSide3.display();

  ground.display();
  
  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:4,y:-3});
	}
}




