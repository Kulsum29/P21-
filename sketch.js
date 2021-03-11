var canvas;
var music;
var s1,s2,s3,s4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    music.play();
    //create 4 different surfaces
    s1=createSprite(100,580,180,40);
    s1.shapeColor="red"
    s2=createSprite(300,580,180,40);
    s2.shapeColor="limegreen";
    s3=createSprite(500,580,180,40);
    s3.shapeColor="purple";
    s4=createSprite(700,580,180,40);
    s4.shapeColor="dodgerblue"

    //create box sprite and give velocity
    box=createSprite(random(20,750),50,40,40);
    box.shapeColor="white"
    box.velocityX=3;
    box.velocityY=5;
}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    //create edgeSprite
    edges=createEdgeSprites();


    //add condition to check if box touching surface and make it box
    if(box.isTouching(s1) && box.bounceOff(s1)){
        box.shapeColor="red"
        box.velocityX=box.velocityY=0;
        music.stop();
    }
    else if(box.isTouching(s2) && box.bounceOff(s2)){
        box.shapeColor="limegreen"
    }
    else if(box.isTouching(s3) && box.bounceOff(s3)){
        box.shapeColor="purple"
    }
    else if(box.isTouching(s4) && box.bounceOff(s4)){
        box.shapeColor="dodgerblue"
    }

 
    box.bounceOff(edges)
}
