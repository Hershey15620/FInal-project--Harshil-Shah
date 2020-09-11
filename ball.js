class Ball{
    constructor(){
        var options= {
          restitution:0.5,
          friction:0.3,
          density: 1.5
        }
    this.image= loadImage("Images/ball.png")
    this.body= Bodies.circle(400,300,20,options)
    this.radius=20;
    World.add(MyWorld,this.body);
    }

    display(){
        var pos=this.body.position
        var angle= this.body.angle
        push ()
        translate(pos.x,pos.y)
        rotate (angle)
        imageMode(CENTER)
        image (this.image, 0,0)
        pop ()
    }




}