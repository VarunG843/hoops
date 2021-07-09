const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var s1
var s2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  s1 = new Ground (300, 350, 10, 60);
  s2 = new Ground (250, 350, 10, 60);


  b1 = createImg("right.png")
  b1.position(220,30)
  b1.size(50,50)
  b1.mouseClicked(hforce)

  b2 = createImg("up.png")
  b2.position(20,30)
  b2.size(50,50)
  b2.mouseClicked(vforce)

var balloptions = {
  restitution: 1
}

  ball = Bodies.circle(200,200, 10, balloptions)
  World.add(world, ball);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  s1.show();
  s2.show();
  
ellipse(ball.position.x, ball.position.y, 10)

}

function hforce(){

  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.001, y:0})

}

function vforce(){

  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.001})

}

