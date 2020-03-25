//created a class(blueprint)
class Ground{
    //gave all the coordinates for the blueprint and added it to world
  constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;
      World.add(world, this.body);
    }
    //displaying the blueprint
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("black");
     rect(pos.x, pos.y, this.w,this.h);
    }
  };