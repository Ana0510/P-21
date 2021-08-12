
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ball_options;
var ground, leftG, rightG;


function setup() 
{
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

    ball_options={
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
    ball = Bodies.circle(100,10,20,ball_options);
	World.add(world, ball);
  
  ground = new Ground(width/2, 670, width, 20);
  leftG = new Ground(1100, 600, 20, 120);

}


function draw() 
{
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background(0);
  Engine.run(engine);

  push ();
  ellipse(ball.position.x,ball.position.y,20);
  pop ();
               
  ground.display();
  
  drawSprites();
 
}



