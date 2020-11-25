class Dustbin{
    constructor(x,y,width,height){
     var g = {
         isStatic:true
     }
     this.body=Bodies.rectangle(x,y,width,height,g)
     this.width=width;
     this.height=height;
     //  this.image = loadImage("dustbin.png")
     World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        rectMode(CENTER);
        fill("white")
        rect(position.x, position.y, this.width, this.height);
    }
}