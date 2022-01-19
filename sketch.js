const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1 ;




function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(800,300,400,20);


    box1 = new Box(700,280,70,70);
    box2 = new Box(770,280,70,70);
    box3 = new Box(840,280,70,70);
    box4 = new Box(910,280,70,70);

  
box5 = new Box(770,240,70,70);
 box6 = new Box(840,240,70,70);

box7 = new Box(810,200,70,70);



    polygon = new Hexagon(200,50,50,50);

    
    slingshot = new SlingShot(polygon.body,{x:200, y:50});
}

function draw(){
    background("black");
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box4.display();
    box7.display();

    box3.display();
    box5.display();
    

  box6.display();


    polygon.display();
    
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
      slingshot.attach(polygon.body)
    }

}
