
var canvas = new fabric.Canvas('myCanvas');

var heroWidth = 10;
var heroHeight = 10;

var playerX = 300;
var playerY = 500;

var heroPlayerObject;
var heroObject;

function heroPlayerUpdate() {
    fabric.Image.fromURL("groot.jpg", function(Img){
        heroPlayerObject = Img;
        heroPlayerObject.scaleToWidth(250);
        heroPlayerObject.scaleToHeight(100);
        heroPlayerObject.set({
            top:playery,
            left:playerx
        });
        canvas.add(heroPlayerObject);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    if ((e.shiftKey == true) && (keyPressed == "80")) {
        heroWidth + 10;
        heroHeight + 10;

        document.getElementById("SuperheroWidth").innerHTML = heroWidth;
        document.getElementById("SuperheroHeight").innerHTML = heroHeight;
    }

    if ((e.shiftKey == true) && (keyPressed == "77")) {
        heroWidth - 10;
        heroHeight - 10;

        document.getElementById("SuperheroWidth").innerHTML = heroWidth;
        document.getElementById("SuperheroHeight").innerHTML = heroHeight;
    }

    if (keyPressed == "70") {
        new_image("ironman_face.png");
    }

    if (keyPressed == "66") {
        new_image("spiderman_body.png");
    }

    if (keyPressed == "76") {
        new_image("hulk_legs.png");
    }

    if (keyPressed == "82") {
        new_image("thor_right_hand.png");
    }

    if (keyPressed == "72") {
        new_image("captain_america_left_hand.png");
    }

    if(keyPresssed == "38") {
        up();
    }

    if(keyPressed == "40") {
        down();
    }
    
    if(keyPressed == "37") {
        left()
    }

    if(keyPressed == "39") {
        right()
    }
}