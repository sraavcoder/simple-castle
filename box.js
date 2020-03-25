//created a class(blueprint)
class Box{
    //gave all the coordinates for the blueprint and added it to world
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.box = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       World.add(world,this.box);
    }
    //displaying the blueprint
    display(){
    
        var pos =this.box.position;
        rectMode(CENTER);
        fill(0);
        rect(pos.x,pos.y,this.width,this.height);
    }
}