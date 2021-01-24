const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var lineDown, lineLeft, lineRight;
var ground, paper;

function preload()
{
	
}

function setup() {
	createCanvas(1366, windowHeight);

	engine = Engine.create();
	world = engine.world;

	//Creating the objects
	ground = new Ground(windowWidth / 2, height - 30, width, 20);

	lineDown = new Box(800, windowHeight - 50, 140, 20);
	lineLeft = new Box(720, windowHeight - 100, 20, 120);
	lineRight = new Box(880, windowHeight - 100, 20, 120);

	paper = new Paper(80, windowHeight - 90, 40, 40);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
    background(0);

	ground.display();


	paper.display();
	paper.update();

	lineLeft.display("red","black");
	lineRight.display("red","black");
	lineDown.display("red","black");

	drawSprites();
 
}
