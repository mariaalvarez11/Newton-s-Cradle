
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob1;
var bob2;
var bob3;
var bob4;

var chain1;
var chain2;
var chain3;
var chain4;

function setup() {
	canvas = createCanvas(windowWidth/2, windowWidth/1.5);

	engine = Engine.create();
	world = engine.world;

  bob1 = new Pendulum(340, 450, "pink");
  bob2 = new Pendulum(400, 450, "purple");
  bob3 = new Pendulum(460, 450, "orange");
  bob4 = new Pendulum(520, 450, "blue");

  chain1 = new Chain(bob1.body, {x:340, y:200});
  chain2 = new Chain(bob2.body, {x:400, y:200}); 
  chain3 = new Chain(bob3.body, {x:460, y:200}); 
  chain4 = new Chain(bob4.body, {x:520, y:200});  

  roof = new Roof(290,440,290,10);

	Engine.run(engine);
  
}


function draw() {
  background("black");
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  drawSprites();
}

function mouseDragged() {
    Matter.Body.setPosition(bob1.body, {x: mouseX, y: mouseY});
}

