class Umbrella {
    constructor(x,y) {
      var options = {
        isStatic:false,
        restitution:1,
        friction:0.1,
        density:1
      }
      this.body = Bodies.circle(x,y,30,options);
      this.image = loadImage("Man.jpeg");
      this.radius = 30;
      World.add(world, this.body);
    }
    display(){
      image(this.image,100,200,500,800);
    }
  }
