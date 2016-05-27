var balls = [];
var total = 10;
var paddle;
var score = 0;
var lives = 5;

var state = 0;
var startCenterX;
var startCenterY;
var startButtonSize = 130;
var catwalk;
var gigi;
var anna;
var hamburger;
var dulcolax;
var font;
var fatgigi;

function preload() {
    catwalk = loadImage("img/catwalk.png");
    gigi = loadImage("img/gigi.png");
    anna = loadImage("img/anna.png");
    hamburger = loadImage("img/hamburger.png");
    dulcolax = loadImage("img/dulcolax.png");
    fatgigi = loadImage ("img/fatgigi.png");

    font = loadFont("fonts/Neon Glow.ttf");
}

function setup() {
    createCanvas(1000, 600);
    startCenterX = width / 2 - 5;
    startCenterY = 472;

    for (var i = 0; i < balls.length; i++) {
        for (var j = 0; j < balls.length; j++) {
            balls[i].check(balls[j]);
        }
    }

    textFont(font);
    textSize(50);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(0);
    if (state == 0) {
        drawIntro();
    } else if (state == 1) {
        image(catwalk, 0, 0, width, height);
        drawPlaying();
    } else if (state == 2) {
        drawEnd();
    }
}

function drawIntro() {
    fill(255, 0, 126);
    ellipse(startCenterX, startCenterY, startButtonSize, startButtonSize);
    fill(255);
    noStroke();
    text("WOULD YOU LIKE TO \nMAKE GIGI ONE OF US?", 0, 0, width, height - 100);
    text("YES", 0, 450, width, 50);
}

function drawPlaying() {
    for (var i = 0; i < balls.length; i++) {
        balls[i].update();
        balls[i].render();

    }
    paddle.render();

    if (lives == 0) {
        gameOver();
    }
    textSize(20);
    textAlign(LEFT);
    fill(255, 230);
    rect(10, 10, 230, 60);
    fill(255, 0, 126);
    text("Fat level: " + score, 20, 30);
    text("Normal girls' sympathy: " + lives, 20, 50);
    if (score>=50){
        gameOver ();
    }

}

function drawEnd() {
    textSize(50);
    textAlign(LEFT);
    
    if(score >=50){
        background (255, 0, 126);
        image(fatgigi, width - 500, 0,height, height);
        noStroke();
        fill (0);
        text("THANK YOU! \nNOW GIGI'S ONE OF US!", 30, 50);
        text("Total fat level: " + score, 30, 200, width, 55);
    }else{
        image(anna, width - 600, height - 600);
        fill(255, 0, 126);
        ellipse(80, 320, startButtonSize, startButtonSize);
        fill(255);
        noStroke();
        text("SORRY GIRL, GIGI'S STILL \nIN THE FASHION SQUAD!\nTry again?", 30, 50);
        text("YES", 30, 300, width, 50);
        text("Total fat level: " + score, 30, 450, width, 55);
        
    }

}

function gameOver() {
    state = 2;
}

function startGame() {
    state = 1;
    lives = 5;
    score = 0;
    paddle = new Paddle();
    for (var i = 0; i < total; i++) {
        balls[i] = new Ball(paddle);
    }
}

function mousePressed() {
    if (state == 0) {
        var d = dist(mouseX, mouseY, startCenterX, startCenterY);
        if (d < startButtonSize / 2) {
            startGame();
        }
    }
    if (state == 2) {
        var d = dist(mouseX, mouseY, 80, 320);
        if (d < startButtonSize / 2) {
            startGame();
        }
    }
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
        paddle.moveLeft();
    } else if (keyCode == RIGHT_ARROW) {
        paddle.moveRight();
    }
}