class Drops {
    constructor(x,y) {
      var options = {
        isStatic:false,
        restitution:1,
        friction:2,
        density:1
      }
      this.body = Bodies.circle(x,y,5,options);
      this.radius = 5;
      this.rain = [];
      World.add(world, this.body);

      function update(){
        if(this.rain.position.y>height){
          Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
      }
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      fill("blue");
      ellipseMode(RADIUS);
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  }
