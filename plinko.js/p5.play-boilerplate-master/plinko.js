class Plinko {
    constructor(x,y,radius){
    var Options = {          
          "isStatic":false,
           "restitution":0.5,
           "density":0.1
    }

this.body = Bodies.circle(x,y,radius,Options);
this.x = x;
this.y = y; 
this.radius = radius ;
World.add(world,this.body)

}
display(){
var pos = this.body.position
push();
translate(this.body.position.x,this.body.position.y);
fill(240,250,255);
ellipseMode(RADIUS)
ellipse(pos.x,pos.y,this.radius*1.2,this.radius*1.2)
pop();

}
}