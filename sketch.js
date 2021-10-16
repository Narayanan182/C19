var linkImg
var rockImg
var rockGroup

function preload(){
linkImg = loadImage("link.gif");
rockImg = loadImage("rock.png")
}

function setup() {
    
    createCanvas(600,600);
    link = createSprite(300,300,30,30);
    link.scale = 0.5
    link.addImage(linkImg); 
    
    rockGroup = new Group();
}

function draw() {
    background("white");
    drawSprites()
    link.y=World.mouseY
}
    function createRock(){
        if (World.frameCount % 530 == 0) {
        var rock = createSprite(Math.round(500, random(100,500), 10, 10));
        rock.addImage(rockImg);
        rock.scale=0.1;
        rock.velocityX = 500;
        rock.lifetime = 150;
        rockGroup.add(rock);
    }
}
