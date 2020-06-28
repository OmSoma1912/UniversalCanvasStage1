var hypnoticPen, database;
var position;
var buttonA;
var buttonB;
var buttonC;
var buttonD;
var buttonE;
var buttonF;
var buttonG;

function setup(){
    database = firebase.database();
    console.log(database);
    
    createCanvas(400,400);
    hypnoticPen = createSprite(200,200,10,10);
    hypnoticPen.shapeColor = "black";

    var hypnoticPenPosition = database.ref('pen/position');
    hypnoticPenPosition.on("value", readPosition,showError);

    buttonA = createButton('Red');
    buttonA.position = (400,400);

    buttonB = createButton('Blue');
    buttonB.position = (400,380);

    buttonC = createButton('Green');
    buttonC.position = (400,360);

    buttonD = createButton('Yellow');
    buttonD.position = (400,340);

    buttonE = createButton('Black');
    buttonE.position = (400,320);

    buttonF = createButton('Clear');
    buttonF.position = (400,300);
    
    buttonG = createButton('Eraser');
    buttonG.position = (400,280);
}

function draw(){
    text("Hold left arrow key and move mouse to draw",100,30);
    text("Release left arrow key to move around and not draw",80,50);
    
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    
    buttonA.mousePressed(function(){
        hypnoticPen.shapeColor = "red"
    });

    buttonB.mousePressed(function(){
        hypnoticPen.shapeColor = "blue"
    });

    buttonC.mousePressed(function(){
        hypnoticPen.shapeColor = "green"
    });

    buttonD.mousePressed(function(){
        hypnoticPen.shapeColor = "yellow"
    });

    buttonE.mousePressed(function(){
        hypnoticPen.shapeColor = "black"
    });

    buttonF.mousePressed(function(){
       background("white");
    });

    buttonG.mousePressed(function(){
        hypnoticPen.shapeColor = "white"
     });
    
    drawSprites();
}

function mouseReleased(){

}

function writePosition(x,y){
    database.ref('pen/position').set({
        'x' : position.x + x,
        'y' : position.y + y
    })
}

function readPosition(data){
    position = data.val();
    console.log(position.x);
    hypnoticPen.x = mouseX;
    hypnoticPen.y = mouseY;
}

function showError(){
    console.log("Error in writing to the database");
}


