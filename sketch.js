const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup()
{
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, height, 1200, 10);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810, 160, 70, 70);

    pig1 = new Pig(810, 350);
    pig2 = new Pig(810, 220);

    Log1 = new Log(800, 260, 300, PI/2);
    Log2 = new Log(800, 180, 300, PI/2);
    Log3 = new Log(750, 90, 150, PI/7);
    Log4 = new Log(870, 90, 150, -PI/7)

    Bird1 = new Bird(100, 100);
}

function draw()
{
    background(0);
    Engine.update(engine);
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
  
    pig1.display();
    pig2.display();

    Log1.display();
    Log2.display();
    Log3.display();
    Log4.display();

    Bird1.display();
}