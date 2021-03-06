class Hexagon {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage("polygon.png")
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);  
      fill("brown");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };
