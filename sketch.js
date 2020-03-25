//created boxes and ground and gave a short name for matter.engine,matter.world,matter.bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var box1,box2,box3,box4;
var box5,box6,box7,box8;
var box9,box10,box11,box12;
var ground;



function setup() {
  
  //created a canvas 
  createCanvas(800,400);
  
  //created a engine and created a world in it
  engine = Engine.create();
  world = engine.world;

  //gave coordinates for all the boxes from which we made castle
  box1 = new Box(400,335,200,100);
  box2 = new Box(245,310,100,250);
  box3 = new Box(555,310,100,250);
  box4 = new Box(150,325,80,150);
  box5 = new Box(650,325,80,150);
  box6 = new Box(400,185,150,190);
  box7 = new Box(245,155,70,50);
  box8 = new Box(555,155,70,50);
  box9 = new Box(400,75,210,20);
  box10 = new Box(330,55,40,50);
  box11 = new Box(470,55,40,50);
  box12 = new Box(400,55,40,50);
  
  //created a ground
  ground = new Ground(400,410,1000,50);
}

function draw() {
  //added a color to background
  background(225);  
 
  //updated all the changes we did in the engine
  Engine.update(engine);
 
 //displayed all the boxes and ground
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  ground.display();

  //created two circles at the sides of castle
  ellipse(245,105,50,50);
  ellipse(555,105,50,50);
  
  //said the computer to draw all the sprites
  drawSprites();
}