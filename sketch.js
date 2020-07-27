
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var bob0,bob1,bob2,bob3,bob4,rope,rope2,rope3,rope4,rope5,roof1;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob0= new paper(300,300);
    bob1= new paper(280,300);
    bob2= new paper(260,300);
    bob3= new paper(240,300);
    bob4= new paper(220,300);
    rope= new Chain(bob0.body,roof1.body,-bobDiametre*2,0);
    rope2=new Chain(bob1.body,roof1.body,-bobDiameter*2,0);
    rope3=new Chain(bob2.body,roof1.body,-bobDiameter*2,0);
    rope4=new Chain(bob3.body,roof1.body,-bobDiameter*2,0);
    rope5=new Chain(bob4.body,roof1.body,-bobDiameter*2,0);
    roof1=new ground(260,200,200,20); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  
  bob0.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  rope.display();
  roof1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof1.display();
  drawSprites();
 
}



