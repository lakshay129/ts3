const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5;
var polygon1;
var ground1,ground2;
var string;
var bg;
var score=0;

function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;


 
  
    polygon1=new polygon(200,500,50,50)

    box1 = new Box(720,250,30,50,PI);
    box2 = new Box(720,300,30,50,PI);
    box3 = new Box(720,350,30,50,PI);
    box4 = new Box(720,400,30,50,PI);
    box5 = new Box(720,450,30,50,PI);
    //
    box6 = new Box(680,250,30,50,PI/2);
    box7 = new Box(680,300,30,50,PI/2);
    box8 = new Box(680,350,30,50,PI/2);
    box9 = new Box(680,400,30,50,PI/2);
    box10 = new Box(680,450,30,50,PI/2);
    //
    //box11
    box12 = new Box(640,300,30,50,PI/2);
    box13 = new Box(640,350,30,50,PI/2);
    box14 = new Box(640,400,30,50,PI/2);
    box15 = new Box(640,450,30,50,PI/2);
    //
    //box16
    box17 = new Box(950,200,30,50,PI/2);
    box18 = new Box(950,250,30,50,PI/2);
    box19 = new Box(950,300,30,50,PI/2);
    box20 = new Box(950,350,30,50,PI/2);
    //   
    //box21
    box22= new Box(1000,200,30,50,PI/2);
    box23 = new Box(1000,250,30,50,PI/2);
    box24 = new Box(1000,300,30,50,PI/2);
    box25 = new Box(1000,350,30,50,PI/2);
    //
    //box16
    
    box27 = new Box(790,300,30,50,PI);
    box28 = new Box(790,350,30,50,PI);
    box29 = new Box(790,400,30,50,PI);
    box30 = new Box(790,450,30,50,PI);

    ground1 = new Ground(700,500,300,20);
    ground2 = new Ground(950,400,200,20);

    string= new wire(polygon1.body,{x:200, y:500});
    getTime(); 
}

function draw(){
    if(bg){

    background(bg);
    Engine.update(engine);

    fill ("red");
    textSize(45);
    text("score ="+score,300,300);
    
    polygon1.display();

    ground1.display();
    ground2.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    //
    
    box6.display();
    box7.display();
    box8.display();
    box9. display();
    box10.display();
    //
    //box11
    
    box12. display();
    box13 . display();
    box14 . display();
    box15 . display();
    //
    //box16
    box17 . display();
    box18 . display();
    box19 . display();
    box20 . display();
    //
    //box21
    box22 . display();
    box23 . display();
    box24  . display();
    box25  . display();
    //
    //box26
    box27 . display();
    box28  . display();
    box29  . display();
    box30  . display();



    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box27.score();
    box28.score();
    box29.score();
    box30.score();
    


    string.display();    
    }
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    string.fly();
    
}

function keyPressed(){
    if(keyCode===32){
    string.attach(polygon1.body);
   }
}  
    async function getTime(){
    var response =await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var rjson = await response.json();
    var st =rjson.datetime;
    var ht=st.slice(11,13);
    
    if(ht>=6 && ht<=18){
        bg="white";
    } else{
        bg="black";
    }

    }
 
