
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var obj1;
var angle = 60;
var obj2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

   var obj1_options ={
     isStatic: true,
   }  

  obj1 = Bodies.rectangle(100,200,100,20,obj1_options);
  World.add(world,obj1);

  obj2 = Bodies.rectangle(100,200,10,20,obj1_options);
  World.add(world,obj2);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  Body.rotate(obj1,angle);
  push(); //captura a nova configuração
  translate(obj1.position.x,obj1.position.y); //move as coordenadas
  rotate(angle); //angulo da rotação
  rect(0,0,100,20);
  pop(); //reverter para a configuração antiga

  Body.rotate(obj2,angle);
  push(); //captura a nova configuração
  translate(obj1.position.x,obj1.position.y); //move as coordenadas
  rotate(angle); //angulo da rotação
  rect(45,20,10,20);
  pop(); //reverter para a configuração antiga

  angle +=0.1; //permite ver a rotação
 
}

