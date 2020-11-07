class polygon{
    constructor(x,y,width,height,angle){
        var options={
            restitution:0.4,
            isStatic:false,
            density:1,
            friction:1
            
        }
        
        this.x=x;
        this.y=y;
        this.height=height;
        this.width=width;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.image=loadImage("polygon.png")
        World.add (world,this.body);

    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate (angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop ();
    }
}