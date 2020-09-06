const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var canvas;
var boy;
var maxDrops = 1;
var drop = [];
var thunder;
var rain;

function preload() {
    thunderImg = loadImage("ThunderImg.jpg");
    thunderImg2 = loadImage("ThunderImg2.jpg");
    thunderImg3 = loadImage("ThunderImg3.jpg");
}

function setup(){
   canvas = createCanvas(800,1000);
   engine = Engine.create();
   world = engine.world;
   boy = new Umbrella(900,500);
}

function draw(){
    background(0);
    Engine.update(engine);


    for(var i=0;i<maxDrops;i++){
        drop.push(new Drops(random(0,900),random(0,900)));
    }

    boy.display();

    if (frameCount % 120 === 0) {
        thunder = createSprite(random(100, 1000), 0, 100, 100);
        var rand = Math.round(random(1,3));
        switch(rand){
            case 1: thunder.addImage(thunderImg);
            break;
            if(frameCount%150 === 0){
                thunderImg.visible = false;
            }
            case 2: thunder.addImage(thunderImg2);
            break;
            if(frameCount%150 === 0){
                thunderImg2.visible = false;
            }
            case 3: thunder.addImage(thunderImg3);
            break;
            if(frameCount%150 === 0){
                thunderImg3.visible = false;
            }
        }
        thunder.display();

        
    }
    for (var j = 0; j < drop.length; j++) {
   
        drop[j].display();
      }
}   

