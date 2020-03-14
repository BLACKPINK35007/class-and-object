const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,ground,pig1,pig2,Log1,Log2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(100,300,50,50);
    box2 = new Box(200,350,50,50);
    ground = new Ground(200,380,400,20);
    pig1 = new Pig(150,350);
    Log1 = new Log(150,200,PI/2,200);
    box4 = new Box(100,180,50,50);
    box3 = new Box(200,180,50,50);
    pig2 = new Pig(150,180);
    Log2 = new Log(150,150,PI/2,200);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    Log1.display(); box1.display();
    box3.display();
    box4.display();
    pig2.display();
    Log2.display();

}