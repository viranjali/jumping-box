var canvas;
var music;
var box1,box2,box3,box4;
var goal;
var boll;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 box1=createSprite(100,580,200,30);
 box1.shapeColor="blue";

 box2=createSprite(310,580,200,30);
 box2.shapeColor="yellow";

 box3=createSprite(520,580,200,30);
 box3.shapeColor="pink";

  box4=createSprite(735,580,200,30);
  box4.shapeColor="green";

//create box sprite and give velocity
  boll=createSprite(random(20,750),100,40,40);
  boll.shapeColor="white";
  boll.velocityX = 5;
  boll.velocityY = 8;
    

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   edges = createEdgeSprites();
   boll.bounceOff(edges);

 drawSprites();
    //add condition to check if box touching surface and make it box
     if(boll.isTouching(box1) && boll.bounceOff(box1)){
     boll.shapeColor = "blue";
     music.play();
     }

     if(boll.isTouching(box2)){
        boll.shapeColor = "yellow";
        boll.velocityX = 0;
        boll.velocityY = 0;
        music.stop();
        }

        if(boll.isTouching(box3) && boll.bounceOff(box3)){
            boll.shapeColor = "pink";
            music.play();
            }

            if(boll.isTouching(box4) && boll.bounceOff(box4)){
                boll.shapeColor = "green";
                music.play();
                }
}

